a = prompt("enter first operand");
op = prompt("enter operation");	
b = prompt("enter second operand");
a=Number(a);
b=Number(b);
//if ((typeof(a)!="number") || (typeof(b)!="number")) alert("error1");
//else
	switch (op)
	{
		case "+":  {	alert(a+b); break;	}
		case "-":  {	alert(a-b); break;	}		
		case "*":  {	alert(a*b); break;	}
		case "/":  {	alert(a/b); break;	}
		case "%":  {	alert(a%b); break;	}
		default: alert("error2");
	}