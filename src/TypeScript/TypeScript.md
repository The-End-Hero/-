# TypeScript

## typeScript中的数据类型

> typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型

### 布尔类型（boolean）

```typescript
var flag:boolean=true;
// flag=123;  //错误
flag=false;  //正确
console.log(flag);
```



### 数字类型（number）

```typescript
var num:number=123;
num=456;
console.log(num);  // 正确
num='str';   // 错误
```



### 字符串类型(string)

```typescript
var str:string='this is ts';
     str='haha';  //正确
     str=true;  //错误
```



### 数组类型（array）

ES5

```javascript
var arr=['1','2'];
```

TS

```typescript
// 1.第一种定义数组的方式
var arr:number[]=[11,22,33];
console.log(arr);
//2.第二种定义数组的方式
var arr:Array<number>=[11,22,33];
console.log(arr)
```



### 元组类型（tuple）

> 元组类型（tuple）  属于数组的一种

```typescript
var arr:Array<number>=[11,22,33];
console.log(arr)

// 元组类型
let arr:[number,string]=[123,'this is ts'];
console.log(arr);
```



### 枚举类型（enum）


>  枚举类型（enum）
>     随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
>
>   enum 枚举名{	
>
>  	标识符[=整型常数],
>		
>  	标识符[=整型常数],
>		
>  	...
>
>  }

```typescript
enum Flag {
	success=1,
    error=2
};
let s:Flag=Flag.success;
console.log(s);


enum Color {blue,red,'orange'};
var c:Color=Color.red;
console.log(c);   //1  如果标识符没有赋值 它的值就是下标


enum Err {
    'undefined'=-1,
	'null'=-2,'
	success'=1
};
var e:Err=Err.success;
console.log(e);
```



### 任意类型（any）

```typescript
var num:any=123;
num='str';
num=true;
console.log(num)
//任意类型的用处  主要是没有 对象 这种类型
var oBox:any = document.getElementById('box');
oBox.style.color = 'red';

```



### null 和 undefined

> null 和 undefined 其他（never类型）数据类型的子类型

```typescript
var num:number;
console.log(num)  //输出：undefined   报错
var num:undefined;
console.log(num)  //输出：undefined  //正确


var num:number | undefined;
num=123;
console.log(num);


//定义没有赋值就是undefined
var num:number | undefined;
console.log(num);
var num:null;
num=null;
//一个元素可能是 number类型 可能是null 可能是undefined
var num:number | null | undefined;
num = 1234;
console.log(num);
```



### void类型

> TS中的void表示没有任何类型，一般用于定义方法的时候 方法没有返回值。

```typescript
//正确写法
function run():void{
	console.log('run')
}
run();

//错误写法
function run():undefined{
	console.log('run')
}
run();

//正确写法
function run():number{
    return 123;
}
run();
```



### never类型

> never表示其他类型，（包括 null 和 undefined）的子类型，代表从不会出现的值。
>
> 这意味着声明never的变量只能被never类型所赋值。

```typescript
var a:undefined;
a=undefined;

var b:null;
b=null;

var a:never;
//    a=123; //错误的写法
a=(()=>{
	throw new Error('错误');
})()
```



## 函数

### 函数的定义

```typescript
//函数声明法
function run():string{
	return 'run';
}
//匿名函数
var fun2=function():number{
	return 123;
}
alert(fun2()); /*调用方法*/
```



### 传参

```typescript
function getInfo(name:string,age:number):string{
	return `${name} --- ${age}`;
}
alert(getInfo('zhangsan',20));
var getInfo=function(name:string,age:number):string{
	return `${name} --- ${age}`;
}
alert(getInfo('zhangsan',40));

//没有返回值的方法
function run():void{
	console.log('run')
}
run();
```



方法可选参数

