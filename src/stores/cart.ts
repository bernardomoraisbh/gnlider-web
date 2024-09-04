import { defineStore } from "pinia";
import { UserCart } from "src/interfaces/cart/userCart";
import { UserCartItem } from "src/interfaces/cart/userCartItem";
import { Product } from "src/interfaces/product";
import { User } from "src/interfaces/user";

export const useCartStore = defineStore("cart", {
  state: () => ({
    rightDrawerCartOpen: false as boolean,
    userCart: {
      user: {} as User,
      cartProducts: [] as UserCartItem[],
    } as UserCart,
  }),
  getters: {
    totalAmount: (state) => state.userCart.cartProducts.reduce((total, item) => {
      total.amount += item.amount * item.product.price.amount;
      total.currency = item.product.price.currency;
      return total;
    }, { amount: 0, currency: "R$" }),
  },
  actions: {
    closeRightDrawerCart(){
      this.rightDrawerCartOpen = false;
    },
    openRightDrawerCart(){
      this.rightDrawerCartOpen = true;
    },
    changeRightDrawerCart(){
      this.rightDrawerCartOpen = !this.rightDrawerCartOpen;
    },
    addProduct(product: Product | null, amount = 1){
      if (product === null) return;
      const existingItem = this.userCart.cartProducts
        .find((item: UserCartItem) => item.product.id === product.id);
      if (existingItem){
        existingItem.amount += amount;
      }
      else {
        this.userCart.cartProducts.push({ product, amount });
      }
    },
    removeProduct(productId: number){
      this.userCart.cartProducts = this.userCart.cartProducts
        .filter((item: UserCartItem) => item.product.id !== productId);
    },
    increaseQuantity(index: number){
      this.userCart.cartProducts[index].amount++;
    },
    decreaseQuantity(index: number){
      if (this.userCart.cartProducts[index].amount > 1){
        this.userCart.cartProducts[index].amount--;
      }
      else if (this.userCart.cartProducts[index].amount === 1){
        this.removeProduct(this.userCart.cartProducts[index].product.id);
      }
    },
    proceedToCheckout(){
      // Logic to proceed to checkout
    },
  },
});
