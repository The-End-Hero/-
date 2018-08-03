### vue相关问题

vue是更好的前端框架吗？那些指令的背诵有什么意义呢？react本身是比vue简单，不过是中文社区和redux的纯函数让人觉得react难度极大而已。

一切都是边界职能的不清晰,居然很多人认为跨域是vue解决的...对于整体知识体系框架不完善的人,vue极大的帮助(也是一定程度上的毒药)了他们.

react在表单绑定方面是不如vue的，但是实际上react+mobx是比vue+vuex简单的。（api是真的开发效率高，让傻子可以轻易开发应用）



常用API

```javascript
v-bind — >:

v-model:表单(input textarea)双向绑定，vue本身默认是单向数据流（借鉴react）

v-html:将字符串以html模板渲染

v-on-->@  绑定事件

watch:{
	handler:function(val,oldval){  
    	console.log(val.name)  
    }, 
	deep:true
}

created  组件创建，能获取组件本身，router等

mounted  组件创建完成，有真实dom节点

computed 计算属性

mixins

components 组件，template中写法差异

methods  函数方法对象


```

template中计算属性有妙用（表单验证）

date-select组件点击外部，改变组件内部状态，自定义指令（ele-ui的原理也是如此）

















### [生命周期图13](http://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

### [生命周期钩子](http://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

- [beforeCreate9](http://cn.vuejs.org/v2/api/#beforeCreate)：在实例初始化之后
- [created1](http://cn.vuejs.org/v2/api/#created)：实例已经创建完成之后被调用，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调
- [beforeMount1](http://cn.vuejs.org/v2/api/#beforeMount)：在挂载开始之前被调用：相关的 render 函数首次被调用
- [mounted](http://cn.vuejs.org/v2/api/#mounted)：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
- [beforeUpdate](http://cn.vuejs.org/v2/api/#beforeUpdate)：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
- [updated](http://cn.vuejs.org/v2/api/#updated)：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作
- [activated3](http://cn.vuejs.org/v2/api/#activated)
- [deactivated2](http://cn.vuejs.org/v2/api/#deactivated)
- [beforeDestroy](http://cn.vuejs.org/v2/api/#beforeDestroy)
- [destroyed3](http://cn.vuejs.org/v2/api/#destroyed)

### 源码：2.2.4

```javascript
module.exports = Vue$3;
```

- L3788 构造函数

```javascript
function Vue$3 (options) {
  this._init(options);
}
```

- L3663 初始化

```javascript
Vue.prototype._init = function (options) {
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');
}
```

- L2253 生命周期钩子

```javascript
function callHook (vm, hook) {}
```

- L337 生命周期钩子清单

```javascript
var config = {
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],
}
```

### 业务逻辑的处理时机

- created：异步数据的获取、初始化
- mounted：挂载元素内dom节点的获取
- nextTick：更新数据后立即操作dom
- updated：任何数据的更新，如果要做统一的业务逻辑处理
- watch：监听具体数据变化，并做相应的处理