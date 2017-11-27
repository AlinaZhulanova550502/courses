var div=document.getElementById("div");

var settings = {
	"#link1": { path: "1.html",
	handle: function() {

		var list = function(el){
		el.addEventListener("click", function(){
 				col = Math.random()*100;
 				if (col<25) el.style.background = "green";
 				else if (col<50) this.style.background = "yellow";
 				else if (col<75) this.style.background = "red";
 				else if (col<100) this.style.background = "blue";
 			})
 		}

		var tds = document.getElementById("tab").getElementsByTagName("td");
 		for (var i = 0; i < tds.length; ++i) {
 			tds[i].innerText = i;
 			list(tds[i]);
		}
	 }
	},

	"#link2" : { path: "2.html",
	handle: function() {
	reverse = function reverseStr(str) 
	{
    	return str.split("").reverse().join("");
	}

	TakeABinCodOfSymb = function(ch)
	{
		var newch = "";
		var m = 1;
		do
		{
			newch += (ch % 2).toString();
			ch = Math.floor(ch / 2); m++;
		} while (Math.floor(ch) > 0);
		console.log(m);
		while (m < 9) {newch += '0'; m++};
		rev = reverse(newch);
		console.log(rev);
		return rev;
	}

	TakeACharFromBinCode = function(code)
	{
		var dec = 0;
		var st = 1;					
		for (j = 7; j >= 0; j--, st *= 2)
			if (code.charAt(j) == '1') dec += st;
		return dec;
	}

	start = document.getElementById("tocode");
	result = document.getElementById("result");
	btn = document.getElementById("btn");
	rbtn = document.getElementById("rbtn");

	btn.addEventListener('click', function()
	{
		data = start.value;
		var code="";
		for (i = 0; i<data.length; i++)						
			code+=TakeABinCodOfSymb(data.charCodeAt(i));		//передача по одному аски коду и получение его бинарной формы
		result.value = code;
	})

	rez = document.getElementById("rez");
	rbtn.addEventListener('click', function()
	{
		code = result.value;
		var decode="";
		rez.value="";
		for (i = 0; i<data.length*8; i=i+8)						
		{
			console.log(code.substr(i, i+8));
			decode=(TakeACharFromBinCode(code.substr(i, i+8))).toString();		//передача по одному аски коду в бинформе и получение его десятичн ф
			rez.value += String.fromCharCode(decode);
		}
	})
	} },
	"#link3" : "3.html",
	"#link4" : "4.html",
	"#link5" : "5.html"
}

var func = function(text) {
	div.innerHTML = text;
	if((location.hash == "#link1") || (location.hash == "#link2"))
		{
			settings[location.hash].handle();
		}
}

var change = function() {

	var path = settings[location.hash].path || settings[location.hash];
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", path, true);
	xhr.onload = function() {
		div.innerHTML = this.responseText;
		if((location.hash == "#link1") || (location.hash == "#link2"))
		{
			settings[location.hash].handle();
		}
	}
	xhr.send(null);
}

window.onhashchange = function() {
	change();
}
if(location.hash in settings) {
	change();
}