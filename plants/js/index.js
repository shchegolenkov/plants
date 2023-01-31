// Opening and closing menu by menu button clicking:

const menuButton = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");

menuButton.addEventListener("click", mobileMenuOpenClose);

function mobileMenuOpenClose() {
  menuButton.classList.toggle("mobile-menu--active");
  navList.classList.toggle("nav-list--active");
}

// Closing menu by link clicking:

let navLinks = document.querySelectorAll(".nav-list__link");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", mobileMenuClose);
}

function mobileMenuClose() {
  menuButton.classList.remove("mobile-menu--active");
  navList.classList.remove("nav-list--active");
}

// Closing menu by outside clicking:

const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(header);

  if (!withinBoundaries) {
    menuButton.classList.remove("mobile-menu--active");
    navList.classList.remove("nav-list--active");
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

const serviceGardenButton = document.querySelector(".service-garden-button");
const serviceLawnButton = document.querySelector(".service-lawn-button");
const servicePlantingButton = document.querySelector(
  ".service-planting-button"
);
const serviceButtons = document.querySelectorAll(".service-button");

const serviceCards = document.querySelectorAll(".service-card");
const serviceCardsGarden = document.querySelectorAll(".service-card-garden");
const serviceCardsPlanting = document.querySelectorAll(
  ".service-card-planting"
);
const serviceCardLawn = document.querySelector(".service-card-lawn");

serviceGardenButton.addEventListener("click", serviceGardenFocus);
serviceLawnButton.addEventListener("click", serviceLawnFocus);
servicePlantingButton.addEventListener("click", servicePlantingFocus);

function serviceGardenFocus() {
  if (document.querySelectorAll(".button--activated").length < 2) {
    this.classList.toggle("button--activated");
    for (let serviceCardGarden of serviceCardsGarden) {
      serviceCardGarden.classList.toggle("service-card--blurred");
    }
    for (let serviceCardPlanting of serviceCardsPlanting) {
      serviceCardPlanting.classList.toggle("service-card--blurred");
    }
    serviceCardLawn.classList.toggle("service-card--blurred");
  } else {
    this.classList.remove("button--activated");
  }
}

function serviceLawnFocus() {
  if (document.querySelectorAll(".button--activated").length < 2) {
    this.classList.toggle("button--activated");
    document
      .querySelector(".service-card-lawn")
      .classList.remove("service-card--blurred");
  } else {
    this.classList.remove("button--activated");
  }
}

function servicePlantingFocus() {
  if (document.querySelectorAll(".button--activated").length < 2) {
    this.classList.toggle("button--activated");
  } else {
    this.classList.remove("button--activated");
  }
}

// PRICES ACCORDION:

// Order button

const orderButtons = document.querySelectorAll(
  ".prices-accourdion__order-button"
);

for (let orderButton of orderButtons) {
  orderButton.addEventListener("click", scrollToContacts);
}

function scrollToContacts() {
  document.querySelector(".contacts-title").scrollIntoView({
    behavior: "smooth",
  });
}

// Open accordions

const basicAccourdionDescription = document.querySelector(
  ".basic-prices-accourdion__description"
);
const basicAccourdionOpenButton = document.querySelector(
  ".basic-prices-accourdion__button-down"
);
const standardAccourdionDescription = document.querySelector(
  ".standard-prices-accourdion__description"
);
const standardAccourdionOpenButton = document.querySelector(
  ".standard-prices-accourdion__button-down"
);
const proAccourdionDescription = document.querySelector(
  ".pro-prices-accourdion__description"
);
const proAccourdionOpenButton = document.querySelector(
  ".pro-prices-accourdion__button-down"
);

basicAccourdionOpenButton.addEventListener("click", basicAccourdionOpen);

standardAccourdionOpenButton.addEventListener("click", standardAccourdionOpen);

proAccourdionOpenButton.addEventListener("click", proAccourdionOpen);

function basicAccourdionOpen() {
  basicAccourdionDescription.classList.add(
    "prices-accourdion__description--active"
  );
  standardAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
  proAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
}

function standardAccourdionOpen() {
  standardAccourdionDescription.classList.add(
    "prices-accourdion__description--active"
  );
  basicAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
  proAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
}

function proAccourdionOpen() {
  proAccourdionDescription.classList.add(
    "prices-accourdion__description--active"
  );
  basicAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
  standardAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
}

// Close accordions

const basicAccourdionCloseButton = document.querySelector(
  ".basic-prices-accourdion__button-up"
);

const standardAccourdionCloseButton = document.querySelector(
  ".standard-prices-accourdion__button-up"
);

const proAccourdionCloseButton = document.querySelector(
  ".pro-prices-accourdion__button-up"
);

basicAccourdionCloseButton.addEventListener("click", basicAccourdionClose);

standardAccourdionCloseButton.addEventListener(
  "click",
  standardAccourdionClose
);

proAccourdionCloseButton.addEventListener("click", proAccourdionClose);

function basicAccourdionClose() {
  basicAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
}

function standardAccourdionClose() {
  standardAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
}

function proAccourdionClose() {
  proAccourdionDescription.classList.remove(
    "prices-accourdion__description--active"
  );
}

// CONTACTS LIST:

// Opening and closing contacts list by list clicking:

const contactListTop = document.querySelector(".contacts-selected");
const contactList = document.querySelector(".contacts-select");
const contactCard = document.querySelector(".contacts-city-card");

contactListTop.addEventListener("click", contactListOpenClose);

function contactListOpenClose() {
  this.classList.toggle("contacts-selected--active");
  contactList.classList.toggle("contacts-select--active");
}

// Chosing a city:

const contactsCity = document.querySelectorAll(".contacts-option__label");

for (let contactCity of contactsCity) {
  contactCity.addEventListener("click", chooseCity);
}

function chooseCity() {
  contactListTop.textContent = this.textContent;
  contactListTop.classList.remove("contacts-selected--active");
  contactListTop.classList.add("contacts-selected--chosen");
  contactList.classList.remove("contacts-select--active");
  contactCard.classList.add("contacts-city-card--active");
  document.querySelector(".city-card-table__city").textContent =
    this.textContent;
  document.querySelector(".city-card-table__phone").textContent =
    this.dataset.phone;
  document.querySelector(".city-card-table__address").textContent =
    this.dataset.address;
}

// Calling button:

const callingButton = document.querySelector(".contacts-call-button");

callingButton.addEventListener("click", callByClick);

function callByClick() {
  // window.location = "tel:495898694";
  window.location = `tel:${
    document.querySelector(".city-card-table__phone").textContent
  }`;
}

// SCORES:

console.log("Самооценка");
