<template>
    <div class="wrapper">
        <!--<div v-for="i in items">-->
            <!--<div class="bar-item" @click="tabTo(i.key)">-->
                <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
                <!--<text class="bar-txt">{{i.name}}</text>-->
            <!--</div>-->
        <!--</div>-->

        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :style="testCS">&#xe660;</text>
            <text class="bar-txt">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-ic iconfont">&#xe744;</text>
            <text class="bar-txt">专题</text>
        </div>
        <div class="bar-item act" @click="tabTo('class')">
            <text class="bar-ic iconfont">&#xe605;</text>
            <text class="bar-txt">分类</text>
        </div>
        <div class="bar-item" @click="tabTo('shop')">
            <text class="bar-ic iconfont">&#xe61a;</text>
            <text class="bar-txt">购物车</text>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <text class="bar-ic iconfont">&#xe639;</text>
            <text class="bar-txt">个人</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
</style>
<script>

    var modal = weex.requireModule('modal');
    export default {
//        props: {
//            indexKey: {
//                type: String,
//                default: 'home'
//            },
//            reClick: {
//                type: Boolean,
//                default: false
//            },
//            items: {
//                type: Array,
//                default: function(){
//                    return [
//                        {
//                            icon:'&#xe660;',
//                            name:"首页",
//                            key:'home'
//                        }
//                    ]
//                }
//            }
//        },
        computed:{
            testCS:function () {
                return this.pIndexKey == 'home'?'color:#b4282d;':''
            }
        },
        data () {
            return {
                pIndexKey:'home'
            }
        },
        mounted(){
        },
        methods: {
            tabTo(_key){
                if(this.pIndexKey == _key) return;
                this.pIndexKey = _key;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        key : _key
                    }
                })
            }
        }
    }
</script>