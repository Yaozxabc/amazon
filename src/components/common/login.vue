<template>
<div class="login_warp">
  <form action="abc.php" method="get" class="userForm">
    <div class="user clearfix">
      <label for="username">用户名：</label>
      <input type="text" id="username" placeholder="请输入用户名" v-model="UserName" />
      <p class="ErrorText">{{testName.ErrorText}}</p>
    </div>
    <div class="password clearfix">
      <label for="password">密码：</label>
      <input type="password" id="password" v-model="PassWord" />
      <p class="ErrorText">{{testWord.ErrorText}}</p>
    </div>
    <el-row class="clearfix">
      <el-button type="primary" @click="submit">登录</el-button>
      <el-button type="danger" @click="close">取消</el-button>
    </el-row>
  </form>
  <h5>{{ErrorText}}</h5>
</div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
//  axios.defaults.baseURL = 'http://localhost:8080/#/src'
    export default{
      data(){
      return{
        status:false,
          UserName:"",
        PassWord:"",
        ErrorText:""
      }
    },
    computed:{
      testName(){
        let status,ErrorText
        let name=this.UserName;
        let Rex=/\d{6,10}@+qq.com$/
        if(Rex.test(name)){
            status=true,
            ErrorText=""
        }else{
            status=false,
            ErrorText="请检查，输入一个正确的qq邮箱"
        }
        if(!this.userFlag){
          ErrorText=""
          this.userFlag=true
        }
        return{
      status,ErrorText
        }
      },
      testWord(){
        let status,ErrorText
        let word=this.PassWord;
        let rex=/\d{6}/g
        if(rex.test(word)){
          status=true;
          ErrorText=""
        }else{
          status=false,
            ErrorText="请检查，密码为不少于6位的数字"
        }
        if(!this.wordFlag){
          ErrorText=""
          this.wordFlag=true
        }
        return{
          status,ErrorText
        }

      }
      },
    methods:{
      submit(){
//        alert(this.testName.status+","+this.testWord.status)
        if(!this.testName.status||!this.testWord.status){
          this.ErrorText="用户名或者密码错误"
        }else{
          this.ErrorText=""
          axios.get('http://localhost:8090/user').
            then(response=>{
//              alert(response.data.username)
              this.$emit("has-log",response.data)
            },(error)=>{
              alert("错误")
            })
        }
      },
      close(){
        this.$emit("on-close")
      }
    }
    }
</script>


<style scoped>
.userForm{
  padding: 40px 0 25px 0;
  text-align: center;
}
  .userForm label{
    float: left;
    display: block;
    width: 80px;
    height: 26px;
    line-height: 26px;
    text-align: left;
  }
  .userForm input{
    float: left;
    width: 200px;
    height: 26px;
    font-size: 14px;
    border-radius: 1px;
  }
  .user,.password{
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .ErrorText{
    color: red;
    height: 30px;
    line-height: 30px;
    width: 200px;
    margin-left: 80px;
    font-size: 12px;
    text-align: left;
  }
</style>
