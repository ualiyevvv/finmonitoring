const express = require('express');

const Router = express.Router();

const controller = require('../../../controllers/api/user/user');

const {
    c, r, u, d,
    access, allowedFields,
    findOne, find,
    addToArray, removeFromArray, arrayField, findById,
    deleteAll
} = controller;

Router.route('/')
    .post(access, allowedFields, c)
    .get(access, allowedFields, find, r)
    .put(access, allowedFields, findOne, u)
    .delete(access, findOne, d);

module.exports = Router;