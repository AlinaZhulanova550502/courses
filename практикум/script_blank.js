var nm = document.getElementById("namem");
var price = document.getElementById("price");
var cat = document.getElementById("cat");
var btn = document.getElementById("btn");

//var people = new Array();

inputName = function(){
	text = nm.value;
} 

checkName = function(){
	var fullName = '';
	for(var i=0; i<3; i++)
	{
		ref = text.match(/[А-Яа-я][а-я]{2,}\-*[А-Я]*[а-я]*\s*/);
		if (ref==null) break;
		text=text.replace(ref[0], ' ');
		if(ref!=null) fullName += ref[0];
		nm.value = fullName;
	}
	if(fullName=='') 
	{
		alert("Неверный ввод названия");
		nm.value = '';
	}
}

inputPrice = function(){
	priceInp = price.value;
}

checkPrice = function(){
	ref = priceInp.match(/[1-9]\d/);
	if (ref!=null) 
		priceInp = parseInt(ref[0]);
	if (!(priceInp>=0)) 
	{
		alert("Неверный ввод цены");
		price.value = '';
		return;
	}
}

inputCat = function(){
	categ = cat.value;
}

checkName = function(){
	var fullName = '';
	for(var i=0; i<3; i++)
	{
		ref = categ.match(/[А-Яа-я][а-я]{2,}\-*[А-Я]*[а-я]*\s*/);
		if (ref==null) break;
		text=text.replace(ref[0], ' ');
		if(ref!=null) fullName += ref[0];
		cat.value = fullName;
	}
	if(fullName=='') 
	{
		alert("Неверный ввод категории");
		cat.value = '';
	}
}

/*btnClick = function(){
	var person = new Object();
	inputName(); checkName(); person.name = nm.value;
	inputAge(); checkAge();	person.age = age.value;
	inputNumber(); checkNumber(); person.number = numb.value;
	inputEmail(); checkEmail(); person.email = email.value;
	inputSite(); checkSite(); person.site = site.value;
	if((person.name!='')&&(person.age!='')&&(person.number!='')&&(person.email!='')&&(person.site!=''))
	{
		people.push(person);
		console.log(people[people.length-1]);
		alert("Форма отправлена");
	}
}*/

nm.addEventListener('input', inputName);
nm.addEventListener('blur', checkName);
price.addEventListener('input', inputPrice);
price.addEventListener('blur', checkPrice);
cat.addEventListener('input', inputCat);
cat.addEventListener('blur', checkCat);

btn.addEventListener('click', btnClick);