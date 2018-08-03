## CSS渐变

- **线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向**
- **径向渐变（Radial Gradients）- 由它们的中心定义**


### 线性渐变

在轮播图下边部分，需要一层遮罩，这时候使用线性渐变就非常方便了。

```scss
someone{
  	height: 150px;
    width: 30px;
    background: linear-gradient(white, gray); 
}
```



### 径向渐变

公司优惠券样式中：一排小圆点，之前使用div模拟，增加了DOM数量，性能/可维护性上大打折扣。

而使用径向渐变只需要一个div，效果就可以非常好。

```scss
someone{
  	height: 150px;
    width: 30px;
    background: radial-gradient(circle, white 5px, gray 0); 
	background-size:50% 10%;
	background-repeat-x: no-repeat; 
}
```



### 兼容性

在有Postcss的情况下

- 移动端几乎没有任何使用障碍。
- PC也就是万恶的IE，不过他必将走入历史的垃圾堆。

