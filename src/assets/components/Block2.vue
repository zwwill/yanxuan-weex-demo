<template>
    <div class="wrapper">
        <div class="tlt-box" v-if="newGoods">
            <image class="tlt-image" resize="cover" src="http://doc.zwwill.com/yanxuan/imgs/bg-new.png"></image>
            <text class="tlt tlt-new">{{head.tlt}}</text>
            <text class="btn-all btn-new" @click="jumpWeb(head.url)">查看全部 ></text>
        </div>
        <div class="tlt-box" v-else-if="hotGoods">
            <image class="tlt-image" resize="cover" src="http://doc.zwwill.com/yanxuan/imgs/bg-hot.png"></image>
            <text class="tlt tlt-hot">{{head.tlt}}</text>
            <text class="btn-all btn-hot" @click="jumpWeb(head.url)">查看全部 ></text>
        </div>
        <scroller class="box" scroll-direction="horizontal" show-scrollbar=false>
            <div class="i-good" v-for="i in goods">
                <image class="gd-img" resize="cover" :src="i.img"></image>
                <text class="gd-tlt">{{i.tlt}}</text>
                <text class="gd-info">{{i.info}}</text>
                <text class="gd-price">¥{{i.price}}</text>
            </div>
            <div class="i-good" v-if="hasMore">
                <text class="gd-more">查看全部</text>
            </div>
        </scroller>
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
    .tlt-box{
        height: 260px;
        width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tlt{
        margin-top: 76px;
        text-align: center;
        font-size: 34px;
        color:#8BA0B6;
    }
    .tlt-hot{
        color:#B4A078;
    }
    .btn-all{
        text-align: center;
        font-size: 26px;
        width: 220px;
        padding: 10px;
        margin-top: 20px;
        color:#8BA0B6;
        border-radius: 4px;
        background-color: #D8E5F1;
    }
    .btn-hot{
        color:#B4A078;
        background-color: #F4E9CB;
    }
    .tlt-image{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .box{
        width: 750px;
        height: 500px;
        flex-direction: row;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .i-good{
        padding-left: 15px;
        padding-right: 15px;
    }
    .gd-img{
        height: 286px;
        width: 286px;
        background-color: #f4f4f4;
    }
    .gd-tlt{
        font-size: 28px;
        color:#333;
        width: 286px;
        margin-top: 16px;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-info{
        display: block;
        font-size: 24px;
        width: 286px;
        margin-top: 8px;
        color:#7f7f7f;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-price{
        font-size: 28px;
        width: 286px;
        margin-top: 16px;
        color:#b4282d;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-more{
        height: 286px;
        width: 286px;
        font-size: 28px;
        line-height: 40px;
        border-width: 6px;
        padding-top: 120px;
        padding-bottom: 120px;
        border-color: #f4f4f4;
        text-align: center;
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