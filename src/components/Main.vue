<template>
    <div class="">
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
                    <img class="ic" :src="app.icon">
                    <mu-card-text>
                        {{ app.desc }}
                        <div>
                            <span class="badge" v-for="tag in app.tags">{{ tag }}</span>
                        </div>
                    </mu-card-text>
                    <mu-card-actions>
                        <mu-raised-button primary label="查看" @click="view(app)"/>
                    </mu-card-actions>
                </mu-card>
            </li>
        </ul>
        <mu-toast v-if="toastVisible" :message="toastMessgge" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                apps: [
                    {
                        name: '在线骰子',
                        icon: '/static/dice/app-rand.png',
                        url: '/dice',
                        desc: '',
                        tags: ['便民']
                    },
                    {
                        name: '计数器',
                        icon: '/static/img/icon_sleep.png',
                        url: '/counter',
                        desc: '简单的 +1 计数器'
                    },
                    {
                        name: 'BMI 计算器',
                        icon: '/static/img/icon_traffic.png',
                        url: '/bmi',
                        desc: 'BMI 健康指数计算器',
                        tags: ['便民', '健康']
                    },
                    {
                        name: '标准三围计算器',
                        icon: '/static/img/icon_traffic.png',
                        url: '/bwh',
                        desc: '',
                        tags: ['便民', '健康']
                    },
                    {
                        name: '最大心率计算器',
                        icon: '/static/img/icon_traffic.png',
                        url: '/heartrate',
                        desc: '',
                        tags: ['便民', '健康']
                    },
                    {
                        name: '预产期计算器',
                        icon: '/static/img/icon_traffic.png',
                        url: '/birth',
                        desc: '',
                        tags: ['便民', '健康']
                    },
                    {
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
            handleOpen() {

            },
            handleClose() {

            },
            collection(app) {

            },
            view(app) {
                this.$router.push(app.url)
            },
            remove(removeItem) {
                console.log(this.items)
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].id === removeItem.id) {
                        this.items.splice(i, 1)
                    }
                }
            },
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            timeText(time) {
                let minute = time / 1000 / 60
                return minute + '分钟'
            },
            handleChange(val) {
                this.bottomNav = val
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style scoped>
</style>
