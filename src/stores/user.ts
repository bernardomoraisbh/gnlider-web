import { defineStore } from "pinia";
import { User } from "../interfaces/user";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    user: null as User | null, // Initialize user as null
    userLogged: false as boolean | false,
  }),
  getters: {
    getUser: (state) => state.user,
    isUserLogged: (state) => state.userLogged,
  },
  actions: {
    increment(){
      this.userLogged = true;
    },
  },
});
