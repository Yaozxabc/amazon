<template>
<div>
<typeModule :Info="module"></typeModule>
</div>
</template>

<script type="text/ecmascript-6">
  import typeModule from "@/components/pages/details/typeModule"
    export default{
      data(){
      return{
        module:{
          bg:"red",
        big_product:{path:"/sales",ImgSrc:require("../../../assets/images/pageSession/big/big_01.jpg"),name:"GEQX",describe:"会呼吸的鞋",price:"259"},
        middle_product:[
          {path:'',ImgSrc:require("../../../assets/images/pageSession/middle/middle_01.jpg"),title:"当季聚焦",name:"果冻鞋/洞洞鞋",price:"119"},
          {path:'',ImgSrc:require("../../../assets/images/pageSession/middle/middle_02.jpg"),title:"全国首发",name:"洞洞鞋",price:"46"}
        ],
        small_product:[
          {path:"/sales",ImgSrc:require("../../../assets/images/pageSession/small/small_01.png"),describe:"男士 无限 超级运动鞋 动感 超级 super 给不一样的你",max:"200",min:"46"},
          {path:"/sales",ImgSrc:require("../../../assets/images/pageSession/small/small_02.png"),describe:"男士 无限 超级运动鞋 动感 超级 super 给不一样的你",max:"388",min:"199"},
          {path:"/sales",ImgSrc:require("../../../assets/images/pageSession/small/small_03.png"),describe:"男士 无限 超级运动鞋 动感 超级 super 给不一样的你",max:"198",min:"88"},
          {path:"/sales",ImgSrc:require("../../../assets/images/pageSession/small/small_04.png"),describe:"男士 无限 超级运动鞋 动感 超级 super 给不一样的你",max:"465",min:"55"}
        ],
        brand:[
          {path:"/sales",imgSrc:require("../../../assets/images/pageSession/brand/brand_01.jpg"),name:"时尚演绎经典"},
          {path:"/sales",imgSrc:require("../../../assets/images/pageSession/brand/brand_02.jpg"),name:"经典实现超越"},
          {path:"/sales",imgSrc:require("../../../assets/images/pageSession/brand/brand_03.jpg"),name:"时光造就穿越"},
          {path:"/sales",imgSrc:require("../../../assets/images/pageSession/brand/brand_04.jpg"),name:"天籁来之平凡"}
        ]
        }
      }
    },
    components:{
      typeModule
    }
    }
</script>


<style>

</style>
