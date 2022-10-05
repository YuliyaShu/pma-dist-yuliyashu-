import { pageWrapper } from '../main-elements/body-wrapper';
import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';
import click from '../events/event-card-click';

function createCardPageTrain(nameOfCategory) {
  const cardCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  cardCards
    .createElem();

  new ElementNew(cardCards.element, 'h1', 'card-train__h1', nameOfCategory.toUpperCase())
    .createElem();
  const cardWrapper = new ElementNew(cardCards.element, 'div', 'card-train__wrapper');
  cardWrapper
    .createElem();

  fetch(`./assets/jsons/${nameOfCategory}.json`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < Object.keys(data).length; i += 1) {
        const arrOfValues = Object.values(data);
        const cardContainer = new ElementNew(cardWrapper.element, 'div', 'card-train__wrapper-container');
        cardContainer
          .createElem();
        const cardFrontBack = new ElementNew(cardContainer.element, 'div', 'card-train__front-back');
        cardFrontBack
          .createElem();
        const cardItemFront = new ElementNew(cardFrontBack.element, 'div', ['card-train__item', `card-train__item-${arrOfValues[i].name}`]);
        cardItemFront
          .createElem();
        const cardItemBack = new ElementNew(cardFrontBack.element, 'div', 'card-train__item-back-hidden');
        cardItemBack
          .createElem();

        new Card(cardItemBack.element)
          .addName(arrOfValues[i].translate, 'card-train__item-back-translate');

        new Card(cardItemFront.element)
          .addImg(arrOfValues[i].url, 'card-train__item-img', arrOfValues[i].name)
          .addName(arrOfValues[i].name.toUpperCase(), 'card-train__item-name')
          .addImg('./assets/images/01icons8-synchronize-150.png', 'card-train__item-rotate', 'rotate icon');
      }
      click();
    });
}

export default createCardPageTrain;
