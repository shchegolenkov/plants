// Opening and closing menu by menu button clicking:

const menuButton = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list')

menuButton.addEventListener('click', mobileMenuOpenClose);

function mobileMenuOpenClose() {
  menuButton.classList.toggle('mobile-menu--active');
  navList.classList.toggle('nav-list--active');
};

// Closing menu by link clicking:

let navLinks = document.querySelectorAll('.nav-list__link');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', mobileMenuClose);
};

function mobileMenuClose() {
  menuButton.classList.remove('mobile-menu--active');
  navList.classList.remove('nav-list--active');
};

// Closing menu by outside clicking:

const header = document.querySelector('.header');

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(header);

  if (!withinBoundaries) {
    menuButton.classList.remove('mobile-menu--active');
    navList.classList.remove('nav-list--active');
  }
});

// Scores:

console.log('Самооценка 75/75 баллов\nВёрстка соответствует макету. Ширина экрана 768px +24\nВёрстка соответствует макету. Ширина экрана 380px +24\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22')
