<template>
<div class="secondKillWarp">
<h3>时时z秒杀</h3>
  <ul class="loading_hd">
    <li v-for="(item,index) in 3" :class="{active:current===index}" @click="tabShow(index)"><a href="javascript:">正在秒杀</a></li>
  </ul>
  <ul class="loading_list">
    <li v-for="product in loading_list">
      <div class="productInfo" >
        <a href="javascript:"><img :src="product.imgSrc" alt="product.name"/></a>
        <p class="price">￥{{product.min}}—￥{{product.max}}</p>
        <p class="progress"></p>
        <p class="overtime">剩余{{product.overtime}}</p>
        <a href="javascript:" class="name"><span>{{product.text}}</span></a>
        <p><span class="count">{{product.count}}</span></p>
        <div class="svg_star"></div>
      </div>
      <button class="toCar">查看优惠</button>
    </li>
  </ul>
  <button class="next">&gt</button>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              nowIndex:0,
              current:0,
              loading_list:[
                {name:"红酒",min:"38.00",max:"999.00",overtime:"240000",text:"[热卖精品，金奖aoc，下单送精品啤酒杯]",count:23,star:5,imgSrc:require("../../assets/images/seconds/01.jpg")},
                {name:"钙片",min:"18.00",max:"789.00",overtime:"360000",text:"[热卖精品，补充维生素]",count:18,star:5,imgSrc:require("../../assets/images/seconds/02.jpg")},
                {name:"kindle",min:"88.00",max:"849.00",overtime:"580000",text:"[热卖精品，铜奖aoc，阅读精品]",count:72,star:5,imgSrc:require("../../assets/images/seconds/03.jpg")},
                {name:"童靴",min:"67.00",max:"759.00",overtime:"340000",text:"[超级热卖，走儿童喜欢的路]",count:41,star:5,imgSrc:require("../../assets/images/seconds/04.jpg")}

              ]
            }
        },
    methods:{
      tabShow(index){
        this.current=index;
      }
    }
    }
</script>


<style>
  .secondKillWarp{margin-top:20px;padding-top: 36px;border-top: 1px solid #cccccc}
  .secondKillWarp h3{font-size: 26px;font-weight: bold;text-align: left}
  .loading_hd{}
  .loading_hd li{float: left;width: 68px;margin-left: 26px;}
  .loading_hd a{font-size: 15px;font-weight: bold;color: black}
  .loading_hd .active{border-bottom: 2px solid orange}
  .loading_list{margin-top: 84px}
  .productInfo{  width: 213px;  height: 380px; }
  .loading_list li{float: left;width: 212px;margin-left: 13px;}
  .loading_list a.hot{}
  .loading_list img{margin: 0 auto}
  .price{font-size: 20px;}
  .progress{}
  .overtime{font-size: 14px;margin: 14px 0}
  .name{color:#0066c0;font-size: 14px;width: 100%;height: 30px;overflow: hidden;display: block}
  .svg_star{width: 80px;hight:17px;}
  .count{font-size: 16px;color: red}
  .toCar{margin-top:14px;width: 100%;hight:23px;line-height: 23px;background-image: linear-gradient(#f6dc9a,#f0c455)}
  .next{}
</style>
