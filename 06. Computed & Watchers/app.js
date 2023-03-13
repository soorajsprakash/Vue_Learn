// Two way data binding:
// v-model = v-bind:value + v-on:input

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  watch: {
    // its better to use watchers when a data ppt have a single dep.
    // a watcher property can have the same name as any of the data ppt. 
    // Use case of a watcher: 
    // * reset counter when count >50
    // * send http req when a value changes
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  // computed will run only when its dependencies changes, unlike methods.
  // eg: here fullname() will re-evaluate iff its dep, i.e, name & lastName changes. 
  // Its the best solution for dynamically calculated values.
  // A computed should return something.
  // Name of data ppt & computed ppt can't be the same.
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // below fn sets the name to the input value
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      // here we r using event modifier to prevent default (".prevent")
      alert('Submitted!');
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
  }
});


app.mount('#events');
