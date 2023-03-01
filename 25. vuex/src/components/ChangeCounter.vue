<template>
    <button @click="icrm">Add 2</button>
    <button @click="inc({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment')
        // }
        // ...mapActions(['increment', 'increaseBy']),
        // other way for the same, but set custom name for each.
        ...mapActions({
            inc: 'increaseBy',
            icrm: 'increment'
        })
    }
}
</script>