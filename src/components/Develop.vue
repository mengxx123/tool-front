<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="开发者工具">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-button icon="search" slot="right" @click="toggle(true)"/>
                <!--<mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>-->
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="分享"/>
                </mu-icon-menu>
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="app-list">
                <li class="item" v-for="app in apps">
                    <mu-card class="my-card">
                        <!--<mu-card-header :title="app.name" subTitle="sub title">-->
                        <!--<mu-avatar src="/images/uicon.jpg" slot="avatar"/>-->
                        <!--</mu-card-header>-->
                        <mu-icon-menu icon="more_vert" @change="handleChange"
                                      :open="open"
                                      :anchorOrigin="{vertical: 'top',horizontal: 'right'}"
                                      :targetOrigin="{vertical: 'top',horizontal: 'right'}"
                                      @open="handleOpen"
                                      @close="handleClose"
                                      menuClass="ui-menu-list"
                                      :value="value">
                            <mu-menu-item value="1" title="删除" leftIcon="remove_red_eye" />
                            <mu-menu-item value="2" title="收藏" leftIcon="remove_red_eye" @click="collection(app)" />
                        </mu-icon-menu>
                        <mu-card-title :title="app.name"></mu-card-title>
                        <mu-badge class="myadd" content="广告" v-if="app.isAdd" />
                        <mu-card-text>{{ app.desc }}</mu-card-text>
                        <mu-card-actions>
                            <mu-raised-button primary label="查看" @click="view(app)"/>
                        </mu-card-actions>
                    </mu-card>
                </li>
            </ul>
        </main>
        <mu-float-button icon="add" class="page-add" @click="add"/>
    </div>
</template>

<script>
//    import light from '!raw!muse-ui/dist/theme-default.css'
//    import dark from '!raw!muse-ui/dist/theme-dark.css'
//    import carbon from '!raw!muse-ui/dist/theme-carbon.css'
//    import teal from '!raw!muse-ui/dist/theme-teal.css'

    export default {
        data () {
            return {
                open: false,
                docked: true,
                // 主题
//                theme: 'light',
//                themes: {
//                    light,
//                    dark,
//                    carbon,
//                    teal
//                },
                apps: [
                    {
                        name: '计数器',
                        icon: '/static/img/icon_sleep.png',
                        url: '/counter',
                        desc: '简单的 +1 计数器'
                    }, {
                        name: 'BMI 计算器',
                        icon: '/static/img/icon_traffic.png',
                        url: '/bmi',
                        desc: 'BMI 健康指数计算器'
                    }, {
                        name: '阿里云CES',
                        desc: '双11五折起',
                        url: '/bmi',
                        isAdd: true,
                        icon: '/static/img/icon_eat.png'
                    }, {
                        name: '藏书',
                        desc: '图书管理、书单管理软件',
                        url: '/book',
                        icon: '/static/img/icon_sport.png'
                    }, {
                        name: '阅读',
                        icon: '/static/img/icon_read.png'
                    }, {
                        name: '工作',
                        icon: '/static/img/icon_work.png'
                    }, {
                        name: '睡眠',
                        icon: '/static/img/icon_sleep.png'
                    }
                ],
                counts: [
                    {
                        name: '跑步',
                        totalTime: 4 * 60 * 1000,
                        percent: 30
                    }, {
                        name: '吃饭',
                        totalTime: 8 * 60 * 1000,
                        percent: 70
                    }
                ],
                toastVisible: false,
                toastMessgge: '这是消息'
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            },
            add() {
//                this.changeTheme('light')
                this.$router.push('/add')
            },
            // 主题
            changeTheme(theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            }
        }
    }
</script>

<style scoped>
</style>
