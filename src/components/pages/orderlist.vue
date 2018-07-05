<template>
<div class="salelist">
  <form action="abc.php">
    <span>选择类型:</span>
    <div class="typeSel">
      <selection :selection="products" @on-change="ProductParms" ></selection>
    </div>
    <div class="typeSel">
      <span>开始日期</span>
      <datepicker :width="wd" @change="getStartDate"></datepicker>
    </div>
    <div class="typeSel">
      <span>结束日期</span>
      <datepicker :width="wd" @change="getEndDate"></datepicker>
    </div>
    <div class="typeSel">
      <span>搜索关键字：</span>
      <input type="text" id="mySearch" v-model.lazy="query"/>
    </div>

  </form>
  <table class="table_warp" border="1" width="100%">
    <tr class="table_title">
      <td colspan="6">
        购物清单
      </td>
    </tr>
    <tr class="thead">
      <td v-for="(head,index) in athead" :class="{active:head.active}" @click="changeHead(head,index)">{{head.name}} <i class="sj_bottom"></i></td>
    </tr>
    <tr v-for="product in abcArray">
      <td v-for="title in athead">{{product[title.name]}}</td>
    </tr>
  </table>
  <div class="pageGroup">
    <ul>
      <li class="pageNum" v-for="(item,index) in PageCountSum" @click="showPage(orderlist,index)" :class="{active:currentPage===index+1}">{{index+1}}</li>
    </ul>
  </div>

</div>
</template>

<script type="text/ecmascript-6">
  import datepicker from '@/components/common/datePick'
  import selection from "@/components/common/base/selection"
  import axios from 'axios'
    export default{
        data(){
      return {
        sj:"sj_bottom",
        wd:'150px',
        query:"",
        product:0,
        showProduct:[],
        products:[
          {name:"",value:-1},
          {name:"HBH10C/8L",value:0},
          {name:"HBH10C/2L",value:2},
          {name:"HBK30C/4L",value:1},
          {name:"HBK30C/3L",value:5},
          {name:"HBH10C/5L",value:1}
        ],
        abcArray:[ ],
        orderlist:[
          {编号:"001",型号:"HBH10C/8L",颜色:"象牙白",数量:20,评价:"5",价格:2150},
          {编号:"002",型号:"HBH10C/2L",颜色:"天空蓝",数量:10,评价:"4",价格:2215},
          {编号:"003",型号:"HBK30C/4L",颜色:"迷人绿",数量:15,评价:"3",价格:2205},
          {编号:"004",型号:"HBH10C/2L",颜色:"象牙白",数量:10,评价:"4",价格:1890},
          {编号:"005",型号:"HBK30C/3L",颜色:"情人粉",数量:15,评价:"3",价格:2205},
          {编号:"006",型号:"HBH10C/3L",颜色:"天空蓝",数量:10,评价:"4",价格:2215},
          {编号:"007",型号:"HBH10C/8L",颜色:"迷人绿",数量:20,评价:"5",价格:1985},
          {编号:"008",型号:"HBH10C/5L",颜色:"情人粉",数量:10,评价:"4",价格:2215},
          {编号:"009",型号:"HBK30C/3L",颜色:"象牙白",数量:15,评价:"3",价格:2205},
          {编号:"010",型号:"HBH10C/8L",颜色:"迷人绿",数量:10,评价:"4",价格:2215},
          {编号:"011",型号:"HBK30C/5L",颜色:"天空蓝",数量:15,评价:"3",价格:2205},
          {编号:"012",型号:"HBH10C/2L",颜色:"情人粉",数量:10,评价:"4",价格:2215},
          {编号:"013",型号:"HBK30C/8L",颜色:"象牙白",数量:15,评价:"3",价格:2205}
        ],
        athead:[
          {name:"编号",value:"001"},
          {name:"型号",value:"002"},
          {name:"颜色",value:"003"},
          {name:"数量",value:"004"},
          {name:"评价",value:"005"},
          {name:"价格",value:"006"}
        ],
        startDate:"",
        endDate:"",
        currentOrderID:"desc",
        PageCount:4,
        PageCountSum:2,
        currentPage:1
      }
    },
  components:{
    selection,datepicker
  },
  methods:{
    ProductParms(obj){
      this.productType=obj.name;
      this.showProduct= _.map(this.orderlist,(item)=>{
        return item;
      })
      if(this.productType==""){
        this.showPage(this.orderlist,0)
      }else{
        this.showProduct=_.remove(this.showProduct,(item)=>{
          return item['型号']==this.productType;
        })
        this.abcArray=this.showProduct;
        this.showPage(this.abcArray,0)
      }

      this.getList()
      console.log(this.productId)

    },
    getStartDate(date){
      this.startDate=date;
      this.getList()
    },
    getEndDate(date){
      this.endDate=date;
      this.getList()
    },
    getList(){
      let productList={
        productId:this.product,
        startDate:this.startDate,
        endDate:this.endDate,
        query:this.query
        };
//        axios.get("http://localhost:8080/static/abc.json",productList).
//        then((res)=>{
//          console.log(res.data.name)
//        }).catch((error)=>{
//          console.log(error)
//        })
    },
    changeHead(head,index){
      this.athead.map((item)=>{
        item.active=false
        return item
      })
      head.active=true
      if(this.currentOrderID==="desc"){
        this.currentOrderID="asc"
        head.active=false
      }else if(this.currentOrderID==="asc"){
        this.currentOrderID="desc"
      }
//      this.athead.push("");
//      this.athead.pop();

      this.abcArray=_.orderBy(this.abcArray,head.name,this.currentOrderID);
    },
    showPage(array,index){
      if(array.length%this.PageCount){
        this.PageCountSum=Math.floor(array.length/this.PageCount)+1;
      }else{
        this.PageCountSum=array.length/this.PageCount;
      }
      this.currentPage=index+1;
      let startPageNum=(this.currentPage-1)*this.PageCount;
      let endPageNum=startPageNum+this.PageCount;
      this.abcArray=array.slice(startPageNum,endPageNum)

    }
  },
  created:function(){
        this.showPage(this.orderlist,0)
  },
  computed:{
//    getTableData(){
//      return this.$store.getters.getorderFn
//    }
  },
  mounted(){
//    this.$store.dispatch('fetchOrderList')
  },
  watch:{
    query(){
     this.getList()
    }
  }
        }
