'use strict';

const Api = require('claudia-api-builder');

const getPizzas = require('./controllers/get-pizzas');

// Instantiate a Claudia API.
const api = new Api();

// Routing.
api.get('/pizzas', getPizzas);

module.exports = api;
