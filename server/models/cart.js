const { getProduct } = require("./products");
// Cart item: {id: 1, quantity: 1, productID: 1, userID: (useremail)}
const list = [];

// const add = (cartItem) => {
//     list.push(cartItem);
// }

/**
 * @param {string} userId
 * @param {number} productId
 * @param {number} quantity
 * @returns {object} cartItem
 */
const add = (userId, productId, quantity) => {
  let cartItem = list.find(
    (cartItem) => cartItem.userID === userId && cartItem.productID === productId
  );
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    list.push({ id: list.length + 1, quantity: +quantity, productId, userId });
    cartItem = { id: list.length + 1, quantity, productId, userId };
    list.push(cartItem);
  }
  return { ...cartItem, product: getProduct(productId) };
};

/**
 * @param {string} userId
 * @returns {object} cartItem
 */
const get = (userId) => {
  return list
    .filter((cartItem) => cartItem.userId === userId)
    .map((cartItem) => ({
      ...cartItem,
      product: getProduct(cartItem.productId),
    }));
};

/**
 *
 * @param {string} userId
 * @param {number} productId
 * @param {number} quantity
 * @returns
 */
const update = (userId, productId, quantity) => {
  const index = list.findIndex(
    (cartItem) => cartItem.userID === userId && cartItem.productID === productId
  );
  if (index !== -1) {
    if (quantity === 0) list.splice(index, 1);
    else list[index].quantity = quantity;
  } else {
    throw new Error("Cart item not found");
  }
  return index;
};

module.exports = { add, get, update };
