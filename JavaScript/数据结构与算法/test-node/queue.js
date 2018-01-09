// 队列
// 队列是遵循FIFO（First In First Out，先进先出，也称为先进先服务）原则的一组有序的项
function Queue() {
    var items = []

    this.enqueue = function (element) {
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

console.log('开始测试')
var queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Camila')

queue.print()
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.print()


// 优先队列 (商务舱优先登机  急诊优先看病等)
console.log('优先队列')

function PriorityQueue() {
    var items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority)
        if (this.isEmpty()) {
            items.push(queueElement)

        } else {
            var added = false
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true
                    break
                }
                if (!added) {
                    items.push(queueElement)
                }
            }
        }
    }
    // 其他方法同基本队列方法Queue实现
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

var priorityQueue = new PriorityQueue()
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.print()


// 循环队列
console.log('循环队列')