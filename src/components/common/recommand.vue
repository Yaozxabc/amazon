<template>
  <div class="recommand">
  <h2><i class="iconfont icon-star"></i>推荐与您相关</h2>
  <ul>
    <li>
      <img src="../../assets/images/recommand/recommand_01.jpg" alt=""/>
      <div class="price">￥66.70</div>
      <div class="favourable"><a href="javascript:">满99元送20元购物券</a></div>
      <div class="warp">
        <h3>五星级阅读</h3>
        <div class="svg"></div>
      </div>
    </li>
    <li>
      <h3></h3>
      <div class="svg"></div>
      <img src="../../assets/images/recommand/recommand02.jpg" alt=""/>
      <div class="price">￥66.70</div>
      <div class="favourable"><a href="javascript:">满99元送20元购物券</a></div>
      <div class="warp">
        <h3>五星级阅读</h3>
        <div class="svg">
        </div>
      </div>
    </li>
    <li>
      <h3></h3>
      <div class="svg"></div>
      <img src="../../assets/images/recommand/recommand03.jpg" alt=""/>
      <div class="price">￥66.70</div>
      <div class="favourable"><a href="javascript:">满99元送20元购物券</a></div>
      <div class="warp">
        <h3>五星级阅读</h3>
        <div class="svg"></div>
      </div>
    </li>
    <li>
      <h3></h3>
      <div class="svg"></div>
      <img src="../../assets/images/recommand/recommand04.jpg" alt=""/>
      <div class="price">￥66.70</div>
      <div class="favourable"><a href="javascript:">满99元送20元购物券</a></div>
      <div class="warp">
        <h3>五星级阅读</h3>
        <div class="svg"></div>
      </div>
    </li>
    <li>
      <h3></h3>
      <div class="svg"></div>
      <img src="../../assets/images/recommand/recommand05.jpg" alt=""/>
      <div class="price">￥66.70</div>
      <div class="favourable"><a href="javascript:">满99元送20元购物券</a></div>
      <div class="warp">
        <h3>五星级阅读</h3>
        <div class="svg"></div>
      </div>
    </li>
  </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>


<style>
  .recommand {padding-top: 30px;clear: both}
  .recommand h2{height: 25px;line-height: 25px;padding-bottom: 5px;font-size: 25px;text-align: left;font-weight: bold}
  .recommand h2 i{width: 25px;height: 25px;font-size: 30px}
  .recommand ul{  border-top: 1px solid #cccccc;display: flex;z-index: 5}
  .recommand li {
    position: relative;
    flex: 1;
    float: left;
    margin-left: 50px;
    padding-top: 20px;
  }
 .warp{
   color: red;
    z-index: 3;
    position: absolute;
    transition: opacity .1s;
    opacity: 0;
    left: -30px;
    top: -30px;
    width: 130%;
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
   background-position: 0 -72px;
 }
  .recommand li:hover .warp{
    opacity: 1;
    box-shadow: 0 2px rgba(0,0,0,.4);
  }
  .recommand img{
    width: 130px;
    height: 150px;
  }
  .recommand .price{
    font-size: 20px;
    margin-top: 12px;
    text-align: center;
  }
  .recommand .favourable a{
    font-size: 18px;
    color: orange;
  }
</style>
