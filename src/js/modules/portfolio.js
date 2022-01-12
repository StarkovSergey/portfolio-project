const buttonsList = document.querySelector('.buttons-list');
const portfolioButton = document.querySelectorAll('.buttons-list__button');
const portfolioImages = document.querySelectorAll('.portfolio__item img');

buttonsList.addEventListener('click', (evt) => {
  if (evt.target.nodeName.toLowerCase() !== 'button') {
    return;
  }

  portfolioButton.forEach((button) => button.classList.remove('buttons-list__button--active'));
  evt.target.classList.add('buttons-list__button--active');

  portfolioImages.forEach((image, index) => {
    image.src = `img/portfolio/${evt.target.dataset.season}/${index + 1}.jpg`;
  });
});
