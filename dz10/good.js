good.prototype.ident = 0;								// свойство в прототипе
good.prototype.addId = function() {					// метод в прототипе
  good.prototype.ident++;
};


function good(name, type, price, year, month, date) {		// конструктор товара
  this.name = name;
  this.type = type;
  this.price = price;
  this.date = new Date(year, month-1, date);
  this.addId();
}

good.prototype.showGood = function(){
  console.log(this.name);
  console.log(this.type);
  console.log(this.price);
  console.log(this.date); //!!!
}

goodFood.prototype = good.prototype;   // наследование от товара
//goodFood.prototype = Object.create(good.prototype); 	// наследование от товара

function goodFood(name, type, price, year, month, date, year2, month2, date2){
  good.call(this, name, type, price, year, month, date);
  this.bestBefore = new Date(year2, month2-1, date2);
}

goodFood.prototype.showGoodFood = function(){
  good.prototype.showGood.call(this);
  console.log(this.bestBefore);   //!!!
  console.log(this.life()+" сут.");
}

goodFood.prototype.life = function(){									// новая функция для всех объектов класса
	return Math.floor((this.bestBefore - this.date)/86400000);							// кол-во суток
}

function shop(name, address, markup, income, goods) {					// конструктор магазина
  this.name = name;
  this.address = address;
  this.markup = markup;
  this.income = income;
  this.goods = goods;
}

shop.prototype.totalCost = function(){									//общая стоимость
	var result = this.goods.reduce(function(sum, current) {
  		return sum + current.price;
  	}, 0);
  	return result;
}

shop.prototype.addNumberGoods = function(good, n){						//добавить товары
	for(i=n; i>0; i--) this.goods.push(good);
}

shop.prototype.removeGood = function(n){								//списать товары
	first = this.totalCost();
	for(i=n; i>0; i--) this.goods.pop();
}

shop.prototype.soldGood = function(n){									//продать товары
	for(i=n; i>0; i--) this.goods.pop();
	this.income += Math.floor((first - this.totalCost())/(1+(this.markup/100))*(this.markup/100));			// прибыль с учетом наценки
}

shop.prototype.printInfo = function(){
	console.log(this.name);
	console.log(this.address);
	console.log(this.markup);
	console.log(this.income);
	this.goods.forEach(function(elem){
    console.log(elem.name);
  })
}

function market(name, shops){
  this.name = name;
	this.shops = shops;
}

market.prototype.printAllShops = function(){
  console.log(this.name);
	this.shops.forEach(function(elem){
    elem.printInfo();
  })
}
///////////////////////////////////////////////////////////////

good1 = new good("карандаш", "канцелярия", 12, 2017, 8, 12);
good1.showGood();
food1 = new goodFood("торт", "выпечка", 68, 2017, 5, 1, 2017, 5, 14);
food1.showGoodFood();
food2 = new goodFood("творог", "молочные продукты", 34, 2017, 5, 1, 2017, 5, 19);
food2.showGoodFood();
good2 = new good("стиральный порошок", "бытовая химия", 100, 2016, 12, 23);
good2.showGood();
food3 = new goodFood("хлеб", "выпечка", 8, 2017, 11, 1, 2017, 11, 3);
food3.showGoodFood();
good3 = new good("диван", "мебель", 1029, 2017, 3, 17);
good3.showGood();
food4 = new goodFood("банан", "фрукты", 25, 2017, 10, 2, 2017, 10, 5);
food4.showGoodFood();

goods = new Array();

goods.push(good1);
goods.push(food1);
goods.push(good2);
goods.push(food2);

shop1 = new shop("соседи", "ТЦ 'РИГА'", 30, 200, goods);
shop1.printInfo();

goodstwo = new Array();

goodstwo.push(good3);
goodstwo.push(food3);
goodstwo.push(food4);

shop2 = new shop("евроопт", "проспект Независимости", 50, 123, goodstwo);
shop2.printInfo();

shops = new Array();
shops.push(shop1); shops.push(shop2);

market = new market("комаровский рынок", shops);
market.printAllShops();

/*
shop1.printInfo();
console.log(shop1.totalCost());
shop1.addNumberGoods(food4, 5);
shop1.printInfo();
shop1.removeGood(2);
shop1.printInfo();
shop1.soldGood(2);
shop1.printInfo();
*/