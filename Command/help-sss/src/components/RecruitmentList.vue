<template>
  <div>
    <div class="recruitment">
      <img src="../pages/index/assets/tu1.png" alt="">
    </div>
    <div class="recruitment-content">
      <div class="recruitment-content-left">
        <div class="recruitment-content-searchbar">
          <input type="text" placeholder="搜索职位名称、地点">
          <span>找岗位</span>
        </div>
        <div class="hotpost">
          <span class="hotpost-title">热门职位：</span>
          <span>JAVA</span>
          <span>前端</span>
          <span>产品经理</span>
          <span>设计师</span>
          <span>楼层管理</span>
          <span>财务管理</span>
        </div>
        <div class="recruitment-content-table">
          <div class="recruitment-content-table-one">
            <div class="working-place">
              <span class="title">工作地点：</span>
              <div class="bfc" ref="bfc">
                <span class="default-select">不限</span>
                <span>上海</span>
                <span>旧金山</span>
                <span>纽约</span>
                <span>新西兰</span>
                <span>法兰西</span>
                <span>背景</span>
                <span>上海</span>
                <span>旧金山</span>
                <span>纽约</span>
                <span>新西兰</span>
                <span>法兰西</span>
                <span>背景</span>
                <span>上海</span>
                <span>旧金山</span>
                <span>纽约</span>
                <span>新西兰</span>
                <span>法兰西</span>
                <span>背景</span>
                <span>上海</span>
                <span>旧金山</span>
                <span>纽约</span>
                <span>新西兰</span>
                <span>法兰西</span>
                <div v-if="less === false" v-on:click="showmore">更多&nbsp;&nbsp;<i class="icon iconfont"></i></div>
                <div v-if="less" v-on:click="showless">收起&nbsp;&nbsp;<i class="icon iconfont lessshow"></i></div>
              </div>

            </div>
            <div class="working-experience">
              <span class="title">工作经验：</span>
              <span class="default-select">不限</span>
              <span>上海</span>
              <span>旧金山</span>
              <span>纽约</span>
              <span>新西兰</span>
              <span>法兰西</span>
            </div>
            <div class="working-education">
              <span class="title">学历要求：</span>
              <span class="default-select">不限</span>
              <span>上海</span>
              <span>旧金山</span>
              <span>纽约</span>
              <span>新西兰</span>
              <span>法兰西</span>
            </div>
          </div>
          <div class="recruitment-content-table-two">
            <div class="working-education notop">
              <span class="title">排序方式：</span>
              <span class="default-select">不限</span>
              <span>上海</span>
              <span>旧金山</span>
            </div>
          </div>
        </div>

        <div v-on:click="jumptodetail" class="recruitment-content-list">
          <div class="recruitment-content-list-title">
            <span class="job">JAVA工程师</span>
            <span class="place">[深圳-福田区]</span>
            <span class="time">2017-11-16  09:25发布</span>
            <span class="department">集团BU／智能IT／人事研发部</span>
          </div>
          <div class="recruitment-content-list-req">
            <span><i class="icon iconfont"></i>编制内普通员工</span>
            <span><i class="icon iconfont"></i>经验3-5年</span>
            <span><i class="icon iconfont"></i>本科</span>
            <span><i class="icon iconfont"></i>社招</span>
          </div>
          <div class="recruitment-content-list-welfare">
            <span>美女如云</span>
            <span>弹性工作时间</span>
            <span>五险一金</span>
          </div>
        </div>

      </div>
      <div class="recruitment-content-right">
        <img src="../pages/index/assets/tu2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
