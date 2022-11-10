// Cart item: {id: 1, quantity: 1, productID: 1, userID: (useremail)}
const list = [];

// const add = (cartItem) => {
//     list.push(cartItem);
// }

const add = (productId, userId, quantity) => {
    const cartItem = { id: list.length + 1, productId, userId, quantity };
    list.push(cartItem);
}

const get = () => {
    return list.filter(cartItem => cartItem.userID === userId);
}

const remove = (userId, productId) => {
    const index = list.findIndex(cartItem => cartItem.productID === productId && cartItem.userID === userId);
    if (index !== -1) {
        list.splice(index, 1);
    }
}