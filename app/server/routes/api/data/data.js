const express = require('express');

const Router = express.Router();

const controller = require('../../../controllers/api/data/data');

const {getOne, between, bynode, getAll, getRelations, viewappp} = controller;

Router.get('/by/:id', getOne);
Router.get('/between', between);
Router.get('/bynode', bynode);
Router.get('/relations', getRelations);
Router.get('/viewappp', viewappp);
Router.get('/all', getAll);

module.exports = Router;