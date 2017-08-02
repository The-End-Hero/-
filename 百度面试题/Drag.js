function Drag(id){
    var that=this;
    this.disX=0;
    this.disY=0;
    this.oDiv=document.getElementById(id);
    this.oDiv.onmousedown=function(){
        console.log(`按下鼠标了`)
        that.fnDown();
        return false;
    };
};
Drag.prototype.fnDown=function(e){
    var that=this;
    var e=e||window.event;
    this.disX=e.clientX-this.oDiv.offsetLeft;
    console.log(`this.disX:${this.disX}`)
    this.disY=e.clientY-this.oDiv.offsetTop;
    console.log(`this.disY:${this.disY}`)
    document.onmousemove=function(){
        console.log('鼠标移动开始了')
        console.log('offtop----------'+that.oDiv.offsetTop)
        that.fnMove();
    };
    document.onmouseup=function(){
        console.log('鼠标抬起了')
        that.fnUp();
    }
};
Drag.prototype.fnMove=function(e){
    var e=e||window.event;
    // if(this.oDiv.offsetTop>500){
    // 	document.onmousemove=null;
    // 	document.onmouseup=null;
    // 	this.oDiv.style.top=500+"px";
    // 	console.log(123)
    // }else{
    	this.oDiv.style.top=e.clientY-this.disY+"px";
    	// console.log(456)
    // }
    	this.oDiv.style.left=e.clientX-this.disX+"px";
};
Drag.prototype.fnUp=function(){
    document.onmousemove=null;
    document.onmouseup=null;
    // this.oDiv.style.left=500+"px";
    // this.oDiv.style.top=300+"px";
};