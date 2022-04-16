// @ts-check

const $ = (selector, parent = document) => parent.querySelector(selector);

const getBrowserScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

const toggleClass = (elem, className) => {
  const current = $(`.${className}`);
  current.classList.remove(className);
  elem.classList.add(className);
};

export { $, getBrowserScrollbarWidth, toggleClass };
