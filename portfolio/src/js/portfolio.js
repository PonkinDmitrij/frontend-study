import { $, toggleClass } from './utils.js';

const PORTFOLIO = 'portfolio';
const BUTTONS_WRAP = `${PORTFOLIO}__buttons`;
const BTN_ACTIVE = `${PORTFOLIO}__btn-active`;
const IMG = `${PORTFOLIO}__img`;

const buttonsWrap = $(`.${BUTTONS_WRAP}`);
const images = document.querySelectorAll(`.${IMG}`);

const handleChangeImages = (event) => {
  const isTagButton = event.target.tagName === 'BUTTON';
  const isButtonActive = event.target.classList.contains(BTN_ACTIVE);
  if (isTagButton && !isButtonActive) {
    toggleClass(event.target, BTN_ACTIVE);
    images.forEach((img, i) => {
      img.src = `./img/portfolio/${event.target.dataset.season}/${i + 1}.jpg`;
    });
  }
};

buttonsWrap.addEventListener('click', handleChangeImages);
