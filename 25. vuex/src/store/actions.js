export default {
    // for ex adding more states
    login(context) {
        context.commit('setAuth', { isAuth: true })
    },
    logout(context) {
        context.commit('setAuth', { isAuth: false })
    },
}