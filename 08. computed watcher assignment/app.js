const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    computed: {
        result() {
            console.log("inside computed");
            if (this.counter < 37) {
                return "Not there yet";
            } else if (this.counter === 37) {
                return 37;
            } else {
                return "Too much!";
            }
        }
    },
    watch: {
        result() {
            console.log("inside watch");
            const that = this;
            setTimeout(() => {
                that.counter = 0;
            }, 5000);
        }
    },
    methods: {
        add(num) {
            console.log("inside method");
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');