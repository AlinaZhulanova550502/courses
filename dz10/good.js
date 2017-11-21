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

addTd = function(row, text)						//создание ячейки с текстом в строке
{
  td = document.createElement('td');			//создать ячейку
  td.innerText = text;
  row.appendChild(td);
}

addButton = function(row, prod)						//добавление кнопки в конец строки с товаром
{
  td = document.createElement('td');			//создать ячейку для кнопки
  row.appendChild(td);
  td.innerHTML += '<button type = Button id = "srok" >Годен в течение</button>';
  return document.getElementById("srok");
}

getDate = function(date)
{
	if (date == undefined) return "-";
	month = date.getMonth();
	switch (month)
	{
		case 0: {month="января"; break; }
		case 1: {month="февраля"; break; }
		case 2: {month="марта"; break; }
		case 3: {month="апреля"; break; }
		case 4: {month="мая"; break; }
		case 5: {month="июня"; break; }
		case 6: {month="июля"; break; }
		case 7: {month="августа"; break; }
		case 8: {month="сентября"; break; }
		case 9: {month="октября"; break; }
		case 10: {month="ноября"; break; }
		case 11: {month="декабря"; break; }
	}
	strDate = date.getDate()+"-"+month+"-"+date.getFullYear();
	return strDate;
}

good.prototype.showGood = function(row){
  addTd(row, this.name);
  addTd(row, this.type);
  addTd(row, this.price+'$');
  addTd(row, getDate(this.date));
}

goodFood.prototype = good.prototype;   // наследование от товара
//goodFood.prototype = Object.create(good.prototype); 	// наследование от товара

function goodFood(name, type, price, year, month, date, year2, month2, date2){
  good.call(this, name, type, price, year, month, date);
  this.bestBefore = new Date(year2, month2-1, date2);
}

goodFood.prototype.showGoodFood = function(table){
  row = document.createElement("tr");				//создать строку
  good.prototype.showGood.call(this, row);
  addTd(row, getDate(this.bestBefore));

  var buton;
  if (this.bestBefore!=undefined) 					//добавить кнопку, если продовольственный
  		buton = addButton(row, this);

  if (buton != null) {								//вывести время до истечения срока годности возле кнопки
  	str = this.life()+" сут.";
  	buton.addEventListener("click", function(e){
		addTd(e.target.parentNode, str); 			
	});
  }
  table.appendChild(row);
}

goodFood.prototype.life = function(){									// новая функция для всех объектов класса
	return Math.floor((this.bestBefore - this.date)/86400000);							// кол-во суток
}

function shop(name, address, markup, income, goods) {					// конструктор магазина
  form = document.getElementById("shop");
  form.innerHTML += '<div id = "shopInfo'+name+'"></div>';
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
  	return result+'$';
}

shop.prototype.addNumberGoods = function(good, n){						//добавить товары
	for(i=n; i>0; i--) this.goods.push(good);
}

shop.prototype.removeGood = function(n){								//списать товары
	for(i=n; i>0; i--) this.goods.pop();
}

shop.prototype.soldGood = function(n){									//продать товары
	var sum=0;
	for(i=n; i>0; i--) 
	{
		el=this.goods.pop();
		sum+=el.price;
	}
	this.totalCost -= sum;
	this.income += sum;	
}

getNewGood = function(shop){								//нужно переделать!!!
	fname = document.getElementById("fname");
	ftype = document.getElementById("ftype");
	fprice = document.getElementById("fprice");
	fdate = document.getElementById("fdate");
	ffdate = document.getElementById("ffdate");

	if (ffdate.value==undefined) 
	{
		good = new good(fname.value.toString(), ftype.value.toString(), parseInt(fprice.value), 2017, 8, 12);
		shop.goods.push(good);
	}
	else
	{
		food = new goodFood(fname.value.toString(), ftype.value.toString(), parseInt(fprice.value), 2017, 5, 1, 2017, 5, 14);
		shop.goods.push(food);
	}
	
}

