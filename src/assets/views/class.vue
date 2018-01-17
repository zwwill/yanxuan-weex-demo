<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header3></header3>
        <div class="class-list">
            <scroller>
                <text class="class-txt" v-for="i in classes">{{i}}</text>
            </scroller>
        </div>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
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
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
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
    import util from '../util';
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
                classes: [],
                subclasses:[]
            }
        },
        created () {
            this.GET('api/class/index', res => {
                let result = res.data.result;
                this.classes = result['classes'];
            });
            this.GET('api/class/subclasses', res => {
                let result = res.data.result;
                this.subclasses = result['subclasses'];
            })
        },
        methods: {
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            },
        }
    }
</script>