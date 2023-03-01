import { createStore } from "vuex";

import productsModule from "./modules/product.js";
import cartModule from "./modules/cart.js";

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        logIn(context) {
            context.commit('login')
        },
        logOut(context) {
            context.commit('logout')
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn
        }
    }
})

export default store