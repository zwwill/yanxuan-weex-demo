<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']" >
        <text class="search iconfont">&#xe65c; 搜索商品，共8888款好物</text>
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
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .w-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .search {
        flex: 1;
        height: 60px;
        font-size: 26px;
        padding-top: 13px;
        background-color: #ededed;
        border-radius: 8px;
        margin-right: 26px;
        margin-left: 26px;
        text-align: center;
        color:#666;
    }
</style>
<script>
    export default {
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
        }
    }
</script>