```typescript
function getInfo(name:string,age?:number):string{
	if(age){
		return `${name} --- ${age}`;
	}else{
		return `${name} ---年龄保密`;
	}
}
alert(getInfo('zhangsan'))
alert(getInfo('zhangsan',123))

//注意:可选参数必须配置到参数的最后面
//错误写法
function getInfo(name?:string,age:number):string{
	if(age){
		return `${name} --- ${age}`;
	}else{
		return `${name} ---年龄保密`;
	}
}
alert(getInfo('zhangsan'))
```



默认参数，可选参数

```typescript
function getInfo(name:string,age:number=20):string{
	if(age){
		return `${name} --- ${age}`;
	}else{
		return `${name} ---年龄保密`;
	}
}
// alert( getInfo('张三'));
alert( getInfo('张三',30));
```



剩余参数

```typescript
function sum(...result:number[]):number{
	var sum=0;
	for(var i=0;i<result.length;i++){
		sum+=result[i];  
	}
	return sum;
}
alert(sum(1,2,3,4,5,6)) ;


function sum(a:number,b:number,...result:number[]):number{
	var sum=a+b;
	for(var i=0;i<result.length;i++){
		sum+=result[i];  
	}
	return sum;
}
alert(sum(1,2,3,4,5,6)) ;
```



TS函数重载

> java中方法的重载：重载指的是两个或者两个以上同名函数，但他们的参数不一样，这时候出现函数重载的情况。
>
> typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
>
> ts为了兼容es5以及es6，重载的写法和java中有区别。

```javascript
//es5中出现同名方法，下面的会替换上面的方法 
function css(config){
}
function css(config,value){
}
```

```typescript
//ts中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):string;
// function getInfo(str:any):any{
//     if(typeof str==='string'){
//         return '我叫：'+str;
//     }else{
//         return '我的年龄是'+str;
//     }
// }
// alert(getInfo('张三'));   //正确
// alert(getInfo(20));   //正确
// alert(getInfo(true));    //错误写法
function getInfo(name:string):string;
function getInfo(name:string,age:number):string;
function getInfo(name:any,age?:any):any{
	if(age){
		return '我叫：'+name+'我的年龄是'+age;
	}else{
		return '我叫：'+name;
	}
}
// alert(getInfo('zhangsan'));  /*正确*/
// alert(getInfo(123));  错误
// alert(getInfo('zhangsan',20));
```



建投函数

```typescript
setTimeout(()=>{
	alert('run')
},1000)
```





## 类

### es5的类1.最简单的类

```javascript
function Person(){
	this.name='张三';
	this.age=20;
}
var p=new Person();
alert(p.name);
```



### 2.构造函数和原型链里面增加方法

```javascript
function Person(){
	this.name='张三';  /*属性*/
	this.age=20;
	this.run=function(){
		alert(this.name+'在运动');
	}
}
//原型链上面的属性会被多个实例共享   构造函数不会
Person.prototype.sex="男";
Person.prototype.work=function(){
	alert(this.name+'在工作');
}
var p=new Person();
alert(p.name);
p.run();
p.work();
```



### 3.类里面的静态方法

```javascript
function Person(){
	this.name='张三';  /*属性*/
	this.age=20;
	this.run=function(){  /*实例方法*/
		alert(this.name+'在运动');
	}
}
Person.getInfo=function(){
	alert('我是静态方法');
}
//原型链上面的属性会被多个实例共享   构造函数不会
Person.prototype.sex="男";
Person.prototype.work=function(){
	alert(this.name+'在工作');
}
var p=new Person();    
p.work();
//调用静态方法
Person.getInfo();
```



### 4.es5里面的继承     对象冒充实现继承

```javascript
function Person(){
	this.name='张三';  /*属性*/
	this.age=20;
	this.run=function(){  /*实例方法*/
		alert(this.name+'在运动');
	}
}      
Person.prototype.sex="男";
Person.prototype.work=function(){
	alert(this.name+'在工作');
}
//Web类 继承Person类   原型链+对象冒充的组合继承模式
function Web(){
	Person.call(this);    /*对象冒充实现继承*/
}
var w=new Web();
// w.run();  //对象冒充可以继承构造函数里面的属性和方法
w.work();  //对象冒充可以继承构造函数里面的属性和方法   但是没法继承原型链上面的属性和方法
```



