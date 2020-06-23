
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// router import

import { routes } from './routes';

// import User Class
import User from './helpers/User';
window.User = User;

const router = new VueRouter({
    routes,
    mode: 'history'
});



const app = new Vue({
    el: '#app',
    router
});
