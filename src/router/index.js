import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/Home'], resolve)
const Main = resolve => require(['@/components/Main'], resolve)
const About = resolve => require(['@/components/About'], resolve)
const Setting = resolve => require(['@/components/Setting'], resolve)
const Count = resolve => require(['@/components/Count'], resolve)
const Counter = resolve => require(['@/components/Counter'], resolve)
const History = resolve => require(['@/components/History'], resolve)
const More = resolve => require(['@/components/More'], resolve)
const Add = resolve => require(['@/components/Add'], resolve)
const Bmi = resolve => require(['@/components/Bmi'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                component: Main
            }
        ]
    }, {
        path: '/count',
        component: Count
    }, {
        path: '/counter',
        component: Counter
    }, {
        path: '/about',
        component: About
    }, {
        path: '/history',
        component: History
    }, {
        path: '/more',
        component: More
    }, {
        path: '/add',
        component: Add
    }, {
        path: '/bmi',
        component: Bmi
    }, {
        path: '/setting',
        component: Setting
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})
