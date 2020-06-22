
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// router import

import { routes } from './routes';

const router = new VueRouter({
    routes,
    mode: 'history'
});



const app = new Vue({
    router
}).$mount('#app')
