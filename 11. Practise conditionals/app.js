const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            isVisible: true
        };
    },
    computed: {
        buttonText() {
            return this.isVisible ? "Hide List" : "Show List";
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        toggleList() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');
