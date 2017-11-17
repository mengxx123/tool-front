<template>
    <div class="page page-book">
        <header class="page-header">
            <mu-appbar title="设置">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-list>
                <mu-list-item disableRipple @click="handleToggle('events')" title="本地删除操作，自动与服务器同步">
                    <mu-switch v-model="events"  slot="right"/>
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="意见反馈">
                    <mu-icon value="navigate_next" slot="right"></mu-icon>
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="关于" to="/book/about">
                    <mu-icon value="navigate_next" slot="right"></mu-icon>
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
