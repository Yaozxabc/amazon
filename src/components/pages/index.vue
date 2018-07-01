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
      <el-row :gutter="20">
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
           <theme :themeInfo="themeInfo"></theme>
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
      hotProduct:[],
      themeInfo:{
        header:{
          icon:"book",
          title:"海外购",
          list:[
            {name:"奶粉",href:"javascript:"},
            {name:"美妆",href:"javascript:"},
            {name:"箱包",href:"javascript:"},
            {name:"热门品牌",href:"javascript:"}
          ],
        },
        content:{
          firstRow:{
            Info:[
              {color:"bg1",title:"大家电",label:"售价立减300",name:"kinddle",src:require("../../assets/images/theme/haiwaigou/01.jpg")},
              {color:"bg2",title:"电器数码",label:"销售冠军",name:"冰箱",src:require("../../assets/images/theme/haiwaigou/02.jpg")}
            ],
            lastLi:{
              color:"bg3",
              list:["耐克","champion","雅诗兰黛","kindle","卡西欧","nike","爱他美","飞利浦"]
            }
          },
          secondRow:{
            Info:[
              {color:"bg4",title:"宾格力",label:"热销商品",name:"耳机",src:require("../../assets/images/theme/haiwaigou/03.jpg")},
              {color:"bg5",title:"全球尖货",label:"发现好物",name:"手表",src:require("../../assets/images/theme/haiwaigou/04.jpg")}
            ],
            lastLi:{
              color:"bg6",
              list:["Comotomo","Graco","运动户外","玩具","卡西欧","阿玛尼AJ","爱他美","奶粉"]
            }
          }
        }
      }
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


<style scoped>
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
