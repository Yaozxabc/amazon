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
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>


<style>
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
</style>