</script>


<style scoped>
  .salelist span{
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    font-weight: bold;
    margin-right: 12px;
  }
  .salelist{
    width: 1000px;
    margin: 20px auto;
  }
  .typeSel {
    margin-left: 15px;
    float: left;
  }
  #mySearch{
    height: 20px;
    margin-top: 5px;
  }
  .table_warp{
    margin: 0 auto;
    padding-top: 20px;
  }
  .table_warp tr{

  }
  .salelist table td{
  width: 150px;
  height: 30px;
  line-height: 30px;
  border: 1px solid darkgrey;
  text-align: center;
    position: relative;
}
  .salelist .thead{

  }
  .salelist .thead td{
    background: forestgreen;
    border: none;
    color: white;
  }
  .salelist .thead .active{
    background-color: tomato;
  }
  .pageNum{
    float: left;
    margin-right: 2px;
    width: 15px;
    height: 15px;
    border: 1px solid darkcyan;
    cursor: pointer;
  }
  .pageGroup{
    width: 100px;
    margin: 20px auto;
  }
  .pageGroup .active{
    color: white;
    background:darkblue;
  }
  .sj_top{
    position: absolute;
    bottom: 10px;
    right: 2px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 6px 6px 6px;
    border-color: transparent transparent  #e0e0e0 transparent;
  }
  .sj_bottom{
    position: absolute;
    bottom: 10px;
    right: 2px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: #e0e0e0 transparent transparent transparent;
  }
</style>
