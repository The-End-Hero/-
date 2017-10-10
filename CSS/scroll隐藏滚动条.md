### scroll隐藏滚动条

- 最外层：    

```scss
overflow: hidden;
white-space: nowrap;//（否则不会在同一行内）
```



- 中层：    

```scss
overflow-x: scroll;
overflow-y: hidden;
.box::-webkit-scrollbar {
  width: 0px;
}
.box::-webkit-scrollbar {
  display: none;
}
// .box为中层
```



- 内层:                

```scss
display: inline-block;
vertical-align: top;
```



