<template>
<div class="SureInfo">
  <Popup :isShow="isaShow" @on-close="closeSure">
  <p>确认一下你的订单是否已经完成支付操作</p>
  <p class="btn">
    <el-button type="danger" @click="successInfo">支付成功</el-button>
    <el-button type="info" @click="errorInfo">支付失败</el-button>
  </p>
  </Popup>
  <Popup :isShow="isSuccessInfo" @on-close="closeSuccessInfo">
    支付成功，查看购物清单
  </Popup>
  <Popup :isShow="isErrorInfo" @on-close="closeErrorInfo">
    支付失败，查看购物清单
  </Popup>
</div>
</template>

<script type="text/ecmascript-6">
  import Popup from "@/components/common/Popup"
    export default{
      props:{
        isaShow:{
          type:Boolean,
          default:false
        }
      },
      data(){
    return{
      isSuccessInfo:false,
    isErrorInfo:false
    }
  },
  methods:{
    successInfo(){
      this.$emit("on-close")
      this.isSuccessInfo=true
    },
    closeSuccessInfo(){
      this.$emit("on-change")
      this.isSuccessInfo=false
    },
    errorInfo(){
      this.$emit("on-close")
      this.isErrorInfo=true;
    },
    closeErrorInfo(){
      this.$emit("on-change")
      this.isErrorInfo=false

    },
    closeSure(){
      this.$emit("on-close")
    }

  },
components:{
  Popup
}
    }
</script>


<style scoped>
  .SureInfo{
    width: 1366px;
    height: 200%;
  }
  .SureInfo .btn{
    margin-top: 20px;
  }

</style>
