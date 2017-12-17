<template>
    <div class="page page-about">
        <header class="page-header">
            <mu-appbar title="关于我们">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <article class="article">
                <h2>关于</h2>
                <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
                <p><a href="http://app.yunser.com">云设工具</a> 是一个在线工具网站。</p>
                <p>这是网络上最全、最好用的工具网站。</p>
                <p>平时工作、生活或学习中，有时会用到一些小工具。最好无需安装，用完即走。</p>
                <p>既然做了，那就干脆把这个网站做好。我给网站定了几个目标：</p>
                <ul>
                    <li>功能尽可能齐全，涵盖生活、学习等各个方面。</li>
                    <li>界面美观、简洁易用，能提高效率。</li>
                    <li>逐步把网站相关功能代码开源出去。</li>
                </ul>
                <p>我会尽可能把常用的一些工具全部集成到这个网站上，省得大家需要某些工具时到处找，浪费时间。希望大家能给我提出宝贵意见。</p>
                <p>如果大家觉得这个工具站好用的话，可以添加到收藏夹，或推荐给身边的朋友，谢谢大家。</p>

                <h2>联系我们</h2>
                <p>官方邮箱：admin@yunser.com</p>
                <p>站长 QQ：1418503647</p>
                <p>官方 QQ 交流群：642481431（粉丝交流、源码分享）</p>

                <h2>意见及建议</h2>
                <p>有什么意见或建议，可以在下面留言，或进群讨论。</p>
            </article>
        </main>
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
