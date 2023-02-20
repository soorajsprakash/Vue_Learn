// Two way data bindings:
// v-model = v-bind:value + v-on:input

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + " " + "Newbie";
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
    },
    // outputFullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + " " + "Newbie";
    // }
  }
});


app.mount('#events');
