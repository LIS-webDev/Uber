'use strict';
window.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.menu');
    let menuItem = document.querySelectorAll('.menu__item');
    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger_active');
        menu.classList.toggle('menu__active');
    })
    menuItem.forEach(item => {
        item.addEventListener("click", function() {
            burger.classList.toggle('header__burger_active');
            menu.classList.toggle('menu__active');
        });
    })
})
