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
var MyClass = function(){
    this.name = 'sven';
    return { // 显式地返回一个对象
        name: 'anne' }
};
var obj = new MyClass();
alert ( obj.name ); // 输出:anne

// 4.Function.prototype.call 或 Function.prototype.apply 调用


