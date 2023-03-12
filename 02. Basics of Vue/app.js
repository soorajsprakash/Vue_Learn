const app = Vue.createApp({
    // data holds the data for this app
    data() {
        return {
            courseGoalA: "Finish the course & learn Vue!",
            courseGoalB: "Master Vue & build amazing apps!",
            vueLink: "https://vuejs.org"
        };
    },
    // methods contains functions that performs actions based on/with the data properties
    // methods runs everytime when something on the screen is rerendered
    methods: {
        outputGoal() {
            const randNum = Math.random();
            if (randNum < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');