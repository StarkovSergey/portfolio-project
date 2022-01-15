const themeButton = document.querySelector('.hero__theme-button');

let themeStorage = 'dark';

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme')) {
    themeStorage = localStorage.getItem('theme');
    themeStorage === 'light'
      ? document.documentElement.classList.add('page--light-theme')
      : document.documentElement.classList.remove('page--light-theme');
  }
});

themeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('page--light-theme');
  themeStorage = document.documentElement.classList.contains('page--light-theme') ? 'light' : 'dark';
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('theme', themeStorage);
});
