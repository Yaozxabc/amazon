<template>
  <div id="app">
   <el-header>
     <div class="bananer_top">
       <a href="javascript:">六一儿童节促销礼品,下单立即减100元</a></div>
     <div class="search_top clearfix">
       <div class="logo">
         <router-link :to="{path:'/'}" class="shop_logo"><h1>amazon.cn</h1></router-link>
         <a href="javascript:" class="user_test"><span class="">免费试享prime</span></a>
         </div>
       <div class="search">
         <div class="search_warp">
         <select name="" id="itemlist" class="itemlist">
           <option value="全部商品" selected>全部商品</option>
         </select>
         <input type="text"/>
         <a href="javascript:"><i class="iconfont icon-search"></i></a>
       </div>
       </div>
       <div>
         <div class="search_bananer"></div>
       </div>
     </div>
     <nav class="clearfix">
      <div class="showAll" >
         <span>浏览</span><br/>
         <router-link :to="{path:'/'}" tag="strong">全部商品分类</router-link>
      </div>
       <ul class="offentlist">
         <li><router-link :to="{path:'/loginPage'}" tag="a">我的亚马逊</router-link></li>
         <li><router-link :to="{path:'/'}" tag="a">首页</router-link></li>
         <li><a href="javascript:">礼品卡</a></li>
         <li><a href="javascript:">我要开店</a></li>
         <li><a href="javascript:">海外购</a></li>
         <li><a href="javascript:">帮助</a></li>
         <li><a href="javascript:">in English</a></li>
       </ul>
       <ul class="userSign">
         <li>
           <strong class="username" v-if="username!==''">{{username}}</strong>
           <a href="javascript:" @click="showInfo('isShow0')" v-if="username===''">
             <span >你好,请登录</span><br/>
             <strong>我的账户</strong>
           </a>
         </li>
         <li>
           <strong class="username"  v-if="username!==''">|</strong>
           <strong class="username"  v-if="username!==''" @click="quit">退出</strong>
           <a href="javascript:" @click="showInfo('isShow1')" v-if="username===''">
             <span>免费试享</span><br/>
             <strong>primse</strong>
           </a>
         </li>
         <li>
           <a href="javascript:" @click="showInfo('isShow2')" class="shop_car">
             <i class="iconfont icon-shop_car"></i><strong>我的购物车</strong>
           </a>
         </li>
         <li>
           <a href="javascriot:" class="user_tips" >
             <strong>心愿单</strong>
           </a>
         </li>
       </ul>

     </nav>
   </el-header>
    <el-main  class="clearfix main">
     <router-view></router-view>
    </el-main>
    <el-footer class="clearfix footer">
      <div class="warpa clearfix">
      <div class="about">
        <h4>了解我们</h4>
      <ul >
        <li><a href="javascript:">人才招聘</a></li>
        <li><a href="javascript:">关于我们</a></li>
        <li><a href="javascript:">新闻中心</a></li>
        <li><a href="javascript:">公益社区</a></li>
        <li><a href="javascript:">移动客户端</a></li>
        <li><a href="javascript:">风险监测</a></li>
      </ul>
      </div>
      <div class="cooperation">
        <h4>合作信息</h4>
      <ul>
        <li><a href="javascript:">全球开店</a></li>
        <li><a href="javascript:">我要开店</a></li>
        <li><a href="javascript:">加入联盟</a></li>
        <li><a href="javascript:">我要推广</a></li>
        <li><a href="javascript:">合作伙伴</a></li>
      </ul>
      </div>
      <div class="method_pay">
        <h4>支付方式</h4>
      <ul >
        <li><a href="javascript:">亚马逊支付</a></li>
        <li><a href="javascript:">亚马逊账户</a></li>
        <li><a href="javascript:">支付宝与微信支付</a></li>
        <li><a href="javascript:">重要安全提示</a></li>
      </ul>
      </div>
      <div class="help">
        <h4>帮助中心好购物指南</h4>
      <ul >
        <li><a href="javascript:">订单查询</a></li>
        <li><a href="javascript:">配送费收取标准</a></li>
        <li><a href="javascript:">在线自主退换货</a></li>
        <li><a href="javascript:">退换货及退款</a></li>
        <li><a href="javascript:">亚马逊助手</a></li>
        <li><a href="javascript:">帮助中心</a></li>
      </ul>
      </div>
      </div>
      <div class="fooderEnd clearfix">
      <p><span class="shop_logo"></span><b>旗下公司</b></p>
        <p>
          <span>美国</span>|
          <span>加拿大</span>|
          <span>巴西</span>|
          <span>墨西哥</span>|
          <span>英国地区</span>|
          <span>德国地区</span>|
          <span>法国地区</span>|
          <span>日本</span>|
          <span>印度</span>|
          <span>荷兰</span>|
          <span>澳大利亚</span>|
          <span>亚马逊网站</span>|
          <span>亚马逊物流</span>|
        </p>
        <p>使用条件|隐私说明|基于兴趣的广告</p>
        <p>京公安备，增值业务121313213</p>
        <p>互联网药品信息服务资格证书 京-非经营性-2017-0034</p>
        <p>| 出版物经营许可证新出发京批字第直0852号 |</p>
      </div>
    </el-footer>
    <Popup :isShow="isShow0" @on-close="hiddenInfo('isShow0')">
      <login @has-log="onsuccess" @on-close="hiddenInfo('isShow0')"></login>
    </Popup>
    <Popup :isShow="isShow1" @on-close="hiddenInfo('isShow1')">
      <div class="WarnText" >hello 欢迎免费试享</div>
    </Popup>
    <Popup :isShow="isShow2" @on-close="hiddenInfo('isShow2')">
      <div class="WarnText" >hello 我的购物车</div>
    </Popup>
    </div>
