addLoadEvent(prepareGallery);
addLoadEvent(createdImgAndPara);

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
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

function createdImgAndPara(){
	if (!document.createElement){
		return false;
	}
	if (!document.createTextNode){
		return false;
	}
	if (!document.appendChild){
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("imagegallery")) {
		return false;
	}
	var img = document.createElement("img");
	var para = document.createElement("p");
	img.setAttribute("src", "img/space.jpg");
	img.setAttribute("id","placeholder");
	img.setAttribute("alt","my image gallery");
	para.setAttribute("id","desc");
	var descText = document.createTextNode("Choose an image");
	para.appendChild(descText);
	// document.getElementsByTagName("body")[0].appendChild(img);
	// document.getElementsByTagName("body")[0].appendChild(para);
	// document.body.appendChild(img);
	// document.body.appendChild(para);
	// var gallery = document.getElementById("imagegallery");
	// gallery.parentNode.insertBefore(para, gallery);
	// gallery.parentNode.insertBefore(img, para);
	var gallery = document.getElementById("imagegallery");
	insertAfter(img, gallery);
	insertAfter(para, img);
}


function prepareGallery(){
	if (!document.getElementsByTagName){
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("imagegallery")) {
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");

	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			return showPic(this)?false:true;
		}
	}

}


function showPic(whichPic){
	if(!document.getElementById("placeholder")){
		return false;
	}
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") {
		return false;
	}
	placeholder.setAttribute("src", source);
	if(document.getElementById("desc")){
		var txt = whichPic.getAttribute("title")? whichPic.getAttribute("title"):"";
		var desc = document.getElementById("desc");
		if (desc.firstChild.nodeType == 3) {
			desc.firstChild.nodeValue = txt;
		}
	}
	return true;
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}