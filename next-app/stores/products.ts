import api from "../services/myFetch";

export function getProducts() {
  return api<ListEnvelope<Product>>("products");
}

export function getProduct(id: number) {
  return api<Product>(`products/${id}`);
}

export function deleteProduct(id: number) {
  // data.products = data.products.filter(p => p.id !== id);
}

export interface ListEnvelope<T> {
  products: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
