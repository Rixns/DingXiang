import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/home.vue"

const Hesuan = () => import("../views/Hesuan/index.vue")

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hesuan',
        name: 'Hesuan',
        component: Hesuan
    },

]

const router = new VueRouter({
    routes
})

export default router