</template>

<script>
  import bus from "@/assets/scripts/eventbus.js"
  import Popup from '@/components/common/Popup'
  import login from '@/components/common/login'
  import index from '@/components/pages/index'

export default {
  name: 'App',
  data(){
    return {
      username:"",
      isShow0: false,
      isShow1: false,
      isShow2: false
    }
  },
  components:{
   index,login,Popup
  }
  ,
  methods:{

    showInfo(attr){
      this[attr] = true;
    },
    hiddenInfo(attr){
      this[attr] = false;
    },
    onsuccess(data){
      this.username=data.username;
      this.isShow0=false;
    },
    quit(){
      return confirm("你确认现在退出么？") ? this.username="": false;
    }
  },
  created(){
    bus.$on('getName',(data)=>{
      this.username=data.username;
      $router.push('')
    })
  }
  }
</script>

<style scoped>
  .el-header{
    box-sizing: border-box;
  }
#app {
  min-width: 1180px;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .bananer_top{
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #000000;
    background: #ffac03;
    font-weight: bold;
  }
  .logo{
    position: relative;
    float: left;
    width: 190px;
    height: 60px;
  }
  .shop_logo{
    position: absolute;
    left: 30px;
    top: 5px;
    width: 90px;
    height: 40px;
    text-indent: -9999px;
    background: url("./assets/images/logo.png") no-repeat 0 0;
  }
  .user_test{
    position: absolute;
    font-size: 14px;
    color: #48a3c6;
    bottom: 2px;
    right: 5px;
  }
  .search_top{
    overflow: visible;
  }
  .search{
    padding: 10px 0 10px 26px;
    float: left;
    line-height: 60px;
    box-sizing: border-box;
  }
  .search_warp{
   width: auto;
    height: 35px;
    white-space: nowrap;
  }
  .itemlist{
    width: 83px;
    height: 35px;
    text-align: center;
    float: left;
    font-size: 15px;
  }
  .itemlist option{
    font-size: 15px;
  }
  .search input{
    width: auto;
    max-width: 619px;
    min-width: 400px;
    height: 35px;
    box-sizing: border-box;
    float: left;
  }
  .search a{
    float: left;
    width: 42px;
    height: 35px;
    line-height: 35px;
    display: block;
    background-image: linear-gradient( #72787f 0,#515961 100%);
  }
  .icon-search{
    color: #ffffff;
    font-size: 20px;
  }
  .search_bananer{
    margin-top: 8px;
    float: right;
    max-width: 308px;
    min-width: 200px;
    height: 38px;
    background: #4dd7e4;
  }
  nav {
    position:relative;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(#fafafa 0,#efefef 100%);
  }
  nav span{
    font-size: 12px;
    color: #000000;
  }
  nav strong{
    font-size: 16px;
    font-weight: bold;
    color: #000000;
  }
  .showAll,.userSign,.offentlist{
    float: left;
    position: relative;
  }
  .showAll{
    margin-left: 27px;
  }
  .offentlist{
    margin-left:35px;
    height: 100%;

  }
  .offentlist li{
    float: left;
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
  }
  .offentlist a{
    font-size: 14px;
    color: #0055aa;
  }
  .userSign{
    float: right;
    height: 100%;
  }
  .userSign li{
    float: left;
    height: 40px;
    margin-right: 30px;
    vertical-align: bottom;
  }
  .userSign a{
    position: relative;
  }
  .username{
    height: 40px;
    line-height: 40px;
    color: #3a8ee6;
    cursor: pointer;
  }
 .showAll:after, .userSign a:after{
    content: "";
    position: absolute;
    bottom: 10%;
    left:105% ;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color:  #333333 transparent transparent transparent;
  }
  .shop_car,.user_tips{
    height: 100%;
    line-height: 40px;
  }
  .icon-shop_car{
    font-size: 30px;
    color: #000000;
  }
.main{
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  margin: 0 auto;
  min-height: 400px;
}

  .el-footer{

    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
  }
  .about,.cooperation,.help,.method_pay{
    float: left;
    width: 180px;
  }
  .help{
    width: 160px;
    padding-right: 0;
  }
  .warpa{
    width: 700px;
    position: relative;
    margin: 0 auto;

  }
.about h4,.cooperation h4,.help h4,.method_pay h4{
  text-align: left;
  font-size: 17px;
}
.about li,.cooperation li,.help li,.method_pay li{
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
}
  .about a,.cooperation a,.help a,.method_pay a{
    color: #004b91;
  }
  .fooderEnd{
    position: relative;
  }
  .fooderEnd .shop_logo{
    float: none;
    position: static;
    display: inline-block;
  }
  .fooderEnd p{
   color: #004b91;
    margin-top: 10px;
  }

  .cover{
    width: 100%;
    border: 1px solid #bdbdbd;
    overflow: hidden;
    border-radius: 5px;
  }
.WarnText{
  text-align: center;
  position: absolute;
  width: 100%;
  top:20px;
  font-size: 24px;
  color: red;
}

</style>
