// @ts-check

const $ = (selector, parent = document) => parent.querySelector(selector);

const getBrowserScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

export { $, getBrowserScrollbarWidth };
