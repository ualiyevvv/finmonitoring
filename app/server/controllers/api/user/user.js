const {register} = require('../../../auth/register');

const User = require('../../../models/user/User');
const Model = User;

const log = require("../../../logging/log");
const colors = require("../../../logging/colors");

const userController = require('../../controller')({Model: User});

userController.access = async (req, res, next) => {
    /*const managers = await User.find({role: "manager"});
    if(managers.length === 0){
        return next()
    }

    if(req.user.role !== 'manager'){
        return res.status(403).json({error: "Permission denied"});
    }*/
    next();
}
userController.allowedFields = async (req, res, next) => {
    // delete все кроме email, name, password, чтобы не могли сами себе засетить роль
    next();
}

userController.c = register('local');

module.exports = userController;
