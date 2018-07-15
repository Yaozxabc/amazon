<template>
  <div>
  <el-container>
    <el-col :span="4">
      <leftNav></leftNav>
    </el-col>
    <el-col :span="20" class="details">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-col>
  </el-container>
  <el-container>
    <FineQuality></FineQuality>
  </el-container>
  </div>

</template>

<script type="text/ecmascript-6">
  import BroadList from '@/components/common/Broadcast'
  import leftNav from '@/components/common/leftNav'
  import FineQuality from '@/components/common/FineQuality'
    export default{
      data(){
    return{

    }
  },
  components:{
    leftNav,FineQuality
  },

  methods:{

  }
    }
</script>


<style>
.el-container{
  max-width: 1366px;
  overflow: hidden;
}
</style>
