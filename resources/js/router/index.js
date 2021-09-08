import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from '../components/HomComponent';

Vue.use(VueRouter);

const router = new Router({
    mode: 'history',
    fallback: false,
    routes,
    base: process.env.BASE_URL,
});

const routes = [
    {
        path:"/",
        name:'Homepage',
        component:Homepage
    },
    {
        path:"/login",
        name:'Login',
        component:Login
    },
    {
        path:"/register",
        name:'Register',
        component:Register
    }
]

export default router;