let p = new Proxy(target,handler)

Target 是你要代理的对象。他可以是JavaScript中的任何合法对象。如数组，对象，函数等等

handler是你要自定义操作方法的一个集合。

p是一个被代理后的新对象，他拥有target的一切属性和方法，只不过其行为和结果是在handler中自定义的。





Proxy的作用

对于代理模式Proxy的主要作用体现在三个方面：

1.拦截和监视外部对象的访问

2.降低函数或类的复杂度

3.在复杂操作前对操作进行校验或对所需资源进行管理

```javascript
let obj = {
  a: 1,
  b: 2,
}

const p = new Proxy(obj, {
  get(target, key, value) {
    if (key === 'c') {
      return '我是自定义的一个结果';
    } else {
      return target[key];
    }
  },

  set(target, key, value) {
    if (value === 4) {
      target[key] = '我是自定义的一个结果';
    } else {
      target[key] = value;
    }
  }
})

console.log(obj.a) // 1 console.log(obj.c) // undefined console.log(p.a) // 1 console.log(p.c) // 我是自定义的一个结果

obj.name = '李白';
console.log(obj.name); // 李白
obj.age = 4;
console.log(obj.age); // 4

p.name = '李白';
console.log(p.name); // 李白
p.age = 4;
console.log(p.age); // 我是自定义的一个结果 
```

从上面这段代码中,我可以很清楚的看到`Proxy`对象的作用.即是之前所受的**用于定义基本操作的自定义行为**.同样的`get`和`set`操作.没有没代理的对象所得的结果是其JavaScript本身的执行机制运行计算后所得到的.而被代理了的对象的结果则是我们自定义的.

Proxy所能代理的范围--handler

在上面代码中,我们看到了构造一个代理对象时所传的第二个参数`handler`,这个`handler`对象是由`get`和`set`两个函数方法组成的.这两个方法会在一个对象被`get`和`set`时被调用执行,以代替原生对象上的操作.那么为什么在`handler`,定义`get`和`set`这两个函数名之后就代理对象上的`get`和`set`操作了呢?

实际上`handler`本身就是ES6所新设计的一个对象.它的作用就是用来**自定义代理对象的各种可代理操作**。它本身一共有13中方法,每种方法都可以代理一种操作.其13种方法如下:

```javascript
handler.getPrototypeOf()

// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。

handler.setPrototypeOf()

// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。

handler.isExtensible()

// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。

handler.preventExtensions()

// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。

handler.getOwnPropertyDescriptor()

// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。

handler.defineProperty()

// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。

handler.has()

// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。

handler.get()

// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。

handler.set()

// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。

handler.deleteProperty()

// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。

handler.ownKeys()

// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。

handler.apply()

// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。

handler.construct()

// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
```



兼容性 ie> 11   ios>9.3  安卓>4.xx