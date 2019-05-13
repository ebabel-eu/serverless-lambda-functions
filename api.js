'use strict';

const Api = require('claudia-api-builder');

const { getPizzas } = require('./controllers/pizzas');
const { postOrders, getOrders, putOrders, deleteOrders } = require('./controllers/orders');

// Instantiate a Claudia API.
const api = new Api();

// Routing when no controller is specified, at the root of the api.
api.get('/', () => 'Pizzas entity can be accessed with /latest/pizzas endpoint.');

// List all pizzas.
api.get('/pizzas', () => {
  return getPizzas();
});

// List a single pizza, found by id.
api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id);
}, {
  error: 404,
});

// Create a new pizza order.
api.post('/orders', (request) => {
  return postOrders(request.body);
}, {
  success: 201,
  error: 400,
});

// List all orders.
api.get('/orders', () => {
  return getOrders();
});

// List a single order, found by id.
api.get('/orders/{id}', (request) => {
  return getOrders(request.pathParams.id);
}, {
  error: 404,
});

// Update an existing order.
api.put('/orders/{id}', (request) => {
  return putOrders(request.pathParams.id, request.body);
}, {
  error: 400,
});

// Delete an existing order.
api.delete('/orders/{id}', (request) => {
  return deleteOrders(request.pathParams.id);
}, {
  error: 404,
});

module.exports = api;
