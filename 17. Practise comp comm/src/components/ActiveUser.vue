<template>
    <section  class="active-users">
        <h2>Active Users</h2>
        <div v-for="user in this.users" :key="user">
            <h3>{{ user.username }}</h3>
            <h4>{{ user.userage }} yrs</h4>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    props: ['users']
}
</script>
