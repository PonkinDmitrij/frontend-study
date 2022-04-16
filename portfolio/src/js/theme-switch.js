import { $ } from './utils.js';
import { THEME_LIGHT, ROOT_ELEMENT } from './constants.js';

const THEME_SWITCH = 'theme-switch';
const themeSwitch = $(`.${THEME_SWITCH}`);

const switchTheme = () => ROOT_ELEMENT.classList.toggle(THEME_LIGHT);

themeSwitch.addEventListener('click', switchTheme);
