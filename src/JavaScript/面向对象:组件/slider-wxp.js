/**
 * slider组件
 *
 */
var getEle = function (element) {
    return document.querySelector(element)
}
var getAllele = function (element) {
    return document.querySelectorAll(element)
}

function SilderWxp(obj) {
    this.obj = obj
    this.index = obj.current
    this.time
    this.init = function () {
        const t = this
        if (typeof this.obj != 'object') {
            console.error('this.obj is not a object! please checkout it, and try again!')
        }
        console.log(this.obj, 'this obj')
        let originele = getEle(this.obj.id)
        if (originele) {
            let contain = ''
            for (let i = 0; i < this.obj.list.length; i++) {
                contain += `<img class="slider-wxp-img" src=${this.obj.list[i].imgurl}/>`
            }
            let containdiv = `<div class="slider-wxp-div">${contain}</div> <button class="prev">上一页</button><button class="next">下一页</button>`
            console.log(originele, 'originele')
            originele.innerHTML = containdiv
            t.autochange()
            getEle(this.obj.id).addEventListener('mouseenter', function () {
                clearInterval(t.time)
            })
            getEle(this.obj.id).addEventListener('mouseleave', function () {
                t.autochange()
            })
            console.log(`${this.obj.id} .next`, '`${this.obj.id} .next`')
            getEle(`${this.obj.id} .next`).addEventListener('click', function () {
                console.log(getEle(`${t.obj.id} .next`), 'getEle(`${this.obj.id} .next`)')
                if (t.obj.list.length - 1 > t.index) {
                    t.index += 1
                } else {
                    t.index = 0
                }
                t.change()
            })

            getEle(`${this.obj.id} .prev`).addEventListener('click', function () {
                console.log(getEle(`${t.obj.id} .prev`), 'getEle(`${this.obj.id} .prev`)')
                if (0 < t.index) {
                    t.index -= 1
                } else {
                    t.index = t.obj.list.length - 1
                }
                t.change()
            })
        }
    }

    this.change = function () {
        const t = this
        let containimg = getAllele(`${this.obj.id} .slider-wxp-img`)
        for (var i = 0; i < containimg.length; i++) {
            containimg[i].style.opacity = 0
            containimg[i].style.zIndex = 1
        }
        containimg[t.index].style.opacity = 1
        containimg[t.index].style.zIndex = 2
    }
    this.autochange = function () {
        this.time = setInterval(() => {
            if (this.obj.list.length - 1 > this.index) {
                this.index += 1
            } else {
                this.index = 0
            }
            this.change()
        }, 1000)
    }
}