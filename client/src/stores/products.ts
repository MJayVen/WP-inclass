import data from '../data/products.json';

export function getProducts() {
    return data.products;
}

export function getProduct(id: number) {
    return data.products.find(p => p.id === id);
}

export function deleteProduct(id: number) {
    data.products = data.products.filter(p => p.id !== id);
}