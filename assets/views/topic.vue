<template>
    <div class="wrapper">
        <header2  title="专题"></header2>
        <scroller class="main-list" offset-accuracy="300px">
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
    .main-list{
        margin-top: 113px;
        margin-bottom: 90px;
    }
    .cell-button{
        padding-bottom: 18px;
    }

</style>

<script>
    import util from '../../src/assets/util';
    import Header2 from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import Block4 from '../components/Block4.vue';
    import Block5 from '../components/Block5.vue';
    var navigator = weex.requireModule('navigator')
    export default {
        data () {
            return {
                topics:[
                    {name:'严选look',img:'https://yanxuan.nosdn.127.net/15030393722652401.jpg'},
                    {name:'严选推荐',img:'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg'},
                    {name:'挑款师推荐',img:'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png'},
                    {name:'丁磊私物推荐',img:'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg'},
                ],
                articles:[
                    {auther:'严选推荐',autherImg:'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',tlt:'年中扫一扫，下半年运势好',info:'6个家庭清洁小技巧',price:'6.9',img:'http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg'},
                    {auther:'服装组：小服',autherImg:'https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64',tlt:'小姐姐们的运动衣提前上架啦',info:'前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。大家的...',price:'',img:['https://yanxuan.nosdn.127.net/15041772896010423.jpg','https://yanxuan.nosdn.127.net/15041772789070419.jpg','https://yanxuan.nosdn.127.net/15041772808640420.jpg']},
                    {auther:'居家组：朵朵',autherImg:'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64',tlt:'初秋，最想用它来裸睡',info:'连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...',price:'',img:['https://yanxuan.nosdn.127.net/15040927525260414.jpg','https://yanxuan.nosdn.127.net/15040927586650416.jpg','https://yanxuan.nosdn.127.net/15040927556820415.jpg']},
                    {auther:'严选推荐',autherImg:'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',tlt:'不为繁华易匠心',info:'那些值得珍藏的严选手作好物',price:'29',img:'http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg'},
                ]
            }
        },
        components: {
            'header2': Header2,
            'refresher': refresher,
            'block-4': Block4,
            'block-5': Block5,
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