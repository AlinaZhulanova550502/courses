	reverse = function reverseStr(str) 
	{
    	return str.split("").reverse().join("");
	}


	TakeABinCodOfSymb = function(ch)
	{
		var newch = "";
		var m = 1;
		do
		{
			newch += (ch % 2).toString();
			ch = Math.floor(ch / 2); m++;
		} while (Math.floor(ch) > 0);
		console.log(m);
		while (m < 9) {newch += '0'; m++};
		rev = reverse(newch);
		console.log(rev);
		return rev;
	}

	TakeACharFromBinCode = function(code)
	{
		var dec = 0;
		var st = 1;					
		for (j = 7; j >= 0; j--, st *= 2)
			if (code.charAt(j) == '1') dec += st;
		return dec;
	}

	start = document.getElementById("tocode");
	result = document.getElementById("result");
	btn = document.getElementById("btn");
	rbtn = document.getElementById("rbtn");

	btn.addEventListener('click', function()
	{
		data = start.value;
		var code="";
		for (i = 0; i<data.length; i++)						
			code+=TakeABinCodOfSymb(data.charCodeAt(i));		//передача по одному аски коду и получение его бинарной формы
		result.value = code;
	})

	rez = document.getElementById("rez");
	rbtn.addEventListener('click', function()
	{
		code = result.value;
		var decode="";
		rez.value="";
		for (i = 0; i<data.length*8; i=i+8)						
		{
			console.log(code.substr(i, i+8));
			decode=(TakeACharFromBinCode(code.substr(i, i+8))).toString();		//передача по одному аски коду в бинформе и получение его десятичн ф
			rez.value += String.fromCharCode(decode);
		}
	})
