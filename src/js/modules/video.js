const media = document.querySelector('.media');
const playButton = document.querySelector('.video__button');

const toggleMediaStatus = () => {
  if (media.paused) {
    media.play();
    playButton.classList.add('video__button--play-status');
  } else {
    media.pause();
    playButton.classList.remove('video__button--play-status');
  }
};

playButton.addEventListener('click', toggleMediaStatus);
media.addEventListener('ended', () => {
  playButton.classList.remove('video__button--play-status');
});
