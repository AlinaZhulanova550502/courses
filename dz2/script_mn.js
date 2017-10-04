var arr = new Array();
var i=0;
while(1)
{
	arr.push(prompt("vvedite koef"));
	if (isNaN(arr[i])) break;
	alert(arr[i]);
	i++;
}
arr.pop(arr[i]);					////!!!!!
var last = arr.indexOf(arr[i-1]);
x = prompt("vvedite x");
if (isNaN(parseFloat(x))) alert("error");
else
{
	var rez=0;
	for (var i=0; i<=last; i++)
	rez += parseFloat(arr[i] * Math.pow(x, i));
}
alert(rez);