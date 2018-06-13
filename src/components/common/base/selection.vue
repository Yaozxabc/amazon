<template>
<div>
  <div class="select_warp">
    <div class="curSel" @click="tabShow">{{selection[nowIndex].name}}</div>
    <div class="sj"></div>
    <div v-if="expansion" class="selectList">
      <ul>
      <li v-for="(item,index) in selection" @click="showCur(index)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        selection:{
          type:Array,
          default:[{
            name:"入门级别",
            value:0
          }]
        }
      },
      data(){
      return{
        nowIndex:0,
        expansion:false,
      }
    },
    computed:{

    },
    methods:{
      tabShow(nowIndex){
        this.expansion=!this.expansion
      },
      showCur(index){
        this.nowIndex=index
        this.expansion=false;
        this.$emit('on-change',this.selection[index])//3、返回当前选择对象，返回值为对象
      }

    }
    }
</script>


<style>
.select_warp{
  position: relative;
  width: 80px;
  text-align: center;
}
.curSel{
  width: 100%;
  height: 30px;
  line-height: 30px;
  border: 1px solid #dddddd;
  font-size: 12px;
}
.curSel:hover{
  color: white;
  background: darkgrey;
}
  .selectList{
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #dddddd;
  }
  .selectList li{
    cursor: pointer;
    height: 16px;
    padding: 3px 0;
    font-size: 12px;
  }
  .selectList li:hover{

    color: white;
    background: darksalmon;
  }
</style>
