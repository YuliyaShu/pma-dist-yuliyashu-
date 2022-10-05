import { pageWrapper } from '../main-elements/body-wrapper';
import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';
import eventCategoryClick from '../events/event-category-click';

function createCategoryPage() {
  const categoryCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main-category'], ['category']]);
  categoryCards
    .createElem();

  new ElementNew(categoryCards.element, 'h1', 'category__h1', 'english kid'.toUpperCase())
    .createElem();
  const categoryWrapper = new ElementNew(categoryCards.element, 'div', 'category__wrapper');
  categoryWrapper
    .createElem();

  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < Object.keys(data).length; i += 1) {
        const arrOfValues = Object.values(data);
        const categoryItem = new ElementNew(categoryWrapper.element, 'div', ['category__item', `category__item-${arrOfValues[i].name}`]);
        categoryItem.createElem();
        new Card(categoryItem.element)
          .addImg(arrOfValues[i].url, 'category__item-img', arrOfValues[i].name)
          .addName(arrOfValues[i].name.toUpperCase(), 'category__item-name');
      }
      eventCategoryClick();
    });

  localStorage.setItem('countOfFailed', 0);
  localStorage.setItem('countOfSuccess', 0);
}

createCategoryPage();

export default createCategoryPage;
