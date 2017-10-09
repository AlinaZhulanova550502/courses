printMenu = function()
{
	alert(
	"1 - print house;\n2- add new person;\n3 - evict a person;\n" + 
	"4 - crear a flat;\n5 - see bills"
	);
}

copyObj = function(obj2, obj1)
{				
	obj2.init = obj1.init;
	obj2.print = obj1.print;
	if (obj1.billFlat != undefined) obj2.billFlat = obj1.billFlat;
	if (obj1.plusBill != undefined) obj2.plusBill = obj1.plusBill;
}

copyArr = function(arr2, arr1)
{					//копировать массив
	for(var i=0; i<arr1.length; i++)
	{
		arr2[i] = arr1[i];
	}
}

initialise = function(square, floor, people)	
{
	this.square = square;
	this.floor = floor; 
	this.people = people; 
}

printing = function()
{
	console.log("FLAT");
	console.log("square: " + this.square);
	console.log("floor: " + this.floor);
	if (this.bill != undefined) console.log("bill: " + this.bill);
	this.people.forEach(function(elem){elem.print()})
}


billFlat = function()
{
	var kolChel=0;
	kolChel = this.people.length;
	kolChel = kolChel - this.people.filter(function(elem){if (elem.age<18) return elem}).length;
	if (kolChel<0) return;
	sumOne = Math.ceil(this.bill/kolChel);
	this.people.forEach(function(elem){if (elem.age >= 18) elem.bill = sumOne;})
}

plusBill = function(kommmunizm)
{
	var kolChel=0;
	kolChel = this.people.length;
	kolChel = kolChel - this.people.filter(function(elem){if (elem.age<18) return elem}).length;
	if (kolChel<=0)
	{
		kommmunizm += this.bill;
		this.bill=0;
		return kommmunizm;
	}
	return 0
}

initPerson = function(name, age)
{
	this.name = name;
	this.age = age;
}

printPerson = function()
{
	console.log("PERSON");
	console.log("Name: " + this.name);
	console.log("Age: " + this.age);
	if (this.bill != undefined) console.log("bill: " + this.bill);
}

searchByName = function(array, name)			
{
	for(var i=0; i<array.length; i++)
	{
		if (array[i].name.length!=name.length) continue;
		else 
			for (var j=0; j<name.length; j++)
		{
			if ((array[i].name[j] === name[j]) && (j==name.length-1)) return i;
			if (array[i].name[j] === name[j]) continue;
			else break;
		}
	}
	return null;
}
var person = {
	init: initPerson,
	print: printPerson
}

var peopleOne = new Array();
peopleOne[0] = new Object();							
copyObj(peopleOne[0], person);
peopleOne[0].init("Anna", 2); 
peopleOne[1] = new Object();							
copyObj(peopleOne[1], person);
peopleOne[1].init("Volodya", 27); 
peopleOne[2] = new Object();							
copyObj(peopleOne[2], person);
peopleOne[2].init("Maria", 29);

var peopleTwo = new Array();
peopleTwo[0] = new Object();							
copyObj(peopleTwo[0], person);
peopleTwo[0].init("Alexandr", 60); 

var peopleThree = new Array();
peopleThree[0] = new Object();							
copyObj(peopleThree[0], person);
peopleThree[0].init("Pavel", 35); 
peopleThree[1] = new Object();							
copyObj(peopleThree[1], person);
peopleThree[1].init("Vladimir", 14); 


var peopleFour = new Array();
peopleFour[0] = new Object();							
copyObj(peopleFour[0], person);
peopleFour[0].init("Anzhela", 19); 
peopleFour[1] = new Object();							
copyObj(peopleFour[1], person);
peopleFour[1].init("Nurlan", 37); 


var flat = {
	init: initialise,
	print: printing,
	billFlat: billFlat,
	plusBill: plusBill
}

var flats = new Array();
flats[0] = new Object();									
copyObj(flats[0], flat);
flats[0].init(33, 5, peopleOne); 
flats[1] = new Object();									
copyObj(flats[1], flat);
flats[1].init(20, 2, peopleTwo); 
flats[2] = new Object();									
copyObj(flats[2], flat);
flats[2].init(42, 9, peopleThree); 
flats[3] = new Object();									
copyObj(flats[3], flat);
flats[3].init(22, 12, peopleFour); 
flats[4] = new Object();									
copyObj(flats[4], flat);
var arr = new Array();
flats[4].init(38, 11, arr); 


var house = {												
	flats: flats,										
	add: function(number, person) {														//вселить									
		console.log("ADD A PERSON ");
		if ((number<0) || (number>this.flats.length))
		{
			console.log("No such flat");
			return;
		}
		this.flats[number-1].people.push(person);
		this.flats[number-1].print();
	},
	print: function(){
		console.log("PRINT HOUSE: ");
		this.flats.forEach(function(elem){elem.print()});
	},
	evict: function(nameex) {															//выгнать человека
		console.log("EVICT A PERSON: " + nameex);
		var index = null;
		var i;
		for(i = 0; i<this.flats.length; i++)
		{
			index = searchByName(this.flats[i].people, nameex);
			if (index == null) continue;
			else break;

		}
		if (index!=null) 
		{
			this.flats[i].people.splice(index, 1);	
			this.flats[i].print();
		}		
		else console.log("Wasn't such lodger at house");
	},
	clear: function(number)																//выгнать семью из квартиры
	{
		console.log("CLEAR A FLAT");
		if ((number<0) || (number>this.flats.length))
		{
			console.log("No such flat");
			return;
		}
		this.flats[number-1].people = new Array();
		this.flats[number-1].print();
	},
	bills: function(account)
	{
		var allSquare = this.flats.reduce(function(sum, current){return sum+current.square}, 0);	//посчитать площадь дома
		for(var i=0; i<this.flats.length; i++)
			this.flats[i].bill = Math.ceil(this.flats[i].square/allSquare*account);		//посчитать налог по площади для каждой квартиры

		this.flats.forEach(function(elem,){elem.billFlat()});							//расчет налога между жителями квартиры

		var kommunizm = 0;
		this.flats.forEach(function(elem, i){kommunizm=elem.plusBill(kommunizm)});		//подсчёт налога, который платят за несовершеннолетних и пустые кв

		var arrPaers = new Array();
		arrPaers = this.flats.filter(function(elem){if (elem.bill>0) return elem});		//квартиры-плательщики
		plusKommunizm = Math.ceil(kommunizm/arrPaers.length);							//величина надбавки каждой квартире за других
		arrPaers.forEach(function(elem){elem.bill += plusKommunizm});					//надбавить каждой квартире за других
		arrPaers.forEach(function(elem){elem.billFlat()});								//надбавить для каждого человека за других/пустые кв

		arrPaers.forEach(function(elem){elem.print()});									//вывод результата
	}
}

menu = function(arg){
if (arg==1) {house.print(); }
else if (arg==2) 
	{
		number = prompt("Enter number of flat: ");
		var bomzh =
		{
 			init: initPerson,
			print: printPerson
		}
		name = prompt("Enter new name: ");
		age = parseInt(prompt("Enter new age: "));

		bomzh.init(name, age);
		house.add(number, bomzh);
		house.print(); 
	};
if (arg==3) 
	{
		name = prompt("Enter name: ");
		house.evict(name); 
		house.print(); 
	};
if (arg==4) {number = prompt("Enter number of flat: "); house.clear(number)};
if (arg==5) {sum = prompt("Enter bill of house: "); house.bills(sum);}
}

	printMenu();
	arg = prompt("Enter your choise: ");
	menu(arg);
	