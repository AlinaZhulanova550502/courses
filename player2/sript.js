var player = document.getElementById("player");
var buts; var auds;

var xhr = new XMLHttpRequest();
 xhr.open('GET', 'music.json', true);
 xhr.onload = function(){
 	var data = JSON.parse(this.responseText);

data.forEach(function(el, ind){
	player.innerHTML += '<audio></audio>';
	auds = document.getElementsByTagName("audio");
	auds[auds.length-1].id ="aud"+ind;
	auds[auds.length-1].src = el.adr;

	player.innerHTML += '<div><img src="' + el.cover + '">'+el.name+'<button type=Button id="but">play</button></div>';
	buts = document.getElementsByTagName("button");
	buts[buts.length-1].id = ind;
})

console.log(buts);
console.log(auds);

for(i=0; i<buts.length; i++)
{
	buts[i].addEventListener("click", function(){
	console.log(document.getElementById("aud"+i).src); //???????????????????????
})
}


}
 xhr.send(null);