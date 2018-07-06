<template>
<div class="productlist">
  <nav class="clearfix">
    <ul>
      <li v-for="item in navlist"><a href="javascript:">{{item.name}}</a></li>
    </ul>
  </nav>
  <el-container>
    <el-col :span="4">
      <productScreen></productScreen>
    </el-col>
    <el-col :span="20">products</el-col>
  </el-container>

</div>
</template>

<script type="text/ecmascript-6">
  import productScreen from '@/components/common/base/productScreen'
    export default{
        data(){
            return {
              navlist:[
                {id:"001",name:"小家电",value:""},
                {id:"002",name:"新品排行榜",value:""},
                {id:"003",name:"厨房家电",value:""},
                {id:"004",name:"居家电器",value:""},
                {id:"005",name:"个人护理",value:""},
                {id:"006",name:"空气净化器",value:""},
                {id:"007",name:"剃须刀",value:""},
                {id:"008",name:"电风扇",value:""},
                {id:"009",name:"电风机",value:""},
                {id:"010",name:"电饭煲",value:""},
                {id:"011",name:"电磁炉",value:""},
                {id:"012",name:"咖啡机",value:""},
                {id:"013",name:"电压力锅",value:""},
                {id:"014",name:"豆浆机",value:""},
                {id:"015",name:"榨汁机",value:""},
                {id:"016",name:"电烤箱",value:""},
                {id:"017",name:"吸尘器",value:""},
                {id:"018",name:"加湿器",value:""},
                {id:"019",name:"取暖器",value:""}
              ]
            }
        },
  components:{
    productScreen
  }
    }
</script>


<style scoped>
  .productlist nav{
    display: table;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
  }
.productlist nav li{
  float: left;
  height: 28px;
  line-height: 28px;
  margin-left: 20px;
}
  .productlist nav  a{
    font-size: 10px;
    color: #595959;
  }
</style>
