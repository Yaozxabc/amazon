<template>
  <el-row  :gutter="20">
    <el-col :span="10">
      <div>
        <productImg :aimg="{a:smImg,b:bigImg,c:XLImg}"></productImg>
      </div>
    </el-col>
    <el-col :span="8">
      <productSel></productSel>
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
      <banks :bankList="banksList" @on-change="toChooseBank"></banks>
      <p class="clearfix">
      <el-button type="success" @click="isShowSure">提交</el-button>
      <el-button type="info">取消</el-button>
      </p>
    </Popup>
    <showInfo :isaShow="isSure" @on-close="closeSure" @on-change="toDetail"></showInfo>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import productImg from '@/components/common/base/productShow'
  import selection from '@/components/common/base/selection'
  import radioSel from '@/components/common/base/radioSel'
  import multiSel from '@/components/common/base/multiSel'
  import productSel from '@/components/common/base/productSel'
  import showInfo from '@/components/common/base/ShowInfo'
  import Number from '@/components/common/base/counterNumber'
  import Popup from '@/components/common/Popup'
  import banks from '@/components/common/BanksGroup'
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
        isSure:false,
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
          {name:"大鸟",type:"middle",value:"2"}
        ],
        multiList:[
          {name:"小码",type:"easy",value:"50"},
          {name:"中码",type:"base",value:"100"},
          {name:"大码",type:"middle",value:"200"},
          {name:"超大码",type:"difficult",value:"300"},
        ],
        banksList:[
          {name:"中国银行",id:'101',href:"javascript:",className:"zhongguo"},
          {name:"工商银行",id:'201',href:"javascript:",className:"gongshang"},
          {name:"建设银行",id:'301',href:"javascript:",className:"jianshe"},
          {name:"农业银行",id:'401',href:"javascript:",className:"nongye"},
          {name:"广发银行",id:'501',href:"javascript:",className:"guangfa"},
          {name:"兴业银行",id:'601',href:"javascript:",className:"xingye"}
        ],
        orderId:"101",
        smImg:[
          {id:1,src:require("../../assets/images/productDetail/smallImg/smallImg01.jpg"),alt:"电饭煲"},
          {id:2,src:require("../../assets/images/productDetail/smallImg/smallImg02.jpg"),alt:"电饭煲"},
          {id:3,src:require("../../assets/images/productDetail/smallImg/smallImg03.jpg"),alt:"电饭煲"},
          {id:4,src:require("../../assets/images/productDetail/smallImg/smallImg04.jpg"),alt:"电饭煲"},
          {id:5,src:require("../../assets/images/productDetail/smallImg/smallImg05.jpg"),alt:"电饭煲"}
        ],
        bigImg:[
          {id:1,src:require("../../assets/images/productDetail/bigImg/bigImg01.jpg"),alt:"电饭煲"},
          {id:2,src:require("../../assets/images/productDetail/bigImg/bigImg02.jpg"),alt:"电饭煲"},
          {id:3,src:require("../../assets/images/productDetail/bigImg/bigImg03.jpg"),alt:"电饭煲"},
          {id:4,src:require("../../assets/images/productDetail/bigImg/bigImg04.jpg"),alt:"电饭煲"},
          {id:5,src:require("../../assets/images/productDetail/bigImg/bigImg05.jpg"),alt:"电饭煲"}
        ],
        XLImg:[
          {id:"01",src:require("../../assets/images/productDetail/XLImg/XLImg01.jpg"),alt:"电饭煲"},
          {id:"02",src:require("../../assets/images/productDetail/XLImg/XLImg02.jpg"),alt:"电饭煲"},
          {id:"03",src:require("../../assets/images/productDetail/XLImg/XLImg03.jpg"),alt:"电饭煲"},
          {id:"04",src:require("../../assets/images/productDetail/XLImg/XLImg04.jpg"),alt:"电饭煲"},
          {id:"05",src:require("../../assets/images/productDetail/XLImg/XLImg05.jpg"),alt:"电饭煲"}
        ]
      }
    },
  components:{
    selection,radioSel,multiSel,Number,Popup,banks,showInfo,productImg,productSel
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
        buyList: buyArray.join(","),
        orderId: this.orderId
        //将数组转化为字符串
      }
      //将需要的值赋值给参数对象
      axios.get("http://localhost:3000/price",parms)
        .then((res)=>{
          this.price=res.data.name
          console.log(parms)
        }).catch((error)=>{
          console.log(error)
        })

    },
    isShowPopup(){
      this.isPopup=true
    },
    noShowPopup(){
      this.isPopup=false
    },
    isShowSure(){
      axios.get("http://localhost:8080/static/abc.json").then((res)=>{
        console.log(res.data.name)
      })
      this.isPopup=false;
      this.isSure=true;

    },
    noShowSure(){
      this.isSure=false
    },
    toChooseBank(data){
      this.orderId=data.id;
      console.log(this.orderId)
    },
    closeSure(){
      this.isSure=false;
    },
    toDetail(){
      this.$router.push({path:'/orderlist'})
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


<style scoped>
.el-row{
  overflow-x: hidden;
}
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
