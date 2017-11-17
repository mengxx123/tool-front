<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="我的藏书">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-button icon="search" slot="right" to="/book/search"/>
                <!--<mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>-->
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="切换视图"/>
                    <mu-menu-item title="分享"/>
                </mu-icon-menu>
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="book-list">
                <li class="item" v-for="book in books">
                    <mu-card class="my-card" @click.native="view(book)">
                        <mu-card-title :title="book.name"></mu-card-title>
                        <mu-badge class="myadd" content="广告" v-if="book.isAdd" />
                        <mu-card-text>{{ book.desc }}</mu-card-text>
                    </mu-card>
                </li>
            </ul>
        </main>
        <ui-footer></ui-footer>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <div class="book-drawer-header">

            </div>
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="所有藏书">
                    <mu-icon slot="left" value="list"/>
                </mu-list-item>
                <mu-list-item title="想读">
                    <mu-icon slot="left" value="next_week"/>
                </mu-list-item>
                <mu-list-item title="在读">
                    <mu-icon slot="left" value="label_outline"/>
                </mu-list-item>
                <mu-list-item title="读过">
                    <mu-icon slot="left" value="chrome_reader_mode"/>
                </mu-list-item>
                <mu-divider/>

                <mu-sub-header>分类</mu-sub-header>

                <mu-list-item :title="category.name" v-for="category in categories">
                    <mu-icon slot="left" value="chrome_reader_mode"/>
                </mu-list-item>
                <mu-list-item title="添加新分类">
                    <mu-icon slot="left" value="add"/>
                </mu-list-item>
                <mu-divider/>

                <mu-list-item title="设置" to="/setting">
                    <mu-icon slot="left" value="settings"/>
                </mu-list-item>
                <mu-list-item title="关于" to="/about">
                    <mu-icon slot="left" value="info"/>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
        <mu-float-button icon="add" class="page-add" @click="add"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                categories: [
                    {
                        id: '1',
                        name: '测试'
                    }, {
                        id: '2',
                        name: '呵呵'
                    }, {
                        id: '2',
                        name: '呵呵'
                    }, {
                        id: '2',
                        name: '呵呵'
                    }
                ],
                books: [
                    {
                        id: '1',
                        name: '三体',
                        icon: '/static/img/icon_sleep.png',
                        url: '/counter',
                        desc: '简单的 +1 计数器'
                    }, {
                        id: '2',
                        name: '和时间做朋友',
                        icon: '/static/img/icon_traffic.png',
                        url: '/bmi',
                        desc: 'BMI 健康指数计算器'
                    }
                ],
                open: false,
                docked: true
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            view(book) {
                this.$router.push('/books/' + book.id)
            },
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
