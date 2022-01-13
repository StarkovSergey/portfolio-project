const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

const toggleClickHandler = () => {
  navList.classList.toggle('nav__list--open');
  toggle.classList.toggle('nav__toggle--open');
};

const closeMenu = (evt) => {
  console.log(evt.target.nodeName.toLowerCase())
  if (evt.target.nodeName.toLowerCase() !== 'a') {
    return;
  }

  if (navList.classList.contains('nav__list--open')) {
    navList.classList.remove('nav__list--open');
  }

  toggle.classList.remove('nav__toggle--open');
};

toggle.addEventListener('click', toggleClickHandler);
navList.addEventListener('click', closeMenu);
