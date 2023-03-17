<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="enteredName">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="enteredPhone">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="enteredEmail">
        </div>
        <button>Add Friend</button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        };
    },
    emits: ['add-contact'],
    methods: {
        submitData() {
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
            this.enteredName = this.enteredPhone = this.enteredEmail = ''
        }
    }
};
</script>
