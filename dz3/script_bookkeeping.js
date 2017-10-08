printMenu = function()
{
	alert(
	"1 - print all workers;\n2- add new worker;\n3 - dismiss a worker;\n" + 
	"4 - see workers by salary and see summary salary;\n5 - see person with max, min salaries; awerage salary"
	);
}

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

initialise = function(name, age, department, salary, experience)	//инициализация полей сотрудника
	{
		this.name = name;
		this.age = age; 
		this.department = department;
		this.salary = salary;
		this.experience = experience; 
	}

printing = function()
	{
		console.log("Name: " + this.name);
		console.log("Age: " + this.age);
		console.log("Department: " + this.department);
		console.log("Salary: " + this.salary);
		console.log("Experience: " + this.experience + " months");
	}

searchByName = function(array, name)			//поиск по имени сотрудника в массиве
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


var worker = {										//объект сотрудник
	init: initialise,
	print: printing
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
		console.log("ADD A WORKER ");
		this.workers.push(worker);
	},
	print: function(){
		console.log("PRINT ALL WORKERS: ");
		this.workers.forEach(function(elem){elem.print()});
	},
	dismiss: function(nameex) {									//увольнение сотрудника
		console.log("DISMISS A WORKER: " + nameex);
		var index = searchByName(this.workers, nameex);
		if (index!=null) this.workers.splice(index, 1);			//удалить найденного по имени в массиве сотрудников
		else console.log("You hadn't this worker");
	},
	printSalarySort: function(){								//печать отсортированных по зарплате
		console.log("PRINT SORTED BY SALARY: ");
		var arrSalary = new Array(this.workers.length);
		copyArr(arrSalary, this.workers);
		arrSalary.sort(function(worker1, worker2)				//сортировка
		{
			if (worker1.salary>worker2.salary) return -1;
			else return 1;
		});
		arrSalary.forEach(function(elem){elem.print()});		//печать
		console.log("summary salary: " + Math.round(arrSalary.reduce(function(sum, current){return sum+current.salary}, 0)))},	//зп всех
	minMax: function()
	{	
		var sum = this.workers.reduce(function(sum, current){return sum+current.salary}, 0);
		var ind = this.workers.reduce(function(ptev, current, i){return i}, 0);
		console.log("average salary: " + Math.round(sum/(ind+1)));					//средняя зп всех

		var max, min;
		max=min=this.workers[0].salary;
		for(i=0; i<=ind; i++)
		{
			if (this.workers[i].salary<min) min=this.workers[i];
			else if (this.workers[i].salary>max) max=this.workers[i];
		}
		console.log("Worker with max salary: "); max.print();
		console.log("Worker with min salary: "); min.print();
	}	

}


//bookkeeping.print();


menu = function(arg){
if (arg==1) {bookkeeping.print(); }
if (arg==2) 
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
//{console.log("error")};
if (arg==5) {bookkeeping.minMax();}
}

	printMenu();
	arg = prompt("Enter your choise: ");
	menu(arg);