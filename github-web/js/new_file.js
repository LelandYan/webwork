window.onload = function() {
	var click = document.getElementById("click1");
	//对搜索框背景颜色的控制；
	click.onfocus = function() {
		click.style.backgroundColor = "rgb(63, 68, 72)";
	}
	click.onblur = function() {
		click.style.backgroundColor = "rgb(63,68,72)";
	}
	//**************************************************************************************************************//
	//sign up your team 按钮颜色的变化；
	var sign = document.getElementById("sign");
	colorChange1(sign, 49, 198, 83);
	//按钮的颜色控制；
	var sign1 = document.getElementById("sign2");
	colorChange1(sign1, 3, 102, 222);
	var sign3 = document.getElementById("sign3");
	colorChange1(sign3, 3, 102, 222);
	//***************************************************************************************************************//	
	//表单的隐藏
	var imgS = document.getElementsByName("hidden"),
		causeS = document.getElementsByName("cause"),
		borderS = document.getElementsByName("borders"),
        trangiles = document.getElementsByName('right-trangile'),
		 j = 0;
	for(var i = 0; i < imgS.length; i++) {
		imgS[j].timer = null;
		causeS[j].timer = null;
		borderS[j].timer = null;
		causeS[i].index = i;
		causeS[i].onmouseover = function() {
			j = this.index;
			startMove(imgS[j],{opacity: 100});
			startMove(borderS[j], {opacity: 100});
			trangiles[j].style.borderLeftColor = 'rgb(3,102,214)';
		}
		causeS[i].onmouseout = function() {
			startMove(imgS[j], {opacity: 0});startMove(borderS[j], {opacity: 0});
			trangiles[j].style.borderLeftColor = 'rgb(193,193,193)';
		}
	}
	//***********************************************************************************************************//
	//小图片的放缩；
	var imgs2 = document.getElementsByName('Img'),
		boxS2 = document.getElementsByName('box'),
		contentS2 = document.getElementsByName('content'),
		j = 0;
	for(i = 0; i < boxS2.length; i++) {
		imgs2[j].timer = null;
		boxS2.timer = null;
		contentS2.timer = null;
		boxS2[i].index = i;
		boxS2[i].onmouseover = function() {
			j = this.index;
			startMove(boxS2[j], {
				height: 100,
				width: 100
			});
			startMove(imgs2[j], {
				height: 56,
				width: 56
			});
			startMove(contentS2[j], {
				opacity: 100
			});
		}
		boxS2[i].onmouseleave = function() {
			startMove(boxS2[j], {
				height: 96,
				width: 96
			});
			startMove(imgs2[j], {
				height: 53,
				width: 53
			});
			startMove(contentS2[j], {
				opacity: 0
			});
		}
	}
//***********************************************************************************************************//
//关于滚轮图；
	var aH = document.querySelectorAll("#content5-body2 img");
	var aLi = document.querySelectorAll("#content5-body2 li");
	var aP = document.querySelectorAll('#content5-body2 h1');
	var aQ = document.querySelectorAll('#content5-body2 p');
	var aU = document.getElementsByName('underline');
	var af = document.getElementsByName('underlineT');
	var am = document.getElementsByName('underlineY');
	 var j = 0;
	for(var i = 0; i < aLi.length; i++) {
		 aH[i].timer = null;
		aLi[i].index = i;
		var num = i+1;
		if(num % 3 == 0) {
			colorChange2(aP[i], aLi[i], 111, 66, 193);
		} else {
			colorChange2(aP[i], aLi[i], 251, 133, 50);
		}
		aLi[i].onmouseover = function() {
			j = this.index;
			startMove(aH[j], {margin: -6,height:170,width:170});
			startMove(aP[j], {fontSize: 25,marginTop:-122,marginLeft:202});
			startMove(aQ[j], {fontSize: 12,marginTop:122,marginLeft:182});
			if(j != 3){
				startMove(aU[j],{opacity:100,marginTop:-192,marginLeft:202});
			}
			startMove(af[j],{opacity:100,marginTop:167,marginLeft:202});
			if(j == 2){
				startMove(am[j],{opacity:100,marginTop:-287,marginLeft:202});
			}

		}
		aLi[i].onmouseout = function() {
			startMove(aH[j], {margin: 0,height: 157,width: 157});
			startMove(aP[j], {fontSize: 24,marginTop:-120,marginLeft:200});
			startMove(aQ[j], {fontSize: 10,marginTop:120,marginLeft:180});
			startMove(aU[j],{opacity:0,marginTop:-190,marginLeft:200});
			startMove(af[j],{opacity:0,marginTop:165,marginLeft:202});
			startMove(am[j],{opacity:0});
		}
	}
//***********************************************************************************************************//
//关于三个圆的变化；
	var bdan = document.getElementsByName('bdan');
	var radius = document.getElementsByName('radius');
	var changes = document.getElementsByName('changes');
	var j =0;
	var tem = [];
	var number = 0;
	
	for(var i = 0;i< bdan.length;i++){
		tem.push(bdan[i]);
	}
	for(var i = 0;i<radius.length;i++){
		tem.push(radius[i]);
	}
    for(var i = 0 ; i<tem.length;i++){
    tem[i].timer = null;
	tem[i].index = i;
	tem[i].onmouseover = function(){
		j = this.index;
		if(j == 0 || j == 3){
//			alert(j);
//			startMove(radius[j],{width:230,height:230,marginTop:-3,marginLeft:-3});
//			changes[j].style.borderLeftColor = 'rgb(251,133,50)';
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
			startMove(radius[0],{width:230,height:230,marginTop:-3,marginLeft:-3});
		changes[0].style.borderLeftColor = 'rgb(251,133,50)';
			bdan[0].style.borderColor = 'rgb(193,193,193)';
			startMove(radius[3],{width:230,height:230,marginTop:-3,marginLeft:-3});
			changes[1].style.borderLeftColor = 'rgb(251,133,50)';
			bdan[1].style.borderColor = 'rgb(193,193,193)';
			}
			else if(j == 1 || j== 4){
			startMove(radius[1],{width:180,height:180,marginTop:-203,marginLeft:247});
			changes[1].style.borderLeftColor = 'rgb(3,102,214)';
			bdan[1].style.borderColor = 'rgb(193,193,193)';
			startMove(radius[4],{width:180,height:180,marginTop:-203,marginLeft:247});
			changes[4].style.borderLeftColor = 'rgb(3,102,214)';
			bdan[4].style.borderColor = 'rgb(193,193,193)';
			}
			else{
			startMove(radius[2],{width:130,height:130,marginTop:207,marginLeft:177});
			changes[2].style.borderLeftColor = 'rgb(111,66,193)';
			bdan[2].style.borderColor = 'rgb(193,193,193)';
			startMove(radius[5],{width:130,height:130,marginTop:207,marginLeft:177});
			changes[5].style.borderLeftColor = 'rgb(111,66,193)';
			bdan[5].style.borderColor = 'rgb(193,193,193)';
			}
	}
	tem[i].onmouseout = function(){
		   if(j == 0 || j == 3){
			startMove(radius[0],{width:225,height:225,marginTop:0,marginLeft:0});
			bdan[0].style.borderColor = 'rgb(255,255,255)';
			changes[0].style.borderLeftColor = 'rgb(128,128,128)';
			startMove(radius[3],{width:225,height:225,marginTop:0,marginLeft:0});
			bdan[3].style.borderColor = 'rgb(255,255,255)';
			changes[3].style.borderLeftColor = 'rgb(128,128,128)';
	}
			else if(j == 1 || j== 4){
			startMove(radius[1],{width:175,height:175,marginTop:-200,marginLeft:250});
			bdan[1].style.borderColor = 'rgb(255,255,255)';
			changes[1].style.borderLeftColor = 'rgb(128,128,128)';
			startMove(radius[4],{width:175,height:175,marginTop:-200,marginLeft:250});
			bdan[4].style.borderColor = 'rgb(255,255,255)';
			changes[4].style.borderLeftColor = 'rgb(128,128,128)';
			}
			else{
			startMove(radius[2],{width:125,height:125,marginTop:210,marginLeft:180});
			bdan[2].style.borderColor = 'rgb(255,255,255)';
			changes[2].style.borderLeftColor = 'rgb(128,128,128)';
			startMove(radius[5],{width:125,height:125,marginTop:210,marginLeft:180});
			bdan[5].style.borderColor = 'rgb(255,255,255)';
			changes[5].style.borderLeftColor = 'rgb(128,128,128)';
			}
	}
    }
    
//	for(var i = 0; i< bdan.length;i++){
//		bdan[i].index = i;
//		bdan[i].onmouseover = function(){
//			j = this.index;
//			if(j == 0){
//			startMove(radius[j],{width:230,height:230,marginTop:-3,marginLeft:-3});
//			changes[j].style.borderLeftColor = 'rgb(251,133,50)';
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
//			}
//			else if(j == 1){
//			startMove(radius[j],{width:180,height:180,marginTop:-203,marginLeft:247});
//			changes[j].style.borderLeftColor = 'rgb(3,102,214)';
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
//			}
//			else{
//			startMove(radius[j],{width:130,height:130,marginTop:207,marginLeft:177});
//			changes[j].style.borderLeftColor = 'rgb(111,66,193)';
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
//			}
//			
//		}
//		bdan[i].onmouseout = function(){
//			if(j == 0){
//			startMove(radius[j],{width:225,height:225,marginTop:0,marginLeft:0});
//			changes[j].style.borderLeftColor = 'rgb(128,128,128)';
//				bdan[j].style.borderColor = 'rgb(255,255,255)';
//			}
//			else if(j == 1){
//			startMove(radius[j],{width:175,height:175,marginTop:-200,marginLeft:250});
//			changes[j].style.borderLeftColor = 'rgb(128,128,128)';
//				bdan[j].style.borderColor = 'rgb(255,255,255)';
//			}
//			else{
//			startMove(radius[j],{width:125,height:125,marginTop:210,marginLeft:180});
//			changes[j].style.borderLeftColor = 'rgb(128,128,128)';
//			bdan[j].style.borderColor = 'rgb(255,255,255)';
//			
//			}
//		}
//	}
//***********************************************************************************************************//
//	for(var i = 0; i< bdan.length;i++){
//		radius[i].index = i;
//		radius[i].onmouseover = function(){
//			j = this.index;
//			if(j == 0){
//			startMove(radius[j],{width:230,height:230,marginTop:-3,marginLeft:-3});
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
//			changes[j].style.borderLeftColor = 'rgb(251,133,50)';
//			
//			}
//			else if(j == 1){
//			startMove(radius[j],{width:180,height:180,marginTop:-203,marginLeft:247});
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
//			changes[j].style.borderLeftColor = 'rgb(3,102,214)';
//			}
//			else{
//			startMove(radius[j],{width:130,height:130,marginTop:207,marginLeft:177});
//			bdan[j].style.borderColor = 'rgb(193,193,193)';
//			changes[j].style.borderLeftColor = 'rgb(111,66,193)';
//			}
//			
//		}
//		radius[i].onmouseout = function(){
//			if(j == 0){
//			startMove(radius[j],{width:225,height:225,marginTop:0,marginLeft:0});
//			bdan[j].style.borderColor = 'rgb(255,255,255)';
//			changes[j].style.borderLeftColor = 'rgb(128,128,128)';
//			}
//			else if(j == 1){
//			startMove(radius[j],{width:175,height:175,marginTop:-200,marginLeft:250});
//			bdan[j].style.borderColor = 'rgb(255,255,255)';
//			changes[j].style.borderLeftColor = 'rgb(128,128,128)';
//			}
//			else{
//			startMove(radius[j],{width:125,height:125,marginTop:210,marginLeft:180});
//			bdan[j].style.borderColor = 'rgb(255,255,255)';
//			changes[j].style.borderLeftColor = 'rgb(128,128,128)';
//			}
//		}
//	}
	
};
//***********************************************************************************************************//
//获取元素得属性//
function getStyle(obj, name) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	}
}
//**************************************************************************************************************//
//关于按钮颜色变化的函数//
function colorChange1(obj, a, b, c) {
	obj.onmouseover = function() {
		obj.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
		obj.style.color = "white";
	}
	obj.onmouseout = function() {
		obj.style.backgroundColor = "white";
		obj.style.color = "rgb(" + a + "," + b + "," + c + ")";
	}
}
//**************************************************************************************************************//
function colorChange2(obj1, obj2, a, b, c) {
	obj2.onmouseenter = function() {
		obj1.style.color = "rgb(" + a + "," + b + "," + c + ")";
	}
	obj2.onmouseleave = function() {
		if( b < c ){
		   obj1.style.color = "rgb(" + b + "," + b + "," + b + ")";
		}
		else{
			obj1.style.color = "rgb(" + c + "," + c + "," + c + ")";
		}	
	}
}
//**************************************************************************************************************//
function startMove(obj, json) {
	var flag = true;
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		for(var attr in json) {
			var icur = 0;
			if(attr == 'opacity') {
				icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				icur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - icur) / 5;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(json[attr] != icur) {
				flag = false;
			}
			if(attr == 'opacity') {
				obj.style.opacity = (icur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + obj.alpha + ')';
			} else {
				obj.style[attr] = icur + speed + "px";


			}
		}
		if(flag) {
			clearInterval(obj.timer);

		}
	}, 30)
}
