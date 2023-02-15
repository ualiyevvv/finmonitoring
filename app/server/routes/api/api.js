const express = require('express');
const Router = express.Router();

Router.use(require('../../auth/checkAuthenticated'));

Router.use('/user', require('./user/user'));
Router.use('/fraud_case', require('./fraud_case/fraud_case'))
Router.use('/data', require('./data/data'))

module.exports = Router;
