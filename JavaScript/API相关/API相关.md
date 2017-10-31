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

