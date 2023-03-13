const app = Vue.createApp({
    data() {
        return {
            // boxASelected: false,
            classInput: '',
            isVisible: true,
            bccInput: ''
        };
    },
    computed: {
        setClasses() {
            return {
                user1: this.classInput === "user1",
                user2: this.classInput === "user2",
                visible: this.isVisible,
                hidden: !this.isVisible
            };
        }
    },
    methods: {
        getInput(event) {
            this.classInput = event.target.value;
        },
        toggleClass() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');