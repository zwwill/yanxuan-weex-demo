<template>
    <div class="wrapper">
        <text class="tlt iconfont">{{title}} &#xe74b;</text>
        <div class="box">
            <div class="box-item" v-for="i in items" @click="jumpWeb(i.url)">
                <image class="i-image" resize="cover" :src="i.bg"></image>
                <text class="i-name">{{i.name}}</text>
                <div class="i-price"><text class="i-price-n">{{i.price}}</text><text class="i-price-t">元起</text></div>
                <text class="i-state" v-if="i.state">{{i.state}}</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-bottom: 6px;
    }
    .tlt{
        text-align: center;
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 26px;
        color:#333;
    }
    .box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 750px;
    }
    .box-item{
        width: 350px;
        height: 226px;
        margin: 5px;
        padding: 20px;
        background-color: #efefef;
    }
    .i-name{
        position: relative;
        color:#333;
        font-size: 28px;
        width: 300px;
    }
    .i-price{
        position: relative;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
    }
    .i-price-n{
        color:#333;
        font-size: 36px;
    }
    .i-price-t{
        color:#333;
        font-size: 24px;
        margin-top: 12px;
    }
    .i-state{
        position: relative;
        font-size: 20px;
        color:#b8a989;
        width: 70px;
        margin-top: 10px;
        padding: 5px;
        line-height: 20px;
        text-align: center;
        border-width: 1px;
        border-color: #b8a989;
        border-radius: 4px;
    }
    .i-image{
        position: absolute;
        top:0;
        left: 0;
        width: 350px;
        height: 226px;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["title","items"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) return;
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>