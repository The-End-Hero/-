var 士兵 = {
    ID: 1, // 用于区分每个士兵
    兵种:"美国大兵",
    攻击力:5,
    生命值:42,
    行走:function(){ /*走俩步的代码*/},
    奔跑:function(){ /*狂奔的代码*/  },
    死亡:function(){ /*Go die*/    },
    攻击:function(){ /*糊他熊脸*/   },
    防御:function(){ /*护脸*/       }
}

兵营.create(士兵)


// 100

var 士兵们 = []
var 士兵
for(var i=0; i<100; i++){
    士兵 = {
        ID: i, // ID 不能重复
        兵种:"美国大兵",
        攻击力:5,
        生命值:42,
        行走:function(){ /*走俩步的代码*/},
    奔跑:function(){ /*狂奔的代码*/  },
    死亡:function(){ /*Go die*/    },
    攻击:function(){ /*糊他熊脸*/   },
    防御:function(){ /*护脸*/       }
}
    士兵们.push(士兵)
}

兵营.batchMake(士兵们)


// 100

var soldiers = []
var soldier
var soldierCommon = {
    兵种:"美国大兵",
    攻击力:5,
    行走:function(){ /*走俩步的代码*/},
    奔跑:function(){ /*狂奔的代码*/  },
    死亡:function(){ /*Go die*/    },
    攻击:function(){ /*糊他熊脸*/   },
    防御:function(){ /*护脸*/       }
}
for(var i=0; i<100; i++){
    soldier = {
        ID: i, // ID 不能重复
        生命值:42,
    }

    soldier.__proto__ = soldierCommon
    soldiers.push(soldier)
}

兵营.batchMake(soldiers)

// 构造函数
function createSoldier(){
    var obj = {
        ID: i, // ID 不能重复
        生命值:42,
    }
    obj.__proto__ = createSoldier.prototype
    return obj
}
createSoldier.prototype = {
    兵种:"美国大兵",
    攻击力:5,
    行走:function(){ /*走俩步的代码*/},
    奔跑:function(){ /*狂奔的代码*/  },
    死亡:function(){ /*Go die*/    },
    攻击:function(){ /*糊他熊脸*/   },
    防御:function(){ /*护脸*/       }
}



var soldiers = []
for(var i=0; i<100; i++){
    soldiers.push(createSoldier())
}

兵营.batchMake(soldiers)

// JS 之父的关怀
function createSoldier(name){
    // this = {}
    // this.__proto__  = createSoldier.prototype
    this.ID = i // ID 不能重复
    this.生命值 = 42
    this.name = name || '无名战士'
    // return this
}
// createSoldier.prototype = {constructor: createSoldier}
createSoldier.prototype.兵种 = "美国大兵"
createSoldier.prototype.攻击力 = 5
createSoldier.prototype.行走 = function(){ /*走俩步的代码*/},
    createSoldier.prototype.奔跑 = function(){ /*狂奔的代码*/  },
    createSoldier.prototype.死亡 = function(){ /*Go die*/    },
    createSoldier.prototype.攻击 = function(){ /*糊他熊脸*/   },
    createSoldier.prototype.防御 = function(){ /*护脸*/       }

var soldiers = []
for(var i=0; i<100; i++){
    soldiers.push(new createSoldier())
}

兵营.batchMake(soldiers)

// 习俗
//1. 构造函数首字母大写
//2. 构造函数可以省掉 create
//3. 如果构造函数没有参数，那么可以省略括号
function Soldier(name){
    this.ID = i // ID 不能重复
    this.生命值 = 42
    this.name = name || '无名战士'
}
// createSoldier.prototype = {constructor: createSoldier}
Soldier.prototype.兵种 = "美国大兵"
Soldier.prototype.攻击力 = 5
Soldier.prototype.行走 = function(){ /*走俩步的代码*/},
    Soldier.prototype.奔跑 = function(){ /*狂奔的代码*/  },
    Soldier.prototype.死亡 = function(){ /*Go die*/    },
    Soldier.prototype.攻击 = function(){ /*糊他熊脸*/   },
    Soldier.prototype.防御 = function(){ /*护脸*/       }

var soldiers = []
for(var i=0; i<100; i++){
    soldiers.push( new Soldier )
}

兵营.batchMake(soldiers)




// 继承
function Human(options){
    this.name = options.name
    this.肤色  = options.肤色
}
Human.prototype.eat = function(){}
Human.prototype.drink = function(){}
Human.prototype.poo = function(){}

function Soldier(options){
    // this.__proto__ = Soldier.prototype
    Human.call(this, options)
    this.ID = options.ID
    this.生命值 = 42
}
// createSoldier.prototype = {constructor: createSoldier}

// 支持ie
// function fakeHuman(){}
// fakeHuman.prototype = Human.prototype
// Soldier.prototype = new fakeHuman()

// no-ie
Soldier.prototype = Object.create(Human.prototype)

// 脑中的
// Soldier.prototype.__proto__ === Human.prototype

Soldier.prototype.兵种 = "美国大兵"
Soldier.prototype.攻击力 = 5
Soldier.prototype.行走 = function(){ /*走俩步的代码*/}
    Soldier.prototype.奔跑 = function(){ /*狂奔的代码*/  }
    Soldier.prototype.死亡 = function(){ /*Go die*/    }
    Soldier.prototype.攻击 = function(){ /*糊他熊脸*/   }
    Soldier.prototype.防御 = function(){ /*护脸*/       }
// Soldier.prototype.__proto__ = Human.prototype
var s = new Soldier({name: '方方', 肤色:'yellow', ID: 1})




// 1. __proto__ 不能用
// Soldier.prototype.__proto__ = Human.prototype
// Soldier.prototype.__proto__ === this.__proto__ === Human.prototype

// class

class Human{
    constructor(options){
        this.name = options.name
        this.肤色  = options.肤色
    }
    eat(){}
    drink(){}
    poon(){}
}

class Soldier extends Human{
    constructor(options){
        super(options)
        this.ID = options.ID
        this.生命值 = 42
        this.兵种 = "美国大兵"
        this.攻击力 = 5
    }
    行走(){ /*走俩步的代码*/}
    奔跑(){ /*狂奔的代码*/  }
    死亡(){ /*Go die*/    }
    攻击(){ /*糊他熊脸*/   }
    防御(){ /*护脸*/       }
}
var s = new Soldier({name: '方方', 肤色:'yellow', ID: 1})