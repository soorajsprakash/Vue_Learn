<template>
    <li>
                    <h2>{{ name }}</h2>
                <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
                <ul v-if="detailsVisible">
                    <li><strong>Phone: </strong>{{ phoneNumber }}</li>
                    <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>



<script>
export default {
    props: [
        'name',
        'phoneNumber',
        'emailAddress'
    ],
    data() {
        return {
            detailsVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '5411321336',
                email: 'manuel@gmail.com'
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
};
</script>