class Drag {
    constructor(id) {
        this.disX = 0;
        this.disY = 0;
        this.oDiv = document.querySelector('#' + id)
        console.log(this.oDiv)
        this.oDiv.onmousedown = (e) => {
            console.log('开始了')
            this.fnDown(e);
            console.log('444')
            return false;
        }
    }
    fnDown(e) {
        console.log('进入fnDown')
        var e = e || window.event;
        this.disX = e.clientX - this.oDiv.offsetLeft;
        this.disY = e.clientY - this.oDiv.offsetTop;
        this.oDiv.onmousemove = (e) => {
            console.log('移动了')
            this.fnMove(e);
        };
        this.oDiv.onmouseup = (e) => {
            console.log('结束了')
            this.fnUp();
        }

    };
    fnMove(e) {
        var e = e || window.event;
        this.oDiv.style.top = e.clientY - this.disY + "px";
        this.oDiv.style.left = e.clientX - this.disX + "px";
    }
    fnUp() {
        this.oDiv.onmousemove = null;
        this.oDiv.onmouseup = null;
    }
}