## API相关


### getBoundingClientRect
```javascript
document.querySelector('xxxx').getBoundingClientRect()
// 获得上下左右宽高的对象 
上下左右相对于视口左上角
```

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）。如果不希望属性值随视口变化，那么只要给top、left属性值加上当前的滚动位置（通过window.scrollX和window.scrollY），这样就可以获取与当前的滚动位置无关的常量值。



### window.devicePixelRatio

```javascript
window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。
公式表示就是：window.devicePixelRatio = 物理像素 / dips

简单来说就是物理像素(实际有多少像素/需要显示成多少)
```

兼容性：

PC:ie10以上

移动端：全部兼容



### document.documentElement.clientWidth

```javascript
document.documentElement.clientWidth; 
document.documentElement.clientHeight;
//这个得到的是设备像素可见宽高，比如iPhone 4s在微信内设置了viewport为1的时候为320*416(手机480 - 微信状态栏64), iPhone 5里为320*504
```


### offsetHeight  scrollHeight  clientHeight

document.querySelector('xxxx').offsetHeight 可视区域高度 内容高+padding+边框

document.querySelector('xxxx').scrollHeight 真实高度 整个元素的高度（包括带滚动条的隐蔽的地方） 

document.querySelector('xxxx').clientHeight 可视区域高度 内容的可视高度（不包括边框，边距或滚动条）

![img](http://www.w3cplus.com/sites/default/files/blogs/2017/1707/vw-layout-4.png)



### 移动端事件顺序

- 同一个区域点: touchstart > touchend > click





### 位运算相关

```javascript
Array.prototype.forEach.call(document.querySelectorAll('*'), dom = >dom.style.outline = `1px solid#$ {
    parseInt(Math.random() * Math.pow(2, 24)).toString(16)
}`)

[].forEach.call($$("*"),function(a){
    a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})

// parseInt  等价于 ~~
```





### 滚动相关

```
$(document).ready(function() {
  $(window).scroll(function() {
  
    if ($(document).scrollTop()<=0){
      alert("滚动条已经到达顶部为0");
    }
  
    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
      alert("滚动条已经到达底部为" + $(document).scrollTop());
    }
  });
});

HTML精确定位属性:scrollLeft,scrollWidth,clientWidth,offsetWidth

scrollHeight: 获取对象的滚动高度。
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
document.documentElement.scrollTop 垂直方向滚动的值
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
IE，FireFox 差异如下：
clientWidth = width + padding
clientHeight = height + padding
offsetWidth = width + padding + border
offsetHeight = height + padding + border
IE5.0/5.5：
clientWidth = width – border
clientHeight = height – border
offsetWidth = width
offsetHeight = height
提示：CSS中的margin属性，与clientWidth、offsetWidth、clientHeight、offsetHeight均无关

网页可见区域宽： document.body.clientWidth
网页可见区域高： document.body.clientHeight
网页可见区域宽： document.body.offsetWidth (包括边线的宽)
网页可见区域高： document.body.offsetHeight (包括边线的高)
网页正文全文宽： document.body.scrollWidth
网页正文全文高： document.body.scrollHeight
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft
网页正文部分上： window.screenTop
网页正文部分左： window.screenLeft
屏幕分辨率的高： window.screen.height
屏幕分辨率的宽： window.screen.width
屏幕可用工作区高度： window.screen.availHeight
屏幕可用工作区宽度： window.screen.availWidth

在IE中：
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
document.documentElement.scrollTop =>窗口滚动条滚动高度
在FireFox中：
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
document.documentElement.scrollTop =>窗口滚动条滚动高度
在chrome中：
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
document.body.scrollTop =>窗口滚动条滚动高度
在Opera中：
document.body.clientWidth ==> 可见区域宽度
document.body.clientHeight ==> 可见区域高度
document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）
document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高
滚动到顶部 window.scrollTo(0,0)
滚动到尾部 window.scrollTo(0,document.body.clientHeight) 
```