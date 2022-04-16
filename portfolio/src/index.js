// @ts-check

import './scss/style.scss';
import './js/nav.js';
import './js/portfolio.js';
import { getTranslate } from './js/switch-lang.js';
import './js/theme-switch.js';

const rootElement = document.documentElement;

const getCurrentTheme = () => {
  return rootElement.classList.contains('theme-light') ? 'light' : 'dark';
};

const setLocalStorage = () => {
  const lang = rootElement.getAttribute('lang');
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
    rootElement.classList.add('theme-light');
  }
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
