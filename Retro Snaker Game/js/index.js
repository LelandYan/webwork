window.onload = function(){
	obj2.init();
}
document.onkeydown=function(event){
	var left=37,up=38,right=39,down=40;
	var event = event || window.event;
	var keyValue = event.which || event.keyCode;
	switch (keyValue) {
		case left:
			if(obj2.direction != "right"){
				obj2.direction = "left";
			}
			break;
		case up:
			if(obj2.direction != "dowm"){
				obj2.direction = "up";
			}
			break;
			break;
		case right:
			if(obj2.direction != "left"){
				obj2.direction = "right";
			}
			break;
		case down:
			if(obj2.direction != "up"){
				obj2.direction = "down";
			}
			break;
	}
}
function inarray(string,array){
	for(var i =0;i<array.length;i++)
	{
		if(array[i] == string){
			return true;
		}
	}
	return false;
}
var obj2 = {
	 column:30,
	 row:20,
	 boxWidth:50,
	 boxHeight:50,
	 map:[],
	 snake:[],
	 snakeX:null,
	 snakeY:null,
	 foodX:null,
	 foodY:null,
	 direction:null,
	 init:function(){
	 		obj2.draw();
	 		obj2.move();
	 },

	 draw:function(){
	 		for(var x = 0;x <obj2.column;x++)
	 		{
	 			obj2.map[x] = [];
	 			for(var y = 0;y<obj2.row;y++)
	 			{
	 				obj2.map[x][y] = 0;//0为默认值，1为蛇，2为食物
	 			}
	 		}
	 		obj2.snakeX = Math.floor(Math.random()*obj2.column);
	 		obj2.snakeY = Math.floor(Math.random()*obj2.row);
	 		obj2.foodX = Math.floor(Math.random()*obj2.column);
	 		obj2.foodY = Math.floor(Math.random()*obj2.row);
	 		obj2.map[obj2.snakeX][obj2.snakeY] = 1;
	 		obj2.map[obj2.foodX][obj2.foodY] = 2;
	 	//生成画布
	 	for(var x=0;x < obj2.column;x++)
		{
			for(var y=0;y < obj2.row;y++)
			{
				var div = obj1.create("div");
				if(obj2.map[x][y] == 1)
				{
					obj2.snake[0] = y*obj2.column+x;
					div.setAttribute("class","snake");
				}else if(obj2.map[x][y] == 2)
				{
					div.setAttribute("class","food");
				}else {
					div.setAttribute("class","box");
				}
				div.setAttribute("id",y*obj2.column+x);
				div.setAttribute("style","width:"+obj2.boxWidth+"px;height:"+obj2.boxHeight+"px;top:"+(obj2.boxHeight*y)+"px;left:"+(obj2.boxWidth*x)+"px");
				//div.innerHTML = y*obj2.column+x+"<br/>"+"["+x+","+y+"]";
				obj1.get("game").appendChild(div);
			}
		}
	 },
	 move:function(){
	 	var inin = obj2.snake[0];
	 	var initPosition =obj2.snake[0];
	 	switch (obj2.direction) {
	 		case "left":
	 			initPosition=obj2.snake[0]-1;
	 			break;
	 		case "up":
	 			initPosition=obj2.snake[0]-obj2.column;
	 			break;
	 		case "right":
	 			initPosition=obj2.snake[0]+1;
	 			break;
	 		case "down":
	 			initPosition=obj2.snake[0]+obj2.column;
	 			break;
	 	}
	 	if((obj2.direction == "right" && initPosition%obj2.column == 0) || initPosition < 0 || (initPosition > obj2.column*obj2.row)|| (obj2.direction == "left" && (initPosition+1)%obj2.column == 0))
	 	{
	 		alert("撞到墙了。。。");
	 	}
	 	if(initPosition != inin && inarray(initPosition,obj2.snake))
	 	{
	 		alert("你吃到自己的尾巴了。。。。");
	 	}
	 	obj2.snake.unshift(initPosition);
	 	var foodPosition = obj2.foodY*obj2.column+obj2.foodX;
	 	if(initPosition == foodPosition)
	 	{
	 		obj2.foodX = Math.floor(Math.random()*obj2.column);
	 		obj2.foodY = Math.floor(Math.random()*obj2.row);
	 		obj1.get(obj2.foodY*obj2.column+obj2.foodX).setAttribute("class","food");
	 	}else{
	 		var endPosition = obj2.snake.pop();
	 		if(endPosition!=obj2.snake[0])
	 		{
	 		obj1.get(endPosition).setAttribute("class","box");
	 	     }
	 	}
	 	//重绘蛇
	 	for(var i = 0;i<obj2.snake.length;i++)
	 	{
	 		obj1.get(obj2.snake[i]).setAttribute("class","snake");
	 	}
	 	
	 	setTimeout(function(){obj2.move()},300)

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