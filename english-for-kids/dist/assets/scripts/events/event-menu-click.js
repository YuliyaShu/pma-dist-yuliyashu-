import { pageWrapper } from '../main-elements/body-wrapper';
import { playMode } from './event-game-start';
import createCardPagePlay from '../pages/page-cards-play';
import createCardPageTrain from '../pages/page-cards-train';

const headerMenu = document.querySelector('.header__menu');
function toggle() {
  document.querySelector('html').classList.toggle('open');
  document.querySelector('.page__burger').classList.toggle('overlay');
  headerMenu.classList.toggle('open');
  document.querySelector('.header__burger').classList.toggle('open');
}

headerMenu.addEventListener(('click'), toggle);

document.querySelector('.page__burger').addEventListener(('click'), toggle);

function eventMenuClick() {
  const burgerMenuItems = document.querySelectorAll('.burger__menu-item');
  for (let i = 0; i < burgerMenuItems.length; i += 1) {
    burgerMenuItems[i].addEventListener(('click'), (eventMenu) => {
      if (eventMenu.target === burgerMenuItems[i]) {
        const menuClicked1 = eventMenu.target.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        toggle();
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(menuClicked1);
        } else {
          createCardPagePlay(menuClicked1);
        }
      } else {
        const menuClicked2 = eventMenu.target.parentElement.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        toggle();
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(menuClicked2);
        } else {
          createCardPagePlay(menuClicked2);
          setTimeout(() => {
            playMode();
          }, 100);
        }
      }
    });
  }
}

export default eventMenuClick;
