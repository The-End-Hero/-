<template>
  <div class="details">
    <div class="details-title">
      <div class="title">高级JAVA工程师</div>
      <div class="req">
        <span><i class="icon iconfont"></i>上海</span>
        <span><i class="icon iconfont"></i>全职</span>
        <span><i class="icon iconfont"></i>经验3-5年</span>
        <span><i class="icon iconfont"></i>本科</span>
        <span><i class="icon iconfont"></i>社招</span>
      </div>
      <div class="welfare">
        <span>美女如云</span>
        <span>弹性工作时间</span>
        <span>五险一金</span>
      </div>
      <div class="time">2017-11-16  09:25发布</div>
      <div class="recommend">
        <span @click="recothers">推荐朋友</span>
        <span class="green-me" @click="recmyself">毛遂自荐</span>
      </div>
      <div class="collection">
        <span><i class="icon iconfont"></i>收藏</span>
        <span><i class="icon iconfont"></i>微信</span>
      </div>
    </div>
    <div class="details-text">
      <div class="text-title">职位亮点</div>
      <div class="text-content">发展空间大,领导好,交通方便,下午茶</div>
    </div>
    <div class="details-text">
      <div class="text-title">职位描述</div>
      <div class="text-content">
        <div class="text-content-title">岗位职责</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div class="text-content-title">岗位职责</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
      </div>
    </div>
    <div class="details-text">
      <div class="text-title">其他信息</div>
      <div class="text-content clearfix">
        <div class="text-list clearfix">
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
        </div>
      </div>
    </div>
    <div class="details-text">
      <div class="text-title">工作地址</div>
      <div class="text-content">深圳 - 福田区 - 中山北路2098号</div>
    </div>
    <div class="details-text">
      <div class="text-title">公司简介</div>
      <div class="text-content">红星美凯龙是中国经营面积最大、商场数目最多、地理覆盖面积最广的家居装饰及家具商场运营商。与此同时，红星美凯龙还致力于追求中国家居业的美学发展。公司于2012年首次在米兰国际家具展亮相，把中国家居设计和家居艺术带向国际舞台。公司还将艺术整合入业务中，在其商场设展，展示世界知名艺术家的作品，以激发客户对生活的艺术热情。</div>
    </div>




    <div class="poprecommend" v-if="popshow">
      <div class="poprecommendbg"></div>
      <div class="poprecommendcontent">
        <div class="poprecommendtitle">
          <span>{{poptitle}}</span>
          <i class="icon iconfont" @click="unshow"></i>
        </div>
        <div class="poprecommendinfo">
          <span class="popleft" style="margin-bottom: 20px;">应聘职位：</span>
          <span class="popbfc" style="margin-bottom: 20px;">PHP开发工程师</span>
          <span class="popleft"><i>*</i>上传简历：</span>
          <div class="popbfc" style="margin-bottom: 30px;">
            <div class="popupload">
              <span class="popuploadbtn">选择文件</span>
              <span>只能上传 txt,pdf,gif,jpeg,png,rar,zip,doc,docx,xls,xlsx,,ppt,pptx 类型的附件，且耽搁附件须小于10M，大附件请拆分上传</span>
            </div>
            <div class="popfile"><span class="popfilename">张亮亮简历.docx</span><span class="delete">删除</span></div>
          </div>
          <div class="popform">
            <div>
              <span><i>*</i>手机号码：</span>
              <input type="text">
              <span><i>*</i>电子邮箱：</span>
              <input type="text">
              <span><i>*</i>姓名：</span>
              <input type="text">
              <span><i>*</i>性别：</span>
              <!--<input type="text">-->

              <span :class="sex==='male'?'icon iconfont icon-icon_danxuan2':'icon iconfont icon-icon_danxuan1'" v-on:click="changesex">男</span>
              <span :class="sex==='male'?'icon iconfont icon-icon_danxuan1':'icon iconfont icon-icon_danxuan2'" style="margin-right: 120px;" v-on:click="changesex">女</span>
              <span><i>*</i>毕业院校：</span>
              <input type="text">
              <span><i>*</i>最高学历：</span>
              <button-select :from="educationpop" ref="buttonselect66"></button-select>
              <span>当前公司：</span>
              <input type="text">
              <span>任职时间：</span>
              <input type="text">
            </div>
            <span>备注：</span>
            <textarea class="remarks" name="" id="" cols="30" rows="10">

            </textarea>
          </div>
          <span class="cancel" @click="unshow">取消</span><span class="save">保存并推荐</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import HeaderTop from './HeaderTop.vue'
//  import FooterButtom from './FooterButtom.vue'
import ButtonSelect from './ButtonSelect.vue'

