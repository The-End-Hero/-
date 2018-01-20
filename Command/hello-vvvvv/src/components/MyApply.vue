<template>
  <div class="recruit">
    <div class="recruit-content clearfix">
      <div class="recruit-content-left-banner">
        <router-link to="/UserCenter/MyResume"><li><i class="icon iconfont"></i>我的简历</li></router-link>
        <router-link to="/UserCenter/MyRecommend"><li><i class="icon iconfont"></i>我推荐的</li></router-link>
        <router-link to="/UserCenter/MyApply"><li><i class="icon iconfont"></i>我申请的</li></router-link>
        <router-link to="/UserCenter/MyCollection"><li><i class="icon iconfont"></i>我收藏的</li></router-link>
      </div>


      <!--个人中心-我申请的-->
      <div class="my-apply">
        <div class="my-apply-title">我申请的</div>
        <div class="my-apply-searchbar">
          <span>职位名称：</span>
          <input type="text">
          <span>部门：</span>
          <input type="text">
          <span class="education-select">工作地点：</span>
          <!--<select>-->
            <!--<option value="volvo">高中</option>-->
            <!--<option value="saab">学士</option>-->
            <!--<option value="opel">硕士</option>-->
            <!--<option value="audi">博士</option>-->
          <!--</select>-->
          <button-select :from="jobplace" ref="buttonselect-"></button-select>
          <span class="education-select">职位状态：</span>
          <!--<select>-->
            <!--<option value="volvo">高中</option>-->
            <!--<option value="saab">学士</option>-->
            <!--<option value="opel">硕士</option>-->
            <!--<option value="audi">博士</option>-->
          <!--</select>-->
          <button-select :from="jobstatus" ref="buttonselect-www"></button-select>
          <span class="my-apply-search">搜索</span>
        </div>
        <table class="myapply-table">
          <thead>
          <tr>
            <th>职位名称</th>
            <th>部门</th>
            <th>职级</th>
            <th>学历</th>
            <th>工作年限</th>
            <th>工作地点</th>
            <th>发布时间</th>
            <th>职位状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              前端开发工程师
            </td>
            <td class="two">
              人力资源中心-人力资源支持
            </td>
            <td>
              经理
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
            <td>
              上海
            </td>
            <td>
              2017-07-11
            </td>
            <td>
              在线
            </td>
            <td class="delete">
              <i class="icon iconfont"></i>删除
            </td>
          </tr>
          <tr>
            <td>
              前端开发工程师
            </td>
            <td>
              人力资源中心-人力资源支持
            </td>
            <td>
              经理
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
            <td>
              上海
            </td>
            <td>
              2017-07-11
            </td>
            <td>
              在线
            </td>
            <td class="delete">
              <i class="icon iconfont"></i>删除
            </td>
          </tr>
          <tr>
            <td>
              前端开发工程师
            </td>
            <td>
              人力资源中心-人力资源支持
            </td>
            <td>
              经理
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
            <td>
              上海
            </td>
            <td>
              2017-07-11
            </td>
            <td>
              在线
            </td>
            <td class="delete">
              <i class="icon iconfont"></i>删除
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
        jobstatus: {
          from:'jobstatus',
          list:[
            {msg:'1年'},
            {msg:'2年'},
            {msg:'3~5年'},
            {msg:'5~10年'},
            {msg:'10年以上'},
          ]
        },
        jobplace: {
          from:'jobplace',
          list:[
            {msg:'1年'},
            {msg:'2年'},
            {msg:'3~5年'},
            {msg:'5~10年'},
            {msg:'10年以上'},
          ]
        },
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myapply-table td.delete{
    font-size: 14px;
    color: #0091EA;
    cursor: pointer;
    user-select: none;
  }
  .myapply-table td.delete .icon{
    margin-right: 6px;
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
  .my-apply{
    width: 960px;
    margin-left: 20px;
    float: left;
  }
  .my-apply-title{
    font-size: 18px;
    color: #444444;
    margin-bottom: 21px;
    margin-top: 10px;
    line-height: 18px;
  }
  .my-apply-searchbar{
    height: 36px;
    /*background: gainsboro;*/
    font-size: 0;
    margin-bottom: 20px;
  }
  .my-apply-searchbar input {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    height: 36px;
    padding: 0;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-right: 20px;
    margin-left: 10px;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .my-apply-searchbar select{
    display: inline-block;
    vertical-align: top;
    width: 120px;
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
  .my-apply-searchbar span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #444444;
    line-height: 36px;
  }
  .my-apply-searchbar .my-apply-search{
    background: #0091EA;
    border-radius: 4px;
    color: #ffffff;
    padding: 0 16px;
  }
  .myapply-table{
    border-collapse: collapse; /*相邻边被合并;separate: 边框独立*/
    border: none;
    width: 960px;
  }
  .myapply-table td {
    border: solid #CCC 1px;
    height: 38px;
    text-align: center;
    /*width: 20%;*/
    font-size: 14px;
    color: #444444;
    padding: 12px;
  }
  .myapply-table .two{
    width: 163px;
  }
  .myapply-table th{
    border: solid #CCC 1px;
    height: 34px;
    background: #F5F5F5;
    font-size: 14px;
    color: #444444;
  }
</style>
