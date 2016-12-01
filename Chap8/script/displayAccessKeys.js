

function displayAccessKeys(){
	if (!document.createTextNode || !document.createElement || !document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	var alinks = new Array();
	for (var i = 0; i < links.length; i++){
		var current_link = links[i];
		if (!current_link.getAttribute("accesskey")) continue;
		var key = current_link.getAttribute("accesskey");
		var text = current_link.lastChild.nodeValue;
		alinks[key] = text;
	}

	var list = document.createElement("ul");
	for (key in alinks){
		var text = alinks[key];
		var str = key + ": " + text;
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}

	var header = document.createElement("h2");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);

	document.getElementsByTagName("body")[0].appendChild(header);
	document.getElementsByTagName("body")[0].appendChild(list);
}
addLoadEvent(displayAccessKeys);