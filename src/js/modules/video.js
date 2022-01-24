const media = document.querySelector('.media');
const playCentralButton = document.querySelector('.video__button');
const timeline = document.querySelector('.video__timeline');
const playButton = document.querySelector('.video__play');
const playButtonIcon = playButton.querySelector('use');
const durationElement = document.querySelector('.video__duration');
const volume = document.querySelector('.video__volume');
const volumeToggle = document.querySelector('.video__mute');
const pip = document.querySelector('.video__pip');


let totalDuration;

const toggleMediaStatus = () => {
  if (media.paused) {
    media.play();
    playCentralButton.classList.add('video__button--play-status');
    playButtonIcon.setAttribute('href', 'img/icons/sprite.svg#pause');
  } else {
    media.pause();
    playCentralButton.classList.remove('video__button--play-status');
    playButtonIcon.setAttribute('href', 'img/icons/sprite.svg#play');
  }
};

media.addEventListener('ended', () => {
  playCentralButton.classList.remove('video__button--play-status');
});

const getTime = (duration) => {
  const time = parseInt(duration.toFixed(), 10);
  const minutes = `${parseInt(time / 60, 10)}`.padStart(2, 0);
  const seconds = `${time % 60}`.padStart(2, 0);
  return `${minutes}:${seconds}`;
};

const setInitialDuration = (e) => {
  totalDuration = getTime(e.target.duration);
  durationElement.innerText = `00:00 / ${totalDuration}`;
};

const setDuration = (e) => {
  const currentDuration = getTime(e.target.currentTime);
  const progress = (e.target.currentTime / e.target.duration) * 1000;
  timeline.value = progress;
  durationElement.innerText = `${currentDuration} / ${totalDuration}`;
  timeline.style.backgroundImage = `linear-gradient(to right, var(--special) ${progress / 10}%, var(--basic-white) ${progress / 10}%)`;
};

const skipToPosition = (e) => {
  const position = parseInt(e.target.value, 10) / 1000;
  media.currentTime = media.duration * position;
};

const setVolume = (e) => {
  const position = parseInt(e.target.value, 10) / 100;
  media.volume = position;

  if (media.volume > 0) {
    volumeToggle.querySelector('use').setAttribute('xlink:href', 'img/icons/sprite.svg#volume');
  } else {
    volumeToggle.querySelector('use').setAttribute('xlink:href', 'img/icons/sprite.svg#mute');
  }

  volume.style.backgroundImage = `linear-gradient(to right, var(--special) ${position * 100}%, var(--basic-white) ${position * 100}%)`;
};

const toggleVolume = () => {
  const isMuted = media.volume === 0;
  console.log(media.volume);
  if (isMuted) {
    volumeToggle.querySelector('use').setAttribute('xlink:href', 'img/icons/sprite.svg#volume');
  } else {
    volumeToggle.querySelector('use').setAttribute('xlink:href', 'img/icons/sprite.svg#mute');
  }
  volume.value = isMuted ? 100 : 0;
  volume.dispatchEvent(new Event('input'));
};

playCentralButton.addEventListener('click', toggleMediaStatus);
playButton.addEventListener('click', toggleMediaStatus);
timeline.addEventListener('input', skipToPosition);
media.addEventListener('timeupdate', setDuration);
media.addEventListener('durationchange', setInitialDuration);

volume.addEventListener('input', setVolume);
volumeToggle.addEventListener('click', toggleVolume);

const initPictureInPicture = () => {
  pip.addEventListener('click', () => {
    if (!document.pictureInPictureElement) {
      media.requestPictureInPicture();
    } else {
      document.exitPictureInPicture();
    }
  });
};

if ('pictureInPictureEnabled' in document) {
  initPictureInPicture();
}
