const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        };
    },
    methods: {
        showAlert() {
            alert("Hi, this is an alert!");
        },
        getOutput1(event) {
            this.output1 = event.target.value;
        },
        getOutput2(event) {
            this.output2 = event.target.value;
        }
    }
});

app.mount('#assignment');