<template>
    <div class="wrapper">
        <header3></header3>
        <div class="class-list">
            <scroller>
                <text class="class-txt" v-for="i in classes">{{i}}</text>
            </scroller>
        </div>
        <scroller class="main-list" offset-accuracy="300px">
            <refresh class="refresh" display="hide">
                <text class="indicator">Refreshing ...</text>
            </refresh>
            <image class="ad-img" resize="cover" src="http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"></image>
            <text class="sub-tlt"> --- 推荐区分类 --- </text>
            <div class="sub-box">
                <div class="sub-i" v-for="i in subclasses" @click="jumpWeb('http%3A%2F%2Fm.you.163.com%2Fitem%2Flist%3FcategoryId%3D1022001%26subCategoryId%3D1040031')">
                    <image class="i-img" resize="contain" :src="i.img"></image>
                    <text class="i-name">{{i.name}}</text>
                </div>
            </div>
            <!--<loading class="loading" display="hide">-->
                <!--<text class="indicator">Loading ...</text>-->
            <!--</loading>-->
        </scroller>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .class-list{
        width: 162px;
        margin-top: 113px;
        margin-bottom: 90px;
        padding-top: 20px;
        border-right-width: 1px;
        border-right-color: #d9d9d9;
        background-color: #fff;
    }
    .class-txt{
        font-size: 28px;
        margin-top: 22px;
        margin-bottom: 26px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
        color:#333;
    }
    .main-list{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 113px;
        margin-bottom: 90px;
        background-color: #fff;
    }
    .ad-img{
        width: 532px;
        height: 194px;
        border-radius: 6px;
        margin: 28px;
    }
    .sub-tlt{
        text-align: center;
        font-size: 24px;
        color:#333;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .sub-box{
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .sub-i{
        width: 178px;
        height: 200px;
    }
    .i-img{
        width: 150px;
        margin-left: 14px;
        margin-right: 14px;
        height: 150px;
    }
    .i-name{
        font-size: 22px;
        text-align: center;
    }
</style>

<script>
    import util from '../../src/assets/util';
    import refresher from '../components/refresh.vue';
    import Header3 from '../components/Header3.vue';
    var navigator = weex.requireModule('navigator')
    export default {
        components: {
            'refresher': refresher,
            'header3': Header3
        },
        data () {
            return {
                classes: ['推荐区','家装区','居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'],
                subclasses:[
                    {name:'中秋系列',img:'http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'超值套装',img:'http://yanxuan.nosdn.127.net/bd6f7deba69c8af2f6bb80025d7b98de.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'热卖爆品',img:'http://yanxuan.nosdn.127.net/c3418cc60d3968263c5b2ac7fb153c34.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'999+好评',img:'http://yanxuan.nosdn.127.net/87d1cb1bc196c5775b17788aea1c2239.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'boss推荐',img:'http://yanxuan.nosdn.127.net/fbee769af73c0f63f6120eb27ff3ce96.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'明星推荐',img:'http://yanxuan.nosdn.127.net/7dea8f7e0e706804c3307504e2e7c463.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'黑凤梨系列',img:'http://yanxuan.nosdn.127.net/a4a14669ce1fa497aece9a20c669196e.png?imageView&quality=85&thumbnail=144x144'},
                    {name:'趣味粉系列',img:'http://yanxuan.nosdn.127.net/87fc01e5876482d521ecca13aea42653.png?imageView&quality=85&thumbnail=144x144'}
                ]
            }
        },
        methods: {
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/web.js?weburl='+_url) ,
                    animated: "true"
                });
            },
        }
    }
</script>