### 5.es5里面的继承

```javascript
function Person(){
	this.name='张三';  /*属性*/
	this.age=20;
	this.run=function(){  /*实例方法*/
		alert(this.name+'在运动');
	}
}
Person.prototype.sex="男";
Person.prototype.work=function(){
	alert(this.name+'在工作');
}
//Web类 继承Person类   原型链+对象冒充的组合继承模式
function Web(){
}
Web.prototype=new Person();   //原型链实现继承
var w=new Web();
//原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
//w.run();
w.work();
```



### 6.原型链的实现继承  问题？

```javascript
     function Person(name,age){
            this.name=name;  /*属性*/
            this.age=age;
            this.run=function(){  /*实例方法*/
                alert(this.name+'在运动');
            }
        }
        Person.prototype.sex="男";
        Person.prototype.work=function(){
             alert(this.name+'在工作');

        }
       var p=new Person('李四',20);
       p.run();



 	function Person(name,age){
            this.name=name;  /*属性*/
            this.age=age;
            this.run=function(){  /*实例方法*/
                alert(this.name+'在运动');
            }

    }
    Person.prototype.sex="男";
    Person.prototype.work=function(){
            alert(this.name+'在工作');
    }


    function Web(name,age){
    }

    Web.prototype=new Person();
    var w=new Web('赵四',20);   //实例化子类的时候没法给父类传参
    w.run();
    // var w1=new Web('王五',22);
```



### 7.原型链+对象冒充的组合继承模式

```javascript
function Person(name,age){
	this.name=name;  /*属性*/
	this.age=age;
	this.run=function(){  /*实例方法*/
		alert(this.name+'在运动');
	}
}
Person.prototype.sex="男";
Person.prototype.work=function(){
	alert(this.name+'在工作');
}

function Web(name,age){
	Person.call(this,name,age);   //对象冒充继承   实例化子类可以给父类传参
}
Web.prototype=new Person();
var w=new Web('赵四',20);   
// w.run();
w.work();
// var w1=new Web('王五',22);
```



### 8.原型链+对象冒充继承的另一种方式

```javascript
function Person(name,age){
	this.name=name;  /*属性*/
	this.age=age;
	this.run=function(){  /*实例方法*/
		alert(this.name+'在运动');
	}
}
Person.prototype.sex="男";
Person.prototype.work=function(){
	alert(this.name+'在工作');
}
function Web(name,age){
	Person.call(this,name,age);   //对象冒充继承  可以继承构造函数里面的属性和方法、实例化子类可以给父类传参
}
Web.prototype=Person.prototype;
var w=new Web('赵四',20);   
w.run();
// w.work();
// var w1=new Web('王五',22);
```



### ts中的类

```typescript
class Person{
	name:string;   //属性  前面省略了public关键词
	constructor(n:string){  //构造函数   实例化类的时候触发的方法
		this.name=n;
	}
	run():void{
		alert(this.name);
	}
}
var p=new Person('张三');
p.run()


//----分割----
class Person{
	name:string; 
	constructor(name:string){  //构造函数   实例化类的时候触发的方法
		this.name=name;
	}
	getName():string{
		return this.name;
	}
	setName(name:string):void{
		this.name=name;
	}
}
var p=new Person('张三');
alert(p.getName());
p.setName('李四');
alert(p.getName());
```



### 2.ts中的继承   extends, super

