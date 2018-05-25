window.onload = function() {
	var
		div1 = document.getElementById("content1"),
		div2 = document.getElementById("content2"),
		div3 = document.getElementById("content3"),
		div = document.getElementById("content"),
		click1 = document.getElementById("click1"),
		click2 = document.getElementById("click2"),
		click3 = document.getElementById("click3"),
		click4 = document.getElementById("click4"),
		click5 = document.getElementById("name"),
		click6 = document.getElementById("phone"),
		click7 = document.getElementById("password"),
		div4 = document.getElementById("box4"),
		div5 = document.getElementById("box6"),
		put = document.getElementById("putt"),
		dis = document.getElementById("ee"),
		diss = document.getElementById("qq"),
		disss = document.getElementById("ww"),
	clicknumber = 0;
	div4.className = "shown";
	click1.onclick = function() {
		div1.className = "";
		div2.className = "shown";
		div4.className = "shown";
		var y = div5.offsetLeft;
		y = y - 100;
		div5.style.left = y + "px";
	}
	click2.onclick = function() {
		div1.className = "shown";
		div2.className = "";
		div4.className = "";
		var x = div5.offsetLeft;
		x = x + 100;
		div5.style.left = x + "px";
	}

	click3.onclick = function() {

		if(clicknumber % 2 == 0) {
			div.className = "";
			div3.className = "shown";
			div4.className = "shown";
			click3.value = "下载知乎App";
		} else {
			div.className = "shown";
			div3.className = "";
			div4.className = "shown";
			click3.value = "关闭二维码";
		}
		clicknumber++;
	}
	click4.onclick = function() {
		dis.className ="hiden";
		diss.className ="hiden";
		disss.className ="hiden";
//		var newDiv1 = document.createElement('div');
//		var newDiv2 = document.createElement('div');
//		var newDiv3 = document.createElement('div');
//		document.body.appendChild(newDiv1);
//		document.body.appendChild(newDiv2);
//		document.body.appendChild(newDiv3);
//		//获取输入框
//		var text = document.getElementById('name');
//		var text = document.getElementById('phone');
//		var text = document.getElementById('password');
//		//div的位置
//		var seatX = newDiv1.offsetLeft;
//		seatX = 850;
//		var seatY = newDiv1.offsetTop;
//		seatY = 292;
//		var seatX1 = newDiv2.offsetLeft;
//		seatX1 = 830;
//		var seatY1 = newDiv2.offsetTop;
//		seatY1 = 340;
//		var seatX2 = newDiv3.offsetLeft;
//		seatX2 = 850;
//		var seatY2 = newDiv3.offsetTop;
//		seatY2 = 390;
//		//给div设置大小、位置
//		var cssStr = "z-index:5;width:80px;height:30px;color:red;position:absolute;left:" +
//			seatX + 'px;top:' + seatY + 'px;';
//		var cssStr1 = "z-index:5;width:100px;height:30px;color:red;position:absolute;left:" +
//			seatX1 + 'px;top:' + seatY1 + 'px;';
//		var cssStr2 = "z-index:5;width:100px;height:30px;color:red;position:absolute;left:" +
//			seatX2 + 'px;top:' + seatY2 + 'px;';
//		//将样式添加到div上，显示div
//		newDiv1.style.cssText = cssStr;
//		newDiv1.innerHTML = '请输入秘密';
//		newDiv1.id = 'descDiv1';
//		newDiv1.style.display = 'block';
//		newDiv2.style.cssText = cssStr1;
//		newDiv2.innerHTML = '请填写手机号';
//		newDiv2.id = 'descDiv2';
//		newDiv2.style.display = 'block';
//		newDiv3.style.cssText = cssStr2;
//		newDiv3.innerHTML = '请填写密码';
//		newDiv3.id = 'descDiv3';
//		newDiv3.style.display = 'block';
//	}
//	setTimeout("a()", 5000);
}
   
//function a() {
//	var newDiv1 = document.getElementById("descDiv1");
//	var newDiv2 = document.getElementById("descDiv2");
//	var newDiv3 = document.getElementById("descDiv3");
//	newDiv1.style.display = "none";
//	newDiv2.style.display = "none";
//	newDiv3.style.display = "none";
//
 
    click5.onclick = function() {
		dis.className= "shown";
  }  
  click6.onclick = function() {
		diss.className= "shown";
  }  
    click7.onclick = function() {
		disss.className= "shown";
  }  
}