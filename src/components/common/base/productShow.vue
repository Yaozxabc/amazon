<template>
<el-container>
  <el-col :span="3">
    <ul class="sImg_list">
      <li :class="{active:index==nowIndex}" v-for="(img,index) in smImg" @mouseover="tabShow(index)"><img :src="img.src" :alt="img.alt"/></li>
    </ul>
  </el-col>
  <el-col :span="21">
    <div class="product_show">
      <img :src="bigImg[nowIndex].src" alt="bigImg[nowIndex].alc" @mouseover="showDetail" @mousemove="call($event)"/>
      <div class="mark" v-show="isShow"></div>
      <div class="product_detail"></div>
      <span>点击展开图</span>
    </div>

  </el-col>
</el-container>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              isShow:false,
              nowIndex:2,
              smImg:[
                {id:1,src:require("../../../assets/images/productDetail/smallImg/smallImg01.jpg"),alt:"电饭煲"},
                {id:2,src:require("../../../assets/images/productDetail/smallImg/smallImg02.jpg"),alt:"电饭煲"},
                {id:3,src:require("../../../assets/images/productDetail/smallImg/smallImg03.jpg"),alt:"电饭煲"},
                {id:4,src:require("../../../assets/images/productDetail/smallImg/smallImg04.jpg"),alt:"电饭煲"},
                {id:5,src:require("../../../assets/images/productDetail/smallImg/smallImg05.jpg"),alt:"电饭煲"}
              ],
              bigImg:[
                {id:1,src:require("../../../assets/images/productDetail/bigImg/bigImg01.jpg"),alt:"电饭煲"},
                {id:2,src:require("../../../assets/images/productDetail/bigImg/bigImg02.jpg"),alt:"电饭煲"},
                {id:3,src:require("../../../assets/images/productDetail/bigImg/bigImg03.jpg"),alt:"电饭煲"},
                {id:4,src:require("../../../assets/images/productDetail/bigImg/bigImg04.jpg"),alt:"电饭煲"},
                {id:5,src:require("../../../assets/images/productDetail/bigImg/bigImg05.jpg"),alt:"电饭煲"}
              ]
            }
        },
    methods:{
      tabShow(index){
        this.nowIndex=index;
      },
      showDetail(){
        this.isShow=true;
      },
      call($event){
        console.log($event.pageY)
      }
    }
    }
</script>


<style>
.sImg_list{
  width: 64px;
}
  .sImg_list li{
    padding: 7px;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    border: 1px solid #ffffff;
  }
  .sImg_list li:hover, .sImg_list .active{
    border: 1px solid orange;
  }
  .sImg_list img{
    width: 50px;
    height: 50px;
  }
  .product_show{
    position: relative;
    width: 420px;
    height: 420px;
    padding: 7px;
    box-sizing: border-box;
  }
  .mark{
    position: absolute;
    left: 7px;
    top: 7px;
    width: 210px;
    height: 210px;
    background: darkcyan;
    opacity: .3;
    z-index: 2;
  }
</style>
