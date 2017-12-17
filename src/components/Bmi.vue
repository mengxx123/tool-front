<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="BMI 健康指数计算器">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <section class="tool-box">
                            <header class="tool-box-header"><h1 class="tool-box-title">BMI 健康指数计算器</h1></header>
                            <div class="tool-box-body">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                        <label class="control-label col-sm-4">身高（cm）：</label>
                                        <div class="col-sm-8">
                                            <input class="form-control" v-model.number="height" placeholder="如：173">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-sm-4">体重（kg）：</label>
                                        <div class="col-sm-8">
                                            <input class="form-control" v-model.number="weight" placeholder="如：65">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-8 col-sm-offset-4">
                                            <button class="btn btn-primary" @click="calculate">计算</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="result" v-if="result">
                                    <h4 class="result-title">计算结果</h4>
                                    <ul class="result-list">
                                        <li>你的 BMI 值: <span class="strong">{{ result.bmi }}</span></li>
                                        <li>身体状态：<span class="strong">{{ result.state }}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <article class="article tool-article">
                            <h2>工具介绍</h2>
                            <p>本工具用于计算 BMI 值。</p>
                            <p>注：1 公斤（KG）= 2 斤。</p>

                            <h2>相关信息</h2>
                            <p>BMI（Body Mass Index）即身体质量指数, 亦称克托莱指数、体质指数、体重指数, 是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。</p>
                            <p>体重指数与健康的关系，各国和各地区有所差别，在中国大陆，以《中国成人超重和肥胖症预防控制指南》认定的数据为标准：</p>
                            <p><strong>BMI 中国标准：</strong></p>
                            <table class="table table-bordered">
                                <tr style="background-color: #8DD8F8">
                                    <th>BMI 范围</th>
                                    <th>体质</th>
                                </tr>
                                <tr style="background-color: #ccc">
                                    <td>≤ 18.4</td>
                                    <td>偏瘦</td>
                                </tr>
                                <tr style="background-color: #66cc00">
                                    <td>18.5 ～ 23.9</td>
                                    <td>正常</td>
                                </tr>
                                <tr style="background-color: #ffff00">
                                    <td>24.0 ～ 27.9</td>
                                    <td>过重</td>
                                </tr>
                                <tr style="background-color: #ff9900">
                                    <td>≥ 28</td>
                                    <td>肥胖</td>
                                </tr>
                            </table>

                            <p><strong>BMI 国际标准：</strong></p>
                            <table class="table table-bordered">
                                <tr style="background-color: #8DD8F8">
                                    <th>BMI 范围</th>
                                    <th>体质</th>
                                </tr>
                                <tr style="background-color: #ddd">
                                    <td>≤ 16.4</td>
                                    <td>极瘦</td>
                                </tr>
                                <tr style="background-color: #ccc">
                                    <td>16.5 ~ 18.4</td>
                                    <td>偏瘦</td>
                                </tr>
                                <tr style="background-color: #66cc00">
                                    <td>18.5 ~ 24.9</td>
                                    <td>正常</td>
                                </tr>
                                <tr style="background-color: #FFFF00">
                                    <td>25.0 ~ 29.9</td>
                                    <td>过重</td>
                                </tr>
                                <tr style="background-color: #ffcc00">
                                    <td>30.0 ~ 34.9</td>
                                    <td>1 类肥胖</td>
                                </tr>
                                <tr style="background-color: #ff9900">
                                    <td>35.0 ~ 39.0</td>
                                    <td>2 类肥胖</td>
                                </tr>
                                <tr style="background-color: #ff6600">
                                    <td>≥ 40.0</td>
                                    <td>3 类肥胖</td>
                                </tr>
                            </table>

                            <p>研究显示，当BMI值超过 25 时，每增长 5 个单位，死亡率就会上升 29%。</p>
                            <p>BMI因为易于测试，而成为最为常用的肥胖统计标准，但它也存在一定的局限性，比如有些人体重很重，但身材健美，肌肉很多，并没有多余的脂肪，他们的BMI值会超出正常水平而显示为超重或肥胖，但他们却可能比许多BMI值较低的人更为健康。</p>
                            <p>因此，如果你觉得你超重是因为经常锻炼，而不是脂肪超标，你可以采用体脂肪率的方法测试。</p>
                        </article>
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
                height: '',
                weight: '',
                result: null
            }
        },
        methods: {
            calculate: function () {
                if (!this.height) {
                    this.$ui.msg('请输入身高')
                    return
                }
                if (this.height < 100 || this.height > 200) {
                    this.$ui.msg('身高格式不正确')
                    return
                }
                if (!this.weight) {
                    this.$ui.msg('请输入体重')
                    return
                }
                if (this.weight > 100) {
                    this.$ui.msg('体重输入不正确')
                    return
                }
                var height = this.height / 100

                this.result = {}
                this.result.bmi = (this.weight / (height * height)).toFixed(1)

                if (this.result.bmi <= 18.4) {
                    this.result.state = '偏瘦'
                } else if (this.bmi < 24) {
                    this.result.state = '正常'
                } else if (this.bmi < 28) {
                    this.result.state = '过重'
                } else {
                    this.result.state = '肥胖'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    /**/
    .input-box {

    }
    .input-box .tip {
        margin-bottom: 16px;
        color: #999;
    }
    .input-box textarea {
        margin-bottom: 16px;
    }
    .input-box .result {
        margin-top: 16px;
    }
    /**/
    .table {
        width: 240px;
    }
</style>
