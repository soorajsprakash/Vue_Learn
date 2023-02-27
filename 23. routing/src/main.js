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
            // navigation guard on single route
            beforeEnter(to, from, next) {
                console.log('users before enter')
                console.log(to, from)
                next()
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        // console.log("TO:  \n", to)
        // console.log("from:  \n", from)
        // console.log("savedPOS:  \n", savedPosition)

        if (savedPosition) {
            // page returns to the last clicked position while going back
            return savedPosition
        }
        // page loads on the top
        return { top: 0, left: 0 }
    }
})


router.beforeEach(function(to, from, next) {
    console.log('GLOBAL beforeEach')
    console.log(to, from)
    
    // here we can go to any team members page, but if we wanna go somewhere else,
    // we'll be redirected to the t2 team-member page.
    // if (to.name === 'team-members') {
    //     next() // similar to express middlewares
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    
    next()
})

router.afterEach(function(to, from) {
    // runs once after each loading of the routes
    // good for logging or sending analytics
    console.log('GLOBAL afterEach')
    console.log(to, from)
})

const app = createApp(App)
app.use(router);

app.mount('#app');
