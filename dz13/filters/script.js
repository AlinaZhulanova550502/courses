butOne = document.getElementById("1");
butTwo = document.getElementById("2");
butThree = document.getElementById("3");

can = document.getElementById("can");
var context = can.getContext("2d");

img=document.getElementById("pict");
img.onload = function(){
	context.drawImage(img, 0, 0);
}

var cb = function(){
	pxCard = context.getImageData(0, 0, 667, 667);
	for(i=0; i<pxCard.data.length; i=i+4)
	{
		var nc = (pxCard.data[i]+pxCard.data[i+1]+pxCard.data[i+2])/3;
		pxCard.data[i]=pxCard.data[i+1]=pxCard.data[i+2]=nc;
	}
	context.putImageData(pxCard, 0, 0);
	return 1;
}

var neg = function(){
	pxCard = context.getImageData(0, 0, 667, 667);
	for(i=0; i<pxCard.data.length; i+=4)
	{
		pxCard.data[i]=255-pxCard.data[i];
		pxCard.data[i+1]=255-pxCard.data[i+1];
		pxCard.data[i+2]=255-pxCard.data[i+2];
	}
	context.putImageData(pxCard, 0, 0);
	return 1;
}

var my = function(){
	pxCard = context.getImageData(0, 0, 667, 667);
	for(i=0; i<pxCard.data.length; i+=4)
	{
		pxCard.data[i]=30+pxCard.data[i];
		pxCard.data[i+1]=20+pxCard.data[i+1];
		pxCard.data[i+2]=100+pxCard.data[i+2];
	}
	context.putImageData(pxCard, 0, 0);
	return 1;
}

butOne.addEventListener("click", cb);
butTwo.addEventListener("click", neg);
butThree.addEventListener("click", my);
