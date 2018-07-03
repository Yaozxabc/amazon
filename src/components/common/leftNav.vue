<template>
  <div class="leftNav" v-show="isShow">
    <ul>
      <li v-for='item in navList'><router-link :to="{path:item.path}" tag="a">{{item.name}}<span>&gt</span></router-link></li>
    </ul>
    <div class="imgIcon">
      <img :src="production" alt=""/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        isShow:{
          type:Boolean,
          default:true
        },
        pathType:{
          type:String,
          default:""
        }
      },
        data(){
            return {
              invtime: 2000,
              navList:[
                {name:'Kindle商店',path:"detail01"},
                {name:'亚马逊海外购 ',path:"detail02"},
                {name:'图书',path:"detail03"},
                {name:'手机、摄影、数码',path:"detail04"},
                {name:'家居、厨具、家装 ',path:"detail01"},
                {name:'电子配件、智能生活',path:"detail02"},
                {name:'电脑、办公、文具',path:"detail03"},
                {name:'家用电具',path:"detail04"},
                {name:'美妆、个人健康',path:"detail01"},
                {name:'食品、酒水、生鲜',path:"detail02"}
              ],
              imgMap:{
                '/':require('../../assets/images/logo.png'),
                '/details/detail01':require('../../assets/images/imgIcon/01.jpg'),
                '/details/detail02':require('../../assets/images/imgIcon/02.jpg'),
                '/details/detail03':require('../../assets/images/imgIcon/03.jpg'),
                '/details/detail04':require('../../assets/images/imgIcon/04.jpg')
              }
            }
    },
    computed:{
      production(){
//      console.log(this.$route.path)
        return this.imgMap[this.$route.path]
      }
    },
    mounted(){
        if(this.pathType=="index"){
          for(let i=0;i<this.navList.length;i++){
            this.navList[i].path='details/'+this.navList[i].path
          }
        }
    }
        }
</script>


<style scoped>
  .leftNav{
    width: 180px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #bbbbbb;
  }
  .leftNav li{
    height: 16px;
    line-height: 16px;
    margin-bottom: 12px;
    text-align: left;
  }
  .leftNav span{
    float: right;
  }
  .leftNav a{
    width: 100%;
    display: block;
    font-size: 13px;
    color: black;
  }
  .leftNav a:hover,.active{
    font-size: 14px;
    font-weight: bold;
  }
  .imgIcon img{
    width: 148px;
    height: 96px;
  }
</style>
