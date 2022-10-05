/* eslint-disable max-len */
import { pageWrapper } from '../main-elements/body-wrapper';
import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';

function createMistakesPageTrain(data) {
  pageWrapper.element.children[1].innerHTML = '';
  const cardCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  cardCards
    .createElem();

  new ElementNew(cardCards.element, 'h1', 'card-train__h1', 'train mistakes'.toUpperCase())
    .createElem();
  const cardWrapper = new ElementNew(cardCards.element, 'div', 'card-train__wrapper');
  cardWrapper
    .createElem();
  data.sort((a, b) => b[5] - a[5]);
  let i = 0;
  while (i < 8 && data[i][5]) {
    localStorage.setItem(`${data[i][1]}Mistake`, 0);
    const cardContainer = new ElementNew(cardWrapper.element, 'div', 'card-train__wrapper-container');
    cardContainer.createElem();
    const cardFrontBack = new ElementNew(cardContainer.element, 'div', 'card-train__front-back');
    cardFrontBack.createElem();
    const cardItemFront = new ElementNew(cardFrontBack.element, 'div', ['card-train__item']);
    cardItemFront.createElem();
    const cardItemBack = new ElementNew(cardFrontBack.element, 'div', 'card-train__item-back-hidden');
    cardItemBack.createElem();

    new Card(cardItemBack.element)
      .addName(data[i][2], 'card-train__item-back-translate');

    new Card(cardItemFront.element)
      .addImg(data[i][7], 'card-train__item-img', data[i][1])
      .addName(data[i][1].toUpperCase(), 'card-train__item-name')
      .addImg('./assets/images/01icons8-synchronize-150.png', 'card-train__item-rotate', 'rotate icon');
    i += 1;
  }
}

export default createMistakesPageTrain;
