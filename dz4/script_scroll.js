var timeOut;
  function down() {
    if (document.body.scrollBottom!=0 || document.documentElement.scrollBottom!=0){
    window.scrollBy(0, 1);
    timeOut=setTimeout('down()', 30);
    }
  else clearTimeout(timeOut);
}
