import { i18Obj } from '../i18Obj.js';

const textElements = document.querySelectorAll('[data-i18n]');
const langSwitcherButtons = document.querySelectorAll('.lang-switcher__button');
const langSwitcherBox = document.querySelector('.lang-switcher');

const getTranslate = (lang) => {
  textElements.forEach((element) => {
    element.textContent = i18Obj[lang][element.dataset.i18n];
  });
};

langSwitcherBox.addEventListener('click', (evt) => {
  if (evt.target.nodeName.toLowerCase() !== 'button') {
    return '';
  }

  langSwitcherButtons.forEach((button) => button.classList.remove('lang-switcher__button--active'));
  evt.target.classList.add('lang-switcher__button--active');
  getTranslate(evt.target.dataset.lang);
});
