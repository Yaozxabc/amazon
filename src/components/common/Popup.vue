<template>
<div class="dioarg_warp" >
  <div class="dioarg_cover" @click="closeMyself" v-if="isShow"></div>
  <transition name="drop">
  <div class="dioarg_text" v-if="isShow">
    <p class="close" @click="closeMyself">×</p>
    <slot ></slot>
  </div>
  </transition>
</div>
</template>

<script type="text/ecmascript-6">
    export default{

      props:{
        isShow:{
          type:Boolean,
          default:false
        }
      },
    methods:{
      closeMyself(){
      this.$emit('on-close')
    }
    }



    }
</script>


<style>
.dioarg_warp{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
}
  .dioarg_cover{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .3;
  }
  .dioarg_text{
    z-index: 6;
    background: white;
    position: fixed;
    left: 50%;
    top: 20%;
    margin-left: -15%;
    width: 400px;
    height: 280px;
    border-radius: 5px;
    border: 2px solid orangered;
  }
 .close{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    width: 40px;
    height: 40px;
    line-height: 40px;
   cursor: pointer;
  }
  .drop-enter-active{
    transition: all .5s ease;
  }
  .drop-leave-active{
    transition: all .3s ease;
  }
  .drop-enter{
    transform: translateY(-500px);
  }
  .drop-leave-active{
    transform: translateY(-500px);
  }

</style>
