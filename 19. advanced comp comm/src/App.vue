<template>
  <div>
    <the-header></the-header>
    <BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <!-- "#default" is the equivalent for "v-slot:default" -->
      <!-- here we don't really need to use the template tag, instead we can include the slot ref inside the <course-goals> -->
      <!-- for eg:  <course-goals #default="slotItem">...</course-goals> -->
      <template #default="slotItem">
        <!-- here the slotItem would be an object with each item passed from the source -->
        <h2>{{ slotItem.item }}</h2>
        <p>{{ slotItem["anotherProp"] }}</p>
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue'

export default {
  components: {
    'the-header': TheHeader,
    // by doing in the below method, we can use self closing tags like "<BadgeList />
    BadgeList: BadgeList,
    UserInfo,
    CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>