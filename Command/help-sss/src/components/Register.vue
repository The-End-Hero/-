<template>
  <div class="signin">
    <!--<div class="signin-blue"></div>-->
    <!--<div class="signin-white"></div>-->
    <div class="signin-blue-content">
      <img src="../pages/index/assets/logo_bai.png" alt="红星美凯龙">
      <div class="signin-sur">
        <div class="signin-sur-left">
          <p>注册</p>
          <input type="text" placeholder="请输入手机号">
          <input class="phone" type="tel" placeholder="请输入手机验证码"><span class="phone-text">发送验证码</span>
          <input type="Password" placeholder="请输入密码">
          <input type="Password" placeholder="确认密码">
          <div class="signin-button">注册</div>
        </div>
        <div class="signin-sur-middle"></div>
        <div class="signin-sur-right">
          <div>已有账号</div>
          <router-link to="/SignIn"><div class="signin-sur-right-button">直接登录&nbsp;&nbsp;<span class="icon iconfont"></span></div></router-link>
        </div>
      </div>
    </div>
    <sign-in-bg></sign-in-bg>
    <!--<footer-buttom></footer-buttom>-->
  </div>
</template>

<script>
//  import FooterButtom from './FooterButtom.vue'
import SignInBg from './SignInbg.vue'
  export default {
    name: 'UseLess',
    components:{
      SignInBg
//      FooterButtom
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
  .signin-sur-right-button .icon{
    display: inline-block;
    transform: rotate(90deg);
  }
  .signin{
    position: relative;
    min-width: 1200px;
  }
  .signin-blue-content{
    width: 680px;
    position: absolute;
    left: 50%;
    margin-left: -340px;
    top:0;
  }
  .signin-blue-content>img{
    display: block;
    margin-top: 13vh;
  }
  .signin-sur{
    width: 680px;
    height: 482px;
    margin-top: 5vh;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 60px;
    font-size: 0;
  }
  .signin-sur-left>.phone{
    width: 198px;
    border-radius: 4px 0px 0px 4px ;
  }
  .phone-text{
    display: inline-block;
    vertical-align: top;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    color: #0091EA;
    border-radius: 0px 4px 4px 0px;
    border: 1px solid  #E4E4E4;
    border-left: none;
    width: 100px;
    text-align: center;
    cursor: pointer;
  }
  .signin-sur-left{
    width: 360px;
    height: 280px;
    display: inline-block;
    vertical-align: top;
  }
  .signin-sur-left>input{
    width: 300px;
    height: 40px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 14px;
  }
  .signin-sur-left>input:placeholder-shown{
    color: #999999;
  }
  .signin-sur-left>p{
    font-size: 22px;
    line-height: 22px;
    color: #444444;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .signin-button{
    background: #0091EA;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
  }
  .forgot-password{
    font-size: 14px;
    color: #0091EA;
    /*width: 300px;*/
    margin-left: 220px;
    margin-right: 60px;
    text-align: right;
    margin-bottom: 40px;
    cursor: pointer;
  }
  .signin-sur-middle{
    display: inline-block;
    vertical-align: top;
    height: 360px;
    /*line-height: 278px;*/
    border-right: 1px dashed #E4E4E4;
    /*font-size: 14px;*/
    color: #999999;
    position: relative;
  }
  .signin-sur-middle:before{
    content: 'or';
    position: absolute;
    width: 18px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #999999;
    top: 171px;
    left: -7px;
    background: #fff;
  }
  .signin-sur-right{
    display: inline-block;
    vertical-align: top;
    margin-top: 155px;
    margin-left: 86px;
  }
  .signin-sur-right>div{
    font-size: 14px;
    color: #999999;
  }
  .signin-sur-right .signin-sur-right-button{
    font-size: 14px;
    color: #0091EA;
    margin-top: 15px;
    cursor: pointer;
  }
</style>
