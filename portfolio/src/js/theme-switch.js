import { $ } from './utils.js';

const THEME_SWITCH = 'theme-switch';
const THEME_LIGHT = 'theme-light';
const rootElem = document.documentElement;
const themeSwitch = $(`.${THEME_SWITCH}`);

const switchTheme = () => rootElem.classList.toggle(THEME_LIGHT);

themeSwitch.addEventListener('click', switchTheme);
