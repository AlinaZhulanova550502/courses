var player = document.getElementById("player");
choose = prompt("1-aud, 2-vid");
if (choose==1) 
	{
		var aud = document.createElement("audio");
		aud.src = "song.mp3"
	}
else if (choose==2) {
	 	var aud = document.createElement("video");
	 	aud.src = "vid.3gp"
	}
player.appendChild(aud);
var flag = 0;
var flagLoop = 0;

var bPlay = document.getElementById("play");
var bStop = document.getElementById("stop");
var bNext = document.getElementById("next");
var bBack = document.getElementById("back");
var bLoop = document.getElementById("loop");
var divCont = document.getElementById("progressContainer");
var divTimeAll = document.getElementById("timeAll");
var divTime = document.getElementById("time");
var volume = document.getElementById("volume");

var divProgr = document.createElement("div");
divCont.appendChild(divProgr);
divProgr.classList.add("progress");


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
		this.innerHTML = "<img src='play.png'>";
	}
	else {
		aud.play();
		flag=1;
		this.innerHTML = "<img src='pause.png'>";
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