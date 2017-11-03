init = function(obj, name, img, price, cat)		//инициализация товара
{
	obj.name = name;
	obj.img = img; 
	obj.price = price;
	obj.cat = cat;
}

chooseList = function(goods, i, bigdiv){				//показать товары на одной странице
	showGoods(goods.slice((i-1)*9, i*9), bigdiv);
}

showEvery = function(goods, bigdiv)
{
	goods.forEach(function(item){					//отобразить каждый подходящий
	var itemDiv = document.createElement("div");
	itemDiv.classList.add("item");
	itemDiv.innerHTML = item.img;
	var text = document.createElement("div");
	text.innerText = item.name+', ' + item.price+'$';
	itemDiv.appendChild(text);
	bigdiv.appendChild(itemDiv);
	});
}

showGoods = function(goods, bigdiv, category)
{
	bigdiv.innerHTML='';							//очистить место товаров на странице
	if(category == undefined) choosed=goods;
	else
	{
		var choosed = goods.filter(function(elem)			//выбрать из всех по категории
		{
			if (elem.cat==category) return true;
		})
	}
	showEvery(choosed, bigdiv);
}

takeCategories = function(goods)
{
	var categories = new Array();					// массив товаров с категориями
	categories = goods.filter(function(elem, i){
		if (elem.cat!=undefined) return true;
	})

	var obj = {};									//чтобы оставить уникальные категории
	for (var i = 0; i < categories.length; i++){
    	var str = categories[i].cat;
    	obj[str] = true; 				// запомнить строку в виде свойства объекта
 	}
	categories = Object.keys(obj);
	return categories;
}

priceRange = function(goods, bigdiv, min, max)
{
	bigdiv.innerHTML='';
	if (max=='') flag=1;
	else if (min=='') flag=2;
	else flag=3;
	switch (flag)
	{
		case 1: {min=parseInt(min); choosed = goods.filter(function(elem){if ((min!=undefined)&&(elem.price>=min)) return true;}); break;}
		case 2: {max=parseInt(max); choosed = goods.filter(function(elem){if ((max!=undefined)&&(elem.price<=max)) return true;}); break;}
		case 3: {min=parseInt(min); max=parseInt(max); choosed = goods.filter(function(elem){if ((elem.price>=min)&&(elem.price<=max)) return true;});break;}
	}
	showEvery(choosed, bigdiv);
}

searchName = function(goods, bigdiv, name)
{
	if (name!='')
	{
		bigdiv.innerHTML='';
		choosed = goods.filter(function(elem){if ((elem.name).indexOf(name)!=(-1)) return true;});
	}
	showEvery(choosed, bigdiv);
}

menuCategories = function(categories, bs)
{
	categories.forEach(function(category){
		opt = document.createElement("option");
		opt.value = category;
		opt.innerText = category;
		bs.appendChild(opt);
	})
}

var goods = new Array();

goods[0] = new Object();							
init(goods[0],"Модель GM5S", "<img src = '1.png'>", 353, "красивые");

goods[1] = new Object();							
init(goods[1], "Модель KIhd5", "<img src = '2.png'>", 764, "дорогие"); 

goods[2] = new Object();							
init(goods[2], "Модель fjUs", "<img src = '3.png'>", 643, "красивые"); 

goods[3] = new Object();							
init(goods[3], "Модель YTgsS", "<img src = '4.png'>", 592, "красивые"); 

goods[4] = new Object();							
init(goods[4], "Модель Iks", "<img src = '5.png'>", 194, "дешманские"); 

goods[5] = new Object();							
init(goods[5], "Модель Rose", "<img src = '6.png'>", 2314, "дорогие"); 

goods[6] = new Object();							
init(goods[6], "Модель Ivy", "<img src = '7.png'>", 843, "дорогие"); 

goods[7] = new Object();							
init(goods[7], "Модель Laf", "<img src = '8.png'>", 200); 

goods[8] = new Object();							
init(goods[8],"Модель GM5S", "<img src = '9.png'>", 353, "красивые");

goods[9] = new Object();							
init(goods[9], "Модель KIhd5", "<img src = '10.png'>", 764, "дорогие"); 

goods[10] = new Object();							
init(goods[10], "Модель fjUs", "<img src = '11.png'>", 643, "красивые"); 

goods[11] = new Object();							
init(goods[11], "Модель YTgsS", "<img src = '12.png'>", 592, "красивые"); 

goods[12] = new Object();							
init(goods[12], "Модель Iks", "<img src = '13.png'>", 194, "дешманские"); 

goods[13] = new Object();							
init(goods[13], "Модель Rose", "<img src = '14.png'>", 2314, "дорогие"); 

goods[14] = new Object();							
init(goods[14], "Модель Ivy", "<img src = '15.png'>", 843, "дорогие"); 

