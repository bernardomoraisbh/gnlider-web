import { defineStore } from "pinia";
import { Product } from "src/interfaces/product";

export const useCartStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    rightDrawerCartOpen: false as boolean,
    products: [] as Product[],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment(){
      this.counter++;
    },
    closeRightDrawerCart(){
      this.rightDrawerCartOpen = false;
    },
    openRightDrawerCart(){
      this.rightDrawerCartOpen = true;
    },
    changeRightDrawerCart(){
      this.rightDrawerCartOpen = !this.rightDrawerCartOpen;
    },
    addProduct(product: Product){
      this.products.push(product);
    },
    removeProduct(productId: number){
      this.products = this.products.filter((product) => product.id !== productId);
    },
  },
});
