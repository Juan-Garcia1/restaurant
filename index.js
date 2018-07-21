var sideNav = document.querySelector('.main-nav--side-nav');
var btns = document.querySelectorAll('.button');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {

        if(btn.classList.contains('main-nav__close-nav') || btn.classList.contains('main-nav__open-nav')) 
        {
            sideNav.classList.toggle('toggle-menu');
        }

    })
})