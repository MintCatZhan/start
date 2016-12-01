// addLoadEvent(positionMessage);
addLoadEvent(prepareSlideshow);


function positionMessage(){
	if (!document.getElementById){return false;}
	if (!document.getElementById("message")){return false;}
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.top = "100px";
	elem.style.left = "50px";
	setTimeout("moveElement('message', 200, 100, 20)", 1000);
	// movement = setTimeout("moveMessage()", 1000);
	if (!document.getElementById){return false;}
	if (!document.getElementById("message2")){return false;}
	var elem = document.getElementById("message2");
	elem.style.position = "absolute";
	elem.style.top = "100px";
	elem.style.left = "50px";
	setTimeout("moveElement('message2', 100, 200, 20)", 1000);
}

function moveMessage(){
	if (!document.getElementById){return false;}
	if (!document.getElementById("message")){return false;}
	var elem = document.getElementById("message");
	// elem.style.left = "200px";
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == 200 && ypos == 100){
		return true;
	}
	if (xpos < 200){
		xpos++;
	}
	if (xpos > 200){
		xpos--;
	}
	if (ypos < 100){
		ypos++;
	}
	if (ypos > 100){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()", 10);
}


function moveElement(elementID, final_x, final_y, interval){
	if (!document.getElementById){return false;}
	if (!document.getElementById(elementID)){return false;}
	var elem = document.getElementById(elementID);
	if (elem.movement){
		clearTimeout(elem.movement);
	}
	if (!elem.style.left){
		elem.style.left = "0px";
	}
	if (!elem.style.top){
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;

	if (xpos == final_x && ypos == final_y){
		return true;
	}

	if (xpos < final_x){
		dist = Math.ceil((final_x - xpos) / 10);
		xpos = xpos + dist;
	}
	if (xpos > final_x){
		dist = Math.ceil((xpos - final_x) / 10);
		xpos = xpos - dist;
	}
	if (ypos < final_y){
		dist = Math.ceil((final_y - ypos) / 10);
		ypos = ypos + dist;
	}
	if (ypos > final_y){
		dist = Math.ceil((ypos - final_y) / 10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// 以下是字符串的拼接 
	var repeat = "moveElement('" + elementID + "', " + final_x + ", " + final_y + ", " + interval + ")";
	elem.movement = setTimeout(repeat, interval);
}


function prepareSlideshow(){

	if (!document.getElementById){return false;}
	if (!document.getElementsByTagName){return false;}
	if (!document.getElementById("linklist")){return false;}

	var preview = document.createElement("img");
	preview.setAttribute("id", "preview");
	preview.setAttribute("src", "image/test.gif");
	preview.setAttribute("alt", "building blocks of web Design");

	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");

	slideshow.appendChild(preview);
	// if (!document.getElementById("preview")){return false;}

	// var preview = document.getElementById("preview");
	// preview.style.top = "0px";
	// preview.style.left = "0px";

	var list = document.getElementById("linklist");

	insertAfter(slideshow, list);

	var links = list.getElementsByTagName("a");

	links[0].onmouseover = function(){
		moveElement("preview", -100, 0, 10);
	}

	links[1].onmouseover = function(){
		moveElement("preview", -200, 0, 10);
	}

	links[2].onmouseover = function(){
		moveElement("preview", -300, 0, 10);
	}

}

function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	//Error: if(targetElement == parent){ blblblblb}
	if (parent.lastChild == targetElement) {
		targetElement.appendChild(newElement);
	}else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}




























