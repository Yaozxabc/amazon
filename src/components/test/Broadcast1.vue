<template>
<div class="broadBox">
  <ul class="Imglist">
    <li v-for="(item,index) in ImgList"><a href="javascript:"><img :src=item.src :alt=item.alt v-show="active" /></a></li>
  </ul>
  <ul class="CricleList">
    <li  v-for="item in ImgList" :class="cur"></li>
  </ul>
  <a href="javascript:" id="pre"><</a>
  <a href="javascript:" id="next">></a>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      data(){
      return{
        ImgList:[
          {src:require('../../assets/images/broadlist/01.jpg'),alt:'沐浴书香',name:'沐浴书香'},
          {src:require('../../assets/images/broadlist/02.jpg'),alt:'精工手表',name:'精工手表'},
          {src:require('../../assets/images/broadlist/03.jpg'),alt:'踏青出行',name:'踏青出行'},
          {src:require('../../assets/images/broadlist/04.jpg'),alt:'辣妈萌宝',name:'辣妈萌宝'},
          {src:require('../../assets/images/broadlist/05.jpg'),alt:'时尚腕表',name:'时尚腕表'},
          {src:require('../../assets/images/broadlist/06.jpg'),alt:'精品超市',name:'精品超市'},
          {src:require('../../assets/images/broadlist/07.jpg'),alt:'品牌电脑',name:'品牌电脑'},
          {src:require('../../assets/images/broadlist/08.jpg'),alt:'敦煌礼品',name:'敦煌礼品'}
        ],
        cur:"current"
      }
    },
    methods:{
      showImg(index){

      }
    }
    }
</script>


<style>
.broadBox{
  position: relative;
  width: 1090px;
  height: 304px;
  overflow: hidden;
}
.Imglist{
  position: absolute;
  left: 0;
  top: 0;
  width: 800%;
}
  .Imglist li{
    float: left;
    width: 1090px;
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
    top:0
  }
  .CricleList{
    position: absolute;
    bottom: 20px;
    right: 40%;
    z-index: 2;
  }
  .CricleList li{
    float: left;
    margin-left: 30px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: orange;
  }
  .CricleList .current{
    background: red;
  }
  .broadBox #next,.broadBox #pre{
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 40px;
    text-align: center;
    background: darkgray;
  }
  .broadBox #pre{
    left: 0;
    top: 45%;
  }
  .broadBox #next{
    right: 0;
    top: 45%;
  }


</style>
