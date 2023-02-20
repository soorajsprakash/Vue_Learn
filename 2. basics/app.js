const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course & learn Vue!",
            courseGoalB: "Master Vue & build amazing apps!",
            vueLink: "https://vuejs.org"
        };
    },
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