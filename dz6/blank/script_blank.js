var nm = document.getElementById("name");
var age = document.getElementById("age");
var numb = document.getElementById("numb");
var email = document.getElementById("email");
var site = document.getElementById("site");
var btn = document.getElementById("btn");

var people = new Array();

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
		alert("Неверный ввод имени");
		nm.value = '';
	}
}

inputAge = function(){
	ageInp = age.value;
}

checkAge = function(){
	ref = ageInp.match(/[1-9]\d/);
	if (ref!=null) 
		ageInp = parseInt(ref[0]);
	if (!((ageInp>=14) && (ageInp<=90))) 
	{
		alert("Неверный ввод возраста");
		age.value = '';
		return;
	}
}

inputNumber = function(){
	number = numb.value;
}

checkNumber = function(){
	ref=number.match(/\(*\+375[\s-\)\(]*([234][3459])[\s-\)]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*/);
	if (ref==null) 
	{
		alert("Неверный ввод телефона");
		numb.value = '';
	} 
	else 
	{
		code=ref[1];
		if (code!=33 & code!=44 & code!=24 & code!=25 & code!=29)
		{
			alert("Неверный код в номере телефона");
			numb.value = '';
			return;
		}
		else numb.value = ref[0];
	}
}

inputEmail = function(){
	emInp = email.value;
}

checkEmail = function(){
	ref=emInp.match(/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*[a-z][a-z]{1,3}$/);
	if (ref!=null)
		email.value = ref[0];
	else
	{
		alert("Неверный email");
		email.value = '';
		return;
	}
}

inputSite = function(){
	siteInp = site.value;
}

checkSite = function(){
	ref=siteInp.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
	if (ref!=null)
		site.value = ref[0];
	else
	{
		alert("Неверный адрес сайта");
		site.value = '';
		return;
	}
}

btnClick = function(){
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
}

nm.addEventListener('input', inputName);
nm.addEventListener('blur', checkName);
age.addEventListener('input', inputAge);
age.addEventListener('blur', checkAge);
numb.addEventListener('input', inputNumber);
numb.addEventListener('blur', checkNumber);
email.addEventListener('input', inputEmail);
email.addEventListener('blur', checkEmail);
site.addEventListener('input', inputSite);
site.addEventListener('blur', checkSite);

btn.addEventListener('click', btnClick);