Rem布局原理

rem布局的本质是等比缩放。

```css
html {font-size: 16px}
p {width: 2rem} /* 32px*/

html {font-size: 32px}
p {width: 2rem} /*64px*/
```

> ​	用户选择大屏幕有两个几个出发点，有些人想要更大的字体，更大的图片，比如老花眼的我；有些人想要更多的内容，并不想要更大的图标；有些人想要个镜子。。。——颜海镜

我认为一般内容型的网站，都不太适合使用rem，**因为大屏用户可以自己选择是要更大字体，还是要更多内容，一旦使用了rem，就剥夺了用户的自由，比如百度知道，百度经验都没有使用rem布局**；一些偏向app类的，图标类的，图片类的，比如淘宝，活动页面，比较适合使用rem，因为调大字体时并不能调大图标的大小









![img](http://www.w3cplus.com/sites/default/files/blogs/2017/1707/vw-layout-4.png)



#### Viewport相关的单位有四个

- vw：是Viewport's width的简写,1vw等于window.innerWidth的1%
- vh：和vw类似，是Viewport's height的简写，1vh等于window.innerHeihgt的1%
- vmin：vmin的值是当前vw和vh中较小的值
- vmax：vmax的值是当前vw和vh中较大的值




http://www.w3cplus.com/css/vw-for-layout.html 再聊移动端页面的适配



### rem实质上是vw/vh兼容不好的时候的替代方案