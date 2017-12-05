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
// 书籍
const Book = resolve => require(['@/components/book/Book'], resolve)
const BookMine = resolve => require(['@/components/book/Mine'], resolve)
const BookList = resolve => require(['@/components/book/List'], resolve)
const BookCount = resolve => require(['@/components/book/Count'], resolve)
const BookSetting = resolve => require(['@/components/book/Setting'], resolve)
const BookAbout = resolve => require(['@/components/book/About'], resolve)
const BookDetail = resolve => require(['@/components/book/Detail'], resolve)
const BookSearch = resolve => require(['@/components/book/Search'], resolve)
// TODO

// 分类
const Develop = resolve => require(['@/components/Develop'], resolve)

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
        path: '/book',
        component: Book,
        children: [
            {
                path: '',
                component: Main
            }
        ]
    }, {
        path: '/book/mine',
        component: BookMine
    }, {
        path: '/book/list',
        component: BookList
    }, {
        path: '/book/count',
        component: BookCount
    }, {
        path: '/book/settings',
        component: BookSetting
    }, {
        path: '/book/about',
        component: BookAbout
    }, {
        path: '/book/search',
        component: BookSearch
    }, {
        path: '/books/:id',
        component: BookDetail
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
    }, {
        path: '/cat/develop',
        component: Develop
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})
