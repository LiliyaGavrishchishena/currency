'use strict';

const burger = document.querySelector('.burger'),
  nav = document.querySelector('.menu__list'),
  links = document.querySelectorAll('.menu__item');

function slider() {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');

    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade .5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
  });
}

slider();

const form = document.getElementById('menu__list');
let btns = form.getElementsByClassName('menu__link');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('menu__link__active');
    current[0].className = current[0].className.replace(
      ' menu__link__active',
      '',
    );
    this.className += ' menu__link__active';
  });
}
