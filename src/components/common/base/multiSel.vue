<template>
<div class="SelGroup">
  <ul>
    <li v-for="(item,index) in selections" :class="{active:checkActive(index)}" @click="getCur(index)"><a href="javascript:" >{{item.name}}</a></li>
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
        nowIndex:0,
        multiSel:[0]
      }
    },
    methods:{
      getCur(index){
        if(this.multiSel.indexOf(index)==-1){
          this.multiSel.push(index)
        }
        else{
          this.multiSel= _.remove(this.multiSel,(ids)=>{
            return ids!==index
            //将数组对象传入，ids代表数组的每一项，返回不等于索引值的所有项
          })
        }

        let multiArray= _.map(this.multiSel,(ids)=>{
          return this.selections[ids]
        })//将数组传入，转化为数组对象
        this.$emit("on-change",multiArray)
        //2、返回数组对象
      },
      checkActive(index){
        return this.multiSel.indexOf(index)!==-1
        //将所有的索引传入，如果是已经存在，就显示active样式
      }
    }
    }
</script>


<style scoped>
.SelGroup ul{
  width: 228px;
  height: 30px;
}
  .SelGroup li{
    float: left;
    width: 50px;
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
    background: orangered;
  }
</style>
