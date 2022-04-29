const THEME_DARK = 'theme-dark';
const COLOR_THEME = 'color-theme';
const THEME_SWITCHER = 'theme-switcher';
const rootElement = document.documentElement;
const themeSwitcher = document.querySelector(`.${THEME_SWITCHER}`);

const switchTheme = () => rootElement.classList.toggle(THEME_DARK);

const getCurrentTheme = () => {
  return rootElement.classList.contains(THEME_DARK) ? 'dark' : 'light';
};

const saveTheme = () => {
  localStorage.setItem(COLOR_THEME, getCurrentTheme());
};

const getSavedTheme = () => {
  return localStorage.getItem(COLOR_THEME);
};

const setTheme = () => {
  const theme = getSavedTheme();

  if (theme && theme === 'dark') {
    rootElement.classList.add(THEME_DARK);
  }
};

themeSwitcher.addEventListener('click', switchTheme);
window.addEventListener('beforeunload', saveTheme);
window.addEventListener('load', setTheme);
