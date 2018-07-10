<template>
<div class="screen_warp">
  <div class="screen_hd">
    <h3>显示搜索结果</h3>
    <ul>
      <li>小家电</li>
      <li>厨房电器</li>
      <li>电饭煲</li>
    </ul>
  </div>
  <div class="screen_con">
    <h3>筛选</h3>
    <form action="">
      <section v-for="screen in screenlist">
        <h4>{{screen.type}}</h4>
        <ul>
          <li v-for="(item,index) in screen.value">
            <p><input type="checkbox" :id="item+(index+1)"/><label :for="'type'+(index+1)">{{item}}</label></p>
          </li>
        </ul>
      </section>
    </form>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              screenlist:[
                {type:"配送（这是什么）",value:['仅限亚马逊配送']},
                {type:"亚马逊海外购",value:['海外购']},
                {type:"海外购货源国",value:['亚马逊美国','亚马逊英国','亚马逊日本','亚马逊德国']},
                {type:"亚马逊Prime",value:['亚马逊Prime']},
                {type:"产品特征",value:['智能','可拆卸','多功能','电脑型','迷你','全钢']},
                {type:"品牌",value:['松下','飞利浦','美的','金正','虎牌','象印','九阳']},
                {type:"容量",value:['3L以下','4L','5L','6L以上']},
                {type:"价格",value:['0-99元','100-199元','200-299元','300-499元','500-799元','800元以上']},
                {type:"库存状况",value:['包含无库存']},
                {type:"卖家",value:['品牌家电联盟','亚马逊','精品电器旗舰店','亚马逊德国','厨具家居专营店','苏泊尔飞乐专卖店','鲲鹏专卖店','亚马逊英国']},
                {type:"库存状况",value:['包含无库存']}
              ]
            }
        }
    }
</script>


<style scoped>
.screen_warp{
  width: 168px;
  padding:0 10px;
  box-sizing: border-box;
  text-align: left;
  border-right: 1px solid #ececec;
}
  .screen_warp h3{
    font-family: siyuan_black;
    font-size: 16px;
    color: #a5a5ac;
    margin-bottom: 15px;
  }
  .screen_hd{
    padding: 16px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
  }
  .screen_hd li{
    color: black;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .screen_con h4{
    font-size: 13px;
    font-weight: bold;
    margin: 20px 0 10px 0;
  }
  .screen_con li{
    margin-bottom: 5px;
    height: 15px;
  }
  .screen_con p{
    vertical-align: bottom;
    height: 15px;
    line-height: 15px;
  }
  .screen_con input{
    vertical-align: bottom;
  }
</style>
