<template>
    <refresh class="u-refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <image class="loading-bg" resize="contain" src="http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"></image>
        <div class="l-txt-box">
            <text ref="lTxt1" class="l-txt l-txt-1">好</text>
            <text ref="lTxt2" class="l-txt l-txt-2">的</text>
            <text ref="lTxt3" class="l-txt l-txt-3">生</text>
            <text ref="lTxt4" class="l-txt l-txt-4">活</text>
            <text ref="lTxt5" class="l-txt l-txt-5">没</text>
            <text ref="lTxt6" class="l-txt l-txt-6">那</text>
            <text ref="lTxt7" class="l-txt l-txt-7">么</text>
            <text ref="lTxt8" class="l-txt l-txt-8">贵</text>
        </div>
    </refresh>
</template>
<style scoped>

    .u-refresh{
        height: 170px;
        width: 750px;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
    .loading-bg{
        position: absolute;
        left: 250px;
        margin-top: 40px;
        width: 250px;
        height: 120px;
    }
    .l-txt-box{
        height: 106px;
        width: 200px;
        overflow: hidden;
    }
    .l-txt{
        height: 30px;
        width: 30px;
        font-size: 25px;
        position: absolute;
        top: 105px;
        left: 87px;
        color:#666;
    }
    .box{margin-top:50px;width:100px;height:70px;transform-style:preserve-3d; transform:rotateX(-10deg) scale(0.7) ;perspective:300px;}
    .t{position:absolute;width:100px;height:70px;background-color:#e6d7c9;}

    .top-1{ height:100px;transform:rotateX(90deg) rotateY(20deg);left:-50px; background: none; }
    .g1{width: 50%;height: 100%;background:#e6d7c9;}
    .top-2{ height:100px;transform:rotateX(90deg) rotateY(160deg);left:50px; background: none;}
    .bottom{ height:100px;transform:rotateX(-90deg) translateZ(70px);background-color: #dbc8b8;}
    .left{transform:rotateY(-90deg) translateZ(50px) translateY(50px);background-color: #dbc8b8;}
    .right{transform:rotateY(90deg) translateZ(50px) translateY(50px);background-color: #dbc8b8;}
    .back{transform:rotateY(180deg) translateZ(50px) translateY(50px); background-color: #cdb69e;}
    .front{transform:translateZ(50px) translateY(50px);}
    .box-txt{text-align:center;line-height:70px;font-size:30px;font-family: "楷体","楷体_GB2312";color:#a49a6f;}

</style>
<script>
    var animation = weex.requireModule('animation')
    var modal = weex.requireModule('modal')
    export default {
        props:[],
        data () {
            return {
                refreshing: false,
                loadingAR:[
                    {ref :'lTxt1',p:[-77,-75],delay:0},
                    {ref :'lTxt2',p:[-47,-81],delay:50},
                    {ref :'lTxt3',p:[-15,-88],delay:100},
                    {ref :'lTxt4',p:[12,-90],delay:150},
                    {ref :'lTxt5',p:[-5,-49],delay:200},
                    {ref :'lTxt6',p:[25,-55],delay:250},
                    {ref :'lTxt7',p:[55,-61],delay:300},
                    {ref :'lTxt8',p:[85,-61],delay:350}
                ]
            }
        },
        methods: {

            loadingAni(){
                for(var i=0;i<this.loadingAR.length;i++){
                    this.shake(this.$refs[this.loadingAR[i].ref],this.loadingAR[i].p[0],this.loadingAR[i].p[1],3,1,200,this.loadingAR[i].delay);
                }
            },
            loadingAniDown(){
                for(var i=0;i<this.loadingAR.length;i++){
                    this.shake(this.$refs[this.loadingAR[i].ref],0,0,0,0,200);
                }
            },
            shake(_ref,_x,_y,_k,_d,_duration,_delay){
                animation.transition(_ref, {
                    styles: {
                        transform:'translate('+(_x-0)+'px,'+(_y-_k*_d)+'px)',
                    },
                    duration: _duration | 500, //ms
                    timingFunction: 'ease-out',
                    delay: _delay | 0 //ms
                },function () {
                    this.refreshing&&this.shake(_ref,_x,_y,_k,-1*_d);
                }.bind(this))
            },
            onrefresh (event) {
//                console.log('is refreshing')
                modal.toast({ message: 'refresh', duration: 1 })

                this.loadingAni();
                this.refreshing = true;
                setTimeout(() => {
                    this.refreshing = false;
                    this.loadingAniDown();
                }, 1300)
            },
            onpullingdown (event) {
            }
        }
    }
</script>