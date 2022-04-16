// @ts-check

import { $ } from './utils.js';

const NAV = 'nav';
const NAV_OPEN = `${NAV}--open`;
const NAV_LINK = `${NAV}__link`;
const BURGER = 'burger';
const BURGER_CLOSE = `${BURGER}--close`;
const OVERLAY = 'overlay';
const OVERLAY_SHOW = `${OVERLAY}--show`;
const nav = $(`.${NAV}`);
const burger = $(`.${BURGER}`);
const overlay = $(`.${OVERLAY}`);

const toggleNav = () => {
  nav.classList.toggle(NAV_OPEN);
  burger.classList.toggle(BURGER_CLOSE);
  overlay.classList.toggle(OVERLAY_SHOW);
};

const closeNav = (event) => {
  const isPressEscape = event.key === 'Escape';
  const isLinkClick = event.target.classList.contains(NAV_LINK);
  const isOverlayClick =
    event.target.classList.contains(OVERLAY_SHOW) &&
    nav.classList.contains(NAV_OPEN);

  if (isPressEscape || isLinkClick || isOverlayClick) {
    nav.classList.remove(NAV_OPEN);
    burger.classList.remove(BURGER_CLOSE);
    overlay.classList.remove(OVERLAY_SHOW);
  }
};

burger.addEventListener('click', toggleNav);
nav.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);
document.addEventListener('keydown', closeNav);
