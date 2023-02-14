
/*
// Демо функция анализа текста (тональность, перевод, синонимы-антонимы)
// Возможны ошибки, писалось в другом модуле
// Переводим синонимы и антонимы.
async function translateArray(texts, langpair){
    const a = texts.join('. ');
    const tr = (await translate(a, langpair)).responseData.translatedText;
    const res = tr.split('. ');
    const data = uniqueWords(res);
    console.log('translateArray', data);
    return data
}

async function answer(message){
    try{
        const {text, conversation} = message;
        console.log('answer to message', message);

        const info = {
            translated: null,
            sentiment: null,
            synonyms: [],
            antonyms: [],
        };

        // Мы переводим, в любом случае ru|en.
        info.translated = (await translate(text, 'ru|en')).responseData.translatedText
        // Нужно разделить на количество слов.
        // console.log(colors.red('63d692999b4eb9fbee342bfa'), translated);
        const words = text.split(' ');
        // Если количество слов больше одного, то мы делаем семантический анализ.
        // Если одно слово, то мы находим синонимы и антонимы.
        // Скинуть все одним большим сообщением.
        if(words.length === 1){
            const thesaurusData = await thesaurus(info.translated);
            info.synonyms = thesaurusData.synonyms;
            info.antonyms = thesaurusData.antonyms;
            console.log('thesaurus analyze', thesaurusData);
        }
        else {
            const sentimentData = await sentiment(info.translated);
            info.sentiment = sentimentData.sentiment;
            console.log('sentiment analyze', sentimentData);
        }

        let response = `Перевод на английский: ${info.translated}. `;

        if(info.sentiment){
            response += `Тональность текста ${info.sentiment}. `;
        }
        if(info.synonyms.length){
            const tr = await translateArray(info.synonyms, 'en|ru');
            const a = tr.join(', ').toLowerCase();
            response += 'Синонимы слова: ' + a + '. ';
        }
        if(info.antonyms.length){
            const tr = await translateArray(info.antonyms, 'en|ru');
            const a = tr.join(', ').toLowerCase();
            response += 'Антонимы слова: ' + a + '. ';
        }
        await createMessage({
                type: "text",
                text: response,
                conversation,
                sender: '63d692999b4eb9fbee342bfa'
        })

        await createMessage({
            type: "text",
            text: "JSON: " + JSON.stringify(info),
            conversation,
            sender: '63d692999b4eb9fbee342bfa'
        })

    }
    catch(e){console.log(e)}
}
*/


async function createMessage(message, socket){
    const { user } = socket.request;

    const Messages = require('../../models/modelsManager').models.Message;
    const Notifications = require('../../models/modelsManager').models.Notification;
    const Participants = require('../../models/modelsManager').models.Participant;

    //Нужно не только тупое сохранение сделать, но и изменение

    let m = message.id ?
        await Messages.findById(message.id) :
        new Messages({
            sender: user.id,
            ...message
        });

    if(!m) return; // Если id есть, но сообщение не найдено

    try {
        if(m.type === 'text'){
            m.text = message.text;
        }
        else if(m.type === 'choice'){
            m.choice.selectedServices = message.choice.selectedServices;
            if(message.id)
                m.choice.submitted = true;
        }
        // А когда файл? Нужно сохранить file и установить его id в message.file
        else if(m.type === 'file'){
            console.log(m);
        }
        else return; // ничего не делаем при других type пока
        await m.save();
    }catch(e){
        console.log(e);
    }

    const ps = await Participants.find({conversation: message.conversation});

    try {
        await Promise.all(ps.map(async p => {
            return await new Notifications({
                type: 'message',
                message: m.id,
                user: p.user,
            }).save();
        }))
    } catch (e) {
        console.log(e);
    }
}


module.exports = socket => {

    socket.on("join-conversation", async conversation => {

        const Participants = require('../../models/modelsManager').models.Participant;
        const Conversations = require('../../models/modelsManager').models.Conversation;

        const { user } = socket.request;

        console.log(`join socket(${socket.id}) to room`, conversation)

        const conversationDoc = await Conversations.findById(conversation.id);
        if(!conversationDoc){
            return console.log(`Conversation does not exist`, conversation)
        }

        const participant_info = {conversation: conversation.id, user: user.id};

        const exist_participant = await Participants.findOne(participant_info);
        if(exist_participant){
            return console.log(`Participant already exists `, exist_participant)
        }

        const p = new Participants(participant_info);
        try{
            await p.save();
        }catch(e){
            return console.log(e)
        }

        if(user.role === 'manager'){
            const script_messages = [
                "Ваша заявка принята!",
                `Здравствуйте, меня зовут ${user.name}. Я ваш менеджер консультант `,
                "Данные о командировке, будут отображаться на главной странице и в окне информации чата"
            ]
            // Что будет если сокет выйдет в эти 9 секунд, я хз
            for(let i=0; i<script_messages.length; i++){
                setTimeout(()=>{
                    createMessage({
                        type: "text",
                        text: script_messages[i],
                        conversation: conversation.id
                    }, socket);
                    return;
                }, 1500*(i+1))
            }
        }

    })



    socket.on("send-message", async (message) => {
        console.log(`socket(${socket.id}) send message(${message}) of type ${message.type}`);

        await createMessage(message, socket)
    })

    socket.on('delete-notifications', async (notifications) => {
        const Notifications = require('../../models/modelsManager').models.Notification;

        const ids = notifications.map(n => n.id);
        const ns = await Notifications.find({ '_id': { $in: ids } })

        await Promise.all(ns.map(async n => {
            await n.deepDelete();
        }))
    })
}

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/