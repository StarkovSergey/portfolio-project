import { i18Obj } from '../i18Obj.js';

const textElements = document.querySelectorAll('[data-i18n]');
const langSwitcherButtons = document.querySelectorAll('.lang-switcher__button');
const langSwitcherBox = document.querySelector('.lang-switcher');

let language = 'en';

const getTranslate = (lang) => {
  textElements.forEach((element) => {
    element.textContent = i18Obj[lang][element.dataset.i18n];
  });
  language = lang;
};

langSwitcherBox.addEventListener('click', (evt) => {
  if (evt.target.nodeName.toLowerCase() !== 'button') {
    return '';
  }

  langSwitcherButtons.forEach((button) => button.classList.remove('lang-switcher__button--active'));
  evt.target.classList.add('lang-switcher__button--active');
  getTranslate(evt.target.dataset.lang);
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    getTranslate(language);
  }

  document.querySelector(`[data-lang="${language}"]`).classList.add('lang-switcher__button--active');
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('language', language);
});
