initialise = function(name, age, city)		//инициализация полей человека
	{
		this.name = name;
		this.age = age; 
		this.city = city;
	}

printing = function()						//вывод на печать человека
	{
		console.log("Name: " + this.name);
		console.log("City: " + this.city);
		console.log("Age: " + this.age);
	}

copyPerson = function(obj2, obj1)
	{				
		obj2.init = obj1.init;
		obj2.print = obj1.print;
	}


var arr = new Array("Anna", "Nikita", "Artiom", "Natalia", "Ivan", "Nikolai", "Maria", "Konstantin", "<-names",
					"Grodno", "Minsk", "Brest", "Boston", "<-cities");
var N = arr.indexOf("<-names");					//кол-во имен
var M = arr.indexOf("<-cities") - N - 1;		//кол-во городов

console.log(arr);								//вывод исходного массива

var person = {	
	init: initialise,
	print: printing
}

var people = new Array(N);						

for (var i=0; i<N; i++)							//сгенерировать массив из N случайных человек
	{
		people[i] = new Object();
		copyPerson(people[i], person);

		var name = arr[Math.round(Math.random()*(N-1))];
		var city = arr[Math.ceil(N+Math.random()*(M-1))];
		var age =  Math.round(Math.random()*80);

		people[i].init(name, age, city); 
	}

people.sort(function compareNumeric(a, b) {
  if (a.age < b.age) return 1;
  if (a.age > b.age) return -1
});

people.forEach(function(elem){elem.print()});