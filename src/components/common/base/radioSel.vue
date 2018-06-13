<template>
<div class="SelGroup">
  <ul>
    <li v-for="(item,index) in selections" :class="{active:nowIndex===index}" @click="getCur(index)"><a href="javascript:" >{{item.name}}</a></li>
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


<style>
.SelGroup ul{
  width: 328px;
  height: 30px;
}
  .SelGroup li{
    float: left;
    width: 60px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
  }
  .SelGroup a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #000;
  }
  .active a{
    color: #ffffff;
    background: #009926;
  }
</style>
