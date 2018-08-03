<template>
  <div class="recruit-content clearfix">
    <div class="popshow" v-if="popshow">
      <div class="popbg"></div>
      <div class="popcontent">
        <div class="poptitle">亲，若有简历请先上传简历：</div>
        <div class="popupload">
          <span class="popuploadbtn">上传</span>
          <!--<input type="file">上传</input>-->
          <span>支持扩展名：.doc .docx .pdf .jpg，最大支持5M</span>
        </div>
        <div class="popuploadjump">
          <span class="popuploadjumpbtn">继续</span>
          <span v-on:click="hidepop">没有简历，直接跳过&nbsp;&nbsp;&nbsp;>> </span>
        </div>
      </div>
    </div>
    <div class="recruit-content-left-banner" ref="leftbanner">
      <router-link to="/UserCenter/MyResume"><li><i class="icon iconfont"></i>我的简历</li></router-link>
      <router-link to="/UserCenter/MyRecommend"><li><i class="icon iconfont"></i>我推荐的</li></router-link>
      <router-link to="/UserCenter/MyApply"><li><i class="icon iconfont"></i>我申请的</li></router-link>
      <router-link to="/UserCenter/MyCollection"><li><i class="icon iconfont"></i>我收藏的</li></router-link>
    </div>
    <!--个人中心-创建简历-->
    <div class="my-resume">
      <div class="my-resume-title">我的简历</div>
      <div class="my-resume-content clearfix">
        <div class="my-resume-content-title twoline">基础信息</div>
        <div class="create-resume-content-content">
          <span><i>*</i>姓名：</span>
          <input type="text">
          <span><i>*</i>性别：</span>
          <span :class="sex==='male'?'icon iconfont icon-icon_danxuan2':'icon iconfont icon-icon_danxuan1'" v-on:click="changesex">男</span>
          <span :class="sex==='male'?'icon iconfont icon-icon_danxuan1':'icon iconfont icon-icon_danxuan2'" v-on:click="changesex">女</span>
          <!--<input type="text">-->
          <span><i>*</i>出生日期：</span>
          <input type="text">
          <span><i>*</i>国籍：</span>
          <input type="text">
          <span><i>*</i>手机号：</span>
          <input type="text">
          <span><i>*</i>个人邮箱：</span>
          <input type="text">
          <span><i>*</i>工作年限：</span>
          <button-select :from="workingtime" ref="buttonselect"></button-select>
          <span><i>*</i>现居住地：</span>
          <input type="text">
          <span><i>*</i>期望工作地：</span>
          <input type="text">
          <span><i>*</i>最高学历：</span>
          <button-select :from="education" ref="buttonselect-www"></button-select>
          <span>身份证号：</span>
          <input type="text">
        </div>
      </div>
      <div class="my-resume-content experience clearfix">
        <div class="my-resume-content-title twoline">工作经历</div>
        <div class="create-resume-content-content">
          <span><i>*</i>工作单位：</span>
          <input type="text">
          <span><i>*</i>职位：</span>
          <input type="text">
        </div>
        <div class="create-resume-timer">
          <span><i>*</i>工作时间：</span>
          <input type="text">
          <span class="link-time">~</span>
          <input type="text">
        </div>
        <div class="create-resume-text">
          <span><i>*</i>职位描述：</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="create-resume-content-line uselessline">
          <!--<div class="deletelist">删除</div>-->
          <!--<div class="newlist">新增一条</div>-->
        </div>
        <div class="create-resume-content-content">
          <span><i>*</i>工作单位：</span>
          <input type="text">
          <span><i>*</i>职位：</span>
          <input type="text">
        </div>
        <div class="create-resume-timer">
          <span><i>*</i>工作时间：</span>
          <input type="text">
          <span class="link-time">~</span>
          <input type="text">
        </div>
        <div class="create-resume-text">
          <span><i>*</i>职位描述：</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="create-resume-content-line">
          <div class="deletelist">删除</div>
          <div class="newlist">新增一条</div>
        </div>
      </div>
      <div class="my-resume-content experience clearfix">
        <div class="my-resume-content-title twoline">教育经历</div>
        <div class="create-resume-content-content">
          <span><i>*</i>学校：</span>
          <input type="text">
          <span><i>*</i>专业：</span>
          <input type="text">
        </div>
        <div class="create-resume-timer">
          <span><i>*</i>时间：</span>
          <input type="text">
          <span class="link-time">~</span>
          <input type="text">
        </div>
        <div class="create-resume-text">
          <span><i>*</i>专业描述：</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="create-resume-content-line firstline">
          <div class="newlist">新增一条</div>
        </div>
      </div>
      <div class="my-resume-content experience clearfix">
        <div class="my-resume-content-title twoline">项目经历</div>
        <div class="create-resume-content-content">
          <span><i>*</i>项目名称：</span>
          <input type="text">
          <!--<span><i>*</i>专业：</span>-->
          <!--<input type="text">-->
        </div>
        <div class="create-resume-timer">
          <span><i>*</i>时间：</span>
          <input type="text">
          <span class="link-time">~</span>
          <input type="text">
        </div>
        <div class="create-resume-text">
          <span><i>*</i>职责描述：</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="create-resume-content-line firstline">
          <div class="newlist">新增一条</div>
        </div>
      </div>
      <div class="my-resume-content clearfix">
        <div class="my-resume-content-title twoline">附件上传：</div>
        <div class="create-resume-content-content resume-up">
          <span>简历：</span>
          <div class="resume-upload">
            <span class="resume-upload-btn">选择文件</span>
            <span class="resume-upload-text">只能上传 txt,pdf,gif,jpeg,png,rar,zip,doc,docx,xls,xlsx,,ppt,pptx 类型的附件，且耽搁附件须小于10M，大附件请拆分上传</span>
          </div>
        </div>

      </div>
      <div class="saveresume">保存简历</div>
    </div>
    <div class="my-resume-status">
      <div class="my-resume-status-per">
        <div class="my-resume-status-per-title">简历完成度 :<span>10%</span></div>
        <div class="my-resume-status-per-per">
          <div></div>
        </div>
        <div class="preview_resume" v-on:click.stop="changeshow"><i class="icon iconfont"></i>预览简历</div>
      </div>
      <div class="my-resume-status-class" ref="statuslist">
        <div v-on:click="checklist" class="my-resume-status-class-chosen">基础信息</div>
        <div v-on:click="checklist">工作经历</div>
        <div v-on:click="checklist">教育经历</div>
        <div v-on:click="checklist">项目经历</div>
        <div v-on:click="checklist">附件</div>
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
    methods:{
      changesex(e){
        console.log(e)
        console.log( e.target.innerHTML)
        if(e.target.innerHTML.indexOf('男')>-1){
          this.sex = 'male'
        }else {
          this.sex = 'female'
        }
      },
      hidepop(){
        this.popshow = false
      },
      changeshow(){
//        console.log(this.$parent)
        this.$parent.showrule={
          noresume:false,
          previewresume:true,
          createresume:false,
        }
      },
      // 右侧边栏点击
      checklist(el){
//        console.log(el.target.parentNode.children,'children')
        const els = el.target.parentNode.children
        for(let i=0;i<els.length;i++){
          els[i].className=''
          if(els[i]===el.target){
            window.scroll(0,this.listHeight[i])
          }
        }
        el.target.className="my-resume-status-class-chosen"

//        console.log('listheight',this.listHeight)

      }
    },
    mounted(){
      const height = this.$parent.$el.offsetHeight-20+'px'
      this.$refs.leftbanner.style.height = height
//      console.log(this.$parent.$el.offsetHeight-20)
//      console.log(this.$refs.statuslist)
      const listHeight = document.querySelectorAll('.my-resume-content')
      for(let i=0;i<listHeight.length;i++){
        this.listHeight[i] = listHeight[i].offsetTop
      }
    },
    data () {
      return {
        sex:'male' ,
        popshow:true,
        workingtime:{
          from:'workingtime',
          list:[
            {msg:'1年'},
            {msg:'2年'},
            {msg:'3~5年'},
            {msg:'5~10年'},
            {msg:'10年以上'},
          ]
        },
        education:{
          from:'education',
          list:[
            {msg:'博士'},
            {msg:'硕士'},
            {msg:'本科'},
            {msg:'大专'},
            {msg:'中专'},
          ]
        },
        listHeight:[],

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recruit-content{
    /*position: relative;*/
  }
  .popshow{
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99999;
  }
  .popbg{
    background: rgba(0,0,0,0.20);
    height: 100%;
    width: 100%;
  }
  .popcontent{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -115px;
    margin-left: -240px;
    width: 480px;
    height: 230px;
    background: #fff;
    box-sizing: border-box;
    padding: 30px;
  }
  .poptitle{
    font-size: 18px;
    color: #444444;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .popupload{
    box-sizing: border-box;
    background: rgba(255,255,255,0.05);
    border: 1px dashed #E4E4E4;
    border-radius: 4px;
    font-size: 0;
    padding: 12px 15px;
  }
  .popupload span{
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    width: 288px;
    font-size: 14px;
    color: #999999;
    line-height: 17px;
  }

  .popupload .popuploadbtn{
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    background: #0091EA;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    width: 90px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
  }
  .popuploadjump{
    margin-top: 30px;
    font-size: 0;

  }
  .popuploadjump span{
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    color: #0091EA;
    line-height: 40px;
  }
  .popuploadjump .popuploadjumpbtn{
    background: #0091EA;
    border-radius: 4px;
    font-size: 16px;
    color: #FFFFFF;
    width: 120px;
    height: 40px;
    margin-right: 115px;
    text-align: center;
  }
  .resume-up.create-resume-content-content{
    width: 100%;
  }
  .resume-upload{
    display: inline-block;
    vertical-align: top;
    background: rgba(255,255,255,0.05);
    border: 1px dashed #E4E4E4;
    border-radius: 4px;
    box-sizing: border-box;
    width: 610px;
    height: 60px;
    margin-top: 20px;
    padding: 12px 20px;
  }
  .create-resume-content-content .resume-upload span{
    display: inline-block;
    vertical-align: top;
    margin-top: 0;
  }
  .create-resume-content-content .resume-upload-btn{
    background: #0091EA;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    width: 90px;
    height: 36px;
    text-align: center;
  }
  .create-resume-content-content .resume-upload-text{
    width: 468px;
    font-size: 14px;
    color: #999999;
    line-height: 18px;
    margin-left: 10px;
  }
  .saveresume{
    width: 120px;
    height: 40px;
    background: #0091EA;
    border-radius: 4px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .firstline{
    margin-top: 30px !important;
    margin-bottom: 50px !important;
  }
  .uselessline{
    margin-top: 30px !important;
    margin-bottom: 0px !important;
  }
  .deletelist{
    font-size: 14px;
    color: #0091EA;
    line-height: 17px;
    width: 30px;
    position: absolute;
    right: 0;
    top: -37px;
    cursor: pointer;
  }
  .newlist{
    font-size: 14px;
    color: #0091EA;
    line-height: 17px;
    width: 58px;
    position: absolute;
    left: 0;
    top: 16px;
    cursor: pointer;
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
  .my-resume{
    float: left;
    margin-left: 19px;
    margin-bottom: 20px;
    width: 800px;
    min-height: 400px;
  }
  .my-resume-title{
    margin-top: 10px;
    font-size: 18px;
    color: #444444;
  }
  .my-resume-content{
    margin-top: 20px;
    border: 1px solid #E4E4E4;
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    padding: 40px;
    /*padding-bottom: 0px;*/
  }
  .my-resume-content.experience{
    padding-bottom: 0px;
  }
  .my-resume-content-title{
    font-size: 16px;
    line-height: 19px;
    /*margin-bottom: 30px;*/
    color: #444444;
    font-weight: bold;
  }
  .my-resume-content-title.twoline{
    /*margin-bottom: 11px;*/
  }
  .my-resume-content-content-oneline{
    width: 100%;
    /*float: left;*/
  }
  .my-resume-content-content-oneline .my-resume-content-content-detail-one{
    width: 13.45%;
    height: 100%;
  }
  .my-resume-content-content-oneline .my-resume-content-content-detail-two{
    width: 86%;
  }
  .my-resume-content-content{
    width: 276px;
    float: left;
  }
  .my-resume-content-content-detail{
    width: 100%;
    font-size: 0;
    line-height: 17px;
    margin-top: 19px;
  }
  .my-resume-content-content-detail>span{
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #444444;
  }
  .my-resume-content-content-detail-one{
    width: 35%;
    height: 100%;
  }
  .my-resume-content-content-detail-two{
    width: 65%;
    /*height: 100%;*/
  }
  .my-resume-content-line{
    height: 1px;
    border-bottom: 1px dashed #E4E4E4;
    margin: 30px 0;
  }





  .my-resume-confirm{
    height: 100px;

  }
  .my-resume-confirm-content{
    padding-top: 40px;
    height: 40px;
  }
  .my-resume-confirm-content>div{
    float: left;
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #0091EA;
    border-radius: 4px;
    line-height: 38px;
    font-size: 16px;
    color: #0091EA;
    padding: 0 28px ;
    margin-left: 30px;
  }
  .my-resume-confirm-content .my-resume-confirm-content-one{
    margin-left: 265px;
  }
  .my-resume-confirm-content .my-resume-confirm-content-two{
    background: #0091EA;
    color: #fff;
  }


  .my-resume-status{
    float: left;
    margin-left: 19px;
    width: 180px;
  }
  .my-resume-status-per{
    /*height: 73px;*/
    width: 180px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 30px;
  }
  .my-resume-status-per-title{
    font-size: 14px;
    color: #666666;
  }
  .my-resume-status-per-title > span{
    font-size: 14px;
    color: #0091EA ;
    /*line-height: 17px;*/
  }
  .my-resume-status-per-per{
    margin-top: 15px;
    height: 6px;
    width: 156px;
    background: #F5F5F5;
    border-radius: 8px;
    position: relative;
  }
  .my-resume-status-per-per > div{
    position: absolute;
    left: 0;
    top: 0;
    background: #0091EA;
    border-radius: 8px;
    height: 6px;
    width: 20px;
  }
  .my-resume-status-class{
    height: 235px;
    border-left: 1px solid #E4E4E4;
    box-sizing: border-box;
    /*padding-left: 20px;*/
  }
  .my-resume-status-class>div{
    font-size: 14px;
    color: #666666;
    line-height: 17px;
    padding: 15px 0;
    padding-left: 17px;
    user-select: none;
    cursor: pointer;
    box-sizing: border-box;
    border-left: 3px solid #FFF;
  }
  .my-resume-status-class .my-resume-status-class-chosen{
    border-left: 3px solid #0091EA;
    color: #0091EA;
    box-sizing: border-box;
  }
  .create-resume-content-content{
    width: 384px;
    /*min-height: 200px;*/
    font-size: 0;
  }
  .create-resume-content-content i{
    font-size: 14px;
    color: #E85043;
  }
  .create-resume-content-content .icon{
    background: #FFFFFF;
    /*color: #0091EA;*/
    color: #666;
    font-size: 14px;
    transition: all 0.3s;
    margin-right: 10px;
  }
  .create-resume-content-content .icon-icon_danxuan2:before{
    color: #0091EA;
  }
  .create-resume-content-content .icon:before{
    font-size: 28px;
    margin-right: 10px;
  }
  .create-resume-content-content .nochose{
    color: #E4E4E4;
  }
  .create-resume-content-content span{
    display: inline-block;
    vertical-align: top;
    width: 104px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444444;
    margin-top: 20px;
  }
  .create-resume-content-content input{
    display: inline-block;
    vertical-align: top;
    width: 280px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 14px;
    color: #444444;
  }
  .create-resume-content-content select{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 280px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    background: url("../pages/index/assets/logo.png") no-repeat scroll right center transparent;
    background-size: 36px;
  }
  .create-resume-content-content button{
    display: inline-block;
    vertical-align: top;
    width: 278px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    background-color: #fff;
    position: relative;
  }
  .create-resume-content-content button i{
    position: absolute;
    color: #444444;
    height: 36px;
    width: 36px;
    line-height: 36px;
    top: -1px;
    right: -1px;
    background: #F5F5F5;
    border: 1px solid #E4E4E4;
    border-radius: 0 4px 4px 0;
    box-sizing: border-box;
  }
  .create-resume-timer{
    margin-top: 20px;
    font-size: 0;
  }
  .create-resume-timer span{
    display: inline-block;
    vertical-align: top;
    width: 104px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444444;
  }
  .create-resume-timer input {
    display: inline-block;
    vertical-align: top;
    width: 140px;
    height: 34px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
  }
  .create-resume-timer .link-time{
    width: 40px;
    text-align: center;
    font-size: 20px;
  }
  .create-resume-text{
    margin-top: 20px;
    font-size: 0;
  }
  .create-resume-text span{
    display: inline-block;
    vertical-align: top;
    width: 104px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444444;
  }
  .create-resume-text textarea {
    display: inline-block;
    vertical-align: top;
    width: 610px;
    min-height: 120px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    padding: 0;
    resize: none;
  }
  .create-resume-content-line{
    height: 1px;
    border-bottom: 1px dashed #E4E4E4;
    /*margin: 15px 0;*/
    margin-top: 58px;
    margin-bottom: 50px;
    position: relative;
  }
  .preview_resume{
    font-size: 14px;
    color: #0091EA;
    margin-top: 20px;
    line-height: 17px;
    cursor: pointer;
    /*margin-left: 23px;*/
  }
  .preview_resume i{
    padding-right: 10px;
    font-size: 14px;
  }

  .create-resume-timer span i {
    font-size: 14px;
    color: #E85043;
  }
  .create-resume-text span i {
    font-size: 14px;
    color: #E85043;
  }
</style>
