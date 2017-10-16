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