```typescript
class Person{
	name:string;
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
// var p=new Person('王五');
// alert(p.run())

class Web extends Person{
	constructor(name:string){
		super(name);  /*初始化父类的构造函数*/
	}
}
var w=new Web('李四');
alert(w.run());

class Person{
	name:string;
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
// var p=new Person('王五');
// alert(p.run())
class Web extends Person{
	constructor(name:string){
		super(name);  /*初始化父类的构造函数*/
	}
	run():string{
		return `${this.name}在运动-子类`
	}
	work(){
		alert(`${this.name}在工作`)
	}
}
var w=new Web('李四');
// alert(w.run());
// w.work();
alert(w.run());
```



### 3.类里面的修饰符 

> ts的三种修饰符
>
> public：公有                    在当前类里面，子类，类外面都可以访问
>
> protected：保护类型      在当前类里面，子类里面可以访问，在类外部没法访问
>
> private：私有                   在当前类里面可以访问，子类，类外部都没法访问
>
> 属性如果不加修饰符 则默认就是公有（public）

```typescript
// public :公有          在类里面、 子类  、类外面都可以访问
class Person{
	public name:string;  /*公有属性*/
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
// var p=new Person('王五');
// alert(p.run())
class Web extends Person{
	constructor(name:string){
		super(name);  /*初始化父类的构造函数*/
	}
	run():string{
		return `${this.name}在运动-子类`
	}
	work(){
		alert(`${this.name}在工作`)
	}
}
var w=new Web('李四');
w.work();
//类外部访问公有属性
class Person{
	public name:string;  /*公有属性*/
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
var  p=new Person('哈哈哈');
alert(p.name);





// protected：保护类型    在类里面、子类里面可以访问 ，在类外部没法访问
class Person{
	protected name:string;  /*公有属性*/
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
var p=new Person('王五');
alert(p.run())
class Web extends Person{
	constructor(name:string){
		super(name);  /*初始化父类的构造函数*/
	}
	work(){
		alert(`${this.name}在工作`)
	}
}
var w=new Web('李四11');
w.work();
alert( w.run());
//类外外部没法访问保护类型的属性
class Person{
	protected name:string;  /*保护类型*/
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
var  p=new Person('哈哈哈');
alert(p.name);





//private ：私有        在类里面可以访问，子类、类外部都没法访问
class Person{
	private name:string;  /*私有*/
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
class Web extends Person{
	constructor(name:string){
		super(name)
	}
	work(){
		console.log(`${this.name}在工作`)
	}
}


class Person{
	private name:string;  /*私有*/
	constructor(name:string){
		this.name=name;
	}
	run():string{
		return `${this.name}在运动`
	}
}
var p=new Person('哈哈哈');
alert(p.run());
```



### 4.静态属性 静态方法

```typescript
function Person() {
    this.run1 = function () {
    }
}

Person.name = '哈哈哈'; // 静态属性
Person.run2 = function () { // 静态方法
}
var p = new Person();
Person.run2();// 静态方法的调用



function $(element) {
    return new Base(element)
}

$.get = function () {
}

function Base(element) {
    this.element = 获取dom节点;
    this.css = function (arr, value) {
        this.element.style.arr = value;
    }
}


$('#box').css('color', 'red')
$.get('url', function () {
})



class Per {
    public name: string;
    public age: number = 20;
    //静态属性
    static sex = "男";
    constructor(name: string) {
        this.name = name;
    }
    run() {  /*实例方法*/
        alert(`${this.name}在运动`)
    }
    work() {
        alert(`${this.name}在工作`)
    }
    static print() {  /*静态方法  里面没法直接调用类里面的属性*/
        alert('print方法' + Per.sex);
    }
}
// var p=new Per('张三');
// p.run();
Per.print();
alert(Per.sex);



```



### 5.多态  抽象类

> 多态父类定义一个方法不去实现，让继承他的子类去实现  每一个子类有不同的表现
>
> 多态属于继承

```typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {   //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
        console.log('吃的方法')
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name + '吃粮食'
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name + '吃老鼠'
    }
}

```

> typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
>
> 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
>
> abstract抽象方法只能放在放在抽象类里面
>
> 抽象类和抽象方法用来定义标准。 标准：Animal 这个类要求它的子类必须包含eat方法。

