// addLoadEvent(styleHeaderSiblings(h1, intro));

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);

// 用于得到给定节点的下一个元素节点，如果给定节点为元素节点，即返回该节点
function getNextElement(node){
	if (node.nodeType == 1){
		return node;
	}
	if (node.nextSibling){
		// 迭代
		return getNextElement(node.nextSibling);
	}
	return null;
}

// 让h1元素节点的下一个元素节点的样式发生改变
function styleHeaderSiblings(tag, class){
	var headers = document.getElementsByTagName(tag);
	for (var i = 0; i < headers.length; i++){
		var elem = getNextElement(headers[i].nextSibling);
		// elem.style.fontWeight = "bold";
		// elem.style.fontSize = "1.2em";
		addClass(elem, class);
	}
}



// 给偶数行添加背景颜色，实现斑马线效果 -- wroten by myself
function setOddRowBGC(){

	var tables = document.getElementsByTagName("table");
	for (var t = 0; t < tables.length; t++){
		// var oddRow = false;
		var rows = tables[t].getElementsByTagName("tr");
		for (var i = 0; i < rows.length; i++){
			if (i % 2 == 1){
				rows[i].style.backgroundColor = "#ffc";
			}
		}
	}
}


// 给偶数行添加背景颜色，实现斑马线效果
function stripeTables(){
	if (!document.getElementsByTagName){
		return false;
	}
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for (var i = 0; i < tables.length; i++){
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++){
			if (odd == true){
				// rows[j].style.backgroundColor = "#ffc";
				addClass(rows[j], "odd")
				odd = false;
			}else{
				odd = true;
			}
		}
	}
}

// 当鼠标悬停在某一行，加粗该行文字
function highlightRows(){
	if (!document.getElementsByTagName){
		return false;
	}
	var rows = document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}


function addClass(element, value){
	if (!element.className == null){
		element.className = value;
	}else {
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
		// element.className = element.className + " " + value;
	}
}


















