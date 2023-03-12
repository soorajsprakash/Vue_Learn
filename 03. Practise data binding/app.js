const app = Vue.createApp({
    data() {
        return {
            name: "Batman",
            age: 30,
            imageUrl: "https://cdn.pixabay.com/photo/2015/08/18/23/48/batman-895269_960_720.png"
        };
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },
        getFavNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment');