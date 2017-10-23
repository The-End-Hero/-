## CSS背景

### background



### background-imgae

- url('url')
- none
- Inherit 从父元素继承background-image

### background-size

- 固定宽高
- 百分比宽高
- cover 图片“遮”住容器。**此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。**
- contain  让图片适应容器，我们把它“装”进容器，同时也会留下空白。就像我们看电影时的"黑边"。**此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。**

### background-origin

- padding-box 相对于内边距框来定位
- border-box 相对于边框盒来定位
- content-box 相对于内容框来定位

### background-repeat

- repeat 默认。垂直水平都是重复
- repeat-x 水平方向重复
- repeat-y 垂直方向重复
- no-repeat 背景图像只显示一次
- inherit 继承父元素的background-repeat属性的设置

### background-position

- 百分比 如果只规定一个单位，第二个默认50%
- left等position值 如果只规定一个单位，第二个默认center
- px等单位 如果只规定了一定单位，第二个默认50%
- 可以混合使用%和position