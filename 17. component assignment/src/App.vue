<template>
    <h1>Component assessment</h1>
    <active-user
        :users="users"
    ></active-user>
    <user-data
        @add-user="AddUser"
    ></user-data>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { 
                    username: "Sun",
                    userage: 22
                },
                {
                    username: "Moon",
                    userage: 29
                }
            ]
        }
    },
    methods: {
        AddUser(name, age) {
            this.users.push({
                username: name,
                userage: +age // this converts string to number
            })
        }
    }
}
</script>

<style>
section.add-user {
    background-color: burlywood;
    border: 50px
}
section.active-users {
    background-color: cyan;
    border: 50px
}
</style>
