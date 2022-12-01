const { getProduct, collection } = require("./products");
// CartItem: { id: 1, quantity: 2, productId: 1, userId: 'mp@np.edu' }
const list = [];

const get = async (userId) => {
  const db = await collection();
  const data = await db.find({ userId }).toArray();
  return data.map((cartItem) => {
    return {
      ...cartItem,
      product: getProduct(cartItem.productId),
    };
  });
};

/**
 *
 * @param {number} userId
 * @param {number} productId
 * @param {number} quantity
 * @returns new cart
 */
const add = async (userId, productId, quantity) => {
  const db = await collection();
  const cartItem = await db.findOne({ userId, productId });
  // let cartItem = list.find((cartItem) => cartItem.userId === userId && cartItem.productId === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
    db.updateOne({ userId, productId }, cartItem);
  } else {
    cartItem = { id: list.length + 1, quantity, productId, userId };
    await db.insertOne(cartItem);
    // list.push(cartItem);
  }
  return { ...cartItem, product: getProduct(productId) };
};

const update = async (userId, productId, quantity) => {
  const db = await collection();
  const index = list.findIndex(
    (cartItem) => cartItem.userId === userId && cartItem.productId === productId
  );
  if (index !== -1) {
    if (quantity === 0) {
      db.deleteOne({ userId, productId });
      return "null";
    } else {
      let cartItem = await db.findOne({ userId, productId });
      cartItem.quantity = quantity;
      db.updateOne({ userId, productId }, cartItem);
    }
  } else {
    throw new Error("Cart item not found");
  }
  return { ...list[index], product: getProduct(productId) };
};

module.exports = { add, get, update };
