<template>
  <div class="SelInfo">
    <h3 class="product_hd">Garmin 佳明 vivoactive3 象牙白 光电心率GPS双星跑步骑行游泳运动触屏腕表 健康监测智能通知在线支付时尚情侣手表(表盘尺寸1.2‘’)</h3>
    <p class="product_name">GARMIN 佳明</p>
    <p class="product_comment"><span><img src="" alt=""/></span><span><a href="javascript:"> 6条商品评论</a></span>|<span class="product_share">分享</span></p>
    <div class="product_price">
      售价：<span>￥{{price}}</span><i>免运费</i><a href="javascript:">详情</a>
    </div>
    <p class="product_price_info"><span>全新品2</span>售价从 <span>1980</span> 起</p>
    <p class="product_color"><span>颜色：</span><em>{{color}}</em></p>
    <div class="product_radio">
      <radioSel :selections="productList"  @on-change="getProduct"></radioSel>
    </div>
    <div class="product_address">
      <span>配送至</span>
      <div>
        <selection :selection="addresslist" @on-change="getAddress"></selection>
      </div>
      <span>现在有货</span>
    </div>
    <div class="product_getTime">
      <span>送达时间：</span>
      <em>7月2日到达</em>
    </div>
    <p class="product_transportMethods">销售配送：<span>由亚马逊直接销售发货</span></p>
    <p class="product_promise">退换承诺：<span>支持<strong> 7天无理由退货</strong></span></p>
    <ul class="product_fun">
      <li>4008191899</li>
      <li>127-204mm（适合腕长）</li>
      <li>双星定位</li>
      <li>运动：跑步 骑行 游泳 高尔夫 滑雪 划船 有氧运动 瑜伽</li>
      <li>计步 楼层攀爬 久坐提醒</li>
      <li>来电提醒 智能通知</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import radioSel from "@/components/common/base/radioSel";
  import selection from '@/components/common/base/selection';
    export default{
        data(){
            return {
              color:"象牙白",
              price:"2,180",
              address:{},
              productSel:{},
              productList:[
                {id:"01",name:"HBH10C/3L",value:"2,180",color:"象牙白"},
                {id:"02",name:"HCH10C/5L",value:"1,980",color:"情人粉"},
                {id:"03",name:"HBH08C/3L",value:"2,150",color:"天空蓝"}
              ],
              addresslist:[
                {id:"01",name:"广州市天河区同福路"},
                {id:"02",name:"汕头市金平区粤海路"},
                {id:"03",name:"北京市海淀区镇阳路"},
                {id:"04",name:"上海市明湖区豆腐路"},
                {id:"05",name:"杭州市西湖区科技路"}
              ]
            }
        },
  methods:{
    getProduct(data){
      this.productSel=data;
      this.color=data.color;
      this.price=data.value;
      this.postInfo()
    },
    getAddress(data){
      this.address=data;
      this.postInfo()
    },
    postInfo(){
      let parms={
        address:this.address,
        product:this.productSel
      }
    this.$emit("on-change",parms)
    }
  },
  components:{
    radioSel,selection
  }
    }
</script>


<style scoped>
  .SelInfo{text-align: left;font-size: 14px;color: #555555;}
  .product_hd{width: 440px;height: 84px;font-size: 18px;line-height: 24px;color: #111111}
  .product_name{color: #0066cb;font-size: 14px;line-height: 18px;}
  .product_comment{}
  .product_comment span{color: #0066cb;font-size: 14px;margin:0 8px;}
  .product_comment .product_share{color: #111111}
  .product_comment img{}
  .product_comment a{}
  .product_price{height: 14px;margin: 20px 0;font-size: 14px;}
  .product_price span{font-size: 18px;font-family: siyuan_black;color: #b12704;margin:0 8px;}
  .product_price i{font-weight: bold;color: #000000;font-style: normal}
  .product_price a{color:#0066cb;font-weight: bold }
  .product_price_info{font-size: 14px;}
  .product_price_info span:nth-of-type(1){color: #0066cb;margin-right: 8px;}
  .product_price_info span:nth-of-type(2){color: #b12704;margin: 0 8px;}
  .product_color{margin: 10px 0; }
  .product_color span{color: #888888;}
  .product_color em{color: #000000;font-weight: bold;}
  .product_radio{width: 450px;height: 50px;}
  .product_address{margin: 14px 0;}
  .product_address div{display: inline-block;}
  .product_address span{margin: 0 8px;}
  .product_getTime{width: 428px;height: 60px;margin-bottom: 14px;}
  .product_getTime span{}
  .product_getTime em{}
  .product_transportMethods {margin-bottom: 14px;}
  .product_transportMethods span{color: #111111;}
  .product_promise{margin-bottom: 14px;}
  .product_promise span{color: #111111;}
  .product_promise strong{font-weight: bold;}
  .product_fun{}
  .product_fun li{list-style: disc;margin-bottom:8px;color: #000000;}
</style>
