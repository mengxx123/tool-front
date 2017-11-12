<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="计数器">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <h2>统计</h2>
            <div class="count">{{ count }}</div>
            <div class="btns">
                <button class="btn btn-primary add-btn" @click="add"> + </button>
            </div>
            <div class="btns">
                <button class="btn btn-info" @click="minus"> - </button>
                <button class="btn btn-danger" @click="reset">重置</button>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            }
        },
        methods: {
            add: function () {
                this.count++
            },
            minus: function () {
                this.count--
                if (this.count < 0) {
                    this.count = 0
                }
            },
            reset: function () {
                this.count = 0
            }
        }
    }
</script>

<style scoped>
</style>
