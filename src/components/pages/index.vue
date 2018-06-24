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
         <section class="clearfix" >
           <hotProduct></hotProduct>
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
  import hotProduct from '@/components/common/hotProduct'
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
    BroadList,recommand,leftNav,secondKill,theme,sider,hotProduct
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
</style>
