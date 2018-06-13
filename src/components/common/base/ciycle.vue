<template>
  <div>
    <ul class="ciycle">
      <li v-for="(item,index) in slide" :class="{active:checkAcive(index)}" @click="getStar(index)"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        slide:{
          type:Array,
          default:[]
        }
      },
      data(){
      return{

      }
    },
      methods:{
        getStar(index){
      for(let i=0;i<this.slide.length;i++){
        this.slide[i]="3";
      }
          this.slide.push("")
          this.slide.pop()
      for(let i=0;i<index+1;i++){
        this.slide[i]=4;
      }
          this.$emit("on-change",this.slide)
    },
        checkAcive(index){
      return this.slide[index]===4
    }
      }

    }
</script>


<style>
  .ciycle li{
    width: 25px;
    height: 25px;
    background: white;
    border: 1px solid saddlebrown;
    border-radius: 50%;
    margin-right: 5px;
    float: left;
  }
  .ciycle .active{
    background: darksalmon;
  }
</style>
