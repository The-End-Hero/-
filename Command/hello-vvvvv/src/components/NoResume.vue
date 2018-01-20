<template>
  <div class="recruit-content clearfix">
    <div class="recruit-content-left-banner">
      <router-link to="/UserCenter/MyResume"><li><i class="icon iconfont"></i>我的简历</li></router-link>
      <router-link to="/UserCenter/MyRecommend"><li><i class="icon iconfont"></i>我推荐的</li></router-link>
      <router-link to="/UserCenter/MyApply"><li><i class="icon iconfont"></i>我申请的</li></router-link>
      <router-link to="/UserCenter/MyCollection"><li><i class="icon iconfont"></i>我收藏的</li></router-link>
    </div>
    <!--个人中心-我的简历(无简历)-->
    <div class="recruit-content-right-noresume">
      <div class="recruit-content-right-noresume-content">
        <div class="recruit-content-right-noresume-logo"></div>
        <div class="recruit-content-right-noresume-words">亲，你还没有简历信息</div>
        <div class="recruit-content-right-noresume-button" v-on:click.stop="changeshow">创建简历</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      changeshow(){
        console.log(this.$parent)
        this.$parent.showrule={
          noresume:false,
          previewresume:false,
          createresume:true,
        }
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recruit-content{
    width: 1200px;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .recruit-content-left-banner{
    box-sizing: border-box;
    float: left;
    width: 180px;
    min-height: 486px;
    background: #F5F5F5;
    padding-top: 10px;
    margin-bottom: 20px;
  }
  .recruit-content-left-banner li{
    line-height: 48px;
    font-size: 14px;
    color: #444444;
    font-weight: bold;
    cursor: pointer;
  }
  .recruit-content-left-banner i{
    padding-right: 9px;
    padding-left: 28px;
    font-size: 14px;
  }
  .recruit-content-right-noresume{
    float: left;
    width: 982px;
    min-height: 486px;
    margin-left: 35px;
    background: rgba(255,255,255,0.05);
    border: 1px dashed  #E4E4E4;
    border-radius: 4px;
    position: relative;
  }
  .recruit-content-right-noresume-content{
    position: absolute;
    left: 50%;
    top: 50%;
    height: 186px;
    width: 420px;
    margin-left: -210px;
    margin-top: -93px;
    /*background: red;*/
  }
  .recruit-content-right-noresume-logo{
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background: url("../pages/index/assets/jianli_01.png");
    background-size: cover;
  }
  .recruit-content-right-noresume-words{
    height: 70px;
    font-size: 16px;
    line-height: 70px;
    text-align: center;
    color: #999999;
  }
  .recruit-content-right-noresume-button{
    background: #0091EA;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    width: 90px;
    margin: 0 auto;
    text-align: center;
  }
</style>
