const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

const toggleClickHandler = () => {
  navList.classList.toggle('nav__list--open');
  toggle.classList.toggle('nav__toggle--open');

  if (navList.classList.contains('nav__list--open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const closeMenu = (evt) => {
  if (evt.target.nodeName.toLowerCase() !== 'a') {
    return;
  }

  document.body.style.overflow = 'auto';

  if (navList.classList.contains('nav__list--open')) {
    navList.classList.remove('nav__list--open');
  }

  toggle.classList.remove('nav__toggle--open');
};

toggle.addEventListener('click', toggleClickHandler);
navList.addEventListener('click', closeMenu);
