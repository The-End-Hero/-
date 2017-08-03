function Drag(id) {
    var that = this;
    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function() {
        that.fnDown();
        return false;
    };
};
Drag.prototype.fnDown = function(e) {
    var that = this;
    var e = e || window.event;
    this.disX = e.clientX - this.oDiv.offsetLeft;
    this.disY = e.clientY - this.oDiv.offsetTop;
    document.onmousemove = function() {
        that.fnMove();
    };
    document.onmouseup = function() {
        that.fnUp();
    }
};
Drag.prototype.fnMove = function(e) {
    var e = e || window.event;
    this.oDiv.style.top = e.clientY - this.disY + "px";
    this.oDiv.style.left = e.clientX - this.disX + "px";
};
Drag.prototype.fnUp = function() {
    document.onmousemove = null;
    document.onmouseup = null;
};