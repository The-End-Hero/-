### react相关问题



#### setState

setState有同步也有异步，大体上来说理解成异步会比较好。

setState只会重新执行render函数，那么在render函数之前的对props进行处理，就可能因为setState导致没有意义。



setState调用引起的React的更新生命周期函数4个函数（比修改prop引发的生命周期少一个componentWillReceiveProps函数），这4个函数依次被调用。

1. **shouldComponentUpdate**
2. **componentWillUpdate**
3. **render**
4. **componentDidUpdate**

当shouldComponentUpdate函数被调用的时候，this.state没有得到更新。

当componentWillUpdate函数被调用的时候，this.state依然没有得到更新。

直到render函数被调用的时候，this.state才得到更新。

(或者，当shouldComponentUpdate函数返回false，这时候更新过程就被中断了，render函数也不会被调用了，这时候React不会放弃掉对this.state的更新的，所以虽然不调用render，依然会更新this.state。）





## 函数式的setState用法

这个函数会接收到两个参数，第一个是**当前的state值**，第二个是**当前的props**，这个函数应该返回一个对象，这个对象代表想要对this.state的更改，换句话说，之前你想给this.setState传递什么对象参数，在这种函数里就返回什么对象，不过，计算这个对象的方法有些改变，不再依赖于this.state，而是依赖于输入参数state。



```javascript
function increment(state, props) {
  return {count: state.count + 1};
}
```

```javascript
function incrementMultiple() {
  this.setState(increment);
  this.setState(increment);
  this.setState(increment);
}
```

对于多次调用函数式setState的情况，**React会保证调用每次increment时，state都已经合并了之前的状态修改结果。**

简单说，加入当前this.state.count的值是0，第一次调用this.setState(increment)，传给increment的state参数是0，第二调用时，state参数是1，第三次调用是，参数是2，最终incrementMultiple的效果，真的就是让this.state.count变成了3，这个函数incrementMultiple终于实至名归。

值得一提的是，在increment函数被调用时，this.state并没有被改变，依然，要等到render函数被重新执行时（或者shouldComponentUpdate函数返回false之后）才被改变。

**传统式setState的存在，会把函数式setState拖下水啊！**