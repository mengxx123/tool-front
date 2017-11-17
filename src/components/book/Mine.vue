<template>
    <div class="page page-book-mine">
        <header class="page-header">
            <mu-appbar title="我">
                <mu-icon-button icon="menu" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="book-user-box">
                <mu-icon value="account_circle" :size="56" />
                <div class="login">立即登录</div>
            </div>
            <mu-list>
                <mu-sub-header>书籍同步</mu-sub-header>
                <mu-list-item title="上传至服务器">
                    <mu-icon slot="left" value="cloud_upload"/>
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="从服务器同步至本地">
                    <mu-icon slot="left" value="cloud_download"/>
                </mu-list-item>
            </mu-list>
            <mu-list>
                <mu-list-item title="设置" to="/book/settings">
                    <mu-icon slot="left" value="settings"/>
                </mu-list-item>
            </mu-list>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [{
                    name: '跑步',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }],
                bottomNav: 'recents'
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
            handleChange(val) {
                this.bottomNav = val
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
