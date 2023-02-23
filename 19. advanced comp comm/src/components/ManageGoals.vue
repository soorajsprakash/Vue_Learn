<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid</h2>
            <p>Pls enter at least a few chars</p>
            <button @click="closeError">Okay</button>
        </error-alert>
    </div>
</template>


<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
     methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                // alert('input must not be empty')
                this.inputIsInvalid = true
            }
        },
        closeError() {
            this.inputIsInvalid = false;
        }
     }
}
</script>
