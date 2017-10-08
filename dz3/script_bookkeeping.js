copyWorker = function(obj2, obj1){				//копировать сотрудника
	obj2.init = obj1.init;
	obj2.print = obj1.print;
}

copyArr = function(arr2, arr1){					//копировать массив
	for(var i=0; i<arr1.length; i++)
	{
		arr2[i] = arr1[i];
	}
}

searchByName = function(array, name)			//поиск по имени сотрудника в массиве
{
	for(var i=0; i<array.length; i++)
	{
		if (array[i].name == name) return array[i];
		else return "no";
	}
}


var worker = {										//объект сотрудник
	name: "name", age: "age", department: "department", salary: "salary", experience: "experience",
	init: function(name, age, department, salary, experience)	//инициализация полей сотрудника
	{
		this.name = name;
		this.age = age; 
		this.department = department;
		this.salary = salary;
		this.experience = experience; 
	},
	print: function(){
		console.log("Name: " + this.name);
		console.log("Age: " + this.age);
		console.log("Department: " + this.department);
		console.log("Salary: " + this.salary);
		console.log("Experience: " + this.experience + " months");
	}
}

var workersArr = new Array();									//массив сотрудников

workersArr[0] = new Object();									//для начала создадим и инициализируем 3 сотрудника в этом массиве
copyWorker(workersArr[0], worker);
workersArr[0].init("Vasya", 33, "a", 600, 4); 
workersArr[1] = new Object();
copyWorker(workersArr[1], worker);
workersArr[1].init("Petya", 20, "b", 480, 1); 
workersArr[2] = new Object();
copyWorker(workersArr[2], worker);
workersArr[2].init("Olga", 59, "c", 1800, 114); 

//workersArr.forEach(function(elem){elem.print()});				//вывод на экран

var bookkeeping = {												//объект бухгалтерия
	workers: workersArr,										//сотрудники
	add: function(worker) {										//добавление конкретного сотрудника в массив сотрудников
		console.log("ADD A WORKER: ");
		workers.push(worker);
	},
	print: function(){
		console.log("PRINT ALL WORKERS: ");
		this.workers.forEach(function(elem){elem.print()});
	},
	dismiss: function(name) {									//увольнение сотрудника
		console.log("DISMISS A WORKER: ");
		workers.delete(searchByName(workers, name));			//удалить найденного по имени в массиве сотрудников
	},
	printSalarySort: function(){								//печать отсортированных по зарплате
		console.log("PRINT SORTED BY SALARY: ");
		var arrSalary = new Array(workers.length);
		copyArr(arrSalary, workers);
		arrSalary.sort(function(worker1, worker2)				//сортировка
		{
			if (worker1.salary>worker2.salary) return 1;
			else return -1;
		});
		arrSalary.forEach(function(elem){elem.print()});		//печать
		console.log("average salary: " + Math.round(arrSalary.reduce(function(sum, current){return sum+current.salary}, 0)))}	//зп всех
}

bookkeeping.print();
var workerNew;
workerNew = copyWorker(workerNew, worker);
workerNew.init("Isabella", 43, "v", 834, 0);
bookkeeping.add(workerNew);
bookkeeping.print();




/*
arg = prompt("Enter your choise: ");
menu = function(arg){
	switch(arg)
	{
		case "1": {bookkeeping.print(); break};
		case "2": {bookkeeping.add(worker); break};
		case "3": {bookkeeping.dismiss(name); break};
		case "4": {bookkeeping.printSalarySort()); break};
		default: {console.log("error"); break};
	}
}

printMenu = function()
{
	console.log(
	"1 - print all workers;
	2- add new worker;
	3 - dismiss a worker;
	4 - see workers by salary and see summary salary;
	5 - see person with max, min salaries; awerage salary"
	);
}




*/

/*
console.log("average salary: " + Math.round(arrSalary.reduce(function(sum, current){return sum+current.salary}, 0)/arrSalary.lenght))}	//средняя зп всех
*/