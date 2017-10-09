printMenu = function()
{
	alert(
	"1 - print all workers;\n2- add new worker;\n3 - dismiss a worker;\n" + 
	"4 - see workers by salary and see summary salary;\n5 - see person with max, min salaries; awerage salary\n"+
	"6 - see info"
	);
}

copyObj = function(obj2, obj1)
{				
	obj2.init = obj1.init;
	obj2.print = obj1.print;
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
	kolChel -= ithis.people.filter(function(elem){if (elem.age<18) return elem}).length;
	sumOne = Math.ceil(this.bill/kolChel);
	for (i=0; i<this.people.length; i++)
		if (this.people[i].age >= 18) this.people[i].bill = sumOne;
}

/*plusBill = function()
{

}*/

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
	billFlat: billFlat
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
	add: function(number, person) {										
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
	evict: function(nameex) {									
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
	clear: function(number)
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
		var allSquare = this.flats.reduce(function(sum, current){return sum+current.square}, 0);
		for(var i=0; i<this.flats.length; i++)
			this.flats[i].bill = Math.ceil(this.flats[i].square/allSquare*account);
		this.flats.forEach(function(elem, i){elem.billFlat});
		this.print();
	}
}

/*menu = function(arg){
if (arg==1) {bookkeeping.print(); }
else if (arg==2) 
	{
		var workerNew =
		{
 			init: initialise,
 			print: printing
		}
		name = prompt("Enter new worker's name: ");
		age = parseInt(prompt("Enter new worker's age: "));
		department = prompt("Enter new worker's department:");
		salary = parseInt(prompt("Enter new worker's salary:"));
		workerNew.init(name, age, department, salary, 0);
		bookkeeping.add(workerNew);
		bookkeeping.print(); 
	};
if (arg==3) 
	{
		name = prompt("Enter worker's name: ");
		bookkeeping.dismiss(name); 
		bookkeeping.print(); 
	};
if (arg==4)  {bookkeeping.printSalarySort()};
if (arg==5) {bookkeeping.minMax();}
if (arg==6) {bookkeeping.workInfo();}
}

	printMenu();
	arg = prompt("Enter your choise: ");
	menu(arg);
	*/

	//house.print();

	/*bomzh = new Object();							
	copyObj(bomzh, person);
	bomzh.init("Bomzhara", 49); 
	house.add(1, bomzh);
	*/

	//house.evict("Samoubiica");

	//house.clear(2);

	house.bills(9843);