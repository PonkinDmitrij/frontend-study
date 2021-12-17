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

toggleNav();
