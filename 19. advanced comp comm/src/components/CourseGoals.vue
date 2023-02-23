<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <!-- passing data from slot to where we use slot -->
            <slot :item="goal" anotherProp="..."></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['finish course', 'learn vue']
        }
    }
}
</script>