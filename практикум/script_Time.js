var dat = new Date();
var time = document.getElementById("Time");
var date = document.getElementById("Date");

addZero = function(obj){
	if (obj<10) obj='0'+obj.toString();
	else obj=obj.toString();
	return obj;
}

clock = function()
{
	hours = dat.getHours();
	hours = addZero(hours);
	minutes = dat.getMinutes();
	minutes = addZero(minutes);
	strTime = hours + ":" + minutes;
	time.innerText=strTime;
}
setInterval(clock, 1000);
dateClock = function()
{
	nday = dat.getDate();
	nday = addZero(nday);

	month = dat.getMonth();
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

	day = dat.getDay();
	switch (day)
	{
		case 1: { day="понедельник"; break; }
		case 2: { day="вторник"; break; }
		case 3: { day="среда"; break; }
		case 4: { day="четверг"; break; }
		case 5: { day="пятница"; break; }
		case 6: { day="суббота"; break; }
		case 7: { day="воскресенье"; break; }
	}

	strDate = nday+"-"+month+"-"+dat.getFullYear().toString()+", "+day;
	date.innerText=strDate;
}
setInterval(dateClock, 1000);