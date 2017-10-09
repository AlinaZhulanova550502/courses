var arr = new Array();
var i=0;
while(1)
{
	arr.push(prompt("vvodite koef po odnomu. zakonchite vvod bukvoi ili strokoi"));
	if (isNaN(arr[i])) break;
	i++;
}
arr.pop();					
var last = i-1;
x = prompt("vvedite x");
if (isNaN(parseFloat(x))) alert("error");
else
{
	var rez=0;
	for (i=0; i<=last; i++) rez += arr[i] * Math.pow(x, i);
}
alert(rez);