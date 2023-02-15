/**
 * Решает circular dependency problem
 * */
const {local} = require("./auth/register");

const models = {}

function initialize(){
    models.User = require('./models/user/User')
    models.FraudCase = require('./models/fraud_case/FraudCase')
    models.File = require('./models/binaries/File');


    models.User.findOne({email: "admin@admin"})
        .then(defaultAdmin => {
            if (!defaultAdmin) {
                const userData = {
                    name: "admin",
                    email: "admin@admin",
                    password: "admin",
                    phone: "8 777 777 7777",
                    role: "admin",
                    status: "active",
                }
                local(userData)
                    .then(r => {
                        if(r.created){
                            console.log("Default admin successfully created");
                        } else {
                            console.log("Error on creating default admin", e.message);
                        }
                    })
            }
        });
}


module.exports = {
    models,
    initialize
};