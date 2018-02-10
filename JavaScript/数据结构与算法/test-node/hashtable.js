/**HashTable类，也叫HashMap类，是Dictionary类的一种散列表实现方式。
 *散列算法的作用是尽可能快地在数据结构中找到一个值。
 * @constructor
 */
function HashTable() {
    var table = []

    var loseloseHashCode = function (key) { //私有方法
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; //
    };
    //向散列表增加一个新的项(也能更新散列表)。
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    }
    //根据键值从散列表中移除值。
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    }
    //返回根据键值检索到的特定的值。
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    }

    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) {        //{2}
                console.log(i + ": " + table[i]);//{3}
            }
        }
    };
}

var log = function () {
    console.log.apply(console, arguments)
}
// 使用hashtable
log('--使用hashtable')
var hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');

// log(hash.get('Gandalf'));
// log(hash.get('Loiane'));
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

log(hash.print())

hash.remove('Gandalf');
log(hash.get('Gandalf'));

// 散列表会出现冲突 处理冲突有几种方法:分离链接、线性探查和双散列法。
log('----散列表冲突----')
// 分离链接  利用的链表来避免冲突
log('分离链接')
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

function HashTableLink() {
    var table = []
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };
    var loseloseHashCode = function (key) { //私有方法
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; //
    };
    //向散列表增加一个新的项(也能更新散列表)。
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (table[position] == undefined) { //{1}
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value)); //{2}
    };
    //根据键值从散列表中移除值。
    this.remove = function(key){
        var position = loseloseHashCode(key);
        if (table[position] !== undefined){
            var current = table[position].getHead();
            while(current.next){
                if (current.element.key === key){ //{11}
                    table[position].remove(current.element); //{12}
                    if (table[position].isEmpty()){ //{13}
                        table[position] = undefined; //{14}
                    }
                    return true; //{15}
                }
                current = current.next;
            }
// 检查是否为第一个或最后一个元素
            if (current.element.key === key){ //{16}
                table[position].remove(current.element);
                if (table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false; //{17}
    };
    //返回根据键值检索到的特定的值。
    this.get = function (key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) { //{3}
            //遍历链表来寻找键/值
            var current = table[position].getHead(); //{4}
            while (current.next) {  //{5}
                if (current.element.key === key) { //{6}
                    return current.element.value; //{7}
                }
                current = current.next; //{8}
            }
            //检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key) { //{9}
                return current.element.value;
            }
        }
        return undefined; //{10}
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) {        //{2}
                console.log(i + ": " + table[i]);//{3}
            }
        }
    };
}
var hashlink = new HashTableLink();
hashlink.put('Gandalf', 'gandalf@email.com');
hashlink.put('John', 'johnsnow@email.com');
hashlink.put('Tyrion', 'tyrion@email.com');
hashlink.put('Aaron', 'aaron@email.com');
hashlink.put('Donnie', 'donnie@email.com');
hashlink.put('Ana', 'ana@email.com');
hashlink.put('Jonathan', 'jonathan@email.com');
hashlink.put('Jamie', 'jamie@email.com');
hashlink.put('Sue', 'sue@email.com');
hashlink.put('Mindy', 'mindy@email.com');
hashlink.put('Paul', 'paul@email.com');
hashlink.put('Nathan', 'nathan@email.com');
log('---------------')
log(hashlink.print())
log('---------------')
log(hash.print())

// 线性探查  index有值，尝试index+1，还有值，尝试index+2，以此类推。
function HashTableLine() {
    var table = []
    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        } };

    var loseloseHashCode = function (key) { //私有方法
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; //
    };
    //向散列表增加一个新的项(也能更新散列表)。
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (table[position] == undefined) { // {2}
            table[position] = new ValuePair(key, value); // {3}
        }else {
            var index = ++position; // {4}
            while (table[index] != undefined){ // {5} 6
                index++; // {6}
            }
            table[index] = new ValuePair(key, value); // {7}
        }
    }
    //根据键值从散列表中移除值。
    this.remove = function (key) {
        table[key] = undefined;
    }
    //返回根据键值检索到的特定的值。
    this.get = function (key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) { //{8}
            if (table[position].key === key) { //{9}
                return table[position].value; //{10}
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) { //{11}
                    index++;
                }
                if (table[index].key === key) { //{12}
                    return table[index].value; //{13}
                }
            }
        }
        return undefined; //{14}
    }

    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) {        //{2}
                console.log(i + ": " + table[i]);//{3}
            }
        }
    };
}

/**散列函数
 * 散列函数优秀的指标
 * 1.插入和检索元素的时间(即性能)
 * 2.当然也包括较低的冲突可能性。
 * 例如 djb2
 * var djb2HashCode = function (key) {
        var hash = 5381; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}
    };
 */