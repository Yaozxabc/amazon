<template>
<div>
  <slot name="a1"></slot>
  <br/>
  <p>this is a children</p>
  <br/>
  <slot name="b1"></slot>
  <div class="box_warp">
    <button @click="move" >移动</button>
    <transition name="move">
      <div class="box" v-if="abc"></div>
    </transition>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      data(){
      return{
        abc:true
      }
    },
    methods:{
      move(){
        this.abc=!this.abc;
      }
    }
    }
</script>


<style>
  .box_warp{
    position: relative;
    width: 800px;
    height: 600px;
    border: 1px solid darkgrey;
  }
  .box{
    position: absolute;
    left: 500px;
    top: 200px;
    width: 100px;
    height: 100px;
    background: #0074D9;
  }
  .move-enter-active,.move-leave-active{
    transition: all 2s;
  }
  .move-enter{
    transform: translateX(-500px);
    background: cyan;
  }
  .move-leave-active{
    transform: translateX(500px);
    background: red;
  }
</style>
