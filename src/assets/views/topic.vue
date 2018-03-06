<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2  title="专题"></header2>
        <scroller class="main-list" offset-accuracy="300px" @loadmore="onloadmore" loadmoreoffset="300">
            <refresher></refresher>
            <div  class="cell-button"  @click="jumpWeb('http://m.you.163.com/topic/v1/look/list')">
            <block-4 :topics="topics"></block-4>
            </div>
            <div v-for="ar in articles" class="cell-button">
                <block-5 :article="ar" url=""></block-5>
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
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main-list{
        margin-top: 113px;
        margin-bottom: 90px;
    }
    .cell-button{
        padding-bottom: 18px;
    }

</style>

<script>
    import util from '../util';
    import Header2 from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import Block4 from '../components/Block4.vue';
    import Block5 from '../components/Block5.vue';
    var navigator = weex.requireModule('navigator')
    export default {
        data () {
            return {
                topics:[],
                articles:[]
            }
        },
        components: {
            'header2': Header2,
            'refresher': refresher,
            'block-4': Block4,
            'block-5': Block5,
        },
        created () {
            this.GET('api/topic/index', res => {
                let result = res.data.result;
                this.topics = result['topics'];
            });
            this.GET('api/topic/articles', res => {
                let result = res.data.result;
                this.articles = result['articles'];
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
            onloadmore () {
                setTimeout(() => {
                    this.articles.push(...this.articles);
                }, 100)
            },
        }
    }
</script>