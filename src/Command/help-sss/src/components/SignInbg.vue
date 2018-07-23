<template>
  <div>
    <div class="signin-blue"></div>
    <div class="signin-white"></div>
    <footer-buttom></footer-buttom>
  </div>
</template>

<script>
  import FooterButtom from './FooterButtom.vue'
  export default {
    name: 'UseLess',
    components:{
      FooterButtom
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
  .signin-blue{
    min-width: 1200px;
    min-height: 310px;
    height: 48vh;
    background: url("../pages/index/assets/zhuce_beijing.png");
    background-repeat: repeat-x;
    background-size: auto 100% ;
  }
  .signin{
    position: relative;
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
  .signin-white{
    min-width: 1200px;
    min-height: 264px;
    height: 40vh;
    background: #fff;
  }
  .signin-sur{
    width: 680px;
    height: 400px;
    margin-top: 5vh;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 60px;
    font-size: 0;
  }
  .signin-sur-left{
    width: 360px;
    height: 280px;
    display: inline-block;
    vertical-align: top;
  }
  .signin-sur-left>input{
    width: 298px;
    height: 38px;
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
  .signin-sur-right>.signin-sur-right-button{
    font-size: 14px;
    color: #0091EA;
    margin-top: 15px;
    cursor: pointer;
  }
</style>
