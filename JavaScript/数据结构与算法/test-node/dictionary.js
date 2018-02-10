// 字典
function Dictionary() {
    var items = {}
    //向字典中添加新元素
    this.set = function (key, value) {
        items[key] = value
    }
    // 通过使用键值来从字典中移除键值对应的数据值
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }
    // 如果某个键值存在于这个字典中，则返回true，反之则返回false
    this.has = function (key) {
        return key in items
    }
    // 通过键值查找特定的数值并返回
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined
    }
    // 将这个字典中的所有元素全部删除
    this.clear = function () {
        items = {}
    }
    // 返回字典所包含元素的数量。与数组的length属性类似
    this.size = function () {
        // 第一个版本
        return Object.keys(items).length // 比如IE9以上版本、Firefox 4以上版本、Chrome 5以上版本、Opera 12以 上版本、Safari 5以上版本
        // 第二个版本
        var count = 0;
        for (var prop in items) { //{5}
            if (items.hasOwnProperty(prop)) //{6}
                ++count; //{7}
        }
        return count
    }
    // 将字典所包含的所有键名以数组形式返回
    this.keys = function () {
        var values = []
        for (var k in items) {
            if (this.has(k)) {
                values.push(k)
            }
        }
        return values
    }
    // 将字典所包含的所有数值以数组形式返回
    this.values = function () {
        var values = []
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values
    }
    // 返回Items
    this.getItems = function () {
        return items;
    }
}


var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));


console.log(dictionary.size());



console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));


dictionary.remove('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());