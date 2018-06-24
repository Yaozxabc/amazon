<template>
<div class="productTheme">
  <div class="theme_hd clearfix">
    <h3>
      <i class="iconfont icon-book"></i>
      <span>海外购</span>
      <ul>
        <li>奶粉 </li>
        <li>美妆 </li>
        <li>箱包 </li>
        <li>热门品牌 </li>
      </ul>
    </h3>
  </div>
  <div class="theme_content">
    <ul class="first_row">
      <li>
        <div class="brand_info bg1">
          <p class="brand_name">新百伦</p>
          <h4 >热销产品</h4>
          <a href="javascript:" class="more">查看更多</a>
        </div>
        <div class="brand_show">
          <img src="../../assets/images/theme/haiwaigou/01.jpg" alt=""/>
  </div>
      </li>
      <li>
        <div class="brand_info bg2">
          <p class="brand_name"></p>
          <h4 >热销产品</h4>
          <a href="javascript:" class="more">查看更多</a>
        </div>
        <div class="brand_show">
          <img src="../../assets/images/theme/haiwaigou/02.jpg" alt=""/>
        </div>

      </li>
      <li class="lastLi bg3">
        <div>
        <h3>搜索热词</h3>
        <ul class="searchlist">
          <li><a href="javascript:">雅诗兰黛</a></li>
          <li><a href="javascript:">kinddle</a></li>
          <li><a href="javascript:">NIKE</a></li>
          <li><a href="javascript:">Addris</a></li>
          <li><a href="javascript:">exo</a></li>
          <li><a href="javascript:">Anta</a></li>
        </ul>
        </div>
      </li>
    </ul>
    <ul class="second_row">
      <li>
        <div class="brand_info bg4">
          <p class="brand_name">新百伦</p>
          <h4 >热销产品</h4>
          <a href="javascript:" class="more">查看更多</a>
        </div>
        <div class="brand_show">
          <img src="../../assets/images/theme/haiwaigou/03.jpg" alt=""/>
        </div>
      </li>
      <li>
        <div class="brand_info bg5">
          <p class="brand_name"></p>
          <h4 >热销产品</h4>
          <a href="javascript:" class="more">查看更多</a>
        </div>
        <div class="brand_show">
          <img src="../../assets/images/theme/haiwaigou/04.jpg" alt=""/>
        </div>

      </li>
      <li class="lastLi bg6">
        <div>
          <h3>搜索热词</h3>
          <ul class="searchlist">
            <li><a href="javascript:">雅诗兰黛</a></li>
            <li><a href="javascript:">kinddle</a></li>
            <li><a href="javascript:">NIKE</a></li>
            <li><a href="javascript:">Addris</a></li>
            <li><a href="javascript:">exo</a></li>
            <li><a href="javascript:">Anta</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

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
  .productTheme{width: 1018px;padding-top: 84px;}
  .theme_hd{height: 40px;}
  .theme_hd h3{height: 32px;line-height:32px;margin-bottom: 8px;}
  .theme_hd span{float: left;font-size: 20px;font-weight: bold;margin-right: 15px;font-family:"黑体";}
  .theme_hd i{float:left;font-size: 32px;width: 32px;height: 32px;margin: 0 35px 0 15px;}
  .theme_hd ul{float:left;margin: 4px;border-left: 1px solid #000000;box-sizing: border-box}
  .theme_hd li{float: left;width: 60px;height: 24px;line-height: 24px;font-size: 12px;}
  .theme_content{}
  .first_row {overflow: hidden}
  .first_row li,.second_row li{  float: left;width: 400px;  display: flex;  }
  .second_row{overflow: hidden}
  .brand_info{width: 200px;height:200px;flex: 1; padding: 35px 0;box-sizing: border-box}
  .brand_name{font-family:"siyuan_black";height: 24px;line-height: 24px;font-size: 24px;margin-bottom: 30px;font-weight: bold}
  .first_row h4 , .second_row h4{  font-family:"siyuan_black";height: 27px;line-height: 27px;font-size: 27px;margin-bottom: 40px; font-weight: bold }
  .more{font-size: 14px;color: #767676}
  .brand_show{width: 200px;height:200px;flex: 1;line-height: 200px; display: table-cell;  vertical-align:middle;}
  .brand_show img{vertical-align:middle;}
  .first_row .lastLi,.second_row .lastLi{width: 200px;height: 200px;padding: 35px 0;box-sizing: border-box}
  .lastLi h3{height: 23px;line-height: 23px;display: block; width: 200px;font-family: "siyuan_black";font-weight: bold}
  .lastLi .searchlist{  margin-top: 25px;  }
  .lastLi li{  width: 63px;  height: 30px;  float: left;  margin-left: 20px;  }
  .lastLi li a{  color: #767676;  font-size: 14px;}
  .bg1{ background: #d9e9e8;}
  .bg2{ background: #e9efef;}
  .bg3{ background: #edecf2;}
  .bg4{ background: #e9efef;}
  .bg5{ background: #cce3eb;}
  .bg6{ background: #deeced;}
</style>
