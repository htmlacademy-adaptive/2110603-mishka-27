let navMain = document.querySelector('.main-nav');

let navToggle = document.querySelector('.menu-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('menu-toggle--close')) {
        navToggle.classList.remove('menu-toggle--close');
    }else{
        navToggle.classList.add('menu-toggle--close')
    }
});

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--active')) {
    navMain.classList.remove('main-nav--active');
  } else {
    navMain.classList.add('main-nav--active');
  }
});
