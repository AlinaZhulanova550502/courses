//создать функцию, которая вернет кол-во минут до конца сегодняшнего дня.

var todayDate = new Date();
var mTD = todayDate.getTime();

var year = String(todayDate.getFullYear());
var month = todayDate.getMonth()+1;
if (month < 10) month = "0" + String(month);
else month = String(month);
var day = todayDate.getDay()+1;
if (day < 10) day = "0" + String(day);
else day = String(day);

var endOfDay = new Date(year+"-"+month+"-"+day+"/23:59:00");
var mED = endOfDay.getTime();
alert("To the end of day: " + parseInt((mED-mTD)/1000/60+1) + " minuts");	//минуты