const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

// чтобы не переходить Tab на скрытые элементы
document.addEventListener('DOMContentLoaded', () => {
  if (document.documentElement.clientWidth <= 768) {
    navLinks.forEach((link) => {
      link.setAttribute('tabindex', -1);
    });
  }
});

const toggleClickHandler = () => {
  navList.classList.toggle('nav__list--open');
  toggle.classList.toggle('nav__toggle--open');

  if (!navList.classList.contains('nav__list--open')) {
    navLinks.forEach((link) => {
      link.setAttribute('tabindex', -1);
    });
  } else {
    navLinks.forEach((link) => {
      link.setAttribute('tabindex', 0);
    });
  }
};

const closeMenu = (evt) => {
  console.log(evt.target.nodeName.toLowerCase())
  if (evt.target.nodeName.toLowerCase() !== 'a') {
    return;
  }

  if (navList.classList.contains('nav__list--open')) {
    navLinks.forEach((link) => {
      link.setAttribute('tabindex', -1);
    });
    navList.classList.remove('nav__list--open');
  }

  toggle.classList.remove('nav__toggle--open');
};

toggle.addEventListener('click', toggleClickHandler);
navList.addEventListener('click', closeMenu);
