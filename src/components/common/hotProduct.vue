<template>
  <div class="hotProduct">
    <ul>
      <li>
        <h2> <a href="javascript:">今日</a>镇店之宝</h2>
        <div class="productInfo_warp">
          <div >
            <h4>限时热门抢购</h4>
            <p class="price"><a href="javascript:">￥<em>99.00</em> </a></p>
            <p class="overtime">距结束还有00:36:38</p>
            <p class="allProduct"><span></span>全部秒杀产品</p>
          </div>
          <a class="product_img" href="javascript:">
            <img src="../../assets/images/hotImg/hotImg_01.jpg" alt=""/>
          </a>
        </div>
      </li>
      <li>
        <h2> <a href="javascript:">海外购</a>直邮</h2>
        <div class="productInfo_warp">
          <div class="productInfo">
            <h4>限时热门抢购</h4>
            <p class="price"><a href="javascript:">￥<em>305.08</em> </a></p>
            <p class="overtime">距结束还有00:36:38</p>
            <p class="allProduct"><span></span>全部秒杀产品</p>
          </div>
          <a class="product_img" href="javascript:">
            <img src="../../assets/images/hotImg/hotImg_02.jpg" alt=""/>
          </a>
        </div>
      </li>
      <li>
        <h2> <a href="javascript:">进口品牌街</a>大牌</h2>
        <div class="productInfo_warp">
          <div >
            <h4>限时热门抢购</h4>
            <p class="price"><a href="javascript:">￥<em>199.00</em> </a></p>
            <p class="overtime">距结束还有02:16:38</p>
            <p class="allProduct"><span></span>全部秒杀产品</p>
          </div>
          <a class="product_img" href="javascript:">
            <img src="../../assets/images/hotImg/hotImg_03.jpg" alt=""/>
          </a>
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
  .hotProduct{
    float: right;
    margin-right: 10px;
  }
  .hotProduct li {
    float: left;
    width: 287px;
    height: 158px;
    box-sizing: border-box;
    padding: 0 17px;
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
    display: flex;
    align-items: flex-start;
    box-sizing:border-box;
    padding: 20px 0px 14px 0;
  }
  .productInfo{
    flex: 1;
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
    font-size: 12px;
    text-align: left;

  }
  .hotProduct .allProduct{
    margin-top: 28px;
    color: #999999;
    font-size: 13px;
  }
  .product_img{
    width: 140px;
    text-align: center;
  }
  .product_img img{
    max-width: 160px;
    max-height: 134px;
  }
</style>
