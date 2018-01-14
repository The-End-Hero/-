// 链表
function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null
    }
    var length = 0;
    var head = null;
    // 向列表尾部追加元素
    this.append = function (element) {
        var node = new Node(element),
            current;
        console.log(node, 'node辅助类');
        if (head === null) {
            console.log('添加的是第一个元素');
            head = node;
        } else {
            console.log('添加的不是第一个元素');
            current = head;
            // 循环列表，找到最后一项
            while (current.next) {
                current = current.next;
            }
            // 找到最后一项，将其next赋为node，建立链接
            current.next = node
        }
        // 更新列表的长度
        length++
        console.log(length,'链表长度')
        console.log(head,'链表head指向')
    }

    this.insert = function (position, element) {

    }
    this.removeAt = function (position) {

    }
    this.remove = function (element) {

    }
    this.indexOf = function (element) {

    }
    this.isEmpty = function () {

    }
    this.size = function () {

    }
    this.toString = function () {

    }
    this.print = function () {

    }
}

// 测试链表尾部添加元素
var list = new LinkedList()
list.append(10)
list.append(15)
list.append(20)