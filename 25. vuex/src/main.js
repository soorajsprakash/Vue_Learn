import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// a seperate module for the counter stuffs
const counterModule = {
    // namespacing module, to detatch the whole module and to avoid any name clashes
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2
        },
        increaseBy(state, payload) {
            state.counter = state.counter + payload.value
        }
    },
    actions: {
        increment(context) {
            setTimeout(function() {
                context.commit('increment')
            }, 2000)
        },
        increaseBy(context, payload) {
            context.commit('increaseBy', payload)
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0){
                return 0
            } else if (finalCounter > 100) {
                return 100
            } else {
                return finalCounter
            }
        }
    },
}

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        // for ex adding more states
        setAuth(state, payload) {
           state.isLoggedIn = payload.isAuth 
        }
    },
    actions: {
        // for ex adding more states
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        },
    },
    getters: {
        // for ex adding more states
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
