can = document.getElementById("can");
var context = can.getContext("2d");

img=document.getElementById("pict");

context.drawImage(img, 0, 0);

var cb = function(){
pxCard = context.getImageData(0, 0, 667, 667);
console.log(pxCard);
for(i=0; i<pxCard.length; i=i+4)
{
	var nc = (pxCard.data[i]+pxCard.data[i+1]+pxCard.data[i+2])/3;
	pxCard.data[i]=nc;
	pxCard.data[i+1]=nc;
	pxCard.data[i+2]=nc;
}
console.log(pxCard);
context.putImageData(pxCard, 0, 0);
}

butOne = document.getElementById("1");
butOne.addEventListener("click", cb);