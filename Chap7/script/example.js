window.onload = function(){
	// var para = document.createElement('p');
	// var testdiv = document.getElementById("testdiv");
	// testdiv.appendChild(para);

	// var txt = document.createTextNode("Created Text");
	// para.appendChild(txt);
	// 1. create an element node named 'para'
	// 2. get the parent element whose id is "testdiv"
	// 3. append the created element into the parent element by using "parent.appendChild(child)"
	// 4. create a text node named "txt"
	// 5. append the text node into the parent element, this time the parent is "para"

	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ")
	var em = document.createElement("em");
	var txt2 = document.createTextNode("created by ");
	var txt3 = document.createTextNode("creating nodes(element & text).");
	para.appendChild(txt1);
	em.appendChild(txt2);
	para.appendChild(em);
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.append(para);
	}