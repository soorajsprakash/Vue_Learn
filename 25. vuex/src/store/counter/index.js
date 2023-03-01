import counterMutations from './mutations.js'
import counterActions from './actions.js'
import counterGetters from './getters.js'


// a seperate module for the counter stuffs
export default {
    // namespacing module, to detatch the whole module and to avoid any name clashes
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters,
}

