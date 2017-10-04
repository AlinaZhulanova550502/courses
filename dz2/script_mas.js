//создать функцию, которая сгенерирует массив из N случайных чисел со средним значением s и отклонением от него не более p%.
// Отсортировать и вычислить в нем среднее значение.

s=parseFloat(prompt("srednee znachenie"));
p=parseFloat(prompt("otklonenue v procentax"));
N=parseInt(prompt("kol-vo elementov massiva"));
if (p<=0) alert("error");
else
{
while(parseInt(sum/N)!=parseInt(s))
{
var arr=new Array(N);
var sum=0;
for(var i=0; i<N; i++)
{
	arr[i]=Math.random()*((s/100*p)+s);
	if ((arr[i]<(s-(s/100*p))) || (arr[i]>(s+(s/100*p)))) i--;
	else sum+=arr[i]; //sum=sum+arr[i];
}
}

alert(sum/N);

 do {
    var nn = 0;
    for (var j = 1; j < N; ++j)
      if (arr[j-1] > arr[j]) 
      {
        var buf;
        buf = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = buf;
        nn = j;
      }
    n = nn;
 } while (n);

alert(arr);
}