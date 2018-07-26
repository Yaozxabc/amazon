<template>
  <div class="recommand">
  <h2><i class="iconfont icon-star"></i>推荐与您相关</h2>
  <ul>
    <li v-for="item in recommandlist">
    <img :src="item.imgSrc" alt="item.name"/>
      <div class="price">￥{{item.price}}</div>
      <div class="favourable" v-show="item.show"><a href="javascript:">{{item.discount}}</a></div>
      <div class="warp">
        <router-link :to="{path:'/details'}">
        <h3>{{item.bookLabel}}</h3>
        <div :class="['svg',item.star]"></div>
        </router-link>
      </div>
    </li>
  </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              recommandlist:[
                {show:true,id:"01",name:"书格斯1",price:"98.00",discount:"满99元送50元购物券",bookLabel:"超级阅读",imgSrc:require("../../assets/images/recommand/recommand01.jpg"),star:"level1"},
                {show:false,id:"02",name:"书格斯2",price:"37.00",discount:"买一送一",bookLabel:"星光阅读",imgSrc:require("../../assets/images/recommand/recommand02.jpg"),star:"level2"},
                {show:true,id:"03",name:"书格斯3",price:"96.00",discount:"第二件半价",bookLabel:"午间阅读",imgSrc:require("../../assets/images/recommand/recommand03.jpg"),star:"level3"},
                {show:false,id:"04",name:"书格斯4",price:"58.00",discount:"满99元送20话费",bookLabel:"自然阅读",imgSrc:require("../../assets/images/recommand/recommand04.jpg"),star:"level4"},
                {show:true,id:"05",name:"书格斯4",price:"67.00",discount:"现场通用券免费一张",bookLabel:"新西阅读",imgSrc:require("../../assets/images/recommand/recommand05.jpg"),star:"level5"}
              ]
            }
        }
    }
</script>


<style scoped>
  .recommand {padding-top: 30px;clear: both}
  .recommand h2{height: 25px;line-height: 25px;padding-bottom: 5px;font-size: 25px;text-align: left;font-weight: bold}
  .recommand h2 i{width: 25px;height: 25px;font-size: 30px}
  .recommand ul{  border-top: 1px solid #cccccc;display: flex;z-index: 5}
  .recommand li {
    position: relative;
    float: left;
    width: 140px;
    margin-left: 50px;
    padding-top: 20px;
  }
 .warp{
   color: red;
    z-index: 3;
    position: absolute;
    transition: opacity .1s;
    opacity: 0;
    left: -40px;
    top: -35px;
    width: 160%;
    height: 130%;
    border: 1px solid darkgrey;
  }
 .warp h3{
   background:#ffffff ;
   height: 30px;
   line-height: 30px;
   color: #00327f;
 }
 .warp .svg{
   width: 126px;
   height: 22px;
   margin: 0 auto;
   background-image: url("../../assets/images/5star.svg");
   background-repeat: no-repeat;
   background-size: cover;

 }
 .warp a{
   display: block;
   width: 100%;
   height: 100%;
 }
.level1{background-position: 0 0}
.level2{background-position: 0 -24px}
.level3{background-position: 0 -48px}
.level4{background-position: 0 -72px}
.level5{background-position: 0 -96px}
  .recommand li:hover .warp{
    opacity: 1;
    box-shadow: 0 2px rgba(0,0,0,.4);
  }
  .recommand img{
    width: 130px;
    height: 150px;
  }
  .recommand .price{
    font-size: 14px;
    margin-top: 12px;
    text-align: center;
    width: 124px;
  }
  .favourable{
    width: 124px;
  }
  .recommand .favourable a{

    font-size: 14px;
    color: orange;
  }
</style>
