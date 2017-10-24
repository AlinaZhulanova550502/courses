var F = {
	append: function(e, e2)
	{
		e.appendChild(e2);
	},
	prepend: function(e, e2, ne)
	{
		e.insertBefore(ne, e2,);
	},
	remove: function(e)
	{
		e.remove();
	},
	create: function(tag)
	{
		return document.createElement(tag);
	},
	Get: {
			byId : function(id)
			{
				return document.getElementById(id);
			},
			byClass: function(className)
			{
				return document.getElementsByClassName(className);
			},
			byTag: function(tag)
			{
				return document.getElementsByTagName(tag);
			},
			byName: function(name)
			{
				return document.getElementsByName(name);
			},
			bySelector: function(s)
			{
				return document.querySelector(s);
			},
			bySelectorAll: function(s)
			{
				return document.querySelectorAll(s);
			},
		},
	Event: {
			add: function(type, elem, f)
			{
				if (typeof(elem.addEventListener) == "function") elem.addEventListener(type, f) 
				else elem.attachEvent(type, f);
			},
			remove: function(type, elem, f)
			{
				if (typeof(addEventListener) == "function") elem.removeEventListener(type, f)
				else elem.detachEvent(type, f);
			},
			dispatch: function(type, elem)
			{
				if (typeof(addEventListener) == "function") elem.dispatchEvent(new Event(type)) 
				else elem.fireEvent(type, new Event(type));
			}
		}
}

f = function(){
	console.log("react");
}

div = F.Get.byId("divv");
p = F.Get.byId("pp");
divtwo = F.Get.byId("divtwo");

F.append(div, p);
F.prepend(div, p, divtwo);
F.remove(p);
F.create('hr');
objByCl = F.Get.byClass("div");
console.log(objByCl);