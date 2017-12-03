var bPlay = document.getElementById("playy");
var bStop = document.getElementById("stop");
var bNext = document.getElementById("next");
var bBack = document.getElementById("back");
var bLoop = document.getElementById("loop");
var divCont = document.getElementById("progressContainer");
var divTimeAll = document.getElementById("timeAll");
var divTime = document.getElementById("time");
var volume = document.getElementById("volume");

divCont.innerHTML += '<div></div>';
var divProgr = document.createElement("div");
divCont.appendChild(divProgr);
divProgr.classList.add("progress");

var list = document.getElementById("list");
var buts; var auds;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'music.json', true);

xhr.onload = function(){
var data = JSON.parse(this.responseText);

data.forEach(function(el, ind){
	list.innerHTML += '<audio></audio>';
	auds = document.getElementsByTagName("audio");
	auds[auds.length-1].id ="aud"+ind;
	auds[auds.length-1].src = el.adr;

	list.innerHTML += '<div><img class="icon" src="' + el.cover + '">'+el.name+'<button class="play" type=Button id="but">play</button></div>';
	buts = document.getElementsByClassName("play");
	buts[buts.length-1].id = ind;
})

buts[0].addEventListener("click", function(){
	getSong("aud0", document.getElementById("aud0").src);
});

buts[1].addEventListener("click", function(){
	getSong("aud1", document.getElementById("aud1").src);
});

buts[2].addEventListener("click", function(){
	getSong("aud2", document.getElementById("aud2").src);
});

}
 xhr.send(null);


var player = document.getElementById("player");
var getSong = function(id, src)
{
	var aud = document.getElementById(id);
	aud.src = src;
	player.appendChild(aud);
	var flag = 0;
	var flagLoop = 0;

var progr = function(){
	var min = parseInt(aud.currentTime/60);
	var sec = parseInt(aud.currentTime - min*60);
	if (min<10) min='0'+min;
	if (sec<10) sec='0'+sec;
	divTime.innerText = min + ":" + sec;

	var computedStyle = getComputedStyle(divCont);
	r = computedStyle.width.match(/\d\d\d/);
	wid = (parseInt(aud.currentTime)*r[0])/parseInt(aud.duration);
	divProgr.style.width = wid+'px';
}

var interv = setInterval(progr, 500);

aud.addEventListener("loadedmetadata", function(){
	var min = parseInt(this.duration/60);
	var sec = parseInt(this.duration - min*60);
	if (min<10) min='0'+min;
	if (sec<10) sec='0'+sec;
	divTimeAll.innerText = "/" + min+":"+sec;
	divProgr.style.width='0px';
})


bPlay.addEventListener("click", function(){
	if (flag==1) {
		aud.pause();
		flag=0;
		this.innerHTML = "<img class='simg' src='play.png'>";
	}
	else {
		aud.play();
		flag=1;
		this.innerHTML = "<img class='simg' src='pause.png'>";
	}
})

bStop.addEventListener("click", function(){
	aud.pause();
	aud.currentTime = 0;
	flag = 1;
	var event = new Event("click");
	bPlay.dispatchEvent(event);
})

bNext.addEventListener("click", function(){
	aud.playbackRate *= 1.25;
})

bBack.addEventListener("click", function(){
	aud.playbackRate *= 0.8;
})

var addLoop = function()
{
	flag=0;
	var event = new Event("click");
	bPlay.dispatchEvent(event);
}

bLoop.addEventListener("click", function(){
if (flagLoop==0) 
	{
		aud.addEventListener("ended", addLoop);
		flagLoop = 1;
	}
else {
	aud.removeEventListener("ended", addLoop);
	flagLoop=0;
}
})

divCont.addEventListener("click", function(e){
	clearInterval(interv);
	wid = e.clientX-30;
	divProgr.style.width = wid + 'px';
	aud.currentTime = wid * parseInt(aud.duration)/400;
	var interv = setInterval(progr, 500);
})

volume.addEventListener("input", function(){
	aud.volume=parseFloat(volume.value)/100;
})


}