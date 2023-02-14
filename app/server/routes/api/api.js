const express = require('express');
const Router = express.Router();

Router.use(require('../../auth/checkAuthenticated'));

Router.use('/user', require('./user/user'));

Router.use('/order', require('./order/order'));
Router.use('/company', require('./company/company'))

Router.use('/hotel', require('./hotel/hotel'));
Router.use('/flight', require('./flight/flight'));
Router.use('/booking', require('./booking/booking'));
Router.use('/service', require('./service/service'));
Router.use('/office', require('./office/office'));

Router.use('/chat', require('./chat/chat'));

module.exports = Router;
