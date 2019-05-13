const pizzas = require('../data/pizzas.json');

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
