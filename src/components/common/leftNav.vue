<template>
  <div>
  <div class="leftNav" v-show="isShow">
    <ul  @mouseover="showCon" @mouseout="hideCon">
      <li v-for='(item,index) in navList' @mouseover="curNav(index)" >
        <router-link :to="{path:item.path}" tag="a" >{{item.name}}<span>&gt</span>
        </router-link>
      </li>
     </ul>
    <transition name="showNav">
    <div class="rightCon" v-show="ShowCon"  @mouseover="showCon" @mouseout="hideCon">
      <h3>{{navList[nowIndex].name}}</h3>
      <ul class="NavTitle">
        <li v-for="book in navList[nowIndex].children">
          <h4>{{book.title}}</h4>
          <ul class="Navcon">
            <li v-for="con in book.value"><router-link :to="{path:'/details'}" tag="a">{{con}}</router-link> </li>
          </ul>
        </li>
      </ul>
    </div>
    </transition>
    <div class="imgIcon">
      <img :src="production" alt=""/>
    </div>
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
              timer:null,
              nowIndex:0,
              ShowCon:false,
              invtime: 2000,
              navList:[
                {name:'Kindle商店',
                  path:"detail01",
                  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]
                },
                {name:'亚马逊海外购 ',path:"detail02",  children:[
                  {title:"母婴用品",value:[" 奶粉","喂养用品","安全防护","外出用品", "童车推车"," Oasis"," Kindle配件"]},
                  {title:"玩具",value:["婴幼玩具","电子玩具","拼插玩具","动漫玩具","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"服装服饰",value:["男装","女装","休闲装","内衣家居服","婴幼儿服"]},
                  {title:"鞋靴",value:["男鞋","女鞋","男童鞋","女童鞋"]},
                  {title:"皮具箱包",value:["运动服饰","户外背包","健身训练","智能穿戴","跑步","单肩包","钱包","双肩包","皮带"]},
                  {title:"美容化妆",value:["面部护肤","彩妆","美发护发","身体护理","工具配件"]}
                ]},
                {name:'图书',path:"detail03",  children:[
                  {title:"中文图书",value:["教材教辅","少儿","文学","社科", "经管"," 亚马逊编辑推荐"," Kindle配件"]},
                  {title:"进口图书",value:["小说","  经管","文学","科技","网络小说","特价","包月服务","Prime 阅读"]},
                  {title:"教材教辅",value:[ "考试","外语学习","教材","中小学教辅","工具书","教育理论"]},
                  {title:"少儿",value:["0-2岁","3-6岁","7-10岁","11-14岁","儿童绘本","家庭教育"]},
                  {title:"文学艺术",value:["小说","文学","青春与动漫","传记","艺术"]},
                  {title:"人文社科",value:["历史","国学古籍","哲学与宗教","法律","心理学"]},
                  {title:"经济管理",value:["投资理财","管理","经济与金融","市场营销"]},
                  {title:"励志与成功",value:["心灵读物","人际交往","职场","成功学"]},
                  {title:"科技",value:["科普","计算机与网络","医学","建筑"]},
                  {title:"生活",value:["孕产育儿","烹饪与美食","健康与养生","旅游与地图"]}
                ]},
                {name:'手机、摄影、数码',path:"detail04",  children:[
                  {title:"手机通讯",value:["Apple iPhone","三星","诺基亚","华为","小米","联想","索","中"," HTC","魅族","酷派","所有手机"]},
                  {title:"智能生活馆",value:["智能手环","智能手表","儿童智能手表","VR/AR","创意产","安防中控","娱乐互联","智能健康","智能交通  数码配件"]},
                  {title:"手机配件",value:["移动电源","蓝牙/耳机","存储卡","保护壳","手机音箱","蓝牙配件"]},
                  {title:"数码影音",value:["BOSE","Apple iPod","MP3/MP4","耳机/耳麦","音箱","高清播放","录音笔","游戏设备","数码相框","收音机"]},
                  {title:"智能数码",value:["智能手环","智能手表","智能家居","娱乐影像","创意产品"]},
                  {title:"摄影摄像",value:["便携相机","单反相"," 单电/微单","镜头","数码摄像机","拍立","运动相机及配件","无人机及配件"]},
                  {title:"相机配件",value:["摄影器材箱包","三脚架/云台","滤镜","自拍杆","闪光灯"]},
                  {title:"乐器",value:["电钢琴","电子琴","吉他","乐器配件","监听音箱","电鼓","原声钢琴"]}
                ]},
                {name:'家居、厨具、家装 ',path:"detail01",  children:[
                  {title:"厨具",value:["锅具/壶具","刀剪具","餐具","厨用小工具","厨房收纳","保鲜盒 水具","保温杯","茶具","咖啡用品","烘培用具","烧烤用具","酒具"]},
                  {title:"家纺",value:["床单件套","被子","被套被罩","枕头","枕套枕巾","床褥","抱枕靠","毛巾浴巾","毯子","电热毯","蚊帐","凉席","窗帘","地毯"]},
                  {title:"家具",value:["置物架","收纳柜","鞋柜","电脑桌","电脑椅","书柜书架","衣","床垫","沙发","电视柜","餐桌","椅凳","床","户外家具","儿童家具"]},
                  {title:"生活日用",value:["收纳用品","清洁用品","浴室用品","缝纫","洗晒熨","雨伞","暖宝"]},
                  {title:"家居装饰",value:["布艺装饰","钟表","装饰画","照片墙/相框相册","摆件","花瓶/花艺"]},
                  {title:"家居装修",value:["净水","工具","灯"," 厨卫","园艺","电工","安防","口罩","滤水壶 墙纸/涂料","花洒","龙头","水槽","垃圾处理器","洁身器","五金"]},
                  {title:"宠物商店",value:["狗用品","猫用品","小宠用"," 梳理美容","营养驱虫","猫狗窝"]}
                ]},
                {name:'电子配件、智能生活',path:"detail02",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'电脑、办公、文具',path:"detail03",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'家用电具',path:"detail04",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'美妆、个人健康',path:"detail01",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'食品、酒水、生鲜',path:"detail02",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'电子配件、智能生活',path:"detail02",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'美妆、个人健康',path:"detail01",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'食品、酒水、生鲜',path:"detail02",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'电子配件、智能生活',path:"detail02",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]},
                {name:'食品、酒水、生鲜',path:"detail02",  children:[
                  {title:"电子书阅读器",value:[" Kindle X"," 咪咕 Kindle,"," PaperwhiteKindle"," Paperwhite X", "故宫文化 Kindle"," Oasis"," Kindle配件"]},
                  {title:"Kindle",value:["排行榜","特价","小说","进口原版","少儿","杂志","文学","免费书经管","社科","科技","英语学习","网络小说"]},
                  {title:"Kindle电子书",value:["Prime会员","免费","无限次","阅读电子书"]},
                  {title:"免费阅读软件",value:["安卓版","iPhone版","iPad版","PC版","Mac版","使用攻略"]},
                  {title:"管理内容和设备",value:["管理我的内容","管理我的设备","付款方式设置"]},
                  {title:"Kindle帮助",value:["常见问题","帮助视频"]}
                ]}
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
      production()
      {
//      console.log(this.$route.path)
        return this.imgMap[this.$route.path]

      }
    },
    methods:{
      showCon(){
        clearTimeout(this.timer)
        this.ShowCon=true;
      },
      hideCon(){
        this.setTime()
      },
      curNav(index){
        this.nowIndex=index;
      },
      setTime(){
        var self=this;
        this.timer=setTimeout(function(){
          self.ShowCon=false;
        },100)
      }


    },
    mounted(){
        if(this.pathType=="index"){
          for(let i=0;i<this.navList.length;i++){
            this.navList[i].path='details/'+this.navList[i].path
          }
        }
      this.setTime();

    }
    }
