/**
 * Решает circular dependency problem
 * */

const models = {}

function initialize(){
    models.User = require('./models/user/User')
    models.FraudCase = require('./models/fraud_case/FraudCase')
    models.File = require('./models/binaries/File');
}


module.exports = {
    models,
    initialize
};