import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/News',
            name: 'News',
            component: News
        }
    ]
})