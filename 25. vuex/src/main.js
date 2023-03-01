import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
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
    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
