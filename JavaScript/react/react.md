### react相关问题



#### setState

setState有同步也有异步，大体上来说理解成异步会比较好。

setState只会重新执行render函数，那么在render函数之前的对props进行处理，就可能因为setState导致没有意义。

