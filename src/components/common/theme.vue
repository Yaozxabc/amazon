<template>
<div class="productTheme">
  <div class="theme_hd clearfix">
    <h3>
      <i :class="['iconfont','icon-'+themeInfo.header.icon]"></i>
      <span>{{themeInfo.header.title}}</span>
      <ul>
        <li v-for="item in themeInfo.header.list"><a :href="item.href">{{item.name}}</a></li>
      </ul>
    </h3>
  </div>
  <div class="theme_content">
    <ul class="first_row">
      <li  v-for="item in themeInfo.content.firstRow.Info">
        <div :class="['brand_info',item.color]">
          <p class="brand_name">{{item.title}}</p>
          <h4 >{{item.label}}</h4>
          <a href="javascript:" class="more">查看更多</a>
        </div>
        <div class="brand_show">
          <img :src="item.src" alt="item.name"/>
  </div>
      </li>
      <li :class="['lastLi',themeInfo.content.firstRow.lastLi.color]" >
        <div>
        <h3>搜索热词</h3>
        <ul class="searchlist">
          <li v-for="name in themeInfo.content.firstRow.lastLi.list"><a href="javascript:">{{name}}</a></li>
        </ul>
        </div>
      </li>
    </ul>
    <ul class="second_row">
      <li  v-for="item in themeInfo.content.secondRow.Info">
        <div :class="['brand_info',item.color]">
          <p class="brand_name">{{item.title}}</p>
          <h4 >{{item.label}}</h4>
          <a href="javascript:" class="more">查看更多</a>
        </div>
        <div class="brand_show">
          <img :src="item.src" alt="item.name"/>
  </div>
      </li>
      <li :class="['lastLi',themeInfo.content.secondRow.lastLi.color]" >
        <div>
        <h3>搜索热词</h3>
        <ul class="searchlist">
          <li v-for="name in themeInfo.content.secondRow.lastLi.list"><a href="javascript:">{{name}}</a></li>
        </ul>
        </div>
      </li>
    </ul>
  </div>

</div>
</template>

<script type="text/ecmascript-6">

    export default{
      props:{
       themeInfo:{
          type:Object,
          default:{}
        }
      },
        data(){
            return {}
        }
    }
</script>


<style scoped>
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
