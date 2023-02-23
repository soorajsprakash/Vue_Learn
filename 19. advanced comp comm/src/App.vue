<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponents('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponents('ManageGoals')">Dynamic Goals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"></ActiveGoals>
    <ManageGoals v-if="selectedComponent === 'ManageGoals'"></ManageGoals> -->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    'the-header': TheHeader,
    // by doing in the below method, we can use self closing tags like "<BadgeList />
    // BadgeList: BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,

  },
  data() {
    return {
      selectedComponent: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponents(comp) {
      this.selectedComponent = comp;
    }
  }
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

<!-- 
<BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      /* 
      "#default" is the equivalent for "v-slot:default".
      Here we don't really need to use the template tag, instead we can include the slot ref inside the <course-goals>
      For eg:  <course-goals #default="slotItem">...</course-goals> 
      */
      <template #default="slotItem">
        /*
        Here the slotItem would be an object with each item passed from the source
        */
        <h2>{{ slotItem.item }}</h2>
        <p>{{ slotItem["anotherProp"] }}</p>
      </template>
    </course-goals>
-->