//  import HeaderTop from './HeaderTop.vue'
//  import FooterButtom from './FooterButtom.vue'
  export default {
    name: 'UseLess',
//    components:{
//      HeaderTop,
//      FooterButtom
//    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        less: false
      }
    },
    methods: {
      showmore: function() {
        this.$refs.bfc.style.height='auto'
//        console.log(this)
//        console.log(this.less)
        this.less = true
      },
      showless: function () {
        this.$refs.bfc.style.height='20px'
        this.less = false
      },
      jumptodetail: function () {
        this.$router.push("/SocialRecruitment/details/55")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
  .recruitment{

  }
  .recruitment img{
    display: block;
    width: 100%;
  }
  .recruitment-content{
    width: 1200px;
    margin: 20px auto;
    margin-bottom: 30px;
    font-size: 0;
  }
  .recruitment-content-left,.recruitment-content-right{
    display: inline-block;
    vertical-align: top;
  }
  .recruitment-content-left{
    width: 1000px;
  }
  .recruitment-content-right{
    margin-left: 20px;
  }

  .recruitment-content-searchbar input{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 840px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    padding-left: 10px;
  }
  .recruitment-content-searchbar span{
    display: inline-block;
    vertical-align: top;
    height: 40px;
    width: 140px;
    text-align: center;
    line-height: 40px;
    background: #0091EA;
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 20px;
    cursor: pointer;
  }
  .hotpost{
    margin-top: 10px;
    font-size: 0;
  }
  .hotpost span{
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #0091EA;
    margin-right: 15px;
    cursor: pointer;
  }
  .hotpost .hotpost-title{
    color: #999999;
    margin-right: 5px;
    cursor: default;
  }
  .recruitment-content-table{
    width: 1000px;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .recruitment-content-table-one{
    box-sizing: border-box;
    padding: 10px 0;
    margin: 0px 10px;
    border-bottom: 1px dashed #E4E4E4;
  }
  .recruitment-content-table-two{
    box-sizing: border-box;
    padding: 10px;
  }
  .working-place{
    font-size: 0;
  }
  /*.working-place span{*/
  /*display: inline-block;*/
  /*vertical-align: top;*/
  /*font-size: 14px;*/
  /*line-height: 20px;*/
  /*margin-right: 15px;*/
  /*padding: 0 5px ;*/
  /*color: #999;*/
  /*cursor: pointer;*/
  /*!*background: #0091EA;*!*/
  /*}*/
  .working-experience{
    margin-top: 10px;
  }
  .notop.working-education{
    margin-top: 0px;
  }
  /*.working-experience span{*/
  /*display: inline-block;*/
  /*vertical-align: top;*/
  /*font-size: 14px;*/
  /*line-height: 20px;*/
  /*margin-right: 15px;*/
  /*padding: 0 5px ;*/
  /*color: #999;*/
  /*cursor: pointer;*/
  /*!*background: #0091EA;*!*/
  /*}*/
  .working-education{
    margin-top: 10px;
  }
  /*.working-education:nth-last-child(1){*/
    /*margin-top: 0;*/
  /*}*/
  .working-place .title{
    height: 100%;
    float: left;
  }
  .bfc{
    height: 20px;
    overflow: hidden;
    padding-right: 100px;
    position: relative;
  }
  .bfc div{
    position: absolute;
    /*width: 30px;*/
    right: 0px;
    top: 0;
    font-size: 14px;
    color: #0091EA;
    cursor: pointer;
    user-select: none;
  }
  .bfc i{
    display: inline-block;
    font-size: 14px;
    transform: rotate(90deg);
  }
  .bfc .lessshow{
    transform: rotate(-90deg);
  }
  .working-place span{
    margin-bottom: 5px;
  }
  .working-education span,.working-experience span,.working-place span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 20px;
    margin-right: 15px;
    padding: 0 5px ;
    color: #999;
    cursor: pointer;
    transform: translate3d(0,0,0);
    transition: all 0.2s;
    /*background: #0091EA;*/
  }
  .recruitment-content-table-one .title,.recruitment-content-table-two .title{
    font-weight: bold;
    color: #333;
    background: #fff;
    cursor: default;
  }
  .recruitment-content-table-one .title:hover,.recruitment-content-table-two .title:hover{
    font-weight: bold;
    color: #333;
    background: #fff;
  }
  .recruitment-content-table-one span:hover,.recruitment-content-table-two span:hover{
    color: #fff;
    background: #0091EA;
  }

  .working-education .default-select,.working-place .default-select,.working-experience .default-select{
    color: #fff;
    background: #0091EA;
  }
  .recruitment-content-list{
    width: 100%;
    padding-top: 20px;
    border-bottom: 1px solid  #E4E4E4;
  }
  .recruitment-content-list-req{
    height: 17px;
    margin-top: 10px;
  }
  .recruitment-content-list-req span{
    font-size: 14px;
    color: #0091EA;
    /*padding-left: 20px;*/
    margin-right: 20px;
  }
  .recruitment-content-list-req i{
    padding-right: 5px;
  }
  .job{
    font-size: 16px;
    color: #444444;
    font-weight: bold;
    margin-right: 6px;
  }
  .place{
    font-size: 16px;
    color: #444444;
    margin-right: 18px;
  }
  .time{
    font-size: 12px;
    color: #999999;
  }
  .department{
    font-size: 14px;
    color: #666666;
    float: right;
  }
  .recruitment-content-list-welfare{
    margin: 20px 0;
  }
  .recruitment-content-list-welfare span{
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
    color: #666666;
    height: 22px;
    line-height: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #E4E4E4;
    border-radius: 16px;
    margin-right: 10px;
  }
  .recruitment-content-list-title{
    height: 19px;
    line-height: 19px;
  }
</style>
