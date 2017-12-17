<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="预产期计算器">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <section class="tool-box">
                            <header class="tool-box-header"><h1 class="tool-box-title">预产期计算器</h1></header>
                            <div class="tool-box-body">
                                <div class="form-horizontal">
                                    <div class="form-group"><label class="control-label col-sm-4">平均月经周期：</label>
                                        <div class="col-sm-8">
                                            <input v-model="cycle" name="cycle" size="3" value="28" class="set_input">
                                            天
                                            <input v-model="luteal" type="hidden" name="luteal" size="3" value="14">
                                        </div>
                                    </div>
                                    <div class="form-group"><label class="control-label col-sm-4">末次月经时间：</label>
                                        <div class="col-sm-8">
                                            <select name="y" size="1" v-model="y" class="set_select">
                                                <option value="2016">2016</option>
                                                <option value="2017" selected="">2017</option>
                                                <option value="2018">2018</option>
                                            </select>

                                            年
                                            <select name="m" size="1" v-model="m" class="set_select">
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                                <option value="6">06</option>
                                                <option value="7">07</option>
                                                <option value="8">08</option>
                                                <option value="9">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            月
                                            <select name="d" size="1" v-model="d" class="set_select">
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                                <option value="6">06</option>
                                                <option value="7">07</option>
                                                <option value="8">08</option>
                                                <option value="9">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                            日
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-8 col-sm-offset-4">
                                            <button class="btn btn-primary" @click="calc">计算预产期</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="result" v-if="result">
                                    <h4 class="result-title">预产日期自测结果</h4>
                                    <ul class="result-list">
                                        <li>大概受孕时间： <span class="strong">{{ result.conception }}</span></li>
                                        <li>预计出生时间： <span class="strong">{{ result.duedate }}</span></li>
                                        <li>宝宝当前月龄： <span class="strong">{{ result.fetalage }}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <article class="article tool-article">
                            <!--                    <h2>工具介绍</h2>-->

                            <h2>相关信息</h2>
                            <h3>预产期计算（怀孕周期计算）</h3>
                            　　由于每一位孕妇都难以准确地判断受孕的时间，所以，医学上规定，以末次月经的第一天起计算预产期，其整个孕期共为280天，10个妊娠月（每个妊娠月为28天）。孕妇在妊娠38-42周内分娩，均为足月。由于每位女性月经周期长短不一，所以推测的预产期与实际预产期有1-2周的出入也是正常的。主要的计算方法有以下几种：
                            　　<br>
                            1.根据末次月经计算：
                            <br>　　
                            末次月经日期的月份加9或减3，为预产期月份数；天数加7，为预产期日。例如：张女士的末次月经是2008年3月13日，其预产期约为：2008年12月20日。李女士的末次月经是2008年5月28日，其预产期约为：2009年3月5日也可以从末次月经第一天起向后推算到第280天就是预产期。
                            <br>
                            　　2.根据胎动日期计算：
                            <br>
                            　　如你记不清末次月经日期，可以依据胎动日期来进行推算。一般胎动开始于怀孕后的18-20周。计算方法为：初产妇是胎动日加20周；经产妇是胎动日加22周。
                            <br>
                            　　3.根据基础体温曲线计算：
                            <br>
                            　　将基础体温曲线的低温段的最后一天作为排卵日，从排卵日向后推算264-268天，或加38周。
                            <br>
                            　　4.根据B超检查推算：
                            <br>
                            　　医生做B超时测得胎头双顶间径、头臀长度及股骨长度即可估算出胎龄，并推算出预产期（此方法大多作为医生B超检查诊断应用）。
                            <br>
                            　　5.从孕吐开始的时间推算：
                            <br>
                            　　反应孕吐一般出现在怀孕6周末，就是末次月经后42天，由此向后推算至280天即为预产期。
                            <br>
                            　　侦测与确定日期
                            <br>
                            　　妊娠的开始可由数种方式确定。一是侦测新形成的胎盘所产生的荷尔蒙。临床的尿液与血液检查可以在受孕后6-8天内侦测妊娠。家用的尿液检查则通常要12-15天后才有效侦测。这两种方式都只能侦测妊娠而无法得知受孕的日期。妊娠也可由月经的中断确定。月经中断早于任何妊娠早期症状（如害喜）。实际上医生通常以女性报告的上次月经的第一天来计算受孕日（即胚胎的“年纪”）。除非只有很少的性行为，无从得知受孕的确切日期。
                            <br>
                            　　由于受孕日期难以确定，胚胎与胎儿也只在科学上区分，不会在实际的怀孕中区分。受孕还可更进一步分为卵子在输卵管中遇到精子的受精以及后来的著床。
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
    function isValidDate(dateStr) {
        var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/
        var matchArray = dateStr.match(datePat)
        if (matchArray == null) {
            alert('请输入合法日期')
            return false
        }
        let day = matchArray[3]
        let month = matchArray[1]
        let year = matchArray[4]

        if (month < 1 || month > 12) {
            alert('月份必须在1-12之间')
            return false
        }
        if (day < 1 || day > 31) {
            alert('日期必须在1-31之间')
            return false
        }
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
            alert('该月没有31天！')
            return false
        }
        if (month === 2) { // check for february 29th
            var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
            if (day > 29 || (day === 29 && !isleap)) {
                alert(year + '年二月份没有' + day + ' 天!')
                return false
            }
        }
        return true
    }

    function dispDate(dateObj) {
        let month = dateObj.getMonth() + 1
        month = (month < 10) ? '0' + month : month
        let day = dateObj.getDate()
        day = (day < 10) ? '0' + day : day
        let year = dateObj.getYear()
        if (year < 2000) year += 1900
        return year + '年' + month + '月' + day + '日'
    }

    export default {
        data () {
            return {
                cycle: 28,
                luteal: 14,
                y: 2017,
                m: 1,
                d: 1,
                result: null
            }
        },
        methods: {
            calc: function () {
                let menstrual = new Date()
                let ovulation = new Date()
                let duedate = new Date()
                let today = new Date()

                let yy = this.y
                let mm = this.m
                let dd = this.d

                let cycle = this.cycle
                let luteal = this.luteal

                if (isValidDate(mm + '/' + dd + '/' + yy)) {
                    let menstrualinput = new Date(mm + '/' + dd + '/' + yy)
                    menstrual.setTime(menstrualinput.getTime())
                } else {
                    return false
                }

                if (cycle !== '' && (cycle < 22 || cycle > 45)) {
                    this.$ui.msg('您的月经周期过长或过短，我们尽量使计算结果正确，用您输入的数字进行计算 ')
                }
                if (luteal !== '' && (luteal < 9 || luteal > 16)) {
                    this.$ui.msg('您的黄体期过长或过短，我们尽量使计算结果正确，用您输入的数字进行计算')
                }
                ovulation.setTime(menstrual.getTime() + (cycle * 86400000) - (luteal * 86400000))

                this.result = {}
                this.result.conception = dispDate(ovulation)

                duedate.setTime(ovulation.getTime() + 266 * 86400000)

                this.result.duedate = dispDate(duedate)

                let fetalage = 280 - ((duedate - today) / 86400000)
                let weeks = parseInt(fetalage / 7)
                let days = Math.floor(fetalage % 7)
                fetalage = weeks + ' 周' + ', ' + days + ' 天'

                this.result.fetalage = fetalage
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
