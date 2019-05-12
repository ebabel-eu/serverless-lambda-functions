'use strict';

const Api = require('claudia-api-builder');

const getPizzas = require('./controllers/get-pizzas');

// Instantiate a Claudia API.
const api = new Api();

// Routing to list all pizzas.
api.get('/pizzas', () => {
  return getPizzas()
});

// Routing to list a single pizza, found by id.
api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id)
}, {
  error: 404
});

module.exports = api;
