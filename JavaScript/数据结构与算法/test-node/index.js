// 栈
function Stack(){
  // 各种属性和方法的声明
  var items =[];
  this.push = function(element){
    items.push(element)
  }
  this.pop=function(){
    return items.pop()
  }
}
