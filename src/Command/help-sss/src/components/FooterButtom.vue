<template>
  <div class="footer">
    <div class="footer-content">
      <div>Copyright 2016 by red starCO,LTD.All rights reserved 沪ICP备12018312号-1</div>
      <div>沪公网安备 31010702002586号</div>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    min-width: 1200px;
    border-top: 1px solid #E4E4E4;
    height: 83px;
    /*width: 1200px;*/
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    line-height: 22px;
    box-sizing: border-box;
    padding-top: 20px;
    margin:auto;
  }


</style>
