<template>
  <div class="hotProduct">
    <ul>
      <li v-for="item in hotProduct">
        <h2>  <router-link :to="{path:'/productlist'}">{{item.activeName}}</router-link>{{item.fixName}}</h2>
        <div class="productInfo_warp clearfix">
          <div class="productInfo">
            <h4>限时热门抢购</h4>
            <p class="price"><a href="javascript:">￥<em>{{item.price}}</em> </a></p>
            <p class="overtime">距结束{{item.overtime}}</p>
            <a href="javascript:" class="allProduct"><span></span>全部秒杀产品</a>
          </div>
          <div class="product_img">
            <router-link :to="{path:'/productlist'}">
              <img :src="item.imgSrc" alt=""/>
            </router-link>
          </div>

        </div>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              hotProduct:[
                {activeName:"今日",fixName:"镇定之宝",price:"99.00",overtime:"01:02:36",imgSrc:require("../../assets/images/hotImg/hotImg_01.jpg")},
                {activeName:"海外购",fixName:"直邮",price:"246.00",overtime:"11:02:36",imgSrc:require("../../assets/images/hotImg/hotImg_02.jpg")},
                {activeName:"进口",fixName:"品牌大街",price:"76.00",overtime:"17:02:36",imgSrc:require("../../assets/images/hotImg/hotImg_03.jpg")}
              ]
            }
        }
    }
</script>


<style scoped>
  .hotProduct{
    max-width: 760px;
    float: right;
    margin-right: 10px;
  }
  .hotProduct li {
    float: left;
    max-width: 254px;
    min-width: 244px;
    height: 158px;
    box-sizing: border-box;
    padding: 0 14px;
    border-right: 1px solid #e0e0e0;
    overflow: hidden;
  }
  .hotProduct h2{
    text-align: left;
    height: 22px;
    line-height: 22px;
    font-family: Arial;
    font-size: 20px;
    color: orange;
    font-weight: bold;
  }
  .hotProduct h2 a{
    color: #000000;
  }
  .hotProduct h2 a:hover{
    color: orange;
  }
  .productInfo_warp{
    overflow: hidden;
    box-sizing:border-box;
    padding: 20px 0px 14px 0;
  }
  .hotProduct .productInfo{
    float: left;
    width: 100px;
    height: 134px;
  }
  .hotProduct h4 {
    text-align: left;
    font-size: 14px;
    color: #b12704;
  }
  .hotProduct .price{
    text-align: left;
  }
  .hotProduct .price a{
    color: #b12704;
    font-size: 12px;
  }
  .hotProduct .price em{
    font-size: 22px;
    font-weight: bold;
  }
  .hotProduct .overtime{
    color: #cccccc;
    font-size: 14px;
    text-align: left;
    margin: 0 0 30px 0;;
  }
  .hotProduct .allProduct{
    color: #999999;
    font-size: 13px;
  }
  .product_img{
    max-width: 120px;
    height: 110px;
    float: left;
    text-align: center;
  }
  .product_img img{
    max-width: 100%;
    max-height: 110px;
  }
</style>
