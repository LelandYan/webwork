window.onload = function(){
	obj2.init();
};
function clicks(event){
	var index = event.id;
	var classname = event.className;
	if(classname == "imgs")
	{
		obj1.get(index).setAttribute("class","imgss");
	}
};
var obj2 = {
	 column:5,
	 row:5,
	 boxWidth:60,
	 boxHeight:60,
	 init:function(){
	 		obj2.drawcolor();
	 		obj2.draw();

	 },
	 drawcolor:function(){
	 	for(var x=0;x < obj2.column;x++)
		{
			for(var y=0;y < obj2.row;y++)
			{
				var div = document.createElement("div");
				div.setAttribute("class","box");
				div.setAttribute("id",y*obj2.column+x);
				div.setAttribute("style","width:"+obj2.boxWidth+"px;height:"+obj2.boxHeight+"px;top:"+(obj2.boxHeight*y)+"px;left:"+(obj2.boxWidth*x)+"px");
				//div.innerHTML = y*obj2.column+x+"<br/>"+"["+x+","+y+"]";
				div.setAttribute("onclick","clicks(this)")
				obj1.get("game").appendChild(div);
			}
		}
	 },
	draw:function(){
		obj2.clear();
		var number = Math.floor(Math.random()*3+1);
		for(var i =0;i < number; i++)
		{
			var x = Math.floor(Math.random()*obj2.column);
			var y = Math.floor(Math.random()*obj2.row);
			var index = y*obj2.column + x;
			obj1.get(index).setAttribute("class","imgs");
		}
		setTimeout(function(){obj2.draw()},2000);
		
	},
	clear:function(){
		for(var x=0;x < obj2.column;x++)
		{
			for(var y=0;y < obj2.row;y++)
			{
				var index = y*obj2.column+x;
				obj1.get(index).setAttribute("class","box");
			}
		}
	}	
	 
}
var obj1 ={
	get:function(id){
		return document.getElementById(id);

	},
	create:function(element){
		return document.createElement(element);
	}
}