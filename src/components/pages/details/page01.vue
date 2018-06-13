<template>
<div>
  <div class="big_product clearfix">
    <router-link :to="{path:'/sales'}">
      <img src="../../../assets/images/pageSession/big/big_01.jpg" alt=""/>
      <div>
        <h5>GEQX</h5>
        <p>会呼吸的鞋</p>
        <span>点击查看</span>
      </div>
    </router-link>
  </div>
  <div class="small_product">
    <ul>
      <li>
        <router-link :to="{path:'/sales'}">
          <img src="../../../assets/images/pageSession/small/small_01.jpg" alt=""/>
          <h6>男士 无限 超级运动鞋</h6>
          <span>￥300-500</span>
      </router-link>
      </li>
      <li>
        <a href="javascript:">
          <img src="../../../assets/images/pageSession/small/small_02.jpg" alt=""/>
          <h6>男士 无限 超级运动鞋</h6>
          <span>￥300-500</span>
      </a>
      </li>
      <li>
        <a href="javascript:">
          <img src="../../../assets/images/pageSession/small/small_03.jpg" alt=""/>
          <h6>男士 无限 超级运动鞋</h6>
          <span>￥300-500</span>
      </a>
      </li>
      <li>
        <a href="javascript:">
          <img src="../../../assets/images/pageSession/small/small_04.jpg" alt=""/>
          <h6>男士 无限 超级运动鞋</h6>
          <span>￥300-500</span>
      </a>
      </li>
    </ul>
  </div>
  <div class="middle_product">
    <ul>
      <li><a href="javascript:">
        <div>
          <h5>当季聚焦</h5>
          <p>果冻鞋/洞洞鞋</p>
          <strong>119元起</strong>
          <span>查看促销</span>
        </div>
        <img src="../../../assets/images/pageSession/middle/middle_02.jpg" alt=""/>
      </a></li>
      <li><a href="javascript:">
        <div>
          <h5>当季聚焦</h5>
          <p>洞洞鞋</p>
          <strong>￥119元</strong>
          <span>查看促销</span>
        </div>
        <img src="../../../assets/images/pageSession/middle/middle_01.jpg" alt=""/>
      </a></li>
    </ul>
  </div>
  <div class="brand">
    <ul>
      <li><img src="../../../assets/images/pageSession/brand/brand_01.jpg" alt=""/><p>时尚演绎经典</p></li>
      <li><img src="../../../assets/images/pageSession/brand/brand_02.jpg" alt=""/><p>时尚演绎经典</p></li>
      <li><img src="../../../assets/images/pageSession/brand/brand_03.jpg" alt=""/><p>时尚演绎经典</p></li>
      <li><img src="../../../assets/images/pageSession/brand/brand_04.jpg" alt=""/><p>时尚演绎经典</p></li>
    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      data(){
      return{

      }
    }
    }
</script>


<style>
.big_product{
  float: left;
  width: 210px;
  height: 464px;
  background: red;
}
.big_product div{
  width: 210px;
  height: 140px;
  box-sizing: border-box;
  padding: 20px;

}
.big_product h5{
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 30px;
  font-weight: bold;
}
.big_product p{
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
}
.big_product span{
  margin-top: 20px;
  display: inline-block;
  width: 80px;
  height: 16px;
  line-height: 16px;
  background: #fff;
  font-size: 12px;
  color: #848484;
}
  .small_product{
    float: left;
    width: 430px;
    height: 460px;
  }
  .small_product li{
    width: 212px;
    height: 231px;
    float: left;
    border: 1px solid lightsteelblue;
    border-left: none;
  }
  .small_product h6,.small_product span{
    color: #000000;
    font-weight: bolder;
  }
  .middle_product{
    background: #f5f5f5;
    float: left;
    width: 300px;
    height: 465px;
    color: #000000;
  }
  .middle_product li:first-child{
    background: #fff9f9;
  }
  .middle_product li{
    float: left;
    width: 100%;
    height: 232px;
    padding: 34px 0;
    box-sizing: border-box;
  }
  .middle_product h5{
    font-weight: bold;
    font-size: 24px;
    color: #8b8a8a;
    margin-bottom: 25px;
  }
  .middle_product p{
    font-size: 20px;
    color: #8b8a8a;
  }
  .middle_product strong{
    font-size: 28px;
    color: red;
    font-family: Arial;
    font-weight: bold;

  }
  .middle_product span{
    margin-top: 40px;
    display: block;
    color: #818181;
  }
  .middle_product img{
    float: right;
    margin-top: 25px;
  }
  .middle_product div{
    float: left;
  }
  .brand{
    float: left;
    width: 144px;
    height: 464px;
  }
  .brand li{
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    height: 115px;
  }
</style>
