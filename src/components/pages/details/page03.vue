<template>
<div>
  <el-row  :gutter="20">
    <el-col :span="10">img</el-col>
    <el-col :span="8">info</el-col>
    <el-col :span="6">
      <div class="user_selection">
        <p> <el-checkbox v-model="checked"></el-checkbox>试享亚马逊免费配送</p>
        <p class="count"><span>数量：</span>
          <selection class="mySel" :selection="selName" on-change=""></selection>
        </p>

        <el-button type="warning"><i></i>加入购物车</el-button>
        <div class="tips">
          <h5><a href="javascript:">开启一键下载功能</a></h5>
          <h5><a href="javascript:">（什么是一键下载功能？）</a></h5>
        </div>
        <el-button type="info">加入心愿单</el-button>
      </div>
      <div class="recharge">
        <el-button type="info">账户充值</el-button>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      data(){
      return{

      }
    }
    }
</script>


<style>

</style>
