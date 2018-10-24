**问题**

React点击空白部分隐藏弹出层

**原因**

React事件的坑，需求可以简化为：点击框体以外的部分则隐藏框体。最直接的想法，document上绑定个事件，设置控制显示隐藏的state为false，在框体上绑定个事件，阻止冒泡。这样点击框体内部就不会触发document上的事件。

**解决方案**

1.React为了提高效率，把事件都委托给了document，所以 e.stopPropagation() 并非是不能阻止冒泡，而是等他阻止冒泡的时侯，事件已经传递给document了，没东西可阻止了。可以通过在document.body上绑定 alert（3），直观的了解这一点，3 是优先于 1 弹出的。

2.e.stopPropagation()不行，浏览器支持一个好东西，e.stopImmediatePropagation() 他不光阻止冒泡，还能阻止在当前事件触发元素上，触发其它事件。这样即使你都绑定到document上也阻止不了我了吧。
这样做还不行，React对原生事件封装，提供了很多好东西，但也省略了某些特性。

3.e.stopImmediatePropagation() 就是被省略的部分，然而，他给了开口：e.nativeEvent ，从原生的事件对象里找到stopImmediatePropagation()，完活

```javascript
class Test extends React.Component{
    componentDidMount(){
        document.onclick=this.two;
    }
    one(e){
        e.nativeEvent.stopImmediatePropagation();
        alert(1)
    }
    two(){
        alert(2)
    }
    render(){
        return(<div style={{height:150,width:150,backgroundColor:"#000"}} onClick={this.one}/>)
    }
}

ReactDOM.render(
    <Test/>,
    document.getElementById("test")
);
```

