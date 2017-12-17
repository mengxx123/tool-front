<template>
    <div class="page page-about">
        <header class="page-header">
            <mu-appbar title="在线骰子">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="dice-box">
                            <div class="btns">
                                <button class="btn btn-primary" @click="rand">随机生成</button>
                                <button class="btn btn-default" @click="add">添加骰子</button>
                                <button class="btn btn-default" @click="reduce">减少骰子</button>
                            </div>

                            <div id="dice-list" class="dice-list">
                                <div class="dice dice_1" v-for="dice in dices"></div>
                            </div>
                        </div>

                        <article class="article tool-article">
                            <h2>工具介绍</h2>
                            <p>略。</p>
                        </article>
                    </div>

                    <div class="col-sm-4">

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    const $ = window.$
    const ui = window.ui

    export default {
        data () {
            return {
                dices: [{}]
            }
        },
        methods: {
            add() {
                if (this.dices.length === 12) {
                    ui.msg('骰子数量已达最大值！')
                    return
                }
                this.dices.push({})
            },
            reduce() {
                if (this.dices.length === 1) {
                    ui.msg('再减少骰子就没啦！')
                    return
                }
                this.dices.pop({})
            },
            rand() {
                $('#dice-list').find('.dice').each(function () {
                    var dice = $(this)
                    dice.attr('class', 'dice') // 清除上次动画后的点数
                    var num = Math.floor(Math.random() * 6 + 1) // 产生随机数1-6

                    // 随机生成过程动画
                    var arrs = [
                        ['dice_t', 'dice_s', 'dice_e'],
                        ['dice_t', 'dice_e', 'dice_s'],
                        ['dice_s', 'dice_t', 'dice_e'],
                        ['dice_s', 'dice_e', 'dice_t'],
                        ['dice_e', 'dice_t', 'dice_s'],
                        ['dice_e', 'dice_s', 'dice_t']
                    ]
                    var arr = arrs[num - 1]
                    dice.animate({left: '+2px'}, 100, function () {
                        dice.addClass(arr[0])
                    }).delay(200).animate({top: '-2px'}, 100, function () {
                        dice.removeClass(arr[0]).addClass(arr[1])
                    }).delay(200).animate({opacity: 'show'}, 600, function () {
                        dice.removeClass(arr[1]).addClass(arr[2])
                    }).delay(100).animate({left: '-2px', top: '2px'}, 100, function () {
                        dice.removeClass(arr[2]).addClass('dice_' + num)
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dice-box {
        padding: 16px;
        margin-bottom: 24px;
        border: 1px solid #ccc;
        .btns {
            margin-bottom: 24px;
        }
    }
    .dice-list {
        position: relative;
        overflow: hidden;
        .dice {
            float: left;
            width: 90px;
            height: 90px;
            margin-right: 16px;
            margin-bottom: 16px;
            background: url(/static/dice/dice.png) no-repeat;
        }
        .dice_1 {
            background-position: -5px -4px
        }
        .dice_2 {
            background-position: -5px -107px
        }
        .dice_3 {
            background-position: -5px -212px
        }
        .dice_4 {
            background-position: -5px -317px
        }
        .dice_5 {
            background-position: -5px -427px
        }
        .dice_6 {
            background-position: -5px -535px
        }
        .dice_t {
            background-position: -5px -651px
        }
        .dice_s {
            background-position: -5px -763px
        }
        .dice_e {
            background-position: -5px -876px
        }
    }
</style>
