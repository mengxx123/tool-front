<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="云设工具">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-button icon="search" slot="right" @click="toggle(true)"/>
                <!--<mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>-->
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="旧版" href="http://tool.yunser.com" target="_blank"/>
                    <mu-menu-item title="分享"/>
                </mu-icon-menu>
            </mu-appbar>
        </header>
        <main class="page-body">
            <router-view/>
        </main>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <div class="drawer-header">

            </div>
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="全部工具">
                    <mu-icon slot="left" value="list"/>
                </mu-list-item>
                <mu-list-item title="便民工具">
                    <mu-icon slot="left" value="next_week"/>
                </mu-list-item>
                <mu-list-item title="学习工具">
                    <mu-icon slot="left" value="label_outline"/>
                </mu-list-item>
                <mu-list-item title="开发者工具" to="/cat/develop">
                    <mu-icon slot="left" value="chrome_reader_mode"/>
                </mu-list-item>
                <mu-list-item title="添加分类">
                    <mu-icon slot="left" value="add"/>
                </mu-list-item>
                <mu-list-item title="我的收藏">
                    <mu-icon slot="left" value="chrome_reader_mode"/>
                    <mu-badge content="1" slot="after"/>
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
//    import light from '!raw!muse-ui/dist/theme-default.css'
//    import dark from '!raw!muse-ui/dist/theme-dark.css'
//    import carbon from '!raw!muse-ui/dist/theme-carbon.css'
//    import teal from '!raw!muse-ui/dist/theme-teal.css'

    export default {
        data () {
            return {
                open: false,
                docked: false
                // 主题
//                theme: 'light',
//                themes: {
//                    light,
//                    dark,
//                    carbon,
//                    teal
//                }
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
