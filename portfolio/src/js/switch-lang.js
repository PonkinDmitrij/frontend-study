import { $ } from './utils.js';
import { translate } from './translate.js';

const SWITCH_LANG = 'switch-lang';
const BTN_ACTIVE = `${SWITCH_LANG}__btn--active`;
const TEXT_NODES = 'data-i18n';
const switchLang = $(`.${SWITCH_LANG}`);
const textNodes = document.querySelectorAll(`[${TEXT_NODES}]`);
const rootElement = document.documentElement;

const toggleClass = (elem, className) => {
  const current = $(`.${className}`);
  current.classList.remove(className);
  elem.classList.add(className);
};

const updateRootAttrLang = (lang) => rootElement.setAttribute('lang', lang);

const updateActiveBtn = (lang) => {
  const btn = $(`[data-lang=${lang}]`, switchLang);
  if (btn.classList.contains(BTN_ACTIVE)) {
    return;
  }
  toggleClass(btn, BTN_ACTIVE);
};

const getTranslate = (lang) => {
  textNodes.forEach((item) => {
    item.textContent = translate[lang][item.dataset.i18n];
  });
  updateRootAttrLang(lang);
  updateActiveBtn(lang);
};

const handleSwitchLang = (event) => {
  const isTagButton = event.target.tagName === 'BUTTON';
  const isButtonActive = event.target.classList.contains(BTN_ACTIVE);
  if (isTagButton && !isButtonActive) {
    getTranslate(event.target.dataset.lang);
  }
};

switchLang.addEventListener('click', handleSwitchLang);

export { getTranslate };
