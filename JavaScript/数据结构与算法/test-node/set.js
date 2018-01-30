// 集合
function Set() {
    var items = {}
    // 向集合添加一个新的项
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }
    // 从集合移除一个值
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }
    // 如果值在集合中，返回true，否则返回false
    this.has = function (value) {
        return items.hasOwnProperty(value)
    }
    // 移除集合中的所有项
    this.clear = function () {
        items = {}
    }
    // 返回集合所包含元素的数量。与数组的length属性类似
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
    // 返回一个包含集合中所有值的数组
    this.values = function () {
        // 第一个版本
        return Object.keys(items)
        // 第二个版本
        var keys = [];
        for (var key in items) {
            keys.push(key)
        }
        return keys
    }
    // 并集
    this.union = function (otherSet) {
        var unionSet = new Set()

        var values = this.values()
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }
    // 交集
    this.intersection = function (otherSet) {
        var intersectionSet = new Set()
        
        var values = this.values()
        for(var i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }
    // 差集
    this.difference = function (otherSet) {
        var differenceSet = new Set()

        var values = this.values()
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }
    // 子集
    this.subset = function (otherSet) {
        if(this.size()>otherSet.size()){
            return false
        }else {
            var subsetSet = new Set()
            var values = this.values()
            for(var i=0;i<values.length;i++){
                if(!otherSet.has(values[i])){
                    return false
                }
            }
            return true
        }

    }
}

var set = new Set();
set.add(1);
console.log(set.values()); //输出["1"] console.log(set.has(1)); //输出true console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"] console.log(set.has(2)); //true console.log(set.size()); //2
set.remove(1);
console.log(set.values()); //输出["2"]
set.remove(2);
console.log(set.values()); //输出[]

console.log('----并集----')
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3)

var setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

var unionAB = setA.union(setB)
console.log(unionAB.values())

console.log('----交集----')
var intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())

console.log('----差集----')
var differenceAB = setA.difference(setB)
console.log(differenceAB.values())

console.log('----子集----')
console.log(setA.subset(setB))
