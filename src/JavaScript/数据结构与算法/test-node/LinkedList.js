// 链表
function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null
    }
    var length = 0; // 表示链表数量的  内部/私有变量
    var head = null;
    // 向列表尾部追加元素
    this.append = function (element) {
        var node = new Node(element),
            current;
        // console.log(node, 'node辅助类');
        if (head === null) {
            // console.log('添加的是第一个元素');
            head = node;
        } else {
            // console.log('添加的不是第一个元素');
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
        // console.log(length, '链表长度')
        console.log(head, '链表head指向')
    }
    // 向列表的特定位置插入一个新的项
    this.insert = function (position, element) {
        // 检查越界值
        if (position >= 0 && position <= length) {
            var node = new node(element),
                current = head,
                previous,
                index = 0
            if (position === 0) { // 在第一个位置添加
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++ // 更新列表长度
            return true
        } else {
            return false
        }
    }
    // 从链表中移除元素
    this.removeAt = function (position) {
        // 检查越界值
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            // 移除第一项
            if (position == 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                // 将previous与current的下一项连接起来：跳过current，从而移除它
                previous.next = current.next
            }

            length--
            return current.element
        } else {
            return null
        }
    }
    // 移除链表中指定的元素
    this.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }
    // indexOf方法  接受一个元素 如果在LinkedList中存在，返回该元素所在位置，否则返回-1
    this.indexOf = function (element) {
        var current = head,
            index = -1

        while (current) {
            if (element == current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
    this.isEmpty = function () {
        return length === 0
    }
    // 返回链表包含的元素个数。与数组的length属性类似
    this.size = function () {
        return length
    }
    // toString方法 会把LinkedList对象转化成一个字符串
    this.toString = function () {
        var current = head,
            string = ''

        while (current) {
            string += current.element + (current.next ? ', ' : '')
            current = current.next
        }
        console.log(string, 'toString')
        return string
    }
    this.print = function () {
        console.log(this.toString())
    }
    this.getHead = function () {
        return head
    }
}

// 测试链表尾部添加元素
var list = new LinkedList()
list.append(10)
list.append(15)
list.append(20)
list.toString()

console.log('-----双向链表------')

// 双向链表    双向链表和普通链表的区别在于，在链表中， 一个节点只有链向下一个节点的链接，而在双向链表中，链接是双向的:一个链向下一个元素， 另一个链向前一个元素
function DoublyLinkedList() {
    var Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null // 新增的
    }
    var length = 0
    var head = null
    var tail = null // 新增的
    this.append = function (element) {
        let node = new Node(element),
            current;
        if (head === null) {
            head = node;
            tail = node; //NEW
        } else {
            //NEW
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        length++;
        console.log(head, '链表head指向')
        console.log(tail, '链表tail指向')
    }
    this.insert = function (position, element) {
        // 检查越界值
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0
            if (position === 0) { // 在第一个位置添加
                if (!head) { // 新增的
                    head = node
                    tail = node

                } else {
                    node.next = current
                    current.prev = node // 新增的
                    head = node
                }

            } else if (position === length) { // 最后一项 新增的
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node // 新增的
                node.prev = previous // 新增的
            }
            length++ // 更新列表长度
            return true
        } else {
            return false
        }

    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) { //NEW
                if (length === 1) { //
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {  //NEW
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous; //NEW
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function (element) {
        let current = head,
            index = -1;
        if (element == current.element) {
            return 0;
        }
        index++;
        while (current.next) {
            if (element == current.element) {
                return index;
            }
            current = current.next;
            index++;
        }
        //check last item
        if (element == current.element) {
            return index;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.toString = function () {
        let current = head,
            s = current ? current.element : '';
        while (current && current.next) {
            current = current.next;
            s += ', ' + current.element;
        }
        console.log(s, 'toString')
        return s;
    };
    this.inverseToString = function () {
        let current = tail,
            s = current ? current.element : '';
        while (current && current.prev) {
            current = current.prev;
            s += ', ' + current.element;
        }
        return s;
    };
    this.print = function () {
        console.log(this.toString());
    };
    this.printInverse = function () {
        console.log(this.inverseToString());
    };
    this.getHead = function () {
        return head;
    };
    this.getTail = function () {
        return tail;
    }

}

var doublelist = new DoublyLinkedList()
doublelist.append(10)
doublelist.append(15)
doublelist.append(20)
doublelist.toString()