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

// PRICES ACCORDION:

// Order button

const orderButtons = document.querySelectorAll('.prices-accourdion__order-button');

for (let orderButton of orderButtons) {
  orderButton.addEventListener('click', scrollToContacts);
}

function scrollToContacts() {
document.querySelector('.contacts-title').scrollIntoView({
        behavior: 'smooth'
    });
};

// Open accordions

const basicAccourdionDescription = document.querySelector('.basic-prices-accourdion__description');
const basicAccourdionOpenButton = document.querySelector('.basic-prices-accourdion__button-down');
const standardAccourdionDescription = document.querySelector('.standard-prices-accourdion__description');
const standardAccourdionOpenButton = document.querySelector('.standard-prices-accourdion__button-down');
const proAccourdionDescription = document.querySelector('.pro-prices-accourdion__description');
const proAccourdionOpenButton = document.querySelector('.pro-prices-accourdion__button-down');

basicAccourdionOpenButton.addEventListener('click', basicAccourdionOpen);

standardAccourdionOpenButton.addEventListener('click', standardAccourdionOpen);

proAccourdionOpenButton.addEventListener('click', proAccourdionOpen);

function basicAccourdionOpen() {
  basicAccourdionDescription.classList.add('prices-accourdion__description--active');
  standardAccourdionDescription.classList.remove('prices-accourdion__description--active');
  proAccourdionDescription.classList.remove('prices-accourdion__description--active');
};

function standardAccourdionOpen() {
  standardAccourdionDescription.classList.add('prices-accourdion__description--active');
  basicAccourdionDescription.classList.remove('prices-accourdion__description--active');
  proAccourdionDescription.classList.remove('prices-accourdion__description--active');
};

function proAccourdionOpen() {
  proAccourdionDescription.classList.add('prices-accourdion__description--active');
  basicAccourdionDescription.classList.remove('prices-accourdion__description--active');
  standardAccourdionDescription.classList.remove('prices-accourdion__description--active');
};

// Close accordions

const basicAccourdionCloseButton = document.querySelector('.basic-prices-accourdion__button-up');

const standardAccourdionCloseButton = document.querySelector('.standard-prices-accourdion__button-up');

const proAccourdionCloseButton = document.querySelector('.pro-prices-accourdion__button-up');

basicAccourdionCloseButton.addEventListener('click', basicAccourdionClose);

standardAccourdionCloseButton.addEventListener('click', standardAccourdionClose);

proAccourdionCloseButton.addEventListener('click', proAccourdionClose);

function basicAccourdionClose() {
  basicAccourdionDescription.classList.remove('prices-accourdion__description--active');
};

function standardAccourdionClose() {
  standardAccourdionDescription.classList.remove('prices-accourdion__description--active');
};

function proAccourdionClose() {
  proAccourdionDescription.classList.remove('prices-accourdion__description--active');
};

// SCORES:

console.log('Самооценка')
