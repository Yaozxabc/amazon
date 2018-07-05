<template>
<div class="broadBox" @mouseover="stopPlay" @mouseout="autoPlay">
  <ul class="Imglist">
    <li>
      <a href="javascript:">
        <transition name="slides_move">
      <img :src=slides[nowIndex].src v-if="isShow" :alt=slides[nowIndex].alt  />
        </transition>
        <transition name="slides_move_old">
      <img :src=slides[nowIndex].src v-if="!isShow" :alt=slides[nowIndex].alt  />
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
      }
    },
    mounted(){
      this.autoPlay()
    }
    }
</script>


<style scoped>
  .slides_move-enter-active{
    transition: all .5s;
  }
  .slides_move-enter{
    transform: translateX(1070px);
  }
  .slides_move_old-leave-active{
    transition: all .5s;
    transform: translateX(-1070px);
  }
.broadBox{
  position: relative;
  width: 1090px;
  height: 304px;
  overflow: hidden;
}
.Imglist{
  width: 100%;
}
  .Imglist li{
    max-width: 1070px;
    min-width: 955px;
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


</style>
