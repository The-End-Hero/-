var a = function () {
    var num = 0

    class a {
        constructor() {
            num++
        }

        static get run() {
            return num
        }
    }
    return a
}()

var a1 = new a()
var a2 = new a()
var a3 = new a()
a.run