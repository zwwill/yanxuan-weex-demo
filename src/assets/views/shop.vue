<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header4 title="购物车" :rightBtn="rightBtn"></header4>
        <div class="slogan">
            <text class="i-slg iconfont">&#xe63a; 30天无忧退换货</text>
            <text class="i-slg iconfont">&#xe63a; 48小时快速退款</text>
            <text class="i-slg iconfont">&#xe63a; 满88元免邮费</text>
        </div>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
            <div class="shop-cart">
                <div v-if="!goodList || goodList.length<=0" class="cart-empty">
                    <image class="img-empty" resize="contain" src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"></image>
                    <text class="txt-empty">去添加点什么吧</text>
                </div>
            </div>
            <block-3 :goods="goods3"></block-3>
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
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main-list{
        margin-top: 170px;
        margin-bottom: 90px;
    }
    .slogan{
        position: absolute;
        top:110px;
        width: 750px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }
    .shop-cart{

    }
    .cart-empty{
        height: 350px;
    }
    .img-empty{
        position: absolute;
        width: 750px;
        height: 230px;
        top:20px;
        left: 0;
    }
    .txt-empty{
        position: absolute;
        text-align: center;
        font-size: 30px;
        width: 750px;
        top:250px;
        color:#999;
    }
</style>

<script>
    import Header2 from '../components/Header2.vue';
    import Block3 from '../components/Block3.vue';
    import util from '../util';
    import refresher from '../components/refresh.vue';
    export default {
        components: {
            'header4':Header2,
            'refresher':refresher,
            'block-3':Block3,
        },
        data () {
            return {
                rightBtn:{
                    name:"编辑"
                },
                goods3:[],
                goodList:[]
            }
        },
        created () {
            this.GET('api/home/pullGoods', res => {
                let result = res.data.result;
                this.goods3 = result['goods'];
            })
        },
        methods: {
        }
    }
</script>