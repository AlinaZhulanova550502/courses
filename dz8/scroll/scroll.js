var elem = document.getElementById("icon");

console.log(hr.offsetTop);

    var avatarSourceTop = elem.getBoundingClientRect().top + window.pageYOffset; //расстояние до начала иконки+текущая прокрутка

    window.onscroll = function(e) {	//при прокрутке
        if (elem.classList.contains('fixed') && window.pageYOffset < avatarSourceTop) //чтобы было норм при обратной прокрутке
        	elem.classList.remove('fixed');
     	else if (window.pageYOffset > avatarSourceTop) 
       		elem.classList.add('fixed');
    };