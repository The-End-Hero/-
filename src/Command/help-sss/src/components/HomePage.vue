<template>
  <div v-on:click="showchange">
    <header-top></header-top>
    <date-select></date-select>

    <div class="homepage">
      <img src="../pages/index/assets/beijintu01.png"/>
      <div class="homepage-searchbar">
        <!--<select>-->
          <!--<option value="volvo">社会招聘</option>-->
          <!--<option value="audi">校园招聘</option>-->
          <!--<option value="saab">实习生招聘</option>-->
        <!--</select>-->
        <button-select :from="homepage" ref="buttonselect"></button-select>
        <input type="text" placeholder="请输入职位关键词">
        <span>搜索职位</span>
        <div class="hotposition">热门职位：
        <span>JAVA</span>
        <span>前端</span>
        <span>产品经理</span>
        <span>设计师</span>
        <span>楼层管理</span>
        <span>财务管理</span>
        </div>
      </div>
    </div>
    <footer-buttom></footer-buttom>
  </div>
</template>

<script>
  import HeaderTop from './HeaderTop.vue'
  import FooterButtom from './FooterButtom.vue'
  import ButtonSelect from './ButtonSelect.vue'
  import DateSelect from './DateSelect.vue'
  export default {
    name: 'UseLess',
    components:{
      HeaderTop,
      FooterButtom,
      ButtonSelect,
      DateSelect
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        homepage:{
          from:'homepage',
          list:[
            {msg:'社会招聘'},
            {msg:'校园招聘'},
            {msg:'实习生招聘'}
          ]
        },
      }
    },
    methods: {
      showchange(){
        this.$refs.buttonselect.unshow()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
.homepage img{
  min-width: 1200px;
  width: 100%;
  display: block;
}
.homepage{
  position: relative;
  min-width: 1200px;

}
  .homepage-searchbar{
    position: absolute;
    width: 610px;
    left: 50%;
    top: 30%;
    margin-left: -305px;
    font-size: 0;
  }
.homepage-searchbar > *{
  display: inline-block;
  vertical-align: top;
  height: 40px;
}
.homepage-searchbar > select{
  width: 114px;
  border-radius: 4px 0px 0px 4px;
  box-shadow: inset -1px 1px 0px 0px  #E4E4E4;
  box-sizing: border-box;
  padding-left: 15px;
}
.homepage-searchbar > input{
  width: 385px;
  box-sizing: border-box;
  padding-left: 9.5px;
  font-size: 14px;

}
.homepage-searchbar > input:placeholder-shown{
  color: #999999;
}
.homepage-searchbar > span{
  width: 110px;
  background: #0091EA;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 40px;
  text-align: center;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  user-select: none;
}
  .hotposition{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 17px;
    margin-top: 17px;
  }
.hotposition>span{
  margin-right: 15px;
  cursor: pointer;
}
</style>
