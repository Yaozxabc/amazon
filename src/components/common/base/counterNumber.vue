<template>
<div class="inputNum">
  <button class="minus" @click="minus">-</button>
  <input class="number" v-model="number" @keyup="toNum"/>
  <button class="add" @click="add">+</button>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        min:{
          type:Number,
          default:0
        },
        max:{
          type:Number,
          default:99
        }
      },
      data(){
      return{
        number:this.min
      }
    },
    methods:{
      minus(){
        if(this.number<=this.min){
          return false
        }
        this.number--;
      },
      add(){
        if(this.number>=this.max){
          return false
        }
        this.number++;
      },
      toNum(){
        let fix
        if(typeof this.number==="string"){
          fix=Number(this.number.replace(/\D/,""))
        }
        if(this.number>=this.max){
          fix=this.max
        }else if( this.number<=this.min){
          fix=this.min
        }
        this.number=fix
      }
    },
    watch:{
      number(){
        this.$emit('on-change',this.number)//4、将用户选择的数量返回，返回值为数量
    }
    }
    }
</script>


<style>
 .minus,.add{
  width: 20px;
  height: 20px;
   text-align: center;
   padding: 0;
}
  .number{
    width: 20px;
    height: 20px;
    padding: 0;
  }
</style>
