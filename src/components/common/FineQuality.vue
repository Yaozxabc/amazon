<template>
  <div>
    <div class="fineProducts ">
      <div class="changed">
        <h3>精品推荐</h3>
        <a href="javascript:">换一换</a>
        <div class="arrow arrow_left"></div>
      </div>
      <ul>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
      </ul>
    </div>
    <div class="fineProducts ">
      <ul>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../../assets/images/fineQ/01.png" alt=""/>
            <p class="info">Prismacolor Premier软芯彩色铅笔 150色</p>
            <p class="price">￥511.53 - ￥1,288.21</p>
            <button>立即购买</button>
          </a>
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
            return {}
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
    margin-bottom: 10px;
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
