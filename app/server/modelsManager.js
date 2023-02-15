/**
 * Решает circular dependency problem
 * */

const models = {}

function initialize(){
    models.User = require('./models/user/User')
    models.FraudCase = require('./models/fraud_case/FraudCase')
    models.File = require('./models/binaries/File');


    models.User.findOne({email: "admin@admin"})
        .then(defaultAdmin => {
            if (!defaultAdmin) {
                new models.User({
                    name: "admin",
                    email: "admin@admin",
                    password: "admin",
                    phone: "8 777 777 7777",
                    role: "admin",
                    status: "active",
                })
                    .save()
                    .then(r => console.log("Created Default Admin"))
                    .catch(e => console.log("Error when creating default admin", e));
            }
        });
}


module.exports = {
    models,
    initialize
};