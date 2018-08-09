<template>
<div class="productAll">
  <div class="hotBananer">
    <h3></h3>
    <ul>
      <li v-for="baner in hotBanerlist">
        <router-link :to="{path:'/sales'}">
        <img v-lazy="baner.src" :alt="baner.value"/>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="hotSize clearfix">
    <h3></h3>
    <ul>
      <li v-for="(item,index) in menu"><a href="javascript:" @click="curProduct(index)" :class="{active:nowIndex==index}">{{item.value}}</a></li>
    </ul>
  </div>
  <div class="productmenu">
    <div>显示：1-{{nowList.length}}条，共732条<span>小家电</span><em>电饭煲</em>
    <div class="screen fr">排序<select name="" id="">
      <option value="人气">人气</option>
      <option value="价格">价格</option>
      <option value="评价">评价</option>
    </select><i></i><i></i></div>
    </div>
  </div>
  <div class="productCon">
    <ul>
      <li v-for="product in nowList" >
        <router-link :to="{path:'/sales'}">
          <img v-lazy="product.src" :alt="product.id"/>
        </router-link>
        <h3 class="more">更多选项</h3>
        <div class="keyWord">{{product.discurstion}}</div>
        <div class="disInfo">
          <span class="price">￥{{product.price}}</span>
         <p> 部分地区
           <span class="overtime">{{product.overtime}}</span>即可送达,
           <span class="seeTime">查看准确送达时间。</span>
          <span class="warn">此商品仅剩{{product.overCount}} 件 - 欲购从速。</span>
         </p>
        </div>
        <div class="btn">
          <input type="button" class="addCar" value="加入购物车"/>
          <input type="button" class="addWish" value="加入心愿单"/>
        </div>
        <div>star</div>
      </li>

    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              nowIndex:0,
              nowList:[],
              menu:[
                {volume:"0",value:'全部'},
                {volume:"3",value:'3L以下'},
                {volume:"4",value:'4L'},
                {volume:"5",value:'5L'},
                {volume:"6",value:'6L以上'}
              ],
              hotBanerlist:[
                {id:"01",src:require("../../../assets/images/productlist/column/bananer/01.png"),value:"虎牌"},
                {id:"02",src:require("../../../assets/images/productlist/column/bananer/02.png"),value:"象印"},
                {id:"03",src:require("../../../assets/images/productlist/column/bananer/03.png"),value:"松下"},
                {id:"04",src:require("../../../assets/images/productlist/column/bananer/04.png"),value:"美的"}
              ],
              productInfoList:[
                {id:"01",src:require("../../../assets/images/productlist/products/images/Rice(1).png"),price:'1550',discurstion:'Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下',overtime:'24小时内',overCount:2,star:5,volume:"4",type:''},
                {id:"02",src:require("../../../assets/images/productlist/products/images/Rice(2).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:'24小时内',overCount:2,star:5,volume:"3",type:''},
                {id:"03",src:require("../../../assets/images/productlist/products/images/Rice(3).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
                {id:"04",src:require("../../../assets/images/productlist/products/images/Rice(4).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"3",type:''},
                {id:"05",src:require("../../../assets/images/productlist/products/images/Rice(5).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
                {id:"06",src:require("../../../assets/images/productlist/products/images/Rice(6).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"07",src:require("../../../assets/images/productlist/products/images/Rice(7).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"08",src:require("../../../assets/images/productlist/products/images/Rice(8).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
                {id:"09",src:require("../../../assets/images/productlist/products/images/Rice(9).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"10",src:require("../../../assets/images/productlist/products/images/Rice(10).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"3",type:''},
                {id:"11",src:require("../../../assets/images/productlist/products/images/Rice(11).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"6",type:''},
                {id:"12",src:require("../../../assets/images/productlist/products/images/Rice(12).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"3",type:''},
                {id:"13",src:require("../../../assets/images/productlist/products/images/Rice(13).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
                {id:"14",src:require("../../../assets/images/productlist/products/images/Rice(14).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"15",src:require("../../../assets/images/productlist/products/images/Rice(15).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"6",type:''},
                {id:"16",src:require("../../../assets/images/productlist/products/images/Rice(16).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
                {id:"17",src:require("../../../assets/images/productlist/products/images/Rice(17).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"3",type:''},
                {id:"18",src:require("../../../assets/images/productlist/products/images/Rice(18).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"19",src:require("../../../assets/images/productlist/products/images/Rice(19).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"20",src:require("../../../assets/images/productlist/products/images/Rice(20).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"5",type:''},
                {id:"21",src:require("../../../assets/images/productlist/products/images/Rice(21).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
                {id:"22",src:require("../../../assets/images/productlist/products/images/Rice(22).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"3",type:''},
                {id:"23",src:require("../../../assets/images/productlist/products/images/Rice(23).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"3",type:''},
                {id:"24",src:require("../../../assets/images/productlist/products/images/Rice(24).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''}
//                {id:"25",src:require("../../../assets/images/productlist/products/images/Rice(25).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
//                {id:"26",src:require("../../../assets/images/productlist/products/images/Rice(26).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
//                {id:"27",src:require("../../../assets/images/productlist/products/images/Rice(27).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
//                {id:"28",src:require("../../../assets/images/productlist/products/images/Rice(28).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
//                {id:"29",src:require("../../../assets/images/productlist/products/images/Rice(29).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''},
//                {id:"30",src:require("../../../assets/images/productlist/products/images/Rice(30).png"),price:'1550',discurstion:"Panasonic 松下 IH电磁加热电饭煲 SR-ANG181(触屏操控 国标5升对应日标1.8L)Panasonic 松下",overtime:"24小时内",overCount:2,star:5,volume:"4",type:''}
              ]
            }
        },
    methods:{
      curProduct(index){
        this.nowIndex=index;
        let product=this.menu[index].volume;
        if(product==0){
          this.nowList=this.productInfoList;
        }else{
          this.nowList= _.filter(this.productInfoList,{volume:product})
        }
      }
    },
    mounted(){
      this.nowList=this.productInfoList;
    }
    }
</script>


<style scoped>
  .productAll{
    width: 100%;
    padding:0 15px;
    box-sizing: border-box;
  }
  .hotBananer{}
  .hotBananer h3,.hotSize h3{
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .hotBananer h3{
    background-image: url("../../../assets/images/productlist/column/hotBananer.png");
    margin-bottom: 44px;
  }
  .hotBananer ul,.hotSize ul{
    display: table;
    overflow: hidden;
    width: 100%;
  }
  .hotBananer li{
    float: left;
    width: 25%;
    height: 405px;
  }
  .hotBananer img{
    width: 100%;
    height: 100%;
  }
  .hotSize{margin-bottom: 30px}
  .hotSize h3{
    background-image: url("../../../assets/images/productlist/column/hotSize.png");

  }
  .hotSize li{
    float: left;
    width: 213px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e1e3e5;
    margin-right: 20px;
    margin-bottom: 5px;
  }
  .hotSize a:hover,.hotSize .active{
    border: 1px solid orangered;
    color: orangered;
  }
  .hotSize a{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #111111;
  }
  .productmenu{
    width: 100%;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #e1e3e5;
    text-align: left;
  }
  .productmenu .screen{
    width: 200px;
    height: 34px;
    display: inline-block;
    float: right;
  }
  .productCon{
    width: 100%;}
  .productCon ul{
    width: 100%;}
  .productCon li{
    float: left;
    padding: 0 20px 53px 20px ;
    box-sizing: border-box;
    width: 25%;
    height: 450px;
    text-align: left;
    color: #8589a5;
    border-bottom: 1px solid #eeeeee;
  }
  .productCon img{}
  .productCon .more{
    border: 1px solid #cccccc;
    border-radius: 3px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 14px;
  }
  .productCon .keyWord{
    color: #2c7dd2;
  }
  .productCon .disInfo{margin-top: 10px;}
  .productCon .price{color: #b22907;font-family: "siyuan_black";font-weight: bold}
  .productCon .overtime{color: #119530;font-weight: bold;}
  .productCon .seeTime{color: #7db4e6;}
  .productCon .warn{color:#b22907; }
  .productCon .btn{}
  .productCon .addCar{border-radius:2px; background-image: linear-gradient(#f6db98,#f0c454);margin-right: 5px;}
  .productCon .addWish{border-radius:2px;background-image: linear-gradient(#f5f6f8,#eff0f3)}
</style>