export default {
  name: 'UseLess',
  components: {
    ButtonSelect
  },
  methods: {
    changesex(e) {
      console.log(e)
      console.log(e.target.innerHTML)
      if (e.target.innerHTML.indexOf('男') > -1) {
        this.sex = 'male'
      } else {
        this.sex = 'female'
      }
    },
    recmyself(){
      this.poptitle='毛遂自荐'
      this.popshow=true
    },
    recothers(){
      this.poptitle='推荐朋友'
      this.popshow=true
    },
    unshow(){
      this.popshow=false

    }
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log(this.$route.params.id)
  },
  data() {
    return {
      poptitle: '毛遂自荐',
      popshow:false,
      sex: 'male',
      educationpop: {
        from: 'educationpop',
        list: [
          {msg: '1年'},
          {msg: '2年'},
          {msg: '3~5年'},
          {msg: '5~10年'},
          {msg: '10年以上'},
        ]
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
  .popform .icon{
    /*background: #FFFFFF;*/
    /*color: #0091EA;*/
    color: #666;
    font-size: 14px;
    transition: all 0.3s;
    margin-right: 10px;
  }
  .popform .icon-icon_danxuan2:before{
    color: #0091EA;
  }
  .popform .icon:before{
    font-size: 28px;
    margin-right: 10px;
  }
  .poprecommend{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .poprecommend i{
    font-size: 14px;
    color: #E85043;
  }
  .poprecommendbg{
    background: rgba(0,0,0,0.20);
    width: 100%;
    height: 100%;
  }
.poprecommendcontent{
  position: fixed;
  background: #fff;
  box-shadow: 0px 0px 0px 3px rgba(0,0,0,0.10);
  left: 50%;
  top: 50%;
  margin-left: -500px;
  margin-top: -306px;
  width: 1000px;
  min-height: 577px;
}
.poprecommendtitle{
  height: 44px;
  background: #F5F5F5;
  line-height: 44px;
  padding: 0 20px;
  font-size: 0;
}
  .poprecommendtitle span{
    font-size: 16px;
    color: #444444;
  }
  .poprecommendtitle .icon{
    font-size: 16px;
    color: #444444;
    float: right;
    cursor: pointer;
  }
.poprecommendinfo{
  box-sizing: border-box;
  padding: 30px 20px ;
  font-size: 0;
  padding-bottom: 17px;
}
.popleft{
  float: left;
  font-size: 14px;
  color: #444444;
}
.popbfc{
  display: block;
  overflow: hidden;
  font-size: 14px;
  color: #444444;
}
.popupload{
  background: rgba(255,255,255,0.05);
  border: 1px dashed #E4E4E4;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 14px;
  font-size: 0;
  width: 872px;
}
.popupload span{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #999999;
  width: 665px;
  line-height: 17px;
}
.popupload .popuploadbtn{
  background: #0091EA;
  border-radius: 4px;
  width: 90px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  color: #FFFFFF;
  margin-right: 10px;
}
.popfile{
  color: #666666;
  line-height: 17px;
  margin-left: 5px;
  font-size: 0;
  margin-top: 18px;
}
.popfile span{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
}
.popfilename{
  width: 220px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.delete{
  font-size: 14px;
  color: #0091EA;
  cursor: pointer;
}
.popform{
  box-sizing: border-box;
  background: #F5F5F5;
  border: 1px solid #E4E4E4;
  width: 963px;
  min-height: 304px;
  padding: 20px;
  font-size: 0;
}
.popform>div{
  padding-right: 100px;
}
.popform span,.popform input{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #000000;
  line-height: 17px;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
  .popform span{
    width: 90px;
  }
  .popform input{
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    width: 260px;
    margin-right: 40px;
    padding:0 10px;
  }
.remarks{
  border: 1px solid #E4E4E4;
  border-radius: 4px;
  background: #FFFFFF;
  box-sizing: border-box;
  resize: none;
  width: 830px;
  height: 80px;
  padding: 5px 10px;
  line-height: 17px;
  overflow-x: hidden;
}
.cancel,.save{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #444444;
  height: 36px;
  box-sizing: border-box;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
}
  .cancel{
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    font-size: 14px;
    color: #444444;
    line-height: 34px;
    width: 80px;
    margin-right: 10px;
    margin-left: 770px;
  }
  .save{
    background: #0091EA;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 36px;
    width: 100px;
  }





  .details{
    width: 1200px;
    margin: 0 auto;
  }
.details-title{
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E4E4E4;
  position: relative;
}
.collection{
  position: absolute;
  right: 0;
  bottom: 20px;
  font-size: 0;
}
.collection span{
  font-size: 12px;
  color: #999999;
  /*padding-left: 30px;*/
  margin-left: 30px;
  cursor: pointer;
}
.collection i{
  font-size: 22px;
  padding-right: 7px;
}
.recommend{
  position: absolute;
  right: 0;
  top: 32px;
  font-size: 0;
}
  .recommend .green-me{
  background: #32BE78;
    margin-left: 10px;
}
.recommend span{
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  background: #0091EA;
  border-radius: 2px;
  font-size: 14px;
  color: #FFFFFF;
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
  .title{
    font-size: 22px;
    color: #444444;
    line-height: 22px;
    height: 22px;
  }
  .req span{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #0091EA;
    line-height: 17px;
    height: 17px;
    margin-top: 20px;
    margin-bottom: 15px;
    /*padding-left: 20px;*/
    margin-right: 20px;
  }
  .req i{
    padding-right: 5px;
  }
  .welfare,.req{
    font-size: 0;
  }
  .welfare span{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    height: 22px;
    line-height: 20px;
    border: 1px solid #E4E4E4;
    border-radius: 16px;
    font-size: 12px;
    color: #666666;
    padding: 0 10px;
    margin-right: 10px;
  }
  .time{
    font-size: 14px;
    color: #999999;
    line-height: 17px;
    height: 17px;
    margin-top: 15px;
  }
  .details-text{
    margin-top: 30px;
  }
  .text-title{
    font-size: 16px;
    color: #444444;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .text-content{
    margin-bottom: 30px;
    font-size: 14px;
    color: #666666;
    line-height: 24px;
  }
  .text-content-title{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .text-list{
    width: 520px;
  }
  .text-list div{
    float: left;
    width: 260px;
  }
</style>
