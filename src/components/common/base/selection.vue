<template>
<div>
  <div class="select_warp">
    <div class="curSel" @click="tabShow">{{selection[nowIndex].name}}</div>
    <div :class="[{sj_top:NYeah},{sj_bottom:Yeah}]"></div>
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
        Yeah:true,
        NYeah:false
      }
    },
    computed:{

    },
    methods:{
      tabShow(nowIndex){
        this.expansion=!this.expansion
        this.Yeah=!this.Yeah;
        this.NYeah=!this.NYeah;
      },
      showCur(index){
        this.nowIndex=index
        this.expansion=false;
        this.$emit('on-change',this.selection[index])//3、返回当前选择对象，返回值为对象
      }

    }
    }
</script>


<style scoped>
.select_warp{
  position: relative;
  width: 140px;
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
    color: #000000;
    background: #ffffff;
  }
  .selectList li:hover{
    color: white;
    background: darksalmon;
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
