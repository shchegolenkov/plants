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

// Services focus:

/*
let serviceButtons = document.querySelectorAll('.service-button');

for (let i = 0; i < serviceButtons.length; i++) {
  serviceButtons[i].addEventListener('click', serviceFocus);
};

function serviceFocus() {
  if (document.querySelectorAll('.button--activated').length < 2) {
    this.classList.toggle('button--activated');
    document.querySelector('.service-card-garden').classList.toggle('service-card--blurred');
  } else {
    this.classList.remove('button--activated');
  }
}
*/

/*
.service-card--blurred 
.button--activated

если в секции сервис нет ни одной кнопки с классом .button--activated, то удалить у всех карточек класс .service-card--blurred 
*/

document.querySelector('.service-garden-button').addEventListener('click', serviceGardenFocus);

function serviceGardenFocus() {
  if (document.querySelectorAll('.button--activated').length < 2) {
    this.classList.toggle('button--activated');
    document.querySelector('.service-card-planting').classList.toggle('service-card--blurred');
    document.querySelector('.service-card-lawn').classList.toggle('service-card--blurred');
  } else {
    this.classList.remove('button--activated');
  }
}

// Scores:

console.log('Самооценка')
