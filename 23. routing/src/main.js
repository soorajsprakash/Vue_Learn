import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import UsersList from './components/users/UsersList.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            components: {
                // key - router name,
                // value - components to be loaded
                default: TeamsList,
                footer: TeamsFooter

            },
            children: [
                {
                    name: 'team-members',
                    path: '/teams/:teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter

            },
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log("TO:  \n", to)
        console.log("from:  \n", from)
        console.log("savedPOS:  \n", savedPosition)

        if (savedPosition) {
            // page returns to the last clicked position while going back
            return savedPosition
        }
        // page loads on the top
        return { top: 0, left: 0 }
    }
})

const app = createApp(App)
app.use(router);

app.mount('#app');
