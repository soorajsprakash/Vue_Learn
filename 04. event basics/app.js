// Event bindings basics

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // below fn sets the name to the input value
    setName(event, tagName) {
      this.name = event.target.value + " " + tagName;
    },
    submitForm() {
      // here we r using event modifier to prevent default (".prevent")
      alert('Submitted!');
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + " " + "Newbie";
    }
  }
});


app.mount('#events');
