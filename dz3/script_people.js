//создать массив из имен и городов

var arr = new Array("Anna", "Nikita", "Artiom", "Natalia", "Ivan", "Nikolai", "Maria", "Konstantin", "<-names",
					"Grodno", "Minsk", "Brest", "Boston", "<-cities");
var N = arr.indexOf("<-names");	//кол-во имен
var M = arr.indexOf("<-cities") - N - 1;

//сгенерировать массив из N случайных человек

var person = new Object();
print = function(){
	 console.log(this.name);
	 console.log(this.city);
	 console.log(this.age);
	}

var people = new Array(N);

for (var i=0; i<N; i++)
	{
		people[i] = Object();

		var nameIndex = 0;
		nameIndex = Math.round(Math.random()*(N-1));
		people[i].name = arr[nameIndex];

		var cityIndex = 0;
		while(1){
			if (cityIndex<=N) cityIndex = Math.round(Math.random()*(M-1));
			else break;
		}
		people[i].city = arr[cityIndex];

		people[i].age =  Math.round(Math.random()*80);
		people[i].print = person.print;
	}
	//строка из массива под рандомным номером с границами


people.sort(function compareNumeric(a, b) {
  if (a.age < b.age) return 1;
  if (a.age > b.age) return -1
});

people.forEach(function(item, i, people){item.print()});
