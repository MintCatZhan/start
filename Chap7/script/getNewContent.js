function getNewContent(){
	var request = getHTTPObject();
	if (request){
		request.open("GET", "example.txt", true);//发起get请求，请求位于同一目录的example.txt文件
		request.onreadystatechange = function(){
			if (request.readyState == 4){//readystate完成 == 4
				alert("Response Received");
				var para = document.createElement("p");//创建元素节点p
				if (!request.responseText){
					alert("no response");
				}
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}else {
		alert("Browser doesn't support XHR");
	}
	alert("Fucntion Done");
}
addLoadEvent(getNewContent);