<template>
    <div class="wrapper">
        <text class="tlt">猜你喜欢</text>
        <div class="gb-box">
            <div class="i-gd" v-for="i in goods"  @click="jumpWeb(i.url)">
                <image class="gd-img" resize="cover" :src="i.img"></image>
                <text class="gd-info">{{i.info}}</text>
                <text class="gd-tlt">{{i.tlt}}</text>
                <text class="gd-price">¥{{i.price}}</text>
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
        padding-bottom: 10px;
        padding-top: 26px;
        width: 750px;
    }
    .tlt{
        text-align: center;
        color:#333;
        width: 750px;
        padding: 10px;
        font-size: 30px;
    }
    .gb-box{
        padding: 16px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .i-gd{
        width: 350px;
        height: 510px;
        margin-bottom: 20px;
    }
    .gd-img{
        width: 350px;
        height: 350px;
        background-color: #f4f4f4;
    }

    .gd-tlt{
        font-size: 28px;
        color:#333;
        width: 350px;
        margin-top: 15px;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-info{
        display: block;
        font-size: 28px;
        width: 350px;
        height: 65px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        color:#9F8A60;
        background-color: #F1ECE2;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-price{
        font-size: 28px;
        width: 350px;
        margin-top: 10px;
        color:#b4282d;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["newGoods","hotGoods","head","hasMore","goods"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>