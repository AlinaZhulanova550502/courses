x=parseFloat(prompt("enter number"));							//ввод числа
if ((x >= 1) || (x<=(-1))) alert("number isn't correct");
else 
{
	count=parseInt(prompt("enter number of members"));			//ввод количества
	if (count<=0) alert("number of members isn't correct");
	else
	{	
		var otv = 0;
		var n;
		for (n = 0; n < count -1 ; n++)
		{
			var  proiz = 1;
			var m, four=1, factn=1, i, fact = 1, s=2*n+1, ss;
			m = 2 * n;							//2n
			if (m == 0) continue;
			for (i = 1; i <= m; i++)
				fact *= i;						//2n!
			for (m = n; m > 0; m--)
				four *= 4;						//4 в степени
			m = n;
			for (i = 1; i <= m; i++)
				factn *= i;						//n!
			factn*=factn;
			for (ss = s; ss > 0; ss--)
				proiz = proiz*x;
			otv += fact*proiz / (four*factn*s);
			alert(otv);
		}
	}
}