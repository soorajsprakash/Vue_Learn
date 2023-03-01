export default {
    increment(context) {
        setTimeout(function() {
            context.commit('increment')
        }, 2000)
    },
    increaseBy(context, payload) {
        context.commit('increaseBy', payload)
    }
}