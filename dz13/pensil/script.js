var can = document.getElementById("can");
var context = can.getContext("2d");
flag=0;

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