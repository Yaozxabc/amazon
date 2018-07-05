<template>
  <el-container>
    <el-col :span="4">
      <leftNav></leftNav>
    </el-col>
    <el-col :span="20">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-col>
  </el-container>
</template>

<script type="text/ecmascript-6">
  import BroadList from '@/components/common/Broadcast'
  import leftNav from '@/components/common/leftNav'
    export default{
      data(){
    return{

    }
  },
  components:{
    leftNav
  },

  methods:{

  }
    }
</script>


<style>
.el-container{
  max-width: 1366px;

}
</style>
