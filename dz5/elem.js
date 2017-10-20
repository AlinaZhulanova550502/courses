var text=0; var comment=0; var elems=0;

var find = function(elem)
{
	if ((elem == null)||(typeof(elem) == "undefined")) return;
	if (elem.nodeType == '1') elems++;					//element-node
    if (elem.nodeType == '3') text++;						//text-node
    if (elem.nodeType == '8') comment++;
	for (var i=0; ; i++)
	{
		if ((elem.childNodes == null)||(elem.childNodes[i] == null) || (typeof(elem.childNodes[i]) == "undefined")) break;
		find(elem.childNodes[i]);
	}
}

find(window.document);

console.log("elems: " + elems);
console.log("text: " + text);
console.log("comments: " + comment);