labyrinth = new Object();
labyrinth.str1 = new Array(1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
labyrinth.str2 = new Array(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
labyrinth.str3 = new Array(1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1);
labyrinth.str4 = new Array(1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1);
labyrinth.str5 = new Array(1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1);
labyrinth.str6 = new Array(1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1);
labyrinth.str7 = new Array(1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1);
labyrinth.str8 = new Array(1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1);
labyrinth.str9 = new Array(1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1);
labyrinth.str10 = new Array(1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1);
labyrinth.str11 = new Array(1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1);
labyrinth.str12 = new Array(1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1);
labyrinth.str13 = new Array(1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1);
labyrinth.str14 = new Array(1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1);
labyrinth.str15 = new Array(1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1);
labyrinth.str16 = new Array(1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1);
labyrinth.str17 = new Array(1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1);
labyrinth.str18 = new Array(1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1);
labyrinth.str19 = new Array(1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1);
labyrinth.str20 = new Array(1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1);
labyrinth.str21 = new Array(1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1);
labyrinth.str23 = new Array(1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1);
labyrinth.str24 = new Array(1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1);
labyrinth.str25 = new Array(1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1);
labyrinth.str26 = new Array(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
labyrinth.str27 = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1);

container = document.getElementById("div");
container.innerHTML = '<table id="tab"></table>';
table = document.getElementById("tab");
numStr = 1;												//номер строки
for(var str in labyrinth)								//проход по строкам
{
	numVStr=1;											//номер ячейки в строке
	var row = document.createElement("tr");				//создать строку
	labyrinth[str].forEach(function(elem)				//проход по ячейкам строки
	{
		square = document.createElement('td');			//создать ячейку
		square.id = '['+numStr.toString()+']'+'.'+'['+numVStr.toString()+']';
		if (elem==1) square.style.background="pink";	//окрасить
		row.appendChild(square);
		numVStr++;
	});
	table.appendChild(row);
	numStr++;
}

hero = document.createElement('div');
hero.innerHTML = '<img id="hero" src="icon.png">';
document.getElementById("[1].[2]").appendChild(hero);	//поставить героя на стартовую позицию

toRight = function(hero, labyrinth){
	current = hero.parentElement;
	s = (current.id).match(/\d{1,2}/);							//строка
	r = (current.id).match(/.\[\d{1,2}\]/)[0].match(/\d{1,2}/); //ячейка
	newVStr = (parseInt(r[0])+1).toString();					//ячейка+1
	next = document.getElementById("["+s[0] + "]" + "." + "[" + newVStr + "]");
	if (next.style.background != "pink") next.appendChild(hero);
}

toLeft = function(hero, labyrinth){
	current = hero.parentElement;
	s = (current.id).match(/\d{1,2}/);							//строка
	r = (current.id).match(/.\[\d{1,2}\]/)[0].match(/\d{1,2}/);	//ячейка
	newVStr = (parseInt(r[0])-1).toString();					//ячейка-1
	next = document.getElementById("["+s[0] + "]" + "." + "[" + newVStr + "]");
	if (next.style.background != "pink") next.appendChild(hero);
}

toUp = function(hero, labyrinth){
	current = hero.parentElement;
	s = (current.id).match(/\d{1,2}/);
	newStr = (parseInt(s[0])+1).toString();
	r = (current.id).match(/.\[\d{1,2}\]/);
	next = document.getElementById("["+newStr + "]" + r[0]);
	if (next.style.background !="pink") next.appendChild(hero);
}

toDown = function(hero, labyrinth){
	current = hero.parentElement;
	s = (current.id).match(/\d{1,2}/);
	newStr = (parseInt(s[0])-1).toString();
	r = (current.id).match(/.\[\d{1,2}\]/);
	next = document.getElementById("["+newStr + "]" + r[0]);
	if (next.style.background != "pink") next.appendChild(hero);
}

window.addEventListener('keypress', function(e){
	console.log(e.keyCode);
	switch(e.keyCode)
	{
		case 59: {toLeft(hero, labyrinth); break;}	//стрелка влево
		case 47: {toUp(hero, labyrinth); break;}	//стрелка вверх
		case 39: {toRight(hero, labyrinth); break;}	//стрелка вправо
		case 91: {toDown(hero, labyrinth); break;}	//стрелка вниз
	}
	if (hero.parentElement.id == "[26].[25]") alert("You're winner!!");
});
