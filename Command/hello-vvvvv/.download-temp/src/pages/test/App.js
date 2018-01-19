import React, {Component} from 'react';
// import QueryString from 'query-string';
// import Env from 'rs-browser';
// import Host from '../../../common/scripts/config_host';
// import Swiper from '../../../common/library/swiper/swiper-3.4.1.min';

// import {Toast} from 'antd-mobile';
// import Http from '../../../common/scripts/http';
// import back from '../../../common/scripts/back';
// import backOrient from '../../../common/scripts/backOrient';
// import Nav from '../../../common/components/nav';
// import Footer from '../../../common/components/footer';
// import RichText from '../../../common/components/richText';
// import Tags from '../../../common/components/tags';
// import ArtCommentList from '../../../common/components/artCommentList';
// import PageViews from '../../../common/components/pageViews';
// import BigData from '../../../common/scripts/bigData';
// import Config from '../../../common/scripts/config_host';
// import AppDownloadTip from '../../../common/components/appDownloadTip';
// import urlParse from '../../../common/scripts/urlParse';
// import cs from 'classnames';
// import './style.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0
    };
  }
  // componentDidMount() {
  //   this.aaSwiper = new Swiper('.helpcenter_sw', {
  //     slidesPerView: 'auto',
  //     freeMode: true,
  //     observer: true,
  //     observeParents: true,
  //   });
  //   // this.tabSwiper.slideTo(index, 0, false);
  //   const helpcenterlist = JSON.parse(sessionStorage.getItem('helpcenterdetail'));
  //   const nodelist = document.querySelectorAll('.swiper-slide');
  //   if (helpcenterlist) {
  //     this.setState({
  //       list: Number(helpcenterlist.helpcenterlist)
  //     }, () => {
  //       for (let i = 0; i < nodelist.length; i++) {
  //         nodelist[i].style.backgroundColor = '#F5F5F5';
  //         nodelist[i].style.color = '#666666';
  //         nodelist[i].style.border = '0.03rem solid #F5F5F5';
  //       }
  //       nodelist[helpcenterlist.helpcenterlist].style.backgroundColor = '#333333';
  //       nodelist[helpcenterlist.helpcenterlist].style.color = '#ffffff';
  //       nodelist[helpcenterlist.helpcenterlist].style.border = '0.03rem solid #333333';
  //       console.log(helpcenterlist.transform,'helpcenterlist.transform');
  //       this.aaSwiper.slideTo(helpcenterlist.helpcenterlist, 0, false);
  //     });
  //   }else {
  //     this.setState({
  //       list: 0
  //     });
  //     nodelist[0].style.backgroundColor = '#333333';
  //     nodelist[0].style.color = '#ffffff';
  //     nodelist[0].style.border = '0.03rem solid #333333';
  //   }
  // }
  //
  // checkoutBunner(num, e) {
  //   if (e.target) {
  //     e.target.style.backgroundColor = '#333333';
  //     e.target.style.color = '#ffffff';
  //     e.target.style.border = '0.03rem solid #333333';
  //
  //     function siblings(elm) {
  //       const a = [];
  //       const p = elm.parentNode.children;
  //       for (let i = 0, pl = p.length; i < pl; i++) {
  //         if (p[i] !== elm) {
  //           a.push(p[i]);
  //           p[i].style.backgroundColor = '#F5F5F5';
  //           p[i].style.color = '#666666';
  //           p[i].style.border = '0.03rem solid #F5F5F5';
  //         }
  //       }
  //       return a;
  //     }
  //
  //     siblings(e.target);
  //   } else {
  //     console.log('无法获取e');
  //     return false;
  //   }
  //   this.setState({
  //     list: num
  //   });
  // }
  // back() {
  //   back();
  // }
  jumpToDetail(id) {
    const initId = id;
    const strId = initId.toString();
    sessionStorage.setItem('helpcenterdetail', JSON.stringify({
      detailid: id,
      helpcenterlist: strId.slice(0, 1),
      transform: document.querySelector('.swiper-wrapper').style.cssText
    }));
    location = `${Host.path}/help/index.html#/helpCenterDetail?detailId=${id}&${backOrient()}&status=black`;
  }
  render() {
    console.log(this.state.list, 'list');
    return (
      <div>
      {/*<div className="helpcenter_header" style={(Env.rsApp && Env.ios) == true ? {height: '1.70667rem'} : {}}>*/}
  {/*<div className="helpcenter_back" onClick={this.back.bind(this)}></div>*/}
    {/*<div className="helpcenter_title"style={(Env.rsApp && Env.ios) == true ? {paddingTop: '0.5333rem'} : {}}>帮助中心</div>*/}
    {/*</div>*/}
    {/*<div className={(Env.rsApp && Env.ios) == true ? 'helpcenter_banner helpcenter_banner_ios' : 'helpcenter_banner'}>*/}
  {/*<div className="helpcenter_sw">*/}
      {/*<ul className="swiper-wrapper">*/}
      {/*<li className="swiper-slide helpcenter_banner_box_first" onClick={this.checkoutBunner.bind(this, 0)}>常见问题</li>*/}
    {/*<li className="swiper-slide" onClick={this.checkoutBunner.bind(this, 1)}>发货及送货问题</li>*/}
    {/*<li className="swiper-slide" onClick={this.checkoutBunner.bind(this, 2)}>会员积分</li>*/}
    {/*<li className="swiper-slide" onClick={this.checkoutBunner.bind(this, 3)}>账户信息</li>*/}
    {/*<li className="swiper-slide" onClick={this.checkoutBunner.bind(this, 4)}>售后服务</li>*/}
    {/*<li className="swiper-slide helpcenter_banner_box_last" onClick={this.checkoutBunner.bind(this, 5)}>客服中心</li>*/}
    {/*</ul>*/}
    {/*</div>*/}
    {/*</div>*/}
    {
      this.state.list == 0 &&
    <div className="helpcenter_list">
      <div onClick={this.jumpToDetail.bind(this, '00')}>为什么我的积分显示异常？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '01')}>我要如何解冻积分？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '02')}>如何修改个人信息？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '03')}>如何投诉延迟发货？需提供哪些证据？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '04')}>如何修改我绑定的手机号？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '05')}>“7天无理由退货”申请流程是什么样的？<div></div></div>
    </div>
  }
    {
      this.state.list == 1 &&
      <div className="helpcenter_list">
      <div onClick={this.jumpToDetail.bind(this, '10')}>哪些商品可享受配送、安装服务且是否收费？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '11')}>如何投诉延迟发货？需提供哪些证据？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '12')}>何种情况下商家可不提供配送/安装类服务？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '13')}>什么是延迟发货？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '14')}>延迟发货违约金怎么计算？<div></div></div>
    </div>
    }
    {
      this.state.list == 2 &&
      <div className="helpcenter_list">
      <div onClick={this.jumpToDetail.bind(this, '20')}>为什么我的积分显示异常？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '21')}>我要如何解冻积分？<div></div></div>
    </div>
    }
    {
      this.state.list == 5 &&
      <div className="helpcenter_list">
      <div onClick={this.jumpToDetail.bind(this, '50')}>在线导购（客服）<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '51')}>全国红星客服电话<div></div></div>
    </div>
    }
    {
      this.state.list == 4 &&
      <div className="helpcenter_list">
      <div onClick={this.jumpToDetail.bind(this, '40')}>7天无理由退货，7天是怎么定义的？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '41')}>7天无理由退货流程是什么？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '42')}>红星退款流程是什么？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '43')}>七天无理由退货退款规则是什么？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '44')}>商品完好的定义是什么？<div></div></div>
    </div>
    }
    {
      this.state.list == 3 &&
      <div className="helpcenter_list">
      <div onClick={this.jumpToDetail.bind(this, '30')}>如何修改个人信息？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '31')}>如何修改我的登录密码？<div></div></div>
    <div onClick={this.jumpToDetail.bind(this, '32')}>如何修改我绑定的手机号？<div></div></div>
    </div>
    }
  </div>
  );
  }
}
