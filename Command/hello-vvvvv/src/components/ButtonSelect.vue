<template>
  <button v-on:click.stop="showbuttondetail" :class="classname">{{name}}
    <i class="icon iconfont"></i>
    <div class="button-list" ref="buttonList" v-if="isshow">
      <div v-for="site in from.list" v-on:click.stop="checked">{{site.msg}}</div>
      <!--<div>校园招聘</div>-->
      <!--<div>实习生招聘</div>-->
    </div>
  </button>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        state: this.from,
        name: null,
        isshow: false,
        classname: ''
      }
    },
    props: ['from'],
    beforeUpdate(){
      console.log("111111111", this.isshow);
      console.log(this.name,'data')
    },
    created() {
      if (this.from.from == 'homepage') {
        this.name = this.from.list[0].msg
        this.classname = 'homepagebtn'
      } else if (this.from.from == 'workingtime') {
        this.name = '请选择'
      } else if (this.from.from == 'education') {
        this.name = '本科'
      } else if(this.from.from == 'jobstatus' || this.from.from == 'jobplace'){
        this.name = '不限'
        this.classname = 'jobbtn'
      } else if(this.from.from == 'educationrec' ){
        this.name = '不限'
        this.classname = 'educationrec'
      } else if(this.from.from == 'educationpop'){
        this.name = '不限'
        this.classname = 'educationpop'
      }
    },
    methods: {
      showbuttondetail:function () {
        console.log(this)
        console.log(this.$refs.buttonList)
        console.log(this.$refs)
        this.isshow = true
      },
      checked(el) {
        console.log(123)
        console.log(this.$refs.buttonList)
        this.unshow()
        this.name=el.target.innerHTML
      },
      unshow(){
//        console.log('unshow', this.isshow)
        this.isshow = false
//        console.log('unshow', this.isshow)

      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    display: inline-block;
    vertical-align: top;
    width: 280px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    background-color: #fff;
    position: relative;
    text-align: left;
    padding-left: 10px;
  }
  .educationpop{
    width: 260px;
    margin-top: 0;
  }
  .educationrec{
    width: 200px;
    margin-top:0;
    margin-right: 20px;
    margin-left: 10px;
  }
  .jobbtn{
    width: 120px;
    margin-top:0;
    margin-right: 20px;
    margin-left: 10px;
  }
  .homepagebtn{
    width: 113px;
    border-radius:  4px 0 0 4px;
    margin-top:0;
    text-align: left;
    padding-left: 15px;
    border: none;
  }
  .homepagebtn i{
    background: #fff;
    border-radius: 0 ;
    font-size: 10px;
    height: 40px;
    width: 25px;
    line-height: 40px;
    box-shadow: 1px 0px 0px 0px #E4E4E4;
    top: 0;
    border: none;
  }
  .homepagebtn .button-list{
    top: 40px;
    text-align: center;
    border: none;
  }
  button i{
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
    text-align: center;
    font-size: 12px;
  }
  .button-list{
    border-top: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
    width: 100%;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 35px;
    background-color: #fff;
    z-index: 9999;
    /*display: none;*/
  }
  .button-list div{
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    color: #666666;
    text-align: center;
    /*box-shadow:inset 0px 1px 0px 0px #E4E4E4;*/
    border-bottom: 1px solid #E4E4E4;
  }
  .button-list div:nth-last-of-type(1){
    border-bottom: none;
  }
  .button-list div:hover{
    background: #0091EA;
    color: #fff;
  }
</style>
