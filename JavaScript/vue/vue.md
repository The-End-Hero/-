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