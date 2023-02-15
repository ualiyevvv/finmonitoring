const fillString = require('./fillString')

function objectsTraversal(obj, f){
    f(obj);

    for(const key in obj){
        if(typeof obj[key] === 'object'){
            objectsTraversal(obj[key], f)
        }
    }
}

function renameId(obj){
    if(obj.id) {
        obj.id = fillString({value: obj.id, targetLength: 20, padString: '0'});
    }
}

/**
 * Меняем объект! Не чистая функция, создавать клон, пока не вижу смысла.
 * Создать глубокий клон можно вот так JSON.parse(JSON.stringify(obj))
 * */
module.exports = function(obj){
    objectsTraversal(obj, renameId)
    return obj;
}