<template>
  <div>
    <ul class="sImg_list">
      <li :class="{active:index==nowIndex}" v-for="(img,index) in smImg" @mouseover="tabShow(index)"><img v-lazy="img.src" :alt="img.alt"/></li>
    </ul>
    <div class="product_show"  id="bigbox">
      <div class="img"  @mousemove.stop="showDetail" id="img" >
        <img :src="bigImg[nowIndex].src" alt="bigImg[nowIndex].alt"  />
      </div>
      <div  class="mark" v-show="isShow" id="mark"  @mouseout.stop="out" ></div>
      <div class="product_detail"  id="detail" v-show="isShow">
        <img :src="XLImg[nowIndex].src" alt="XLImg[nowIndex].alt" id="ximg" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        aimg:{
          type:Object,
          default:{}
        }
      },
        data(){
            return {
              isShow:false,
              nowIndex:0,
              smImg:[],
              bigImg:[],
              XLImg:[]
            }
        },
    methods:{
      tabShow(index){
        this.nowIndex=index;
      },
      showDetail($event){
        this.call($event)
      },
      call($event){
        this.isShow=true;
        let ev=$event;
        let self=this;
        this.getOffset(ev);

        document.onmousemove=function(ev){
          self.getOffset(ev);
          return false;
        }
      },
      out($event){
        this.isShow=false;
        document.onmousemove=null;
      },
      getOffset(ev){
        let bigbox=document.getElementById("bigbox");
        let img=document.getElementById("img");
        let Ximg=document.getElementById("ximg");
        let mark=document.getElementById("mark");
        let oTop=bigbox.getBoundingClientRect().top;
        let l=img.offsetWidth-mark.offsetWidth+img.offsetLeft;
        let p=bigbox.offsetHeight-mark.offsetHeight-img.offsetTop;
        let prosX=ev.clientX-bigbox.offsetLeft-img.offsetLeft-210/2;
        let prosY=ev.clientY-oTop-img.offsetTop-210/2;
        this.posX=prosX;
        this.posY=prosY;
        if(prosX>=l){
          prosX=l;
        }else if(prosX<=img.offsetLeft){
          prosX=img.offsetLeft;
        }
        if(prosY>=p){
          prosY=p;
        }else if(prosY<=img.offsetTop){
          prosY=img.offsetTop
        }
        mark.style.left=prosX+"px";
        Ximg.style.left=-prosX*(Ximg.offsetWidth/(img.offsetWidth+img.offsetLeft*2))+"px";
        mark.style.top=prosY+"px";
        Ximg.style.top=-prosY*(Ximg.offsetHeight/(img.offsetHeight+img.offsetTop*2))+"px";
      }
    },
    created:function(){
      this.smImg=this.aimg.a;
      this.bigImg=this.aimg.b;
      this.XLImg=this.aimg.c;
    }
    }
</script>


<style scoped>
.sImg_list{
  width: 64px;
  height: 420px;
  float: left;
}
  .sImg_list li{
    padding: 7px;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    border: 1px solid #ffffff;
  }
  .sImg_list li:hover, .sImg_list .active{
    border: 1px solid orange;
  }
  .sImg_list img{
    width: 50px;
    height: 50px;
  }
  .product_show{
    float: left;
    position: relative;
    width: 380px;
    height: 380px;
    padding: 7px;

  }
.product_show img{
  width: 380px;
  height: 380px;
}
  .product_show span{
    margin-top: 20px;;
  }
  .mark{
    position: absolute;
    left: 7px;
    top: 7px;
    width: 190px;
    height: 190px;
    background: darkcyan;
    opacity: .3;
    z-index: 2;
    cursor: move;
    overflow: hidden;
  }
  .product_detail{
    width: 300px;
    height:300px;
    background: firebrick;
    overflow: hidden;
    position: absolute;
    left: 100%;
    top: 7px;
    z-index: 5;
    border: 1px solid darkmagenta;
  }
  .product_detail img{
    width: 600px;
    height: 600px;
    position: absolute;
    left: 0;
    top:0;
  }
</style>
