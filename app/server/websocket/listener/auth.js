module.exports = socket => {
    socket.on('whoami', setUser => {
        const { user } = socket.request;

        const response = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            status: user.status,
            ban_reasons: user.ban_reasons,
        }

        setUser(response);
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