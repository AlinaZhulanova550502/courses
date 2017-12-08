var div = document.getElementById("text");
var can = document.getElementById("can");
var context = can.getContext("2d");
flag=0;
var img = document.getElementById("back");

var line = function(e){
if(flag==0)
	{
		context.beginPath();
		context.lineTo(e.clientX, e.clientY);
		flag=1;
	}
	else
	{
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
	}
}

can.addEventListener("mousedown", function(){
	can.addEventListener("mousemove", line)
})

can.addEventListener("mouseup", function(e){
 	can.removeEventListener("mousemove", line);
 	flag=0;
}) 

can.addEventListener("dragenter", function(){
	div.innerText="отпустите изображение";
})

can.addEventListener("dragleave", function(){
	div.innerText=" ";
})

can.addEventListener("dragover", function(e){
	e.preventDefault();
})

can.addEventListener("drop", function(e){
	e.preventDefault();
	div.innerText=" ";
	var dt = e.dataTransfer;
	var reader = new FileReader();
	reader.readAsDataURL(dt.files[0]);
	reader.onload = function(){
		img.src = this.result;
	}
})