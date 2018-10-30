<template>
    <div class="app">
        <div v-if="showMask" class="ajaxLoad">
            <van-loading type="gradient-circle" color="white"></van-loading>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { Loading } from 'vant';
    Vue.component(Loading.name, Loading);

    export default {
        name: "app",
        computed: {
            showMask() {
                return this.$store.state.ajaxMask;
            }
        }
    }
</script>

<style lang="less" scoped>
    .ajaxLoad {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: #000;
        opacity: 0.95;
    }
</style>

<style>
    .van-loading--gradient-circle {
        position: absolute;
        top: 50%;
        margin-top: -15px;
        left: 50%;
        margin-left: -15px;
    }
</style>