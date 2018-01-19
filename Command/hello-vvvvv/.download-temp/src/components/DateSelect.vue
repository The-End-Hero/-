<template>
  <div class="dateselect-wxp" v-clickoutside="falsetype" style="font-size: 14px">{{name}}
    <div class="dateselect-title" @click.stop="checktype">{{title}}</div>
    <i class="icon iconfont rili" @click.stop="checktype"></i>
    <div class="dateinset" v-if="isdown">
      <div class="title" v-if="showtype.day">
        <span @click.stop="change(2)" class="changemonth changedeg"><i class="icon iconfont"></i></span>
        <span @click.stop="change(0)" class="changemonth changedeg"><i class="icon iconfont"></i></span>
        <span style="width: 161px;"><span @click.stop="changeshowtype('year')">{{nowtime.year}}年</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          @click.stop="changeshowtype('month')">{{nowtime.month}}月</span></span>
        <span @click.stop="change(1)" class="changemonth"><i class="icon iconfont"></i></span>
        <span @click.stop="change(3)" class="changemonth"><i class="icon iconfont"></i></span>
      </div>
      <div class="dateinset-table" v-if="showtype.day">
        <div class="dateinset-table-day">
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
          <span>日</span>
        </div>
        <div class="dateinset-table-day">
          <span @click.stop="checkday" v-for="item in day"
                :style="item.source=='this'?'color: #666666;cursor:pointer;':item.source=='now'?'background: #0091EA;color:#FFFFFF;':'cursor:not-allowed;'"
                :class="item.source=='this'?'cancheck':''">{{item.day}}</span>
        </div>
      </div>


      <!--月份选择-->
      <div class="title" v-if="showtype.month">
        <span @click.stop="change(2)" class="changemonth changedeg"><i class="icon iconfont"></i></span>
        <span @click.stop="change(0)" class="changemonth changedeg"><i class="icon iconfont"></i></span>
        <span style="width: 161px;"><span @click.stop="changeshowtype('year')">{{nowtime.year}}年</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          class="chosenmonth">{{nowtime.month}}月</span></span>
        <span @click.stop="change(1)" class="changemonth"><i class="icon iconfont"></i></span>
        <span @click.stop="change(3)" class="changemonth"><i class="icon iconfont"></i></span>
      </div>
      <div class="dateinset-table" v-if="showtype.month">
        <div class="dateinset-table-day">
          <span class="month-span" v-for="item in month" @click.stop="checkmonth(item.month)"
                :style="nowtime.month==item.month?'background:#0091EA; color:#FFFFFF;':''">{{item.name}}</span>
        </div>
      </div>


      <!--年份选择-->
      <div class="title" v-if="showtype.year">
        <span @click.stop="changeoyear(0)" class="changemonth changedeg"><i class="icon iconfont"></i></span>
        <span class="changemonth"></span>
        <span style="width: 161px;"><span class="chosenyear">{{nowtime.year}}年</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          @click.stopk="changeshowtype('month')">{{nowtime.month}}月</span></span>
        <span class="changemonth"></span>
        <span @click.stop="changeoyear(1)" class="changemonth"><i class="icon iconfont"></i></span>
      </div>
      <div class="dateinset-table" v-if="showtype.year">
        <div class="dateinset-table-day">
          <span class="month-span" v-for="item in year" @click.stop="checkyear(item.year)"
                :style="nowtime.year==item.year?'background:#0091EA; color:#FFFFFF;':''">{{item.year}}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import clickoutside from '../assets/js/clickoutside';
  export default {
    name: 'Header',
    data() {
      return {
        title: this.from,
        nowtime: {
          year: '',
          month: '',
          day: ''
        },
        state: this.from,
        name: null,
        isdown: false,
        day: [
          {day: 123, source: 'this'},
        ],
        month: [
          {name: '1月', month: 1},
          {name: '2月', month: 2},
          {name: '3月', month: 3},
          {name: '4月', month: 4},
          {name: '5月', month: 5},
          {name: '6月', month: 6},
          {name: '7月', month: 7},
          {name: '8月', month: 8},
          {name: '9月', month: 9},
          {name: '10月', month: 10},
          {name: '11月', month: 11},
          {name: '12月', month: 12},
        ],
        year: [
          {year: 2011}
        ],
        originyear: 2011,
        showtype: {
          year: false,
          month: false,
          day: true
        }
      }
    },
    props: ['from', 'callback','index'],
    beforeUpdate() {
      console.log('this.isdown', this.isdown)
    },
    watch: {
      nowtime: {
        handler(curVal, oldVal) {
          console.log(curVal, oldVal)
          if (!!this.from&&this.from.indexOf('-')>-1&&this.from.length>=8) {
//            this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'
            this.title = this.nowtime.year + '-' + this.nowtime.month + '-' + this.nowtime.day
          }else{
            this.title = this.from
          }
//          this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'
//          this.getFirstDay(this.nowtime.year, this.nowtime.month)
        },
        deep: true
      },
      from:{
        handler(curVal, oldVal) {
          console.log(curVal, oldVal)
          this.title = this.from
        },
        deep: true
      }
    },
    created() {
//      if(this.from){
//        this.title = this.from
//      }
    },
    mounted() {
      this.init()
//      if(this.from){
//        this.title = this.from
//      }
    },
    directives: {
      clickoutside
    },
    methods: {
      falsetype(){
        this.isdown = false
      },
      changeshowtype(type) {
        for (let key in this.showtype) {
          if (key == type) {
            this.showtype[key] = true
          } else {
            this.showtype[key] = false
          }
          if (type == 'year') {
            this.createdyearlist()
          }
        }
      },
      changeoyear(type) {
        if (type == 0) {
          this.originyear = this.originyear - 20
        } else {
          this.originyear = this.originyear + 20
        }
        this.createdyearlist(this.originyear)
        this.getFirstDay(this.nowtime.year, this.nowtime.month)
      },
      // 初始化创建年份列表 初始化originyear
      createdyearlist(year) {
        if (year) {
          let origin = this.originyear
//          origin = parseInt(this.originyear + (20 * num))
          this.year = [{year: origin}]
          for (let i = 0; i < 19; i++) {
            this.year.push(
              {year: origin + 1 + i}
            )
          }
        } else {
          let origin = this.originyear
          let num
          if (this.nowtime.year - this.originyear > 0) {
            num = Math.floor((this.nowtime.year - this.originyear) / 20)
          } else {
            num = Math.floor((this.nowtime.year - this.originyear) / 20)
          }
          origin = parseInt(this.originyear + (20 * num))
          this.originyear = origin
          this.year = [{year: origin}]
          for (let i = 0; i < 19; i++) {
            this.year.push(
              {year: origin + 1 + i}
            )
          }
        }


      },
      checkmaxday() {
        const max = this.getMonthDay(this.nowtime.year, this.nowtime.month)
        if (this.nowtime.day > max) {
          this.nowtime.day = max
        }
      },
      // 月份选择
      checkmonth(month) {
        this.nowtime.month = month
        this.showtype = {
          year: false,
          month: false,
          day: true
        }
      },
      // 年份选择
      checkyear(year) {
        this.nowtime.year = year
        this.showtype = {
          year: false,
          month: false,
          day: true
        }
      },
      // 日期选择
      checkday(el) {
        console.log(el.target)
        if (el.target.className.indexOf("cancheck") > -1) {
          this.nowtime.day = el.target.innerHTML
          this.getFirstDay(this.nowtime.year, this.nowtime.month)
        }
        if (this.callback&&this.index==undefined) {
          this.callback(this.nowtime.year, this.nowtime.month, this.nowtime.day)
        }else if(this.callback&&this.index!=undefined){
          this.callback(this.nowtime.year, this.nowtime.month, this.nowtime.day,this.index)
        }
        this.isdown = false
      },
      checktype() {
        console.log(999)
        this.isdown = !this.isdown
      },
      // 外部点击判断下拉框是否消失，回复默认样式
      listenwin() {
//        window.addEventListener('click', (e) => {
//          console.log(e)
//          for (let i = 0; i < e.path.length; i++) {
//            if (e.path[i].className === 'dateselect-wxp') {
//              return false
//            }
//          }
//          this.isdown = false
//          this.showtype = {
//            year: false,
//            month: false,
//            day: true
//          }
//        })
      },
      // 字符串如果第一位为0,则截取第一位  05->5
      splicezero(str) {
        if (str[0] == 0) {
          return str.slice(1)
        }else {
          return str
        }
      },
      init() {
        console.log(this.from, 'init')
        let year, month, day
        if (!!this.from&&this.from.indexOf('-')>-1&&this.from.length>=8) {
          const arr = this.from.split('-')
          year = Number(arr[0])>10000?'2011':Number(arr[0])
          month = Number(this.splicezero(arr[1]))>12?'12':Number(this.splicezero(arr[1]))
          day = Number(this.splicezero(arr[2]))>31?'31':Number(this.splicezero(arr[2]))
          this.title = year + '年' + month + '月' + day + '日'

        }else {
          const now = new Date();
          year = now.getFullYear();       //年
          month = now.getMonth() + 1;     //月
          day = now.getDate();
          this.title = this.from
        }

        this.nowtime.year = year
        this.nowtime.month = month
        this.nowtime.day = day
        console.log('this.nowtime', this.nowtime)
        this.listenwin()
        this.getFirstDay(this.nowtime.year, this.nowtime.month)
//        this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'

      },
      change(type) {
        if (type == 0 || type == 1) {
          this.initmonth(type)
        } else {
          this.inityear(type)
        }
        this.getFirstDay(this.nowtime.year, this.nowtime.month)
        this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'
      },
      inityear(type) {
        if (type == 2) {
          // 去年
          this.nowtime.year = this.nowtime.year - 1
          this.nowtime.month = this.nowtime.month
          this.nowtime.day = this.nowtime.day
        } else if (type == 3) {
          // 明年
          this.nowtime.year = this.nowtime.year + 1
          this.nowtime.month = this.nowtime.month
          this.nowtime.day = this.nowtime.day
        }
      },
      initmonth(type) {
        if (type == 0) {
          // 上个月
          if (this.nowtime.month == 12) {
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month - 1
            this.nowtime.day = this.nowtime.day
          } else if (this.nowtime.month == 1) {
            this.nowtime.year = this.nowtime.year - 1
            this.nowtime.month = 12
            this.nowtime.day = this.nowtime.day
          } else {
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month - 1
            this.nowtime.day = this.nowtime.day
          }
        } else if (type == 1) {
          // 下个月
          if (this.nowtime.month == 12) {
            this.nowtime.year = this.nowtime.year + 1
            this.nowtime.month = 1
            this.nowtime.day = this.nowtime.day
          } else if (this.nowtime.month == 1) {
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month + 1
            this.nowtime.day = this.nowtime.day
          } else {
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month + 1
            this.nowtime.day = this.nowtime.day
          }
        }
      },
      runNian(_year) {
        //判断闰年
        if (_year % 400 === 0 || (_year % 4 === 0 && _year % 100 !== 0)) {
          return true;
        }
        else {
          return false;
        }
      },
      // 获取月份天数
      getMonthDay(_year, _month) {
        let allDay
        switch (_month) {
          case 1:
            allDay = 31;
            break;
          case 2:
            if (this.runNian(_year)) {
              allDay = 29;
            }
            else {
              allDay = 28;
            }
            break;
          case 3:
            allDay = 31;
            break;
          case 4:
            allDay = 30;
            break;
          case 5:
            allDay = 31;
            break;
          case 6:
            allDay = 30;
            break;
          case 7:
            allDay = 31;
            break;
          case 8:
            allDay = 31;
            break;
          case 9:
            allDay = 30;
            break;
          case 10:
            allDay = 31;
            break;
          case 11:
            allDay = 30;
            break;
          case 12:
            allDay = 31;
            break;
        }
        console.log(allDay, 'allday')
        return allDay
      },
      //判断某年某月的1号是星期几
      getFirstDay(_year, _month) {
        this.checkmaxday()
        let allDay = 0, y = _year - 1, i = 1;
        allDay = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
        for (; i < _month; i++) {
          switch (i) {
            case 1:
              allDay += 31;
              break;
            case 2:
              if (this.runNian(_year)) {
                allDay += 29;
              }
              else {
                allDay += 28;
              }
              break;
            case 3:
              allDay += 31;
              break;
            case 4:
              allDay += 30;
              break;
            case 5:
              allDay += 31;
              break;
            case 6:
              allDay += 30;
              break;
            case 7:
              allDay += 31;
              break;
            case 8:
              allDay += 31;
              break;
            case 9:
              allDay += 30;
              break;
            case 10:
              allDay += 31;
              break;
            case 11:
              allDay += 30;
              break;
            case 12:
              allDay += 31;
              break;
          }
        }
        console.log(allDay % 7)
        let firstday = allDay % 7
        let firArrlength
        switch (firstday) {
          case 1:
            firArrlength = 1
            break;
          case 2:
            firArrlength = 2
            break;
          case 3:
            firArrlength = 3
            break;
          case 4:
            firArrlength = 4
            break;
          case 5:
            firArrlength = 5
            break;
          case 6:
            firArrlength = 6
            break;
          case 0:
            firArrlength = 7
            break;
        }
        let thisallday = this.getMonthDay(_year, _month)
        let beforethisallday
        let afterthisallday
        if (_month == 12) {
          beforethisallday = this.getMonthDay(_year, _month - 1)
          afterthisallday = this.getMonthDay(_year + 1, 1)
        } else if (_month == 1) {
          beforethisallday = this.getMonthDay(_year - 1, 12)
          afterthisallday = this.getMonthDay(_year, _month + 1)
        } else {
          beforethisallday = this.getMonthDay(_year, _month - 1)
          afterthisallday = this.getMonthDay(_year, _month + 1)
        }
        console.log(_month, '_month')
        console.log(beforethisallday, 'beforethisallday')
        console.log(afterthisallday, 'afterthisallday')
        const arr = []
        for (let i = 0; i < thisallday; i++) {
          if (i == this.nowtime.day - 1) {
            arr.push(
              {day: i + 1, source: 'now'}
            )
          } else {
            arr.push(
              {day: i + 1, source: 'this'}
            )
          }
        }
        for (let i = 0; i < firArrlength - 1; i++) {
          arr.unshift(
            {day: beforethisallday - i, source: 'before'}
          )
        }
        for (let i = 0; i < 42 - thisallday - (firArrlength - 1); i++) {
          arr.push(
            {day: i + 1, source: 'after'}
          )
        }
        console.log(arr, 'arr')
        this.day = arr
//        this.createdyearlist()
//        if (!!this.from&&this.from.indexOf('-')>-1) {
//          this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'
//        }else{
//          this.title = this.from
//        }
        return allDay % 7;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .changemonth {
    color: #666666;
    width: 33px;
  }

  .changemonth i {
    font-size: 12px;
  }

  .changedeg {
    transform: rotate(180deg);
  }

  .chosenyear, .chosenmonth {
    background: #F5F5F5;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    height: 26px;
    line-height: 26px;
    padding: 0 5px;
    margin-top: 4px;
  }

  .dateinset-table-day .month-span {
    width: 25%;
    margin-bottom: 10px;
  }

  .dateselect-title {
    padding-left: 10px;
    text-align: left;
    height: 100%;
    line-height: 36px;
  }

  span {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  }

  .dateselect-wxp {
    /*display: block;*/
    display: inline-block;
    vertical-align: top;
    /*margin-top: 20px;*/
    width: 140px;
    box-sizing: border-box;
    height: 36px;
    position: relative;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
  }

  .dateselect-wxp .rili {
    position: absolute;
    right: 0;
    top: 0;
    height: 34px;
    width: 36px;
    line-height: 34px;
    color: #C7C7C7;
    text-align: center;
  }

  .dateinset {
    position: absolute;
    width: 293px;
    top: 36px;
    left: 0;
    z-index: 9999;
    background-color: #fff;
    border: 1px solid #E4E4E4;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 4px;
  }

  .title {
    font-size: 0px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #E4E4E4;
  }

  .title span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 5px;
  }

  .dateinset-table {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
  }

  .dateinset-table-day {
    font-size: 0px;
  }

  .dateinset-table-day span {
    font-size: 14px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #999999;
  }
</style>
