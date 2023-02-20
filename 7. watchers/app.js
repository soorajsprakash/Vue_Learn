// Two way data bindings:
// v-model = v-bind:value + v-on:input

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    // its bad to use watch for a thing when it have >1 dependencies.
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // commented out bad usage.
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // },
  },
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
