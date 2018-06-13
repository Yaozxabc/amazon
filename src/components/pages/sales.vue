<template>
  <el-row  :gutter="20">
    <el-col :span="10">
ddd
    </el-col>
    <el-col :span="8">
      <ciycle :slide="ciycle" @on-change="tel"></ciycle>
    </el-col>
    <el-col :span="6">
      <div class="user_selection">
        <p> <el-checkbox v-model="checked"></el-checkbox>试享亚马逊免费配送</p>
        <p><strong>单选：</strong>
          <!--1、返回当前选择数组中对应的对象，返回值为对象-->
          <keep-alive>
          <radioSel :selections="radioList" @on-change="onParmsChange('buyType',$event)"></radioSel>
          </keep-alive>
        </p>
        <p><strong>多选：</strong>
          <!--2、返回用户多选择类型，返回值为数组对象-->
          <multiSel  :selections="multiList" @on-change="onParmsChange('buyList',$event)"></multiSel>
        </p>
        <p class="count"><strong>下拉选择：</strong><br/>
          <!--3、返回用户选择类型，返回值为对象-->
          <selection class="mySel" :selection="selName" @on-change="onParmsChange('buyName',$event)"></selection>
        </p>
        <p><strong>数量：</strong>
          <!--4、返回用户选择数量，返回值为数字-->
          <Number :num="number"  @on-change="onParmsChange('buyCount',$event)"></Number>
        </p>
        <p>
          <strong>价格：</strong><span>{{price}}</span>
        </p>
        <el-button class="mybtn" type="warning" @click="getPrice"><i></i>加入购物车</el-button>
        <el-button  type="danger" @click="isShowPopup"><i></i>买单结算</el-button>
        <div class="tips">
          <h5><a href="javascript:">开启一键下载功能</a></h5>
          <h5><a href="javascript:">（什么是一键下载功能？）</a></h5>
        </div>
        <el-button class="mybtn" type="info">加入心愿单</el-button>
      </div>
      <div class="recharge">
        <el-button class="mybtn" type="info"  >账户充值</el-button>
      </div>
    </el-col>
    <Popup :isShow="isPopup" @on-close="noShowPopup">
      <table class="Product-table" width="300" border="1" cellspacing="1" cellpadding="1">
        <tbody>
        <tr class="title">
          <td>序号</td>
          <td>类型</td>
          <td>数量</td>
          <td>级别</td>
          <td>价格</td>
        </tr>
        <tr>
          <td>01</td>
          <td>{{ buyType.name }}</td>
          <td>{{ buyCount }}</td>
          <td>{{buyName.name}}</td>
          <td>{{price}}</td>
        </tr>
        </tbody>
      </table>
    </Popup>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import selection from '@/components/common/base/selection'
  import radioSel from '@/components/common/base/radioSel'
  import multiSel from '@/components/common/base/multiSel'
  import ciycle from '@/components/common/base/ciycle'
  import Number from '@/components/common/base/counterNumber'
  import Popup from '@/components/common/Popup'
  import axios from 'axios'
    export default{
      data(){
      return{
        price:0,
        buyType:{},
        buyList:[],
        buyName:{},
        buyCount:0,

        isPopup:false,


        number:0,
        ciycle:[3,3,3,3,3],
        checked:false,
        selName:[
          {name:"入门级别",type:"easy",value:"0"},
          {name:"基础级别",type:"base",value:"1"},
          {name:"高手级别",type:"difficult",value:"2"},
        ],
        radioList:[
          {name:"菜鸟",type:"easy",value:"0"},
          {name:"小鸟",type:"base",value:"1"},
          {name:"大鸟",type:"middle",value:"2"},
          {name:"老鸟",type:"difficult",value:"3"},
        ],
        multiList:[
          {name:"小码",type:"easy",value:"50"},
          {name:"中码",type:"base",value:"100"},
          {name:"大码",type:"middle",value:"200"},
          {name:"超大码",type:"difficult",value:"300"},
        ]
      }
    },
  components:{
    selection,radioSel,multiSel,ciycle,Number,Popup
  },
  methods:{
    tel(data){
      let i=0;
      for(let o=0;o<data.length;o++){
        if(data[o]==4){
          i++;
        }
      }
      alert(i)
    },
    num(data){
      this.number=data;
     alert(this.number)
    },
    onParmsChange(attr,value){
      this[attr]=value;
      this.getPrice()
    },
    getPrice(){
      let buyArray= _.map(this.buyList,(idx)=>{
        return idx.value
      })
      //将多选数组对象的值传出来到数组中
      let parms={
        buyType:this.buyType.value,
        buyCount:this.buyCount,
        buyName:this.buyName.value,
        buyList: buyArray.join(",")
        //将数组转化为字符串
      }
      //将需要的值赋值给参数对象
      axios.get("http://localhost:8080/static/abc.json",parms)
        .then((res)=>{
          this.price=res.data.price
        })

    },
    isShowPopup(){

      this.isPopup=true

    },
    noShowPopup(){
      this.isPopup=false
    }


  },
  mounted:function(){
    this.buyType=this.radioList[0],
    this.buyCount=1,
    this.buyList=[this.multiList[0]],
    this.buyName=this.selName[0],
      this.getPrice()
  }
    }
</script>


<style >

.el-checkbox{
  margin-right: 5px;
}
.user_selection,.recharge{
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #dddddd;
}
  .user_selection p{
    margin-top: 16px;
    text-align: left;
  }
  .user_selection strong{
    font-weight: bold;
    color: #C21F39;
  }
  .mybtn{
    width: 208px;
    height: 36px;
    margin-bottom: 10px;
    margin-top: 76px;
  }
  .tips{
    margin: 0 auto;
    width: 208px;
    height: 78px;
    padding: 20px 0;
    border-top:1px solid slategray ;
    border-bottom:1px solid slategray ;
  }
  .tips h5{
    margin-top: 10px;
  }
  .recharge{
    margin-top: 10px;
  }
  .count{
    position: relative;
  }
  .mySel{
    position: absolute;
    left: 30%;
    top: 0;
  }
  .Product-table{
    margin: 40px auto;
    border: 1px solid #e0e0e0;
  }
  .Product-table td{
    text-align: center;
    width: 50px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-weight: bold;

  }

  .Product-table tr:nth-of-type(1){
    background: darkcyan;
    color: white;
  }
.Product-table tr:nth-of-type(1) td{
  font-size: 18px;
}
</style>
