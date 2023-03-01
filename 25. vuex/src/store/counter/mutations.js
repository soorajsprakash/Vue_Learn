export default {
    increment(state) {
        state.counter = state.counter + 2
    },
    increaseBy(state, payload) {
        state.counter = state.counter + payload.value
    }
}