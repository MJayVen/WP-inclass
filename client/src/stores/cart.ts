import myFetch from "@/services/myFetch";
import { reactive, watch } from "vue";
import type { Product } from "./products";
import session from "./session";

export interface CartItem {
  quantity: number;
  product: Product;
}

const cart = reactive([] as CartItem[]);

export function load() {
  myFetch(`cart/${session.user?.email}`).then((data) => {
    cart.splice(0, cart.length, ...(data as CartItem[])); // replace the cart
  });
}
watch(() => session.user, load); // load cart when user changes

export function addProductToCart(product: Product, quantity: number = 1) {
  myFetch(`cart/${session.user?.email}/${product.id}/${quantity}`).then(
    (data) => {
      cart.unshift(data as CartItem);
    }
  );
}

export function updateProductQuantity(id: number, quantity: number) {
  myFetch(`cart/${session.user?.email}`).then((data) => {
    cart.splice(0, cart.length, ...(data as CartItem[]));
  });
}

export default cart;
