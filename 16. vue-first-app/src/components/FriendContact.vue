<template>
    <li>
        <h2>{{ name }} {{ friendisFav === "1" ? '(Fav)' : '' }}</h2>
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
            type: String,
            required: false,
            default: '0',
            // validator to make sure the value is only "1" or "0"
            validator: function (value) {
                return value === "1" || value === "0";
            }
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
            if (this.friendisFav === "1") {
                this.friendisFav = '0';
            } else {
                this.friendisFav = '1';
            }
        }
    }
};
</script>