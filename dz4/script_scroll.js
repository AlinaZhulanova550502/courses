var timeOut;
  function down() {
    if (document.body.scrollBottom!=0 || document.documentElement.scrollBottom!=0){
    window.scrollBy(0,20);
    timeOut=setTimeout('down()',10);
    }
  else clearTimeout(timeOut);
}
