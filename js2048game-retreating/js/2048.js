var arr = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var clickNum = 0; //关于音乐//
var clickNum2 = 1; //关于后退功能//
var clickNum3;
var arr5 = []; //储存的每部的，用于返回键//
var arr6 = []; //储存的是每个时刻的分数//
var arr7 = []; //用于储存想要到达的步数的数字分布//
var arr8 = [];
//var arr9 = [];
var arr10;
var arr11;
var arr12;
//专门用来获取id的函数//
function getId(id) {
	return document.getElementById(id);
}
var obj = {
	f: 0,
	keyCd: 0, //用于判断按键是上下还是左右//
	score: 0, //记录游戏中的当时的分数//
	createEle: 0, //用于是否进行方格的创建//
	eleFragment: "", //用于保存小方框并添加到背景中//
	gameStart: function() {
		obj.init();
		document.onkeydown = function(event) {
			switch(event.keyCode) {
				case 37:
					obj.keyCd = 1;
					obj.moveLeft();
					break;
				case 38:
					obj.keyCd = 2;
					obj.moveUp();
					break;
				case 39:
					obj.keyCd = 1;
					obj.moveRight();
					break;
				case 40:
					obj.keyCd = 2;
					obj.moveDown();
					break;
			}
			getId("score").innerHTML = obj.score; //进行分数的更新//
			arr11 = JSON.parse(sessionStorage.arr10);
		};

	},
	init: function() {
		obj.eleFragment = document.createDocumentFragment();
		for(r = 0; r < 4; r++) {
			arr.push([]);
			for(c = 0; c < 4; c++) {
				arr[r][c] = 0;
				/*创建一个二维数组，[[0,0,0,0],
								    [0,0,0,0],
								    [0,0,0,0],                            
								    [0,0,0,0]]*/
				if(obj.createEle == 1) {
					obj.create(r, c); //用于创建小方框//
				}
			}
		}
		if(obj.createEle == 1) {
			obj.createEle = 0;
			getId("background").innerHTML = ""; //清空原有的元素
			getId("background").appendChild(obj.eleFragment); //添加元素
		}
		obj.score = 0;
		getId("score").innerHTML = obj.score; //进行分数的更新//
		getId("gameover").style.display = "none";
		obj.random(); //开始游戏随机生成两个带数字的小方框//
		obj.random();
		obj.updateView(); //遍历所有的小方框并给有数字的小方框添加样式和应显示的数字//
	},
	create: function(r, c) {
		var bag, cell;
		bag = document.createElement("div"); //创建小方块的背景//
		cell = document.createElement("div"); //创建小方块//
		bag.id = "g" + r + c; //给每个小方块添加id//
		cell.id = "c" + r + c;
		bag.className = "bag"; //给每个小方块添加样式//
		cell.className = "cell";
		bag.style.width = "100px";
		bag.style.height = "100px";
		bag.style.margin = "16px 0 0 16px"; //一大方块的左上为中心//
		cell.style.width = "100px";
		cell.style.height = "100px";
		cell.style.top = 16 + r * 116 + "px";
		cell.style.left = 16 + c * 116 + "px";
		obj.eleFragment.appendChild(bag); //将创建的小方框添加到创建的文档碎片中//
		obj.eleFragment.appendChild(cell);

	},
	random: function() {
		while(true) {
			var row = Math.floor(Math.random() * 4); //取得0到3的任意整数//
			var cell = Math.floor(Math.random() * 4);
			if(arr[row][cell] == 0) {
				arr[row][cell] = (Math.random() > 0.5) ? 4 : 2; //判断生成的随机数位置为0才随机生成2或4//
				break;
			}
		}
	},
	//************************************************************************************************************************************************//	
	updateView: function() {
		var win = false; //判断输赢的条件//
		for(var r = 0; r < 4; r++) {
			for(var c = 0; c < 4; c++) {
				if(arr[r][c] == 0) {
					getId("c" + r + c).innerHTML = ""; //清楚数字为0的小方框的样式//
					getId("c" + r + c).className = "cell";
				} else {
					getId("c" + r + c).innerHTML = arr[r][c];
					getId("c" + r + c).className = "cell n" + arr[r][c];
					if(arr[r][c] == 2048) { //判断分数是否到达2048//
						win = true;
					}
				}
			}
		}
		if(win == true) {
			getId("gameover").style.display = "block";
			getId("Score").innerHTML = "You win!<br>Score:" + obj.score;
			obj.creatArr();
			//			arr5.splice(0, arr5.length);
			//			sessionStorage.clickcount.clear();
		} else if(obj.gameOver()) { //通过对gameover()函数的调用的结果来结束游戏//
			getId("gameover").style.display = "block";
			getId("Score").innerHTML = "GAME OVER!<br>Score:" + obj.score;
			obj.creatArr();
			//			arr5.splice(0, arr5.length);
			//			sessionStorage.clickcount.clear();
		}
	},
	//************************************************************************************************************************************************//	
	gameOver: function() {
		for(r = 0; r < 4; r++) {
			for(c = 0; c < 4; c++) {
				if(arr[r][c] == 0) { //存在没用添加的小方块，返回false//
					return false;
				} else if(r != 3 && arr[r][c] == arr[r + 1][c]) { //存在除了最后一列行外，存在两行在相同列数的数值相等，返回false//
					return false;
				} else if(c != 3 && arr[r][c] == arr[r][c + 1]) { //存在除了最后一行行外，存在两列在相同行数的数值相等，返回false//
					return false;
				}
			}
		}
		return true; //若三者都不成立，则游戏结束//
	},
	//************************************************************************************************************************************************//	
	find: function(r, c, start, direction) {
		if(obj.keyCd == 2) { //通过keyCd的值判断按键是上下还是左右，keyCd = 2 说明为上下键//
			if(direction == 1) { //可以判断为上键处理//
				for(var f = start; f < 4; f++) { //处于第0排的带数字的方格不能向上移动，所以start从1开始//
					if(arr[f][c] != 0) { //遍历所有小方块的的数值，并确定有数值的小方框，并返回其行数f//
						return f;
					}
				}
			} else {
				for(var f = start; f >= 0; f--) { //可以判断为下键处理//
					if(arr[f][c] != 0) {
						return f; //遍历所有小方块的的数值，并确定有数值的小方框，并返回其行数f//
					}
				}
			}
		} else { //左右键//
			if(direction == 1) { //左键处理//
				for(var f = start; f < 4; f++) {
					if(arr[r][f] != 0) {
						return f; //遍历所有小方块的的数值，并确定有数值的小方框，并返回其列数f//
					}
				}
			} else {
				for(var f = start; f >= 0; f--) {
					if(arr[r][f] != 0) {
						return f; //遍历所有小方块的的数值，并确定有数值的小方框，并返回其列数f//
					}
				}
			}
		}
		return null; //存在还没有数字的方框，返回null//
	},
	//************************************************************************************************************************************************//	
	dealToLeft: function(r) {
		var next;
		for(c = 0; c < 4; c++) {
			next = obj.find(r, c, c + 1, 1); //找出不为0的位置//
			if(next == null) break; //没有找到就返回//
			//如果当前位置为0//
			if(arr[r][c] == 0) {
				arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值//
				arr[r][next] = 0; //找到的位置清0//
				c--; //再次循环多一次，查看后面否有值与替换后的值相同，//
			} else if(arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加//
				arr[r][c] *= 2;
				arr[r][next] = 0;
				obj.score += arr[r][c];
			}
		}
	},
	move: function(itertor) { //向move()传递一个立即执行函数//
		var before, //没处理前
			after; //after处理后
		before = arr.toString();
		itertor(); //执行for函数
		after = arr.toString();
		if(before != after) { //前后对比，如果不同就向没用数字的小方框随机添加一个数字，并更新小方块的样式与分数，并判断游戏的输赢//
			obj.random();
			obj.updateView();
		}
	},
	moveLeft: function() {

		obj.move(function() {
			for(r = 0; r < 4; r++) {
				obj.dealToLeft(r); //调用两个函数并实现对方框向左移动的功能//
			}
		});
		obj.clickNums();
		obj.creatArrTwo();
	},
	//************************************************************************************************************************************************//		
	dealToRight: function(r) {
		var next;
		for(c = 3; c >= 0; c--) {
			next = obj.find(r, c, c - 1, -1); //找出第一个不为0的位置
			if(next == null) break; //没有找到就返回
			//如果当前位置为0
			if(arr[r][c] == 0) {
				arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值
				arr[r][next] = 0; //找到的位置清0
				c++; //再次循环多一次，查看后面否有值与替换后的值相同，
			} else if(arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加
				arr[r][c] *= 2;
				arr[r][next] = 0;
				obj.score += arr[r][c];
			}
		}
	},
	moveRight: function() {

		obj.move(function() {
			for(r = 0; r < 4; r++) {
				obj.dealToRight(r);
			}
		});
		obj.clickNums();
		obj.creatArrTwo();
	},
	//************************************************************************************************************************************************//		
	dealToDown: function(c) {
		var next;
		for(r = 3; r >= 0; r--) {
			next = obj.find(r, c, r - 1, -1); //找出第一个不为0的位置
			if(next == null) {
				break;
			}
			//如果当前位置为0
			if(arr[r][c] == 0) {
				arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
				arr[next][c] = 0; //找到的位置清0
				r++; //再次循环多一次，查看后面否有值与替换后的值相同
			} else if(arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
				arr[r][c] *= 2;
				arr[next][c] = 0;
				obj.score += arr[r][c];
			}
		}
	},
	moveDown: function() {
		obj.move(function() {
			for(c = 0; c < 4; c++) {
				obj.dealToDown(c);
			}
		});
		//		obj.regreOne();
		obj.creatArrTwo();
		obj.clickNums();
	},
	//************************************************************************************************************************************************//		
	dealToUp: function(c) {
		var next;
		for(r = 0; r < 4; r++) {
			next = obj.find(r, c, r + 1, 1); //找出第一个不为0的位置
			if(next == null) break;
			//如果当前位置为0
			if(arr[r][c] == 0) {
				arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
				arr[next][c] = 0; //找到的位置清0
				r--; //再次循环多一次，查看后面否有值与替换后的值相同
			} else if(arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
				arr[r][c] *= 2;
				arr[next][c] = 0;
				obj.score += arr[r][c];
			}
		}
	},
	moveUp: function() {

		obj.move(function() {
			for(c = 0; c < 4; c++) {
				obj.dealToUp(c);
			}
		});
		obj.creatArrTwo();
		obj.clickNums();
	},
	//************************************************************************************************************************************************//		
	regreOne: function() {
		if(typeof(Storage) != "undefined") {
			var str = JSON.stringify(arr); //关于对储存的数组的对象的转换//
			sessionStorage.arr2 = str;
			arr3 = sessionStorage.arr2;
			arr4 = JSON.parse(arr3);
			arr5.push(arr4);

		} else {
			alert("抱歉！您的浏览器不支持 Web Storage ...");
		}
	},
	clickNums: function() {
		arr8.push(obj.score);
		var str2 = JSON.stringify(arr8); //关于对储存的数组的对象的转换//
		sessionStorage.arr10 = str2;
		arr11 = JSON.parse(sessionStorage.arr10);
		//			arr12 = arr11.splice(arr11.length-1);
		return arr11;
	},
	regretScore: function() {
		//		var arr9 = obj.clickNums();
		var str3 = obj.clickNums();
		//			alert(clickNum2);
		if(str3[num2] == undefined) {
			sessionStorage.removeItem("arr10");
			arr11.splice(0, arr11.length);
			arr8.splice(0, arr5.length);
			obj.gameStart();
			getId("score").innerHTML = 0;
			return;
		} else {
			var num2 = str3.length - clickNum2 * 2 - 2;
			getId("score").innerHTML = str3[num2];
		}

	},
	creatArrTwo: function() {
		if(getId("gameover").style.display == "block") {
			arr5.splice(0, arr5.length);
			arr8.splice(0, arr8.length);
		} else {
			obj.regreOne();
		}
	},
	//储存最高分的函数//
	creatArr: function() {
		arr6.push(obj.score);
		arr6.sort(function(a, b) { //用于对储存分数的排序//
			return b - a;
		});
		getId("bestScore").innerHTML = arr6[0]; //储存最高分//
	},
	clickCounter: function() {
		if(arr5.length == 1) {
			alert("已经恢复到游戏开始的步骤");
		} else {
			if(clickNum2 == 0) {
				clickNum2 = 1;
				return;
			}
			clickNum2++;
			if(clickNum2 > arr5.length) {
				alert("已经恢复到游戏开始的步骤");
				clickNum2 = 0;
				arr5.splice(0, arr5.length);
				arr7.splice(0, arr7.length)
			} else {
				obj.regretScore();
				var num = arr5.length - clickNum2;
				arr7 = arr5[num];
				for(var r = 0; r < 4; r++) {
					for(var c = 0; c < 4; c++) {
						if(arr7[r][c] == 0) {
							getId("c" + r + c).innerHTML = ""; //清楚数字为0的小方框的样式//
							getId("c" + r + c).className = "cell";
						} else {
							getId("c" + r + c).innerHTML = arr7[r][c];
							getId("c" + r + c).className = "cell n" + arr7[r][c];
							arr = arr7.slice(0);

						}
					}
				}

			}
		}

	}
}
window.onload = function() {
	obj.createEle = 1;
	obj.gameStart();
	obj.creatArrTwo();
	getId("bestScore").innerHTML = 0;
	getId("music").play();
	obj.clickNums();
}

function mute() {
	clickNum += 1;
	if(clickNum % 2 == 0) {
		getId("music").currentTime = 0;
		getId("music").play();
	} else {
		getId("music").pause();
		getId("music").currentTime = 0;
	}
}

function reNew() {
	obj.gameStart();
	arr5.splice(0, arr5.length);
	arr7.splice(0, arr7.length)
}