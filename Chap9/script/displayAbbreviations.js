addLoadEvent(displayAbbreviations);

function displayAbbreviations(){

	if (!document.getElementsByTagName){return false;}
	if (!document.createTextNode){return false;}
	if (!document.createElement){return false;}

	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1){return false;}

	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++){
		var currentAbbr = abbreviations[i];
		if (currentAbbr.childNodes.lenght < 1) continue;
		var definition = currentAbbr.getAttribute("title");
		var key = currentAbbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	for (key in defs){
		var dtitle = document.createElement("dt");
		var dtitleValue = document.createTextNode(key);
		dtitle.appendChild(dtitleValue);

		var definition = defs[key];
		var ddesc = document.createElement("dd");
		var ddescValue = document.createTextNode(definition);
		ddesc.appendChild(ddescValue);

		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;

	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);

	document.getElementsByTagName("body")[0].appendChild(header);
	document.getElementsByTagName("body")[0].appendChild(dlist);
}