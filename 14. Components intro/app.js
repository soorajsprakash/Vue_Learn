// common root component
const app = Vue.createApp({
    data() {
        return {
            // detailsAreVisible: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '5411321336',
                    email: 'manuel@gmail.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '91546546510',
                    email: 'julie@gmail.com'
                },
            ]
        };
    },
    // methods: {
    //     toggleDetails() {
    //         this.detailsAreVisible = !this.detailsAreVisible;
    //     }
    // }
});


// new custom component
app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone: </strong>{{ friend.phone }}</li>
          <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
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
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});



app.mount('#app');
