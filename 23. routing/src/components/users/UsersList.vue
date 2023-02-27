<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      // as long as this is false, user should get warning when tried to leave the page
      changesSaved: false
    }
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // programmatic navigation
      this.$router.push('/teams')
    },
    saveChanges() {
      console.log('changes are saved')
      this.changesSaved = true
    }
  },
  // component level nav guard
  beforeRouteEnter(to, from, next) {
    console.log('userlist component level nav guards')
    console.log(to, from)
    next()
  },
  // this asks user if he wants to leave the page when there are unsaved changes.
  beforeRouteLeave(to, from, next) {
    console.log("UserList comp beforeRouteLeave")
    if (this.changesSaved) {
      console.log("no unsaved changes")
      next()
    } else {
      console.log("unsaved changes are there")
      const userAns = confirm('Are you sure? You got unsaved changes!!')
      console.log("USER CHOICE::  ", userAns)
      next(userAns)
    }
  },
  unmounted() {
    console.log("unmounted")
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>