var portion = function(data)
 {
 	list = document.getElementById("list");
 	data.forEach(function(elem, num){
 		list.innerHTML += "<li>";
 		for (var s in elem){list.innerHTML += elem[s] +"<br>";}
 		list.innerHTML += "</li>"
	});
 }

var dataD;

var xhr = new XMLHttpRequest();
 xhr.open('GET', 'jsooon.json', true);
 xhr.onload = function(){
 	var data = JSON.parse(this.responseText);
 	dataD=data;
 	portion(data);
 }
 xhr.send(null);

var i=1;

 window.onscroll = function(e) {	
        if (window.pageYOffset >= 200*i) {
        	portion(dataD);
        	i++;
        }
    };