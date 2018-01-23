<template>
  <div class="signin">
    <!--<div class="signin-blue"></div>-->
    <!--<div class="signin-white"></div>-->
    <div class="signin-blue-content">
      <img src="../pages/index/assets/logo_bai.png" alt="红星美凯龙">
      <div class="signin-sur">
        <div class="signin-sur-left">
          <p>找回密码</p>
          <!--<div class="forgot-password-status">-->
            <!--<div class="blue">-->
              <!--<span class="forgot-password-status-one">1</span>-->
              <!--<span class="forgot-password-status-onetext">验证手机号</span>-->
            <!--</div>-->
            <!--<div class="line"></div>-->
            <!--<div >-->
              <!--<span class="forgot-password-status-two">2</span>-->
              <!--<span class="forgot-password-status-twotext">重置密码</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<input type="text" placeholder="请输入手机号">-->
          <!--<input class="phone" type="tel" placeholder="请输入手机验证码"><span class="phone-text">发送验证码</span>-->
          <!--<div class="signin-button">下一步</div>-->
          <!--<router-link to="/SignIn"><div class="backtosignin">返回登录</div></router-link>-->



          <div class="forgot-password-status">
            <div class="blue">
              <span class="forgot-password-status-one icon iconfont"></span>
              <span class="forgot-password-status-onetext">验证手机号</span>
            </div>
            <div class="line blue"></div>
            <div class="blue">
              <span class="forgot-password-status-two">2</span>
              <span class="forgot-password-status-twotext">重置密码</span>
            </div>
          </div>
          <input type="password" placeholder="设置新密码">
          <input type="password" placeholder="确认密码">
          <div class="signin-button">确定</div>
          <div class="popconfirm">
            <i class="icon iconfont"></i>
            修改成功!
          </div>
        </div>
        <!--<div class="signin-sur-middle"></div>-->
        <!--<div class="signin-sur-right">-->
          <!--<div>还没有账号</div>-->
          <!--<router-link to="/Register">-->
            <!--<div class="signin-sur-right-button">立即注册</div>-->
          <!--</router-link>-->
        <!--</div>-->
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
//      FooterButtom,
      SignInBg
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
  .signin{
    position: relative;
    min-width: 1200px;
  }
  .signin-blue-content{
    width: 480px;
    position: absolute;
    left: 50%;
    margin-left: -240px;
    top:0;
  }
  .signin-blue-content>img{
    display: block;
    margin-top: 13vh;
  }
  .signin-sur{
    width: 480px;
    height: 426px;
    margin-top: 5vh;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 60px 90px;
    font-size: 0;
    position: relative;
  }
  .backtosignin{
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 14px;
    color: #0091EA;
    line-height: 17px;
    cursor: pointer;
  }
  .signin-sur-left{
    /*width: 360px;*/
    /*height: 280px;*/
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
    margin-bottom: 30px;
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
    height: 278px;
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
    top: 112px;
    left: -7px;
    background: #fff;
  }
  .signin-sur-right{
    display: inline-block;
    vertical-align: top;
    margin-top: 113px;
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
  .forgot-password-status{
    height: 34px;
    width: 100%;
    margin-bottom: 40px;
    position: relative;
  }
  .popconfirm{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -48px;
    margin-left: -65px;
    background: rgba(0,0,0,0.80);
    border-radius: 4px;
    width: 130px;
    height: 96px;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    line-height: 17px;
  }
  .popconfirm .icon{
    display: block;
    box-sizing: border-box;
    margin: auto;
    margin-top: 21px;
    margin-bottom: 6px;
    width: 30px;
    height: 30px;
    line-height: 26px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .forgot-password-status > div{
    display: inline-block;
    vertical-align: top;
    font-size: 0px;
    color: #999999;
  }
  .forgot-password-status-one.icon{
    font-size: 18px!important;
    line-height: 34px !important;
    border: none !important;
    color: #fff !important;
    /*background-color: #fff !important;*/

  }
  .forgot-password-status-one,.forgot-password-status-two{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    line-height: 34px;
    text-align: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
    font-size: 14px;
  }
  .forgot-password-status-onetext,.forgot-password-status-twotext{
    font-size: 14px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    line-height: 34px;
    text-align: center;
    height: 34px;
    margin-left: 10px;
  }
  .blue .forgot-password-status-one,.blue .forgot-password-status-two{
    border: 1px solid  #0091EA;
    background:  #0091EA;
    color: #fff;
  }
  .blue .forgot-password-status-onetext,.blue .forgot-password-status-twotext{
    color: #0091EA;
  }
  .line{
    box-sizing: border-box;
    width: 72px;
    height: 17px;
    border-bottom: 1px solid #E4E4E4;
    margin-left: 9px;
  }
  .blue.line{
    border-bottom: 1px solid #0091EA;
  }
</style>
