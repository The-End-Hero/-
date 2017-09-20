### ES6和ES5 在 new something(arguments)区别

ES6的Class中,constructor内会在new时执行.内部函数,this指向,可用箭头函数继承this

ES5的Function,在new时会自动执行内部函数,在prototype上的方法,会在调用时顺序查找.this需要hack