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
const Bwh = resolve => require(['@/components/Bwh'], resolve)
const Heartrate = resolve => require(['@/components/Heartrate'], resolve)
const Birth = resolve => require(['@/components/Birth'], resolve)
// 书籍
const Book = resolve => require(['@/components/book/Book'], resolve)
const BookMine = resolve => require(['@/components/book/Mine'], resolve)
const BookList = resolve => require(['@/components/book/List'], resolve)
const BookCount = resolve => require(['@/components/book/Count'], resolve)
const BookSetting = resolve => require(['@/components/book/Setting'], resolve)
const BookAbout = resolve => require(['@/components/book/About'], resolve)
const BookDetail = resolve => require(['@/components/book/Detail'], resolve)
const BookSearch = resolve => require(['@/components/book/Search'], resolve)
// 其他
// 骰子
const Dice = resolve => require(['@/components/Dice'], resolve)

// 分类
const Develop = resolve => require(['@/components/Develop'], resolve)

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
    },
    {
        path: '/bmi',
        component: Bmi
    },
    {
        path: '/birth',
        component: Birth,
        meta: {
            keywords: '预产日期计算器，预产期查询，预产期自测'
        }
    },
    {
        path: '/bwh',
        component: Bwh
    },
    {
        path: '/heartrate',
        component: Heartrate
    },
    {
        path: '/setting',
        component: Setting
    },
    {
        path: '/cat/develop',
        component: Develop
    },
    {
        path: '/dice',
        component: Dice,
        meta: {
            title: '在线骰子'
        }
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