```typescript
abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。
    run(){
        console.log('其他方法可以不实现')
    }
}
// var a=new Animal() /*错误的写法*/
class Dog extends Animal{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    eat(){
        console.log(this.name+'吃粮食')
    }
}
var d=new Dog('小花花');
d.eat();

class Cat extends Animal{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    run(){
    }
    eat(){
        console.log(this.name+'吃老鼠')
    }

}
var c=new Cat('小花猫');
c.eat();
```



## 接口

> 接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用。接口定义了某一批类所需要遵循的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里面必须提供某些方法，提供这些方法的类就可以满足实际需要。typescript中的接口类似java，同事还增加了灵活的接口类型，包括属性，函数，可索引和类等。

### 1.属性接口 对json的约束

```typescript
//ts中定义方法
function printLabel(): void {
    console.log('printLabel');
}
printLabel();

//ts中定义方法传入参数
function printLabel(label: string): void {
    console.log('printLabel');
}
printLabel('hahah');

//ts中自定义方法传入参数,对json进行约束
function printLabel(labelInfo: { label: string }): void {
    console.log('printLabel');
}
printLabel('hahah'); //错误写法
printLabel({name: '张三'});  //错误的写法
printLabel({label: '张三'});  //正确的写法

//对批量方法传入参数进行约束。
//接口：行为和动作的规范，对批量方法进行约束
//就是传入对象的约束    属性接口
interface FullName {
    firstName: string;   //注意;结束
    secondName: string;
}
function printName(name: FullName) {
    // 必须传入对象  firstName  secondName
    console.log(name.firstName + '--' + name.secondName);
}
// printName('1213');  //错误
var obj = {
    /*传入的参数必须包含 firstName  secondName*/
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj)

//  接口：行为和动作的规范，对批量方法进行约束
interface FullName {
    firstName: string;   //注意;结束
    secondName: string;
}
function printName(name: FullName) {
    // 必须传入对象  firstName  secondName
    console.log(name.firstName + '--' + name.secondName);
}
function printInfo(info: FullName) {
    // 必须传入对象  firstName  secondName
    console.log(info.firstName + info.secondName);
}
var obj = {
    /*传入的参数必须包含 firstName  secondName*/
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj);
printInfo({
    firstName: '李',
    secondName: '四'
})

//接口 ：可选属性
interface FullName {
    firstName: string;
    secondName: string;
}
function getName(name: FullName) {
    console.log(name)
}
//参数的顺序可以不一样
getName({
    secondName: 'secondName',
    firstName: 'firstName'
})
interface FullName {
    firstName: string;
    secondName?: string; // ? 可选属性
}
function getName(name: FullName) {
    console.log(name)
}
getName({
    firstName: 'firstName'
})


//原生js封装的ajax
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}
function ajax(config:Config){
   var xhr=new XMLHttpRequest();
   xhr.open(config.type,config.url,true);
   xhr.send(config.data);
   xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log('chengong');
            if(config.dataType=='json'){
                console.log(JSON.parse(xhr.responseText));
            }else{
                console.log(xhr.responseText)
            }
        }
   }
}
ajax({
    type:'get',
    data:'name=zhangsan',
    url:'http://a.itying.com/api/productlist', //api
    dataType:'json'
})


```

### 2.函数类型接口：对方法传入的参数 以及返回值惊醒约束  批量约束

```typescript
// 加密的函数类型接口
interface encrypt{
    (key:string,value:string):string;
}
var md5:encrypt=function(key:string,value:string):string{
        //模拟操作
        return key+value;
}
console.log(md5('name','zhangsan'));
var sha1:encrypt=function(key:string,value:string):string{
    //模拟操作
    return key+'----'+value;
}
console.log(sha1('name','lisi'));
```

### 3.可索引接口：数组，对象的约束 （不常用）

