<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']" >
        <div class="scan">
            <text class="ic iconfont">&#xe689;</text>
            <text class="txt">扫一扫</text>
        </div>
        <text class="search iconfont"  @click="jumpWeb()">&#xe65c; 搜索商品，共8888款好物</text>
        <div class="notice">
            <text class="ic iconfont">&#xe70a;</text>
            <text class="txt">消息</text>
        </div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        display:flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #fafafa;
        opacity: .99;
    }
    .w-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .scan,.notice{
        height: 80px;
        width: 96px
    }
    .ic,.txt,.search{
        text-align: center;
        color:#666;
        font-weight: 300;
    }
    .ic{
        font-size: 32px;
    }
    .txt{
        font-size: 18px;
     }
    .search {
        flex: 1;
        height: 60px;
        font-size: 26px;
        padding-top: 13px;
        background-color: #ededed;
        border-radius: 8px;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http://m.you.163.com/search';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "false"
                });
            }
        }
    }
</script>