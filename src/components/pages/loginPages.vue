<template>
<div class="myLogin">
  <h2>亚马逊</h2>
  <div class="login_warp" >
    <h3>登录</h3>
    <login @has-log="onsuccess"></login>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import login from '@/components/common/login'
  import bus from '../../assets/scripts/eventbus.js'
    export default{
        data(){
            return {}
        },
  methods:{
    onsuccess(data){
      bus.$emit('getName',data)
      this.$router.push({path:'/'})
    }
  },
  components:{
    login
  }
    }
</script>


<style scoped>
.myLogin{
  margin: 10px auto;
  width: 300px;
  min-height: 600px;

}
  .myLogin h2{
    margin:  0 auto;
    width: 200px;
    height: 110px;
    text-indent: -9999px;
    background-image: url("../../assets/images/logo2.png");
    background-size: 200px 110px;
  }
  .myLogin h3{
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    padding: 4px 10px;
    background-image: linear-gradient(#22d71f,#4ed71f);
    width: 300px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    color: #ffffff;
    text-align: left;
  }
  .login_warp{
    box-sizing: border-box;
    border: 1px solid #dddddd;
    width: 300px;
  }
</style>
