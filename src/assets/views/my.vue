<template>
    <div class="wrapper">
        <header5></header5>
        <image class="header-bg" resize="cover" src="http://cdn.zwwill.com/yanxuan/imgs/bg5.png"></image>
        <image class="header-bg bg2" resize="cover" src="http://cdn.zwwill.com/yanxuan/imgs/bg5.png"></image>
        <image class="header-bg bg3" resize="cover" src="http://cdn.zwwill.com/yanxuan/imgs/bg5.png"></image>
        <scroller :class="['scroller',isIpx&&isIpx()?'ml-ipx':'']"  show-scrollbar="false">
        <div :class="['header', isIpx&&isIpx()?'h-ipx':'']"  @click="jumpWeb('http://m.you.163.com/ucenter')">
            <image class="i-photo" resize="cover" src="http://yanxuan.nosdn.127.net/885e3901d0a3501362530435d76bebb3.jpg"></image>
            <text class="i-name">zwwill7</text>
            <div class="b-tlt">
                <image class="i-tag tag-e" resize="contain" src="http://yanxuan.nosdn.127.net/3dc6e876620bb84a5dac3deb6ecd4916.png"></image>
                <text class="i-tag tag-v8 iconfont">&#xe6cc;</text>
                <text class="txt-tag">品质生活家</text>
            </div>
            <text class="b-qrcode iconfont" >&#xe60e;</text>
        </div>
        <div class="fbs">
            <div class="s-box cell-button">
                <div class="box-tlt border-bottom"><text class="box-txt">我的订单</text><text class="i-box-in iconfont">&#xe600;</text></div>
                <div class="box-line">
                    <div class="i-box-l">
                        <text class="i-box-icon iconfont">&#xe673;</text>
                        <text class="i-box-tlt">待付款</text>
                    </div>
                    <div class="i-box-l">
                        <text class="i-box-icon iconfont">&#xe675;</text>
                        <text class="i-box-tlt">待发货</text>
                    </div>
                    <div class="i-box-l">
                        <text class="i-box-icon iconfont">&#xe671;</text>
                        <text class="i-box-tlt">已发货</text>
                    </div>
                    <div class="i-box-l">
                        <text class="i-box-icon iconfont">&#xe672;</text>
                        <text class="i-box-tlt">待评价</text>
                    </div>
                    <div class="i-box-l">
                        <text class="i-box-icon iconfont">&#xe6ac;</text>
                        <text class="i-box-tlt">退换/售后</text>
                    </div>
                </div>
            </div>
            <div class="s-box cell-button">
                <div class="box-tlt border-bottom"><text class="box-txt">我的服务</text></div>
                <div class="box-line line-serve border-bottom" @click="jumpWeb('https://id.163.com/gj/m/')">
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe658;</text><text class="i-box-tlt">拼团订单</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe61d;</text><text class="i-box-tlt">邀请好友</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xef12;</text><text class="i-box-tlt">优惠券</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe615;</text><text class="i-box-tlt">优先购</text></div>
                </div>
                <div class="box-line line-serve border-bottom" @click="jumpWeb('https://gj.reg.163.com/faq/')">
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe67d;</text><text class="i-box-tlt">礼品卡</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe777;</text><text class="i-box-tlt">会员</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe69d;</text><text class="i-box-tlt">足迹</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe64c;</text><text class="i-box-tlt">收藏</text></div>
                </div>
                <div class="box-line line-serve" @click="jumpWeb('http%3A%2F%2Fm.you.163.com%2Fhelp%23%2F%3F_k%3Dyn4ucc')">
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe66a;</text><text class="i-box-tlt">地址</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe60a;</text><text class="i-box-tlt">客服</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe691;</text><text class="i-box-tlt">帮助</text></div>
                    <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe68a;</text><text class="i-box-tlt">设置</text></div>
                </div>
            </div>
            <div class="s-box cell-button">
                <div class="box-tlt border-bottom"><text class="box-txt" style="color:#f00;">Weex项目外链「可能一去无回，慎入」</text></div>
                <div class="box-line line-serve">
                    <div class="i-box-l"  @click="jumpNative('http://cdn.zwwill.com/justdo8/jsbundles/index.js')"><text class="i-box-icon iconfont" style="color:#00ad00;">&#xe6df;</text><text class="i-box-tlt" >Just Do 8</text></div>
                </div>
            </div>
        </div>
        </scroller>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .fbs{
        background-color: #f4f4f4;
        padding-bottom: 1000px;
        margin-bottom: -1000px;
    }
    .scroller{
        margin-bottom: 90px;
    }
    .ml-ipx{
        margin-bottom: 140px;
    }
    .cell-button{
        margin-bottom: 18px;
    }
    .header{
        height: 380px;
    }
    .h-ipx{
        height: 420px;
    }
    .header-bg{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        height: 500px;
        width: 750px;
    }
    .bg2{
        top:500px;
    }
    .bg3{
        top:1000px;
    }
    .i-photo{
        position: absolute;
        bottom:60px;
        left: 30px;
        height: 130px;
        width: 130px;
        border-radius: 130px;
    }
    .i-name{
        position: absolute;
        bottom:120px;
        left: 190px;
        height: 50px;
        width: 300px;
        font-size: 38px;
        color:#fff;
    }
    .b-tlt{
        position: absolute;
        bottom: 70px;
        left: 190px;
        height: 40px;
        width: 350px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .i-tag{
        width: 30px;
        height: 30px;
        font-size: 24px;
        padding-top: 2px;
        margin-right: 6px;
        border-radius: 4px;
    }
    .tag-e{
        width: 32px;
        height: 32px;
    }
    .tag-v8{
        color:#fff;
        background-color: #b29e75;
        text-align: center;
    }
    .txt-tag{
        color:#b4a078;
        flex: 1;
        height: 40px;
        font-size: 28px;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .b-qrcode{
        position: absolute;
        bottom:80px;
        right: 40px;
        height: 80px;
        width: 80px;
        border-radius: 70px;
        text-align: center;
        font-size: 40px;
        padding-top: 18px;
        color:#fff;
        background-color: rgba(255,255,255,.3);
    }
    .s-box{
        padding-left: 26px;
        background-color: #fff;
    }
    .box-tlt{
        height: 94px;
    }
    .box-txt{
        font-size: 26px;
        padding-top: 34px;
        color:#333;
    }
    .i-box-in{
        position: absolute;
        top:34px;
        right: 30px;
        color:#333;
    }
    .box-line{
        height: 132px;
        display: flex;
        padding-right: 30px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
    }
    .i-box-l{
        width: 130px;
        height: 132px;
    }
    .i-box-icon{
        font-size: 50px;
        text-align: center;
        padding-top: 15px;
        height:79px;
        padding-bottom: 10px;
        color:#666;
    }
    .i-box-tlt{
        font-size: 26px;
        text-align: center;
        color:#666;
    }
    .line-serve{
        padding-top: 20px;
        height: 150px;
    }
    .border-bottom{
        border-bottom-width: 1px;
        border-bottom-color: rgba(0,0,0,.15) ;
    }
    .i-c-orange{
        color:#ff744d;
    }
    .i-c-yellow{
        color:#f6a121;
    }
    .i-c-blue{
        color:#689de5;
    }
</style>

<script>

    import Header4 from '../components/Header4.vue';

    import util from '../util';
    var navigator = weex.requireModule('navigator');
    export default {
        data () {
            return {
            }
        },
        components: {
            'header5': Header4
        },
        created(){
        },
        methods: {

            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            },
            jumpNative (_url) {
                navigator.push({
                    url: _url ,
                    animated: "true"
                });
            }
        }
    }
</script>