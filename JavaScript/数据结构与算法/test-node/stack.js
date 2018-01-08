// 栈
// 遵从后进先出(LIFO)原则的有序集合
function Stack() {
    // 各种属性和方法的声明
    var items = [];
    this.push = function (element) {
        items.push(element)
    }
    this.pop = function () {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.size = function () {
        return items.length
    }
    this.clear = function () {
        items = []
    }
    this.print = function () {
        console.log(items.toString(), '打印items')
    }
}

var stack = new Stack()
console.log(stack.isEmpty(), '是否为空')

stack.push(5)
stack.push(8)

console.log(stack.peek(), '返回最后一个元素')

stack.push(11)
console.log(stack.size(), '栈长度')
console.log(stack.isEmpty(), '是否为空')


stack.push(15)
stack.pop()
stack.pop()
console.log(stack.size())
stack.print()
console.log('-----------------------------')

function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = ''

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}

console.log(divideBy2(233))
console.log(divideBy2(10))
console.log(divideBy2(10000))

console.log('------------------------')


function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }
    return baseString
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))