<template>
  <div>
    <div class="fineProducts ">
      <div class="changed">
        <h3>精品推荐</h3>
        <a href="javascript:">换一换</a>
        <div class="arrow arrow_left"></div>
      </div>
      <ul>
        <li v-for="product in product1s">
          <router-link :to="{path:'/productlist'}">
            <img :src="product.src" :alt="product.value" :title="product.value"/>
            <p class="info" :title="product.value">{{product.value}}</p>
            <p class="price">￥{{product.min}} - ￥{{product.max}}</p>
            <button>立即购买</button>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="fineProducts ">
      <ul>
        <li v-for="product in product2s">
          <router-link :to="{path:'/productlist'}">
            <img :src="product.src" :alt="product.value" :title="product.value"/>
            <p class="info" :title="product.value">{{product.value}}</p>
            <p class="price">￥{{product.min}} - ￥{{product.max}}</p>
            <button>立即购买</button>
          </router-link>
        </li>
      </ul>
      <div class="changed">
        <h3>保税仓爆款</h3>
        <a href="javascript:">看一看</a>
        <div class="arrow arrow_right"></div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              product1s:[
                {name:'彩色铅笔',value:'Prismacolor 优质软芯彩色铅笔节省20%',src:require('../../assets/images/fineQ/01.png'),max:"2004",min:'475'},
                {name:'荷兰锅',value:'Lodge 珐琅铸铁椭圆形荷兰锅 白色 7 quart',src:require('../../assets/images/fineQ/02.png'),max:"7398",min:'333'},
                {name:'纸盒人',value:'【 amazon.co.jp 限定】海洋堂 Revoltech 纸盒人 a...',src:require('../../assets/images/fineQ/03.png'),max:"198",min:'133'},
                {name:'处理铸铁矩形',value:'Lodge 17.15 X 11.43 cm 1/5.08 cm x 27.94处理铸铁矩形 Grill Press',src:require('../../assets/images/fineQ/04.png'),max:"78",min:'14'},
                {name:'Champion',value:'Champion|街头经典',src:require('../../assets/images/fineQ/05.png'),max:"988",min:'354'}
              ],
              product2s:[
                {name:'暑期旅行',value:'暑期旅行|潮炸天',src:require('../../assets/images/fineQ/06.png'),max:"7148",min:'624'},
                {name:'美妆优选',value:'美妆优选|爆款直降7折起',src:require('../../assets/images/fineQ/07.png'),max:"778",min:'324'},
                {name:'太阳能机器人',value:'OWI 变形太阳能机器人"',src:require('../../assets/images/fineQ/08.png'),max:"988",min:'137'},
                {name:'德龙除湿',value:'德龙除湿|台风天的克星',src:require('../../assets/images/fineQ/09.png'),max:"758",min:'174'},
                {name:'潘多拉',value:'Pandora 潘多拉|幸福新品',src:require('../../assets/images/fineQ/10.png'),max:"398",min:'124'}
              ]
            }
        }
    }
</script>


<style scoped>
  .fineProducts{
    overflow:hidden;
    margin-top: 20px;
    padding: 0 40px;
  }
.changed{
  float: left;
  width: 174px;
  height: 220px;
  margin-right: 5px;
  font-size: 25px;
  color: #ffffff;
  background: #232f3e;
  position: relative;
}
.arrow{
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  top: 50%;
}
.arrow_left{
  left: 100%;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent  #232f3e;
}
  .arrow_right{
    right: 100%;
    border-width: 10px 10px 10px 0;
    border-color: transparent  #232f3e transparent transparent
  }
.changed h3{
  margin-top: 60px;
}
.changed a{
  font-size: 18px;
  color: #ffffff;
}
  ul{
    float: left;
  }
  ul li{
    float: left;
    margin-right: 5px;
    width: 174px;
    height: 220px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #fcf7f8;
    color: darkmagenta;
  }
  ul img{
    width: 100%;
    height: 110px;
    margin-bottom: 10px;
  }
  ul p{
    font-weight: bold;
    width: 100%;
    text-align: left;
    color: #566273;
    margin-bottom: 8px;
  }
  .info{
    height: 32px;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
  }
  .price{
    color: orangered;
  }
  ul button{
    float: left;
    border: none;
    background: orangered;
    color: #ffffff;
  }
</style>
