// 队列
// 队列是遵循FIFO（First In First Out，先进先出，也称为先进先服务）原则的一组有序的项
function Queue() {
    var items = []

    this.enque = function (element) {
        items.push(element)
    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
    this.isEmpty = function () {
        return items.length
    }
    this.clear = function () {
        items = []
    }
    this.size = function () {
        return items.length
    }
    this.print = function () {
        console.log(items.toString())
    }
}
// 队列和栈的区别就在于 先进先出和后进先出的原则不同