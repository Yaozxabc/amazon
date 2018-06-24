<template>
  <div class="big_warp">
    <el-container>
        <el-col :span="4" class="leftsider">
          <leftNav :isShow="isShow" class="leftnav" :pathType="pathType"></leftNav>
        </el-col>
        <el-col :span="20">
          <BroadList :slides="ImgList" :inv="invtime"></BroadList>
        </el-col>
    </el-container>
    <el-container  class="content" >
      <el-row :gutter="2">
       <el-col :span="20">
         <section >
           <div class="hotProduct">
             <ul>
               <li>
                 <h2> <a href="javascript:">今日</a>镇店之宝</h2>
                 <div class="productInfo_warp">
                   <div >
                     <h4>限时热门抢购</h4>
                     <p class="price"><a href="javascript:">￥<em>99.00</em> </a></p>
                     <p class="overtime">距离活动结束还有00:36:38</p>
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
                     <p class="overtime">距离活动结束还有00:36:38</p>
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
                     <p class="overtime">距离活动结束还有02:16:38</p>
                     <p class="allProduct"><span></span>全部秒杀产品</p>
                   </div>
                   <a class="product_img" href="javascript:">
                     <img src="../../assets/images/hotImg/hotImg_03.jpg" alt=""/>
                   </a>
                 </div>
               </li>
             </ul>
           </div>
         </section>
         <section class="clearfix">
           <recommand></recommand>
         </section>
         <section class="clearfix">
           <secondKill></secondKill>
         </section>
         <section class="clearfix">
           <theme></theme>
         </section>
       </el-col>
       <el-col :span="4">
         <sider></sider>
       </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import BroadList from '@/components/common/Broadcast'
  import recommand from '@/components/common/recommand'
  import secondKill from '@/components/common/secondKill'
  import leftNav from '@/components/common/leftNav'
  import theme from '@/components/common/theme'
  import sider from '@/components/common/sider'

  export default{
      data(){
    return{
      pathType:"index",
      isShow:true,
      invtime:3000,
      ImgList: [
        {src: require('../../assets/images/broadlist/01.jpg'), alt: '沐浴书香', name: '沐浴书香'},
        {src: require('../../assets/images/broadlist/02.jpg'), alt: '精工手表', name: '精工手表'},
        {src: require('../../assets/images/broadlist/03.jpg'), alt: '踏青出行', name: '踏青出行'},
        {src: require('../../assets/images/broadlist/04.jpg'), alt: '辣妈萌宝', name: '辣妈萌宝'},
        {src: require('../../assets/images/broadlist/05.jpg'), alt: '时尚腕表', name: '时尚腕表'},
        {src: require('../../assets/images/broadlist/06.jpg'), alt: '精品超市', name: '精品超市'},
        {src: require('../../assets/images/broadlist/07.jpg'), alt: '品牌电脑', name: '品牌电脑'},
        {src: require('../../assets/images/broadlist/08.jpg'), alt: '敦煌礼品', name: '敦煌礼品'}
      ],
      hotProduct:[]
    }
  },
  components:{
    BroadList,recommand,leftNav,secondKill,theme,sider
  },
  methods:{
    showAll(){
      this.isShow=!this.isShow;
    }
  },
  mounted(){
//    console.log(this.$store)
  }
    }
</script>


<style>
  .leftsider{
    position: relative;
  }
  .leftnav{
    position: absolute;
    left: 0;
    top: 0;
  }
  .big_warp{
    overflow-y: hidden;
  }
  .content{
    margin-top: 20px;
    overflow-x: hidden
  }
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
    color: red;
  }
  .hotProduct .price{
    text-align: left;
  }
  .hotProduct .price a{

    color: red;
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
    color: #cccccc;
    font-size: 14px;
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
