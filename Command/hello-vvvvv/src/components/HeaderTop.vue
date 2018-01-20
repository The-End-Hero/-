<template>
  <div>
    <div class="header">
      <div class="header-contant">
        <div class="wechat icon iconfont icon-icon_shouji" v-on:mouseenter="inwechat" v-on:mouseleave="outwechat">微信版</div>
        <div>
          <router-link to="/SignIn"><span class="Sign-in">登录</span></router-link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <router-link to="/Register"><span class="register">注册</span></router-link>
          </div>
        <div>欢迎来到红星美凯龙招聘！</div>
        <div class="qrcode" ref="qrcode">
          <div class="triangle"></div>
          <div class="triangle-wa"></div>
          <div class="qrcode-content">
            <img src="" alt="">
            扫一扫关注红星美凯龙招聘微信公众号
          </div>
        </div>
      </div>
    </div>
    <div class="header-logo">
      <div class="header-logo-contant">
        <img class="header-logo-logo" src="http://www.chinaredstar.com/images/logo.jpg" alt="红星美凯龙">
        <div class="header-logo-title">红星美凯龙招聘</div>
      </div>
    </div>
    <div class="header-banner">
      <div class="header-banner-list">
        <router-link to="/HomePage"><li ref="homepage">首页</li></router-link>
        <router-link to="/SocialRecruitment"><li ref="socialrecruitment">社会招聘</li></router-link>
        <router-link to=""><li>校园招聘</li></router-link>
        <router-link to=""><li>实习生招聘</li></router-link>
        <router-link to="/UserCenter/MyResume"><li ref="usercenter">个人中心</li></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      inwechat:function () {
        console.log(123)
        this.$refs.qrcode.style.display='block'
      },
      outwechat:function () {
        this.$refs.qrcode.style.display='none'
      }
    },
    mounted:function () {
      if(window.location.href.indexOf('UserCenter')>-1){
//        alert(123)
        this.$refs.usercenter.style.backgroundColor='#0091EA'
      }else if(window.location.href.indexOf('HomePage')>-1){
        this.$refs.homepage.style.backgroundColor='#0091EA'
      }else if(window.location.href.indexOf('SocialRecruitment')>-1){
        this.$refs.socialrecruitment.style.backgroundColor='#0091EA'
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    box-sizing: border-box;
    height: 40px;
    background: #F5F5F5;
    border-bottom: 1px solid #E4E4E4;
    min-width: 1200px;
  }
  .header-contant{
    margin: 0 auto;
    width: 1200px;
    height: 40px;
    /*padding-top: 10px;*/
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
    position: relative;
  }
  .header-contant >div{
    float: right;
    margin-left: 30px;
    padding: 10px 0;

  }
  .header-logo{
    height: 100px;
  }
  .header-logo-contant{
    margin: 0 auto;
    width: 1200px;
    height: 100px;
  }
  .header-logo-title{
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 22px;
    color: #262626;
    line-height: 30px;
    float: left;
    margin: 35px 28px;
  }
  .header-logo-logo{
    float: left;
    display: block;
    width: 170px;
    height: 52px;
    margin: 24px 0;
  }
  .header-banner{
    height: 50px;
    background: #223857;
    color: #fff;
    font-size: 16px;
    min-width: 1200px;
    /*line-height: 50px;*/
  }
  .header-banner-list{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
  }
  .header-banner-list li:hover{
    background: #0091EA;
    user-select: none;
  }
  .header-banner-list  li{
    float: left;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 14px 40px;
    transition: background 0.2s;
  }
  .Sign-in{
    color: #0091EA;
    cursor: pointer;
    padding: 10px 0;
  }
  .register{
    cursor: pointer;
    padding: 10px 0;
    color: #666;
  }
  .header-contant .wechat{
    cursor: pointer;
    padding: 10px 0;
    font-size: 14px;
    position: relative;
    margin-left: 30px;
    padding-left: 22px;
  }
  .wechat:before{
    position: absolute;
    top: 10px;
    left: -3px;
    content: "\e6d5";
    font-size: 18px;

    /*margin-right: 10px;*/
    /*line-height: 20px;*/
  }

  .header-contant > .qrcode{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    float: none;
    position: absolute;
    right: -20px;
    top: 40px;
    width: 180px;
    height: 230px;
    z-index: 999;
    display: none;
    /*background: #FFFFFF;*/
    /*box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.10);*/
    /*padding: 20px;*/
  }
  .qrcode .triangle{
    position: absolute;
    top: 6px;
    right: 50px;
    width: 0;
    height: 0;
    /*background: red;*/
    z-index: 9;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 5px solid #fff;
    /*box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.10);*/
  }
  .qrcode .triangle-wa{
    position: absolute;
    top:12px;
    background: #fff;
    right: 50px;
    width: 30px;
    height: 15px;
    /*background: red;*/
    z-index: 99;
    /*border-left: 24px solid transparent;*/
    /*border-right: 24px solid transparent;*/
    /*border-bottom: 10px solid #fff;*/
    /*box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.10);*/
  }
  .qrcode .triangle:before{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    transform:rotate(63deg);
    top: 2px;
    left: -9px;
    box-shadow: -1px 0px 0px 0px rgba(0,0,0,0.10);
  }
  .qrcode .triangle:after{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    transform:rotate(25deg);
    top: 2px;
    left: -4px;
    box-shadow: 0px -1px 0px 0px rgba(0,0,0,0.10);
  }
  .qrcode .qrcode-content{
    border: 1px solid #E4E4E4;
    background: #FFFFFF;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.10);
    height: 225px;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 19px;
    font-size: 14px;
    color: #0091EA;
    line-height: 17px;
    text-align: center;
  }
  .qrcode-content img{
    display: block;
    background: gray;
    width: 140px;
    height: 140px;
    margin-bottom: 11px;
  }
</style>
