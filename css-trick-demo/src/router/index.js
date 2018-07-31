import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import demo from '@/page/demo/index'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: demo
        },
        {
            path: '/demo',
            name: 'demo',
            component: demo
        },
    ]
})
