const hideScrollBar = document.querySelector('body');
const hamburger = document.querySelector('.hamburger-btn');
const headerTwo = document.querySelector('.header-two');

hamburger.addEventListener('click', () => {
  headerTwo.classList.toggle('open');
  hideScrollBar.classList.toggle('hide-scrollbar');
});

const closeMenu = document.querySelector('.close-btn');
closeMenu.addEventListener('click', () => {
    headerTwo.classList.remove('open');
    hideScrollBar.classList.remove('hide-scrollbar');
  });
