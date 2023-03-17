<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Fav)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
        <br>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete-friend', id); ">Delete</button>
    </li>
</template>



<script>
export default {
    // prop validation is ismilar to mongoose schema validation
    props: {
        id: {
            type: String,
            required: true
        },
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
    // "emits" define the custom events the component is going to emit
    // emits: ['toggle-favorite'],
    emits: {
        'toggle-favorite': function (id) {
            if (id) {
                return true;
            } else {
                console.warn("ID is missing");
                return false;
            }
        },
        'delete-friend': function(id) {
            return (id) ? true :  false
        }
    },
    data() {
        return {
            detailsVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavorite() {
            // 1st arg to the emit fn is the custom name of the fn,
            // and the subsequent args are the data we pass to the parent
            this.$emit('toggle-favorite', this.id);
        },
        // deleteFriend() {
        //     this.$emit('delete-friend', this.id);
        // }
    }
};
</script>