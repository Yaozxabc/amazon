<template>
  <div>
    <el-container>
      <el-col :span="4">ddd</el-col>
      <el-col :span="20">
        <BroadList :slides="ImgList" :inv="invtime"></BroadList>
      </el-col>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import BroadList from '@/components/common/Broadcast'
    export default{
      data(){
    return{
      invtime:3000,
      ImgList: [
        {src: require('../../assets/images/broadlist/01.jpg'), alt: '沐浴书香', name: '沐浴书香'},
        {src: require('../../assets/images/broadlist/02.jpg'), alt: '精工手表', name: '精工手表'},
        {src: require('../../assets/images/broadlist/03.jpg'), alt: '踏青出行', name: '踏青出行'},
        {src: require('../../assets/images/broadlist/04.jpg'), alt: '辣妈萌宝', name: '辣妈萌宝'},
        {src: require('../../assets/images/broadlist/05.jpg'), alt: '时尚腕表', name: '时尚腕表'},
        {src: require('../../assets/images/broadlist/06.jpg'), alt: '精品超市', name: '精品超市'},
        {src: require('../../assets/images/broadlist/07.jpg'), alt: '品牌电脑', name: '品牌电脑'},
        {src: require('../../assets/images/broadlist/08.jpg'), alt: '敦煌礼品', name: '敦煌礼品'}
      ]
    }
  },
  components:{
    BroadList
  }
    }
</script>


<style>

</style>
