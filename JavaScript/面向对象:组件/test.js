function Aa() {
    this.aaa = 123
    this.init = function () {
        console.log('this is init func')

    }
}

var aa = new Aa()
aa.init()