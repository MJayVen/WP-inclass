import data from '../data/products.json';

export function getProducts(): Product[] {
    return data.products;
}

export function getProduct(id: number): Product {
    return data.products.find(p => p.id === id) as Product;
}

export function deleteProduct(id: number) {
    data.products = data.products.filter(p => p.id !== id);
}

export interface ProductDocument {
    products: Product[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }
  