goods[15] = new Object();							
init(goods[15], "Модель Laf", "<img src = '16.png'>", 200); 

goods[16] = new Object();							
init(goods[16],"Модель GM5S", "<img src = '17.png'>", 353, "красивые");

goods[17] = new Object();							
init(goods[17], "Модель KIhd5", "<img src = '18.png'>", 764, "дорогие"); 

goods[18] = new Object();							
init(goods[18], "Модель fjUs", "<img src = '19.png'>", 643, "красивые"); 

goods[19] = new Object();							
init(goods[19], "Модель YTgsS", "<img src = '20.png'>", 592, "красивые"); 

goods[20] = new Object();							
init(goods[20], "Модель Iks", "<img src = '21.png'>", 194, "дешманские"); 

goods[21] = new Object();							
init(goods[21], "Модель Rose", "<img src = '22.png'>", 2314, "дорогие"); 

goods[22] = new Object();							
init(goods[22], "Модель Ivy", "<img src = '23.png'>", 843, "дорогие"); 

goods[23] = new Object();							
init(goods[23], "Модель Laf", "<img src = '24.png'>", 200); 

goods[24] = new Object();							
init(goods[24],"Модель GM5S", "<img src = '25.png'>", 353, "красивые");

goods[25] = new Object();							
init(goods[25], "Модель KIhd5", "<img src = '26.png'>", 764, "дорогие"); 

goods[26] = new Object();							
init(goods[26], "Модель fjUs", "<img src = '27.png'>", 643, "красивые"); 

goods[27] = new Object();							
init(goods[27], "Модель YTgsS", "<img src = '28.png'>", 592, "красивые"); 

goods[28] = new Object();							
init(goods[28], "Модель Iks", "<img src = '29.png'>", 194, "дешманские"); 

goods[29] = new Object();							
init(goods[29], "Модель Rose", "<img src = '30.png'>", 2314, "дорогие"); 

goods[30] = new Object();							
init(goods[30], "Модель Ivy", "<img src = '31.png'>", 843, "дорогие"); 

goods[31] = new Object();							
init(goods[31], "Модель Laf", "<img src = '32.png'>", 200); 

goods[32] = new Object();							
init(goods[32],"Модель GM5S", "<img src = '33.png'>", 353, "красивые");

goods[33] = new Object();							
init(goods[33], "Модель KIhd5", "<img src = '34.png'>", 764, "дорогие"); 

goods[34] = new Object();							
init(goods[34], "Модель fjUs", "<img src = '35.png'>", 643, "красивые"); 

goods[35] = new Object();							
init(goods[35], "Модель YTgsS", "<img src = '36.png'>", 592, "красивые"); 

goods[36] = new Object();							
init(goods[36], "Модель Iks", "<img src = '37.png'>", 36, "дешманские"); 

bs = document.getElementById("b");
menuCategories(takeCategories(goods), bs);
bigdiv = document.getElementById("bigdiv");

showGoods(goods.slice(0, 9), bigdiv);

bs.addEventListener('click', function(e)
{
	takeCategories(goods).forEach(function(category){
		if (e.target.value=='all') showGoods(goods, bigdiv);
		else if(e.target.value==category) showGoods(goods, bigdiv, category);
	})
});

fromWin = document.getElementById("from");															//поиск по цене
toWin = document.getElementById("to");

fromWin.addEventListener('input', function(){fw = fromWin.value;})
toWin.addEventListener('input', function(){tw = toWin.value;})

fromWin.addEventListener('blur', function(){priceRange(goods, bigdiv, fw, toWin.value)});
toWin.addEventListener('blur', function(){priceRange(goods, bigdiv, fromWin.value, tw)});


butS = document.getElementById("search");											//поиск по названию
textS = document.getElementById("name");


textS.addEventListener('input', function(){ts = textS.value;})
butS.addEventListener('click', function(){
	searchName(goods, bigdiv, textS.value);
})


first = document.getElementById("first");											//пагинация
last = document.getElementById("last");
current = document.getElementById("current");
left = document.getElementById("left");
right = document.getElementById("right");

first.innerText = "1";
console.log(goods.length);
last.innerText = (Math.ceil(parseInt((goods.length)/9))).toString();
left.innerText="2";
current.innerText="3";
right.innerText="4";

if(right.outerText==last.outerText){right.style.display = "none";}

first.addEventListener("click", function(){chooseList(goods, parseInt(this.outerText), bigdiv);})
left.addEventListener("click", function(){chooseList(goods, parseInt(this.outerText), bigdiv);})
current.addEventListener("click", function(){chooseList(goods, parseInt(this.outerText), bigdiv);})
right.addEventListener("click", function(){chooseList(goods, parseInt(this.outerText), bigdiv);})
last.addEventListener("click", function(){chooseList(goods, parseInt(this.outerText), bigdiv);})