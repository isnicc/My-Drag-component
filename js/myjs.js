 window.onload=function(){
 	var d1=new subject();
 	d1.implement({
 		id:'fk1',
 		textid:'Output',
 		mytext:{
 			text1:'开始拖动',
 			text2:'正在拖动',
 			text3:'拖动结束'
 		}
 	})
 }

//创建一个构造函数
function subject(){
	this.Obj=null;
	this.divX=0;
	this.divY=0;
//设定初始值
}
//执行函数
subject.prototype.implement=function(obj){
	var This=this;
	this.element=document.getElementById(obj.id);
	//进入元素事件
	this.element.onmousedown=function(ev){
		var ev=ev||window.event;
		This.fuDown(ev);
		This.text(obj.textid,obj.mytext.text1); //设置返回拖动状态文本的值
		//拖动元素事件
		document.onmousemove=function(ev){
			This.fuMove(ev);
			This.text(obj.textid,obj.mytext.text2);
		};
		//拖动完成事件
		document.onmouseup=function(){
			This.fuSeup();
			This.text(obj.textid,obj.mytext.text3)
		}
       return false;
	}

}
//提示拖动时的状态并返回给指定的标签
subject.prototype.text=function(id,mytext){
	document.getElementById(id).textContent=mytext;
}
//获取事件在元素中的坐标
subject.prototype.fuDown=function(ev){
	this.divX=ev.clientX-this.element.offsetLeft;
	this.divY=ev.clientY-this.element.offsetTop;
}
//计算并且设置元素的位置
subject.prototype.fuMove=function(ev){
	this.element.style.left=ev.clientX-this.divX+'px';
	this.element.style.top=ev.clientY-this.divY+'px';
}
//当拖动事件结束是执行
subject.prototype.fuSeup=function(){
	document.onmousemove=null;
	document.onmouseup=null;
}