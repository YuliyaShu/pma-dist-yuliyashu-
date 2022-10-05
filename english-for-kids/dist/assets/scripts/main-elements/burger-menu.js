import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';
import eventMenuClick from '../events/event-menu-click';
import { categoryMain } from '../utils/string-variables';

const headerBurger = document.querySelector('.header__burger');
headerBurger.classList.add('burger');

const burgerLogo = new ElementNew(headerBurger, 'div', ['burger__logo', 'open']);
burgerLogo
  .createElem();
new ElementNew(burgerLogo.element, 'a', 'burger__logo-name', categoryMain.toLocaleUpperCase(), [['href', 'https://yuliyashu-english-for-kids.netlify.app/']])
  .createElem();

const prefixBurgerMenu = 'burger__menu';
const burgerMenu = new ElementNew(headerBurger, 'div', [prefixBurgerMenu, 'open']);
burgerMenu
  .createElem();

fetch('./assets/jsons/categories.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < Object.keys(data).length; i += 1) {
      const arrOfValues = Object.values(data);
      const menuItem = new ElementNew(burgerMenu.element, 'div', [`${prefixBurgerMenu}-item`]);
      menuItem.createElem();
      new Card(menuItem.element)
        .addImg(arrOfValues[i].url, `${prefixBurgerMenu}-item-img`, arrOfValues[i].name)
        .addName(arrOfValues[i].name.toUpperCase(), `${prefixBurgerMenu}-item-name`);
    }
    eventMenuClick();
  });

export {};
