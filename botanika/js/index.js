'use strict';

const toggleNav = () => {
  const NAV = 'main-nav';
  const NAV_OPEN = `${NAV}--open`;
  const NAV_LIST = 'main-nav__list';
  const NAV_TOGGLE = 'main-nav__toggle';
  const nav = document.querySelector(`.${NAV}`);
  const navList = nav.querySelector(`.${NAV_LIST}`);
  const navToggle = nav.querySelector(`.${NAV_TOGGLE}`);

  const handleNavToggle = () => {
    if (nav.classList.contains(NAV_OPEN)) {
      navList.style.maxHeight = '';
      nav.classList.remove(NAV_OPEN);
    } else {
      navList.style.maxHeight = `${navList.scrollHeight}px`;
      nav.classList.add(NAV_OPEN);
    }
  };

  navToggle.addEventListener('click', handleNavToggle);
};

const runSlider = () => {
  const SLIDER = 'slider';
  const SLIDER_INNER = `${SLIDER}__inner`;
  const SLIDE = `${SLIDER}__item`;
  const CONTROLS = `${SLIDER}__controls`;
  const BTN_PREV = `${SLIDER}__control--prev`;
  const BTN_NEXT = `${SLIDER}__control--next`;
  const slider = document.querySelector(`.${SLIDER}`);
  const sliderInner = slider.querySelector(`.${SLIDER_INNER}`);
  const slides = sliderInner.querySelectorAll(`.${SLIDE}`);
  const controls = slider.querySelector(`.${CONTROLS}`);
  const btnPrev = controls.querySelector(`.${BTN_PREV}`);
  const btnNext = controls.querySelector(`.${BTN_NEXT}`);
  let count = 0;
  let width;

  if (slides.length <= 1) {
    controls.hidden = true;
  }

  const scrollSlider = () => {
    sliderInner.style.transform = `translate(-${count * width}px)`;
  };

  const init = () => {
    width = document.querySelector('.slider').offsetWidth;
    sliderInner.style.width = `${width * slides.length}px`;
    slides.forEach((item) => {
      item.style.width = `${width}px`;
    });
    scrollSlider();
  };

  const blockButtons = () => {
    btnPrev.disabled = count === 0;
    btnNext.disabled = count === slides.length - 1;
  };

  const handleBtnPrev = () => {
    count--;
    scrollSlider();
    blockButtons();
  };

  const handleBtnNext = () => {
    count++;
    scrollSlider();
    blockButtons();
  };

  init();
  window.addEventListener('resize', init);
  btnPrev.addEventListener('click', handleBtnPrev);
  btnNext.addEventListener('click', handleBtnNext);
};

toggleNav();
runSlider();
