<template>
    <li>
        <h2>{{ name }} {{ friendisFav ? '(Fav)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
        <br>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>



<script>
export default {
    // prop validation is ismilar to mongoose schema validation
    props: {
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    data() {
        return {
            detailsVisible: false,
            friendisFav: this.isFavorite
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavorite() {
            this.friendisFav = !this.friendisFav;
        }
    }
};
</script>