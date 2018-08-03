<template>
  <div class="recruit">
    <div class="recruit-content clearfix">
      <div class="recruit-content-left-banner">
        <router-link to="/UserCenter/MyResume"><li><i class="icon iconfont"></i>我的简历</li></router-link>
        <router-link to="/UserCenter/MyRecommend"><li><i class="icon iconfont"></i>我推荐的</li></router-link>
        <router-link to="/UserCenter/MyApply"><li><i class="icon iconfont"></i>我申请的</li></router-link>
        <router-link to="/UserCenter/MyCollection"><li><i class="icon iconfont"></i>我收藏的</li></router-link>
      </div>
      <!--个人中心-我推荐的-->
      <div class="my-recommend">
        <div class="my-recommend-title">我推荐的</div>
        <div class="my-recommend-searchbar">
          <span>姓名 ：</span>
          <input type="text">
          <span>应聘职位 ：</span>
          <input type="text">
          <span class="education-select">学历 ：</span>
          <button-select :from="educationrec" ref="buttonselect-b1"></button-select>
          <span class="my-recommend-search">搜索</span>
        </div>
        <table class="myrecommend-table">
          <thead>
          <tr>
            <th>姓名</th>
            <th>应聘职位</th>
            <th>简历</th>
            <th>学历</th>
            <th>工作年限</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              张晓红
            </td>
            <td>
              营销经理
            </td>
            <td class="showdetail">
              查看
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
          </tr>
          <tr>
            <td>
              张晓红
            </td>
            <td>
              营销经理
            </td>
            <td class="showdetail">
              查看
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
          </tr>
          <tr>
            <td>
              张晓红
            </td>
            <td>
              营销经理
            </td>
            <td class="showdetail">
              查看
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
          </tr>
          </tbody>
        </table>
      </div>



    </div>
  </div>
</template>

<script>
  import ButtonSelect from './ButtonSelect.vue'

  export default {
    name: 'HelloWorld',
    components:{
      ButtonSelect,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        educationrec: {
          from:'educationrec',
          list:[
            {msg:'1年'},
            {msg:'2年'},
            {msg:'3~5年'},
            {msg:'5~10年'},
            {msg:'10年以上111'},
          ]
        },
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myrecommend-table .showdetail{
    color: #0091EA;
  }
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
  .my-recommend{
    float: left;
    margin-left: 19px;
    margin-bottom: 20px;
    width: 960px;
    min-height: 400px;
  }
  .my-recommend-title{
    font-size: 18px;
    line-height: 18px;
    color: #444444;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .my-recommend-searchbar{
    height: 36px;
    /*background: gainsboro;*/
    font-size: 0;
    margin-bottom: 20px;
  }
  .my-recommend-searchbar input {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 34px;
    padding: 0;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-right: 20px;
    margin-left: 10px;
  }
  .my-recommend-searchbar select{
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 36px;
    padding: 0;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-right: 20px;
    margin-left: 10px;
    position: relative;
    background: url("../pages/index/assets/logo.png") no-repeat scroll right center transparent;
    background-size: 36px;
  }
  .my-recommend-searchbar span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #444444;
    line-height: 36px;
  }
  .my-recommend-searchbar .my-recommend-search{
    background: #0091EA;
    border-radius: 4px;
    color: #ffffff;
    padding: 0 16px;
  }

  .myrecommend-table {
    border-collapse: collapse; /*相邻边被合并;separate: 边框独立*/
    border: none;
    width: 960px;
  }
  .myrecommend-table td {
    border: solid #CCC 1px;
    height: 38px;
    text-align: center;
    width: 20%;
    font-size: 14px;
    color: #444444;
    padding: 0px 12px;
  }

  .myrecommend-table th{
    border: solid #CCC 1px;
    height: 34px;
    background: #F5F5F5;
    font-size: 14px;
    color: #444444;
  }
</style>
