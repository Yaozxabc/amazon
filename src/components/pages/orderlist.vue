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
      <td v-for="head in athead" :class="{active:head.active}" @click="changeHead(head)">{{head.name}}</td>
    </tr>
    <tr v-for="product in abcArray">
      <td v-for="title in athead">{{product[title.name]}}</td>
    </tr>
  </table>
  <div class="pageGroup">
    <ul>
      <li class="pageNum" v-for="(item,index) in PageCountSum" @click="showPage(index)" :class="{active:currentPage===index+1}">{{index+1}}</li>
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
        wd:'150px',
        query:"",
        product:0,
        products:[
          {name:"高级",value:0},
          {name:"中级",value:2},
          {name:"初级",value:1},
          {name:"菜鸟",value:5},
          {name:"入门",value:1}
        ],
        abcArray:[ ],
        orderlist:[
          {id:"001",name:"自学",type:"高级",count:20,star:"5",value:15},
          {id:"002",name:"职业培训",type:"中级",count:10,star:"4",value:215},
          {id:"003",name:"网上考试",type:"初级",count:15,star:"3",value:205},
          {id:"004",name:"机构培训",type:"中级",count:10,star:"4",value:215},
          {id:"005",name:"现场考试",type:"初级",count:15,star:"3",value:205},
          {id:"006",name:"机构培训",type:"中级",count:10,star:"4",value:215},
          {id:"007",name:"自学",type:"高级",count:20,star:"5",value:15},
          {id:"008",name:"职业培训",type:"中级",count:10,star:"4",value:215},
          {id:"009",name:"网上考试",type:"初级",count:15,star:"3",value:205},
          {id:"010",name:"机构培训",type:"中级",count:10,star:"4",value:215},
          {id:"011",name:"现场考试",type:"初级",count:15,star:"3",value:205},
          {id:"012",name:"机构培训",type:"中级",count:10,star:"4",value:215},
          {id:"013",name:"现场考试",type:"初级",count:15,star:"3",value:205}
        ],
        athead:[
          {name:"id",value:"001"},
          {name:"name",value:"002"},
          {name:"type",value:"003"},
          {name:"count",value:"004"},
          {name:"star",value:"005"},
          {name:"value",value:"006"}
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
      this.productId=obj.value
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
        axios.get("http://localhost:8080/static/abc.json",productList).
        then((res)=>{
          console.log(res.data.name)
        }).catch((error)=>{
          console.log(error)
        })
    },
    changeHead(head){
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

      this.abcArray=_.orderBy(this.abcArray,head.name,this.currentOrderID)

    },
    showPage(index){
      if(this.orderlist.length%this.PageCount){
        this.PageCountSum=Math.floor(this.orderlist.length/this.PageCount)+1;
      }else{
        this.PageCountSum=this.orderlist.length/this.PageCount;
      }
      this.currentPage=index+1;
      let startPageNum=(this.currentPage-1)*this.PageCount;
      let endPageNum=startPageNum+this.PageCount;
      this.abcArray=this.orderlist.slice(startPageNum,endPageNum)

    }
  },
  created:function(){
        this.showPage(0)
  },
  watch:{
    query(){
     this.getList()
    }
  }
        }
</script>


<style>
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

</style>
