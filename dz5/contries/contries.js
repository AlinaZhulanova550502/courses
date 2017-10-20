copyCont = function(obj2, obj1)
	{				
		obj2.init = obj1.init;
		obj2.cell = obj1.cell;
	}
			
var names = new Array("Австрия", "Бельгия", "Германия", "Италия", "Греция", "Польша","США", "Венгрия", "Мексика", "Швейцария", "Россия", "Беларусь");
var codes = new Array("43", "32", "49", "39", "30", "48", "1", "36", "52", "41", "7", "375");
var popul = new Array(8373, 11358, 81802, 60402, 11306, 38623,
					310241, 10014, 108396, 7783, 143300, 9468);
var imgs = new Array("<img src='avstr.jpg' alt='flag avst'>","<img src='belg.jpg' alt='flag belg'>",
	"<img src='germ.jpg' alt='flag germ'>","<img src='ital.jpg' alt='flag ital'>",
	"<img src='grec.jpg' alt='flag grec'>","<img src='polsha.jpg' alt='flag polsha'>",
	"<img src='sha.jpg' alt='flag sha'>","<img src='vengr.jpg' alt='flag vengr'>",
	"<img src='meks.jpg' alt='flag meks'>","<img src='shw.jpg' alt='flag shw'>",
	"<img src='ross.jpg' alt='flag ross'>","<img src='belarus.jpg' alt='flag bel'>");

var C = names.length;					//кол-во стран

var contryObj = {	
	init: function(name, code, population, flag)		//инициализация полей человека
	{
		this.name = name;
		this.code = code;
		this.population = population;
	},
	cell: function(table, i)
	{
		var line = document.createElement("tr");
		var dn = document.createElement("td");
		var dc = document.createElement("td");
		var dp = document.createElement("td");
		var df = document.createElement("td");
		line.appendChild(dn);
		line.appendChild(dc);
		line.appendChild(dp);
		line.appendChild(df);
		table.appendChild(line);
		dn.innerText = this.name;
		dc.innerText = this.code;
		dp.innerText = this.population;
		df.innerHTML = imgs[i];
	}
}

var contries = new Array(12);

for (var i=0; i<C; i++)
{
	contries[i] = new Object();
	copyCont(contries[i], contryObj);
	contries[i].init(names[i], codes[i], popul[i]);
}

var table = document.getElementById("tabl");
for (var i=0; i<C; i++)
{
	contries[i].cell(table, i);
}