addButtons = function(shop, name){
	shopInfo.innerHTML += '<div id="allPrice"><button type = Button id = "butallPrice'+name+'">Общая стоимость товаров</button></div>';
	shopInfo.innerHTML += '<button type = Button id="add'+name+'">Добавить</button>';
	shopInfo.innerHTML += '<button type = Button id="remove'+name+'">Списать</button>';
	shopInfo.innerHTML += '<button type = Button id="sold'+name+'">Продать</button>';
}

listenButtons = function(name, shop)
{
	butPrice = document.getElementById('butallPrice'+name);
	butadd = document.getElementById('add'+name);
	butrem = document.getElementById('remove'+name);
	butsold = document.getElementById('sold'+name);


	butPrice.addEventListener('click', function(e){
		cost = document.createElement("div");
		cost.innerText = shop.totalCost();
		e.target.parentNode.appendChild(cost);
	})

	butrem.addEventListener('click', function(e){
		num = prompt("Сколько товаров списать?");
		shop.removeGood(num);
		document.getElementById("goods").innerHTML = ' ';
		shop.printInfo();
	})

	butsold.addEventListener('click', function(e){
		num = prompt("Сколько товаров продать?");
		shop.soldGood(num);
		document.getElementById("goods").innerHTML = ' ';
		shop.printInfo();
	})

	butadd.addEventListener('click', function(e){
		getNewGood(shop);
		document.getElementById("goods").innerHTML = ' ';
		shop.printInfo();
	})
}

shop.prototype.printInfo = function(){
	shopInfo = document.getElementById("shopInfo"+this.name);
	shopInfo.innerHTML = ' ';
	shopInfo.innerHTML += 'Магазин ' + this.name + '<br>';
	shopInfo.innerHTML += 'Адрес магазина: ' + this.address + '<br>';
	shopInfo.innerHTML += 'Наценка: ' + this.markup + '%' + '<br>';
	shopInfo.innerHTML += 'Доход: ' + this.income + '<br>';

	addButtons(this, this.name);

	shop = document.getElementById("shop");
	shop.innerHTML += '<table id = "goods"><tr><td>Название</td><td>Тип</td><td>Цена</td><td>Дата изготовления</td><td>Годен до</td><tr></table>'	
	table = document.getElementById("goods");
	this.goods.forEach(function(elem){
    	elem.showGoodFood(table);
  })

	listenButtons(this.name, this);
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

table = document.getElementById("goods");

good1 = new good("карандаш", "канцелярия", 12, 2017, 8, 12);
food1 = new goodFood("торт", "выпечка", 68, 2017, 5, 1, 2017, 5, 14);
food2 = new goodFood("творог", "молочные продукты", 34, 2017, 5, 1, 2017, 5, 19);
good2 = new good("стиральный порошок", "бытовая химия", 100, 2016, 12, 23);
food3 = new goodFood("хлеб", "выпечка", 8, 2017, 11, 1, 2017, 11, 3);
good3 = new good("диван", "мебель", 1029, 2017, 3, 17);
food4 = new goodFood("банан", "фрукты", 25, 2017, 10, 2, 2017, 10, 5);

goods = new Array();

goods.push(good1);
goods.push(food1);
goods.push(good2);
goods.push(food2);

var shop1 = new shop("соседи", "ТЦ 'РИГА'", 30, 200, goods);
shop1.printInfo(table);

goodstwo = new Array();

goodstwo.push(good3);
goodstwo.push(food3);
goodstwo.push(food4);

/*var shop2 = new shop("евроопт", "проспект Независимости", 50, 123, goodstwo);
shop2.printInfo(table);

shops = new Array();
shops.push(shop1); shops.push(shop2);

market = new market("комаровский рынок", shops);
market.printAllShops();

shop1.printInfo();
console.log(shop1.totalCost());
shop1.addNumberGoods(food4, 5);
shop1.printInfo();
shop1.removeGood(2);
shop1.printInfo();
shop1.soldGood(2);
shop1.printInfo();

butPr = document.getElementById("butallPrice");

butPr.addEventListener("click", function(){
	document.getElementById("allPrice").innerText = shop1.totalCost();	
})
*/
