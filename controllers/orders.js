const { getPizzas } = require('./pizzas');

const orders = [];
let orderIdSeed = 0;

const postOrders = (payload) => {
  if (!payload || !payload.pizzaId || !payload.deliveryAddress) {
    throw new Error('Invalid order. You need a pizzaId and a deliveryAddress.');
  }

  const pizza = getPizzas(payload.pizzaId);

  orderIdSeed = orderIdSeed + 1;

  const order = {
    ...payload,
    pizzaId: pizza.id,
    pizzaName: pizza.name,
    id: orderIdSeed,
  };

  orders.push(order);

  return order;
};

const getOrders = (orderId) => {
  if (!orderId) {
    return orders;
  }

  const order = orders.find(p => p.id === Number(orderId));

  if (order) {
    return order;
  }

  throw new Error(`Order ${orderId || ''} could not be found.`);
};


module.exports = {
  postOrders,
  getOrders,
};
