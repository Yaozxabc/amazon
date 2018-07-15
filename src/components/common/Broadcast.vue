<template>
<div class="broadBox" @mouseover="stopPlay" @mouseout="autoPlay">
  <ul class="Imglist">
    <li>
      <a href="javascript:">
        <div class="spinner" v-show="show">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
        <transition name="slides_move">
      <img class="default":src='slides[nowIndex].src' v-if="isShow" :alt='slides[nowIndex].alt' />
        </transition>
        <transition name="slides_move_old">
      <img :src='slides[nowIndex].src' v-if="!isShow" :alt='slides[nowIndex].alt'  />
        </transition>
    </a>
    </li>
  </ul>
  <ul class="CricleList">
    <li  v-for="(item,index) in slides" :class="{active:nowIndex==index}" @click="showImg(index)"></li>
  </ul>
  <a href="javascript:" id="pre" @click="showImg(preIndex)">&lt</a>
  <a href="javascript:" id="next" @click="showImg(nextIndex)">&gt</a>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        slides:{
          type:Array,
          default:[]
        },
        inv:{
          type:Number,
          default:1000
        }
      },
      data(){
      return{
        show:true,
        nowIndex:0,
        isShow:true
      }
    },
    computed:{
      preIndex(){
        if(this.nowIndex===0){
          return this.slides.length-1;
        }else{
          return this.nowIndex-1;
        }
      },
      nextIndex(){
        if(this.nowIndex===this.slides.length-1){
          return 0;
        }else{
          return this.nowIndex+1;
        }
      }
    },
    methods:{
      showImg(index){
        this.isShow=false;
        setTimeout(()=>{
            this.isShow=true
            this.nowIndex=index;
        },10)

      },
      autoPlay(){
        var that=this
        this.invId=setInterval(function(){
            that.showImg(that.nextIndex)
          }
        ,this.inv)
      },
      stopPlay(){
        clearInterval(this.invId)
      },
      successImg($event){
        if($event.target.complete==true){
          this.show=false;
        }
      }
    },
    mounted(){
      this.autoPlay()
    }
    }
</script>


<style scoped>
  .default{
  }
  .slides_move-enter-active{
    transition: all .5s;
  }
  .slides_move-enter{
    opacity: 1;
    /*transform: translateX(1070px);*/
  }
  .slides_move_old-leave-active{
    transition: all .5s;
    opacity: 0;
    /*transform: translateX(-1070px);*/
  }
.broadBox{
  position: relative;
  width: 970px;
  height: 304px;
  overflow: hidden;
}
.Imglist{
  width: 100%;
}
  .Imglist li{
    width: 100%;
    height: 304px;
  }
  .Imglist a{
    width: 100%;
    height: 100%;
  }
  .Imglist img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

  }
  .CricleList{
    position: absolute;
    bottom: 20px;
    right: 35%;
    z-index: 2;
  }
  .CricleList li{
    float: left;
    margin-left: 30px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
  }
  .CricleList .active{
    background: red;
  }
  .broadBox #next,.broadBox #pre{
    position: absolute;
    display: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 40px;
    text-align: center;
    background: darkgray;
    opacity: .4;
    color: #009999;
  }
  .broadBox #pre{
    left: 0;
    top: 45%;
  }
  .broadBox #next{
    right: 0;
    top: 45%;
  }
  .broadBox:hover #pre,.broadBox:hover #next{
    display: block;
  }

  .spinner {
    margin: 100px auto;
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
    z-index: 5;
  }

  .spinner > div {
    background-color: #67CF22;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
         transform: scaleY(1.0);
         -webkit-transform: scaleY(1.0);
       }
  }
</style>
