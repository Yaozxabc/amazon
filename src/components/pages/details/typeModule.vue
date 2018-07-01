<template>
<div>
  <div class="big_product clearfix" :style="{background:Info.bg}">
    <router-link :to="{path:Info.big_product.path}">
      <img :src="Info.big_product.ImgSrc" alt="Info.big_product.name"/>
      <div>
        <h5>{{Info.big_product.name}}</h5>
        <p>{{Info.big_product.name}} <br/>{{Info.big_product.price}}元起</p>
        <span>点击查看</span>
      </div>
    </router-link>
  </div>
  <div class="small_product">
    <ul>
      <li v-for="item in Info.small_product">
        <router-link :to="{path:item.path}">
          <img :src="item.ImgSrc" alt="item.name"/>
          <h6>{{item.describe}}</h6>
          <span>￥{{item.min}}-{{item.max}}</span>
      </router-link>
      </li>
    </ul>
  </div>
  <div class="middle_product">
    <ul>
      <li v-for="item in Info.middle_product">
        <router-link :to="{path:item.path}">
        <div>
          <h5>{{item.title}}</h5>
          <p>{{item.name}}</p>
          <strong>{{item.price}}元起</strong>
          <span>查看促销</span>
        </div>
        <img :src="item.ImgSrc" alt="item.name"/>
      </router-link>
      </li>
    </ul>
  </div>
  <div class="brand">
    <ul>
      <li v-for="item in Info.brand"><img :src="item.imgSrc" alt="item.name"/><p>{{item.name}}</p></li>
    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        Info:{
          type:Object,
          default:{}
        }
      },
      data(){
      return{

      }
    }
    }
</script>


<style scoped>
.big_product{
  float: left;
  width: 210px;
  height: 460px;
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
  margin-bottom: 14px;
  font-family: "wei_black";
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
    height: 230px;
    float: left;
    padding: 0 14px;
    box-sizing: border-box;
    border: 1px solid #ededed;
    border-left: none;
    border-top: none;
  }
  .small_product h6,.small_product span{
    font-family: "Arial",sans-serif;
    font-size: 12px;
    font-weight: bolder;
  }
.small_product h6{
  height: 26px;
  color: #4a3d3b;
}
  .small_product span{
    margin-top: 10px;
    color: #f12200;
  }
.small_product {
  text-align: left;
}

  .middle_product{
    background: #f5f5f5;
    float: left;
    width: 300px;
    height: 460px;
    color: #000000;
  }
  .middle_product li:first-child{
    background: #fff9f9;
  }
  .middle_product li{
    float: left;
    width: 100%;
    height: 230px;
    text-align: left;
    padding: 34px 16px;
    box-sizing: border-box;
  }
  .middle_product h5{
    font-family: "siyuan_black";
    font-weight: bold;
    font-size: 19px;
    color: #8b8a8a;
    margin-bottom: 25px;
  }
  .middle_product p{
    font-size: 18px;
    font-family: "wei_black";
    color: #482445;
  }
  .middle_product strong{
    font-size: 22px;
    color: #cb4426;
    font-family: "wei_black";
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
    height: 460px;

  }
  .brand li{
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    height: 115px;
  }
</style>
