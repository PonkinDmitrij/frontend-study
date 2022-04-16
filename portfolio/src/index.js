// @ts-check

import './scss/style.scss';
import './js/nav.js';
import './js/portfolio.js';
import { getTranslate } from './js/switch-lang.js';
import './js/theme-switch.js';
import { THEME_LIGHT, ROOT_ELEMENT } from './js/constants.js';

const getCurrentTheme = () => {
  return ROOT_ELEMENT.classList.contains(THEME_LIGHT) ? 'light' : 'dark';
};

const setLocalStorage = () => {
  const lang = ROOT_ELEMENT.getAttribute('lang');
  const theme = getCurrentTheme();

  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
};

const getLocalStorage = () => {
  const lang = localStorage.getItem('lang');
  const theme = localStorage.getItem('theme');

  if (lang) {
    getTranslate(lang);
  }

  if (theme && theme === 'light') {
    ROOT_ELEMENT.classList.add('theme-light');
  }
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
