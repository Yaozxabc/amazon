<template>
  <div>
    <div class="sider_hd">
      <img src="../../assets/images/sider/silder_hd.jpg" alt=""/>
    </div>
    <ul class="siderList">
      <li>
        <a href="javascript:" class="listWarp">
        <img src="../../assets/images/sider/01.jpg" alt=""/>
        <a href="javascript:" class="more">查看更多</a>
        </a>
      </li>
      <li>
        <a href="javascript:" class="listWarp">
        <img src="../../assets/images/sider/02.jpg" alt=""/>
        <a href="javascript:" class="more">查看更多</a>
        </a>
      </li>
      <li>
        <a href="javascript:" class="listWarp">
        <img src="../../assets/images/sider/03.jpg" alt=""/>
        <a href="javascript:" class="more">查看更多</a>
        </a>
      </li>
      <li>
        <a href="javascript:" class="listWarp">
        <img src="../../assets/images/sider/04.jpg" alt=""/>
        <a href="javascript:" class="more">查看更多</a>
        </a>
      </li>
    </ul>
    <h3>热销图书</h3>
    <ul class="booklist">
      <li v-for="(item,index) in booklist">
        <div>
        <span>{{index+1}}</span>
        <img :src="item.src" :alt="item.name"/>
        </div>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              booklist:[
                {name:"哈姆雷特",src:require("../../assets/images/sider/slider_book01.jpg")},
                {name:"康熙王朝",src:require("../../assets/images/sider/slider_book02.jpg")},
                {name:"十字箴言",src:require("../../assets/images/sider/slider_book03.jpg")},
                {name:"钢铁是怎样炼成的",src:require("../../assets/images/sider/slider_book04.jpg")},
                {name:"小狗钱钱",src:require("../../assets/images/sider/slider_book05.jpg")}
              ]
            }
        }
    }
</script>


<style scoped>
.siderList{
  width: 250px;
}
.sider_hd{
  width: 100%;
}
.sider_hd img{
  width: 220px;
  height: 188px;
}
  .siderList li{
    width: 220px;
    height: 110px;
    margin-top: 5px;
  }
  .siderList img{
    width: 100%;
  }
  .listWarp{
    position: relative;
  }
  .more{
    position: absolute;
    left: 20%;
    bottom: 15px;
  }
  .booklist li{
    margin-top: 10px;
    width: 100%;
    height: 100px;
  }
  .booklist div{
    width: 150px;
    height: 100px;
  }
  .booklist span{
    height: 100px;
    line-height: 100px;
    font-size: 52px;
    color:darkgrey;
  }
  .booklist img{
    float: right;
  }
</style>