</script>


<style scoped>
  .leftNav{
    width: 180px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #bbbbbb;
    position: relative;
    z-index: 10;
  }
  .leftNav ul{

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
    width: 78px;
    height: 36px;
  }
  .leftNav .rightCon{
    z-index: 6;
    position: absolute;
    top:-1px;
    left: 101%;
    width: 450px;
    height: 100.5%;
    background-image: linear-gradient(#fff,#fff 30%,#e7bfc7);
    border: 1px solid #bbbbbb;
    border-left: none;
    box-sizing: border-box;
    padding: 10px;
  }
  .rightCon h3{
    font-size: 20px;
    color: #000066;
  }
  .rightCon h4{
    font-size: 14px;
    color: orangered;
    margin-bottom: 5px;
  }
  .NavTitle ul{

  }
  .NavTitle>li{
    display: table;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .Navcon li{
    float: left;
    margin-right: 10px;
    margin-bottom: 5px;
  }
  .Navcon a:hover{
    font-weight: normal;
    color: #007aff;
    font-size: 13px;
  }
  .showNav-enter-active,.showNav-leave-active{
    transition: all .1s;
  }
  .showNav-enter{
    opacity: 0;
   transform: translateX(-200px)
  }
  .showNav-leave-active{
    opacity: 0;
    transform: translateX(-200px)
  }

</style>
