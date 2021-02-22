import Fonts from 'THEME/fonts';

export const loadFonts = () => {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.innerHTML = Fonts;
  head.appendChild(style);
};
