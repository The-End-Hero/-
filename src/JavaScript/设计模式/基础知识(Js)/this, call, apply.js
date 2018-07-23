/**
 * 除去不常用的with和eval的情况，具体到应用中，this的指向大致可以分为4种
 * 1.作为对象的方法调用
 * 2.作为普通函数调用
 * 3.构造器调用
 * 4.Function,prototype.call或Function.prototype.apply调用
 *
 */

// 1.作为对象方法调用

var obj = {
    a: 1,
    getA: function () {
        alert(this === obj)// 输出 true
        alert(this.a)// 输出 1
    }
}
obj.getA()

// 2.作为普通函数调用 在ECMAScript5的strict模式下，函数内部this不会指向全局对象，而是undefined

window.name = 'globalName'
var getName = function () {
    return this.name
}
var myObject = {
    name: 'sven',
    getName: function () {
        return this.name
    }
}
console.log(getName()) // 输出globalName
var getNameobj = myObject.getName()
console.log(getNameobj.getName()) // 输出globalName

// 3.构造器调用
// 。当用 new 运算符调用函数时，该函数总 会返回一个对象，通常情况下，构造器里的 this 就指向返回的这个对象
var MyClass = function () {
    this.name = 'sven';
};
var obj = new MyClass();
alert(obj.name); // 输出:sven

// 如果构造器显式地返回了一个 object 类型的对象(只有这种情况)，那么此次运算结果最终会返回这个对象，而不是我们之前期待的 this
var MyClass = function () {
    this.name = 'sven';
    return { // 显式地返回一个对象
        name: 'anne'
    }
};
var obj = new MyClass();
alert(obj.name); // 输出:anne

// 4.Function.prototype.call 或 Function.prototype.apply 调用  可以动态的改变传入函数的this

var obj1 = {
    name: 'sven',
    getName: function () {
        return this.name;
    }
};
var obj2 = {
    name: 'anne'
}
console.log(obj1.getName())
console.log(obj1.getName.call(obj2))

// 方应杭 https://zhuanlan.zhihu.com/p/23804247
// this 就是你 call 一个函数时，传入的第一个参数。（请务必背下来「this 就是 call 的第一个参数」）
// 如果你的函数调用形式不是 call 形式，请按照「转换代码」将其转换为 call 形式。
/**
 * bind核心逻辑 a.bind(b) --> return a.apply(b) bind过后不可更改this指向
 * function (context){
 *  return function(){
 *    f.apply(context)
 *  }
 * }
 */




