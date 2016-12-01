addLoadEvent(displayCitations);

function displayCitations(){
	if (!document.getElementsByTagName || !document.createTextNode || !document.createElement){
		return false;
	}
	// 取得所有的引用
	var quotes = document.getElementsByTagName("blockquote");
	// 遍历所有的引用
	for (var i = 0; i < quotes.length; i++){
		// 如果这个引用没有cite，跳出这次循环
		if (!quotes[i].getAttribute("cite")) continue;
		// 否则，获得当前这个引用的cite属性值
		var url = quotes[i].getAttribute("cite");
		// 尝试得到当前这个引用的所有元素节点
		var quoteElements = quotes[i].getElementsByTagName("*");
		// 如果得到的元素节点的长度小于1，表示这个元素节点不存在，跳出这次循环
		if (quoteElements.length < 1) continue;
		// 否则，获取这个引用的最后一个元素节点
		var elem = quoteElements[quoteElements.length - 1];
		// 创建一个a元素节点，用于存放链接，创建标记
		var link = document.createElement("a");
		var link_text = document.createTextNode("w3c");
		link.appendChild(link_text);
		link.setAttribute("href", url);
		var superScript = document.createElement("sup");
		superScript.appendChild(link);
		// 将标记添加到最后一个元素节点中
		elem.appendChild(superScript);
	}
}