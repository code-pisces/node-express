const routes = require('express').Router();
const get = require('../../controllers/get')
routes.get( '/', get)

module.exports = routes;