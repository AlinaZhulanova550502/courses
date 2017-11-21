var xhr = new XMLHttpRequest();
 xhr.open('GET', 'cccsssvvv.csv', true);
 xhr.onload = function(){
 	var data = this.responseText;
 	console.log(data);
 	
 	arr = data.split(/\r?\n|\r/);
 	data = arr.map(function(el){
 		obj = new Object();
 		fields = el.split(', ');
 		obj = {
 			name: fields[0].toString(),
 			price: fields[1],
 			country: fields[2],
 		}
 		return obj;
 	})

 	list = document.getElementById("list");
 	data.forEach(function(elem, num){
 	list.innerHTML += "<li>";
 	for (var s in elem){list.innerHTML += elem[s] +"<br>";}
 	list.innerHTML += "</li>"
 	list.innerHTML += "<form id='form"+num+"'></form>";
 	form = document.getElementById("form"+num.toString());
 	form.innerHTML += "<button type='Button' id='plus" +num.toString()+"'>+</button>";
 	form.innerHTML += "<div id='number" +num.toString()+"'>0</div>";
 	form.innerHTML += "<button type='Button' id='minus" +num.toString()+"'>-</button>";
 	form.innerHTML += "<button type='Button' id='basket" +num.toString()+"'>to basket</button>";
});
 	count = document.getElementById("count");
 	sum = document.getElementById("sum");

 	data.forEach(function(elem, num){
 		console.log(num);
 		plus = document.getElementById('plus'+num.toString());
 		minus =  document.getElementById('minus'+num.toString());
 		var number = document.getElementById('number'+num.toString());
 		basket = document.getElementById('basket'+num.toString());

 		plus.addEventListener('click', function(){
 			number.innerText=parseInt(number.outerText)+1;
 		})

 		minus.addEventListener('click', function(){
 			number.innerText=parseInt(number.outerText)-1;
 		})

 		basket.addEventListener('click', function(){
 			count.innerText = parseInt(count.outerText) + parseInt(number.outerText);
 			var price = elem.price;
 			var amo=Number(number.innerText);
 			sum.innerText = Number(sum.outerText)+(price*amo);
 		})
 	})
 }
 xhr.send(null);

