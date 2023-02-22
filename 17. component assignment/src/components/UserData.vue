<template>
    <section class="add-user">
        <h2>Add User</h2>
        <form @submit.prevent="submitUser">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="enteredName">
            </div>
            <div>
                <label for="age">Age</label>
                <input type="text" id="age" v-model="enteredAge">
            </div>
            <button>Add User</button>
        </form>
    </section>
</template>


<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    emits: ['add-user'],
    methods: {
        submitUser() {
            this.$emit('add-user', this.enteredName, this.enteredAge)
            this.enteredName = this.enteredAge = ''
        }
    }
}
</script>
