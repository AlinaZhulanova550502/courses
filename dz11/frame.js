var F = {
	width: function(el)
	{
		r = el.getBoundingClientRect();
		return Math.max(el.scrollWidth, r.width);
	}
	height: function(el)
	{
		r = el.getBoundingClientRect();
		return Math.max(el.scrollHeight, r.height);
	}
	pageTop: function(el)
	{
		return el.offsetTop;
	}
	pageLeft: function(el)
	{
		return el.offsetLeft;
	}
	css: function(el, prop)
	{
		st = el.style[prop];
		return st;
	}
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
	ajax: function(method, path, func) {
		var change = function() {
			var xhr = new XMLHttpRequest();
			xhr.open(method, path, true);
			xhr.onload = function() {
				var text = this.responseText;
				func(text);
			}
			xhr.send(null);
		}

		window.onhashchange = function(){
			change();
		}
	},
}