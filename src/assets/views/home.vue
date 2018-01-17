<template>
    <div class="wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller :class="['main-list', isIpx&&isIpx()?'ml-ipx':'']" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button" @click="jumpWeb('https://m.you.163.com/act/pub/DxDpYNfbBd.html')">
                <yx-slider :imageList="YXBanners" ></yx-slider>
                <div class="slogan">
                    <text class="i-slg iconfont">&#xe63a; 网易自营品牌</text>
                    <text class="i-slg iconfont">&#xe63a; 30天无忧退货</text>
                    <text class="i-slg iconfont">&#xe63a; 48小时快速退款</text>
                </div>
            </div>
            <div class="cell-button">
                <block-1 :title="makers.title" :items="makers.items"></block-1>
            </div>
            <div class="cell-button">
                <block-2 hasMore=true newGoods=true :head="recommend.head1" :goods="recommend.goods1"></block-2>
            </div>
            <div class="cell-button">
                <block-2 hasMore=true hotGoods=true :head="recommend.head2" :goods="recommend.goods2"></block-2>
            </div>
            <div class="cell-button">
                <block-3 :goods="goodsList"></block-3>
            </div>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
            </loading>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
    }
    .main-list{
        position: fixed;
        top: 168px;
        bottom: 90px;
        left: 0;
        right: 0;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
    }
    .ml-ipx{
        top: 208px;
        bottom:140px;
    }

    .cell-button{
        padding-bottom: 18px;
    }
    .slogan{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #fff;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }

</style>

<script>
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    import Header from '../components/Header.vue';
    import refresher from '../components/refresh.vue';
    import topChannel from '../components/topChannel.vue';
    import YXSlider from '../components/YXSlider.vue';
    import Block1 from '../components/Block1.vue';
    import Block2 from '../components/Block2.vue';
    import Block3 from '../components/Block3.vue';
    export default {
        components: {
            'home-header': Header,
            'refresher': refresher,
            'top-channel': topChannel,
            'yx-slider': YXSlider,
            'block-1': Block1,
            'block-2': Block2,
            'block-3': Block3
        },
        data () {
            return {
                YXBanners: [
                ],
                makers: {
                    title:'品牌SS制造商直供',
                    items: []
                },
                recommend: {
                    head1: {
                        tlt: '周一周四 · 新品发布',
                        tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-new.png',
                        url: 'http://m.you.163.com/item/newItem'
                    },
                    goods1: [],
                    head2: {
                        tlt: '人气推荐 · 好物精选',
                        tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-hot.png',
                        url: 'http://m.you.163.com/item/recommend'
                    },
                    goods2: []
                },
                goodsList:[],
                showLoading: 'hide'
            }
        },
        created () {
            this.GET('api/home/index', res => {
                let result = res.data.result;
                this.YXBanners = result['banners'];
                this.makers = result['makers'];
                this.recommend = result['recommend'];
            });
            this.GET('api/home/pullGoods', res => {
                let result = res.data.result;
                this.goodsList = result['goods'];
            })
        },
        methods: {
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                console.log(util.setBundleUrl(url, 'page/webview.js?weburl='+_url));
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            },
            onloading () {
                modal.toast({ message: 'loading', duration: 0.3 })
                this.showLoading = 'show';
                setTimeout(() => {
                    this.goodsList.push(...this.recommend.goods1);
                    this.showLoading = 'hide'
                }, 300)
            },
            onloadmore () {
                setTimeout(() => {
                    this.goodsList.push(...this.recommend.goods1);
                }, 100)
            },
            loadingDown(){
                this.goodsList =[];
                this.goodsList.push(...this.recommend.goods2);
                this.goodsList.push(...this.recommend.goods1);
            }
        }
    }
</script>