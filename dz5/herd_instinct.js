copyPerson = function(obj2, obj1)
	{				
		obj2.init = obj1.init;
	}

copyPurch = function(obj2, obj1)
	{				
		obj2.init = obj1.init;
	}

var purch = new Array("телевизор", "компьютер", "плеер", "туфли", "мебель", "обои", "платья", "алкоголь", "<-buy",
					15, 20, 100, 35, "<-prices");
var NN = purch.indexOf("<-buy");					//кол-во покупок в массиве
var MM = purch.indexOf("<-prices") - NN - 1;		//кол-во цен
			
var arr = new Array("Анна", "Никита", "Артем", "Наталья", "Иван", "Николай", "Мария", "Константин", "<-names",
					"Гродно", "Минск", "Брест", "Бостон", "<-cities");
var N = arr.indexOf("<-names");					//кол-во имен
var M = arr.indexOf("<-cities") - N - 1;		//кол-во городов

var person = {	
	init: function(name, city, purchaise)		//инициализация полей человека
	{
		this.name = name;
		this.city = city;
		this.purchaise = purchaise;
	}
}

var people = new Array(100);						
var generatePerson = function(i, purchaise)
	{
		people[i] = new Object();				//человек
		copyPerson(people[i], person);

		var name = arr[Math.round(Math.random()*(N-1))];	//поля человека
		var city = arr[Math.ceil(N+Math.random()*(M-1))];

		var purche = 
		{	
			init: function(name, price, count)				//инициализация полей покупки
			{
				this.name = name;
				this.price = price; 
				this.count = count;
			}
		}

		var nameP = purch[Math.round(Math.random()*(NN-1))];	//поля покупки
		var price = purch[Math.ceil(N+Math.random()*(MM-1))];
		var count = Math.round(Math.random()*15)+1;

		purche.init(nameP, price, count); 					//инициализация покупки
		people[i].init(name, city, purche); 			//инициализация человека
	}

//console.log(people[0].name + " из города " + people[0].city  + " купил(a) товар " + people[0].purchaise.name + " в количестве " + people[0].purchaise.count + " общей стоимостью " + people[0].purchaise.count*people[0].purchaise.price);

var div = document.getElementById("div");
var i=0;							//для добавления в массив людей

function showPurcher(i)
{
	generatePerson(++i)					//новый человек
	var str = people[i].name + " из города " + people[i].city  + " купил(a) товар " + people[i].purchaise.name + " в количестве " + people[i].purchaise.count + " общей стоимостью " + people[i].purchaise.count*people[i].purchaise.price;
	console.log(str);

	div.innerHTML += '<div id="ndiv"></div>';
	var ndiv = document.getElementById("ndiv");
	ndiv.innerHTML += '<br>';
	ndiv.innerText = ndiv.outerText + str;
}

function AccoutAndShow()				//показывать в течение рандомного интервала ????
{
	var time=4001;
	while ((time<2000)||(time>4000)) time = Math.round(Math.random()*20000);
	console.log(time);
	setTimeout(showPurcher, time);
}
setInterval(AccoutAndShow, 1000);	//подождать секунду и показывать нового человека ??? задержка между людьми
