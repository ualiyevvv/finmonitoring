
const FraudCase = require('../../../models/fraud_case/FraudCase');

const fraudController = require('../../controller')({Model: FraudCase});

fraudController.access = async (req, res, next) => {
    /*
    if(req.user.role !== 'manager'){
        return res.status(403).json({error: "Permission denied"});
    }
    */
    next();
}

module.exports = fraudController;
