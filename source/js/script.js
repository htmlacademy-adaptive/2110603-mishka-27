//Выпадающее мобильное меню

let navMain = document.querySelector('.main-nav');

let navToggle = document.querySelector('.menu-toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('menu-toggle--nojs');

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

//Модальное окно

let modal = document.querySelector('.modal-container');
let cartButton = document.querySelector('.product__button, .promo-product__button');
let modalButton = document.querySelector('.modal__button');

cartButton.addEventListener('click', function () {
  modal.classList.remove('modal-container--closed');
});

modalButton.addEventListener('click', function() {
  modal.classList.add('modal-container--closed');
});
