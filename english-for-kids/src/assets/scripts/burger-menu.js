import Card from './class-card';
import ElementNew from './class-html-element';

const headerBurger = document.querySelector('.header__burger');
headerBurger.classList.add('burger');
const burgerContainer = new ElementNew(headerBurger, 'nav', ['burger__container', 'open']);
burgerContainer
  .createElem();

const burgerLogo = new ElementNew(burgerContainer.element, 'div', ['burger__logo', 'open']);
burgerLogo
  .createElem();
new ElementNew(burgerLogo.element, 'a', 'burger__logo-name', 'ENGLISH KID', ['href', 'https://yuliyashu-english-for-kids.netlify.app/'])
  .createElem();

const burgerMenu = new ElementNew(burgerContainer.element, 'ul', ['burger__menu', 'open']);
burgerMenu
  .createElem();

for (let i = 0; i < 8; i += 1) {
  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((data) => {
      const arrOfKeys = Object.keys(data);
      const menuItem = new ElementNew(burgerMenu.element, 'li', ['burger__menu-item']);
      menuItem.createElem();
      new Card(menuItem.element, `${arrOfKeys[i]}`, 'categories', 'burger__menu-item-img').createCardImg('category image');
      new Card(menuItem.element, `${arrOfKeys[i]}`, 'categories', 'burger__menu-item-name').createCardName();
    });
}
