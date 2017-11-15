### android中line-height字体居中问题

- font-size 尽量为大于12的偶数。
- line-height设置为原来两倍
  - 使用transform:scale缩放（不影响其他布局）（实测rem中，缩放）
  - 使用zoom缩放，印象其他布局，实际上会比较容易些（实测rem中，不缩放）

- Line-height 设置为0，用padding撑开（亲测解决部分安卓机型的居中）（**需要加border**）



总结：

​	字体居中和字体本身也有关系，酌情处理。


#### 兼容性

transform:scale在ie9以上无问题。

zoom几乎满足全部兼容。

不过Firefox都不支持这俩货。