<template>
<div class="SelGroup">
  <ul>
    <li v-for="(item,index) in selections" :class="{active:nowIndex===index}" @click="getCur(index)"><a href="javascript:" >
      <p>{{item.name}}</p>
      <p>￥{{item.value}}</p></a></li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        selections:{
          type:Array,
          default:[{
            name:"test",
            type:"base"
          }]
        }
      },
      data(){
      return{
        nowIndex:0
      }
    },
    methods:{
      getCur(index){
        this.nowIndex=index;
        this.$emit("on-change",this.selections[index])//1、将当前选择的对象值返回父组件
      }
    }
    }
</script>


<style scoped>
.SelGroup ul{

}
  .SelGroup li{
    float: left;
    width: 130px;
    height: 48px;
    margin-right: 12px;;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
  }
  .SelGroup a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    color: #000;
  }
  .SelGroup p{
    height: 20px;
    line-height: 20px;
  }
  .active a{
    color: orangered;
    background: #ffffff;
   border: 1px dotted orangered;
  }
</style>
