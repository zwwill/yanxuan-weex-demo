<template>
    <div class="wrapper"  @click="jumpWeb(url)">
        <div class="auther-box">
            <image class="auther-img" resize="cover" :src="article.autherImg"></image>
            <text class="auther-name">{{article.auther}}</text>
        </div>
        <div class="img-box">
            <template v-if="typeof article.img == 'string'">
                <image class="main-img" resize="cover" :src="article.img"></image>
            </template>
            <template v-else-if="typeof article.img == 'object' && article.img.length>=3">
                <image class="main-img" resize="cover" :src="article.img[0]"></image>
                <div class="sub-imgs-box">
                    <image class="sub-img" resize="cover" :src="article.img[1]"></image>
                    <image class="sub-img" resize="cover" :src="article.img[2]"></image>
                </div>
            </template>
        </div>
        <div class="tlt-box">
            <text class="tlt">{{article.tlt}}</text>
            <text class="price" v-if="article.price">{{article.price}}元起</text>
        </div>
        <text class="info">{{article.info}}</text>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .auther-box{
        height: 75px;
        padding-top: 10px;
        padding-left: 25px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .auther-img{
        height: 58px;
        width: 58px;
        border-radius: 58px;
    }
    .auther-name{
        flex:1;
        font-size: 26px;
        height: 58px;
        padding-left: 20px;
        padding-top: 10px;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .main-img{
        flex: 1;
        height: 380px;
    }
    .sub-imgs-box{
        width: 190px;
        height: 380px;
    }
    .sub-img{
        height: 188px;
        width: 190px;
        margin-left: 3px;
        margin-bottom: 3px;
    }
    .tlt-box{
        height: 80px;
        padding: 20px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .tlt{
        font-size: 34px;
        flex: 1;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .price{
        font-size: 34px;
        color:#b4282d;
        padding-left: 10px;

    }
    .info{
        font-size: 26px;
        padding-left: 20px;
        padding-right: 20px;
        overflow: hidden;
        lines:2;
        text-overflow: ellipsis;
        color:#666;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["article","url"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>