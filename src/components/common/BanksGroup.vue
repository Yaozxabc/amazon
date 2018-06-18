<template>
<div class="bank_warp clearfix">
  <ul>
    <li v-for="(item,index) in bankList" ><a :href="item.href" :class="[item.className,'bank_logo',{active:nowIndex===index}]" @click="tabShow(index)"></a></li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        bankList:{
          type:Array,
          default:[
            {name:"中国银行",
              id:"101",
              className:"zhongguo"}
          ]
        }
      },
      data(){
      return{
        nowIndex:0
      }
    },
    methods:{
      tabShow(index){
        this.nowIndex=index;
        this.$emit("on-change",this.bankList[index])
      }
    }
    }
</script>


<style>
  .bank_warp{
    width: 360px;
    height: 54px;
    margin: 10px auto;
  }
  .bank_warp .active{
    border: 1px solid orange;
  }
  .bank_warp ul{
    width: 100%;
  }
  .bank_warp li{
    margin-right: 5px;
    float: left;

  }
  .bank_logo{background-image: url("../../assets/images/banks/banks.jpg");
    width: 80px;height: 26px;display: block; border: 1px solid white;}
.zhongguo{background-position: 0 0}
.gongshang{background-position:80px 0 }
.jianshe{background-position:160px 0 }
.nongye{background-position:0 26px }
.guangfa{background-position:80px 26px }
.xingye{background-position:160px 26px }
</style>
