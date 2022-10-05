import { pageWrapper } from '../main-elements/body-wrapper';
import createCardPageTrain from '../pages/page-cards-train';
import createCardPagePlay from '../pages/page-cards-play';
import { playMode } from './event-game-start';

function eventCategoryClick() {
  const categoryItems = document.querySelectorAll('.category__item');
  for (let i = 0; i < categoryItems.length; i += 1) {
    categoryItems[i].addEventListener(('click'), (event) => {
      if (event.target === categoryItems[i]) {
        const categoryClicked1 = event.target.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(categoryClicked1);
        } else {
          createCardPagePlay(categoryClicked1);
        }
      } else {
        const categoryClicked2 = event.target.parentElement.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(categoryClicked2);
        } else {
          createCardPagePlay(categoryClicked2);
          setTimeout(() => {
            playMode();
          }, 100);
        }
      }
    });
  }
}

export default eventCategoryClick;
