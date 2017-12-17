<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="最大心率计算器">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <section class="tool-box">
                            <header class="tool-box-header"><h1 class="tool-box-title">最大心率计算器</h1></header>
                            <div class="tool-box-body">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                        <label class="control-label col-sm-3">年龄：</label>
                                        <div class="col-sm-9">
                                            <input class="form-control" v-model.number="age" placeholder="请输入您的年龄">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-9 col-sm-offset-3">
                                            <button class="btn btn-primary" @click="showResult">查看结果</button>
                                            <button class="btn btn-default" @click="reset">我要重做</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="result" v-if="result">
                                    <h4 class="result-title">测试结果</h4>
                                    <ul class="result-list">
                                        <li>在 60 秒内，</li>
                                        <!--<li>在
                                            <select v-model="second">
                                                <option value="6">6秒</option>
                                                <option selected="selected" value="10">10秒</option>
                                                <option value="15">15秒</option>
                                                <option value="30">30秒</option>
                                                <option value="60">60秒</option>
                                            </select>内，
                                        </li>-->
                                        <li>最大心率： <span class="strong">{{ result.maxRate }}</span> 下；</li>
                                        <li>靶心率： <span class="strong">{{ result.rate1 }}</span> 下到 <span class="strong">{{ result.rate2 }}</span> 下之间。</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <article class="article tool-article">
                            <h2>工具介绍</h2>
                            <p>本工具可计算最大心率和靶心率。</p>
                            <p>本测试仅供参考，有关疾病相关诊断请咨询医生！</p>

                            <h2>相关信息</h2>
                            <p>心率是指正常人安静状态下每分钟心跳的次数，也叫安静心率，一般为60～100次/分，可因年龄、性别或其他生理因素产生个体差异。</p>
                            <p>一般来说，年龄越小，心率越快，老年人心跳比年轻人慢，女性的心率比同龄男性快，这些都是正常的生理现象。</p>
                            <p>安静状态下，成人正常心率为60～100次/分钟，理想心率应为55～70次/分钟（运动员的心率较普通成人偏慢，一般为50次/分钟左右）。</p>
                            <p>靶心率：靶心率，指运动时需要达到的目标心率，它是判断有氧运动的重要依据。</p>
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
    export default {
        data () {
            return {
                age: null,
                second: 60,
                result: null
            }
        },
        methods: {
            reset: function () {
                this.result = this.age = null
            },
            showResult: function () {
                this.name()
            },
            name: function () {
                console.log('name')
                // 变量定义
                let vtemp
                let vzdxl
                let vzxbxl
                // 变量负值
                // 判断输入合法化
                if (!this.age || this.age < 1 || this.age > 120) {
                    this.$ui.msg('年龄输入有误，请输入1-120之间数值。')
                    return
                } else {
                    var re = /^[1-9]+[0-9]*]*$/
                    if (!re.test(this.age)) {
                        this.$ui.msg('请输入1-120之间有效的年龄。')
                        return false
                    }
                }
                // 计数公式
                //        vtest = 0.7 * vheight
                //        vtest1 = 208 - vtest
                //        vtemp = 0.75 * vtest1
                //        vtemp = 0.75 * (208 - 0.7 * vheight)
                vzdxl = 208 - 0.7 * this.age
                vtemp = 0.75 * vzdxl
                vzxbxl = 0.5 * vzdxl

                switch (this.second) {
                    case '6':
                        vzdxl = vzdxl / 10
                        vtemp = vtemp / 10
                        vzxbxl = vzxbxl / 10
                        break
                    case '10':
                        vzdxl = vzdxl / 6
                        vtemp = vtemp / 6
                        vzxbxl = vzxbxl / 6
                        break
                    case '15':
                        vzdxl = vzdxl / 4
                        vtemp = vtemp / 4
                        vzxbxl = vzxbxl / 4
                        break
                    case '30':
                        vzdxl = vzdxl / 2
                        vtemp = vtemp / 2
                        vzxbxl = vzxbxl / 2
                        break
                    case '60':
                        break
                }

                // 显示结果
                this.result = {
                    maxRate: Math.round(vzdxl),
                    rate1: Math.round(vzxbxl),
                    rate2: Math.round(vtemp)
                }
            }
        },
        watch: {
            second: function () {
                this.name()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-box {
        .tip {
            margin-bottom: 16px;
            color: #999;
        }
        textarea {
            margin-bottom: 16px;
        }
        .result {
            margin-top: 16px;
        }
    }
    .table {
        width: 240px;
    }
</style>
