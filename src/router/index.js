import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/Home'], resolve)
const Main = resolve => require(['@/components/Main'], resolve)

const Count = resolve => require(['@/components/Count'], resolve)
const History = resolve => require(['@/components/History'], resolve)
const More = resolve => require(['@/components/More'], resolve)
// 书籍
const Book = resolve => require(['@/components/book/Book'], resolve)
const BookMine = resolve => require(['@/components/book/Mine'], resolve)
const BookList = resolve => require(['@/components/book/List'], resolve)
const BookCount = resolve => require(['@/components/book/Count'], resolve)
const BookSetting = resolve => require(['@/components/book/Setting'], resolve)
const BookAbout = resolve => require(['@/components/book/About'], resolve)
const BookDetail = resolve => require(['@/components/book/Detail'], resolve)
const BookSearch = resolve => require(['@/components/book/Search'], resolve)

Vue.use(Router)

const APP_NAME = '云设'

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
    },
     {
        path: '/book/about',
        component: BookAbout
    },
    {
        path: '/book/search',
        component: BookSearch
    }, {
        path: '/books/:id',
        component: BookDetail
    }, {
        path: '/count',
        component: Count
    }, {
        path: '/history',
        component: History
    }, {
        path: '/more',
        component: More
    }
]

function getTitle(title) {
    if (title) {
        return title
    } else {
        return APP_NAME
    }
}

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