```typescript
//可索引接口 对数组的约束
interface UserArr {
    [index: number]: string
}
// var arr:UserArr=['aaa','bbb'];
// console.log(arr[0]);
var arr: UserArr = [123, 'bbb'];
/*错误*/
console.log(arr[0]);


//可索引接口 对对象的约束
interface UserObj {
    [index: string]: string
}
var arr: UserObj = {name: '张三'};
```



### 4.类类型接口：对类的约束  和  抽象类抽象有点相似

```typescript
//类类型接口:对类的约束  和   抽象类抽象有点相似
interface Animal {
    name: string;
    eat(str: string): void;
}
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '吃粮食')
    }
}
var d = new Dog('小黑');
d.eat();
class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(this.name + '吃' + food);
    }
}
var c = new Cat('小花');
c.eat('老鼠');
```



### 5.接口扩展：接口可以继承接口

```typescript
//接口扩展：接口可以继承接口
interface Animal {
    eat(): void;
}
interface Person extends Animal {
    work(): void;
}
class Web implements Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '喜欢吃馒头')
    }
    work() {
        console.log(this.name + '写代码');
    }
}
var w = new Web('小李');
w.eat();



interface Animal {
    eat(): void;
}
interface Person extends Animal {
    work(): void;
}
class Programmer {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(code: string) {
        console.log(this.name + code)
    }
}
class Web extends Programmer implements Person {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log(this.name + '喜欢吃馒头')
    }
    work() {
        console.log(this.name + '写代码');
    }
}

var w = new Web('小李');

// w.eat();

w.coding('写ts代码');
```





## 泛型

> 软件工程中，我们不仅要创建一致的定义良好的API，同事也要考虑可重用性。组件不仅能够支持当前的数据类型，同事也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
>
> 在像C#和java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户可以以自己的数据类型来使用组件。
>
> 通俗理解：泛型就是解决  类 接口 方法的复用性，以及对不特定数据类型的支持（类型校验）
>
> 泛型：可以支持不特定的数据类型  要求：传入的参数和返回的参数一致

```typescript
// T表示泛型，具体什么类型是在调用这个方法的时候确定的
function getData<T>(value: T): T {
    return value;
}
getData<number>(123);
getData<string>('1214231');
getData<number>('2112');/*错误的写法*/  


function getData<T>(value: T): any {
    return '2145214214';
}
getData<number>(123);  //参数必须是number
getData<string>('这是一个泛型');


// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a  -  z两种类型。  通过类的泛型来实现
class MinClass {
    public list: number[] = [];
    add(num: number) {
        this.list.push(num)
    }
    min(): number {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m = new MinClass();

m.add(3);
m.add(22);
m.add(23);
m.add(6);
m.add(7);
alert(m.min
      
      
class MinClas<T>{
    public list:T[]=[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}
var m1=new MinClas<number>();   /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11);
m1.add(3);
m1.add(2);
alert(m1.min())
var m2=new MinClas<string>();   /*实例化类 并且制定了类的T代表的类型是string*/
m2.add('c');
m2.add('a');
m2.add('v');
alert(m2.min())    



//函数类型接口
interface ConfigFn {
    (value1: string, value2: string): string;
}
var setData: ConfigFn = function (value1: string, value2: string): string {
    return value1 + value2;
}
setData('name', '张三');
//1、泛型接口
interface ConfigFn {
    <T>(value: T): T;
}
var getData: ConfigFn = function <T>(value: T): T {
    return value;
}
// getData<string>('张三');
// getData<string>(1243);  //错误

//2、泛型接口
interface ConfigFn<T> {
    (value: T): T;
}
function getData<T>(value: T): T {
    return value;
}
var myGetData: ConfigFn<string> = getData;
myGetData('20');
/*正确*/
// myGetData(20)  //错误
```



## tsconfig.json



```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs", 
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "noEmitHelpers": true
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ],
  "compileOnSave": false
}
```

