<template>
<div class="secondKillWarp">
<h3>时时z秒杀</h3>
  <ul class="loading_hd">
    <li class="active"><a href="#">正在秒杀</a></li>
    <li><a href="#">正在秒杀</a></li>
    <li><a href="#">正在秒杀</a></li>
  </ul>
  <ul class="loading_list">
    <li>
      <div class="productInfo" >
      <a href="javascript:"><img src="../../assets/images/seconds/01.jpg" alt=""/></a>
      <p class="price">￥38.00—￥999.00</p>
      <p class="progress"></p>
      <p class="overtime">剩余3天26小时50分26秒</p>
      <a href="javascript:" class="name"><span>[热卖精品，金奖aoc，下单送精品啤酒杯]</span></a>
      <span class="count">23</span>
      <div class="svg_star"></div>
      </div>
      <button class="toCar">查看优惠</button>
    </li>
    <li>
      <div class="productInfo" >
      <a href="javascript:"><img src="../../assets/images/seconds/02.jpg" alt=""/></a>
      <p class="price">￥38.00—￥999.00</p>
      <p class="progress"></p>
      <p class="overtime">剩余3天26小时50分26秒</p>
      <a href="javascript:" class="name"><span>[热卖精品，金奖aoc，下单送精品啤酒杯]</span></a>
      <span class="count">23</span>
      <div class="svg_star"></div>
      </div>
      <button class="toCar">查看优惠</button>
    </li>
    <li>
      <div class="productInfo" >
      <a href="javascript:"><img src="../../assets/images/seconds/03.jpg" alt=""/></a>
      <p class="price">￥38.00—￥999.00</p>
      <p class="progress"></p>
      <p class="overtime">剩余3天26小时50分26秒</p>
      <a href="javascript:" class="name"><span>[热卖精品，金奖aoc，下单送精品啤酒杯]</span></a>
      <span class="count">23</span>
      <div class="svg_star"></div>
      </div>
      <button class="toCar">查看优惠</button>
    </li>
    <li>
      <div class="productInfo" >
      <a href="javascript:"><img src="../../assets/images/seconds/04.jpg" alt=""/></a>
      <p class="price">￥38.00—￥999.00</p>
      <p class="progress"></p>
      <p class="overtime">剩余3天26小时50分26秒</p>
      <a href="javascript:" class="name"><span>[热卖精品，金奖aoc，下单送精品啤酒杯]</span></a>
      <span class="count">23</span>
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
            return {}
        }
    }
</script>


<style>
  .secondKillWarp{margin-top:20px;padding-top: 36px;border-top: 1px solid #cccccc}
  .secondKillWarp h3{font-size: 26px;font-weight: bold;text-align: left}
  .loading_hd{}
  .loading_hd li{float: left;width: 68px;margin-left: 26px;}
  .loading_hd a{font-size: 15px;font-weight: bold}
  .loading_hd .active{border-bottom: 2px solid orange}
  .loading_list{margin-top: 84px}
  .productInfo{  width: 213px;  height: 380px; }
  .loading_list li{float: left;width: 212px;margin-left: 13px;}
  .loading_list a.hot{}
  .loading_list img{margin: 0 auto}
  .price{font-size: 20px;}
  .progress{}
  .overtime{font-size: 14px;margin: 14px 0}
  .name{color:#0066c0;font-size: 14px;}
  .svg_star{width: 80px;hight:17px;}
  .count{font-size: 16px;}
  .toCar{margin-top:14px;width: 100%;hight:23px;line-height: 23px;background-image: linear-gradient(#f6dc9a,#f0c455)}
  .next{}
</style>
