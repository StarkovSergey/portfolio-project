const themeButton = document.querySelector('.hero__theme-button');

themeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('page--light-theme');
});
