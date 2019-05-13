const pizzas = require('../data/pizzas.json');

/**
 * Get an existing pizza when pizzaId is specified, or list all pizzas when no pizzaId is given.
 * @param {Number?} pizzaId 
 */
const getPizzas = (pizzaId) => {
  if (!pizzaId) {
    return pizzas;
  }

  const pizza = pizzas.find(p => p.id === Number(pizzaId));

  if (pizza) {
    return pizza;
  }

  throw new Error(`Pizza ${pizzaId || ''} could not be found.`);
};

module.exports = {
  getPizzas,
};
