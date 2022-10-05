import ElementNew from '../classes/class-html-element';
import cleanStat from '../events/event-stat-clean-click';
import trainMistakesStat from '../events/event-stat-train-mistakes-click';
import { pageWrapper } from '../main-elements/body-wrapper';

const statData = [];
let count = 1;

function readData() {
  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((dataCategory) => {
      Object.keys(dataCategory).forEach((category) => {
        fetch(`./assets/jsons/${category}.json`)
          .then((response) => response.json())
          .then((dataCard) => {
            Object.keys(dataCard).forEach((card) => {
              const correct = (+localStorage.getItem(`${card}Correct`))
                ? +localStorage.getItem(`${card}Correct`)
                : 0;
              const mistaken = (+localStorage.getItem(`${card}Mistake`))
                ? +localStorage.getItem(`${card}Mistake`)
                : 0;
              const total = correct + mistaken;
              const percent = (total) ? Math.round((correct / total) * 100) : '-';
              statData.push([]);
              statData[statData.length - 1]
                .push(category, card, dataCard[card]
                  .translate, total, correct, mistaken, percent, dataCard[card].url);
            });
          });
      });
    });
}

function fillTable(parent) {
  statData.forEach((item) => {
    for (let i = 0; i < item.length - 1; i += 1) {
      new ElementNew(parent, 'div', ['stat__data'], item[i]).createElem();
    }
  });
}

function sort(index) {
  if (count % 2) {
    if (index < 3) {
      statData.sort((a, b) => b[index].localeCompare(a[index]));
    } else {
      statData.sort((a, b) => a[index] - b[index]);
    }
    count += 1;
  } else {
    if (index < 3) {
      statData.sort((a, b) => a[index].localeCompare(b[index]));
    } else {
      statData.sort((a, b) => b[index] - a[index]);
    }
    count += 1;
  }
}

function createStatPage() {
  const mainWrapper = pageWrapper.element.children[1];
  new ElementNew(mainWrapper, 'h1', ['category__h1', 'stat__h1'], 'statistics'.toUpperCase())
    .createElem();
  const statButtons = new ElementNew(mainWrapper, 'div', 'main__stat-buttons');
  statButtons
    .createElem();
  new ElementNew(statButtons.element, 'button', 'main__stat-buttons-train', 'TRAIN MISTAKES')
    .createElem();
  trainMistakesStat(statData);
  new ElementNew(statButtons.element, 'button', 'main__stat-buttons-clean', 'CLEAN STATISTICS')
    .createElem();
  cleanStat();

  const statNames = new ElementNew(mainWrapper, 'div', [['main__stat-wrapper'], ['stat-names']]);
  statNames
    .createElem();
  const namesOfColumns = [
    'Category',
    'Word',
    'Translation',
    'Total clicks',
    'Correct',
    'Mistaken',
    '% of correct',
  ];
  namesOfColumns.forEach((columnName) => new ElementNew(statNames.element, 'div', 'stat__column-name', columnName)
    .createElem());
  const cardCards = new ElementNew(mainWrapper, 'div', [['main__stat-wrapper'], ['stat']]);
  cardCards
    .createElem();

  readData();
  setTimeout(() => {
    fillTable(cardCards.element);
  }, 100);

  const cap = document.querySelectorAll('.stat__column-name');
  for (let i = 0; i < cap.length; i += 1) {
    cap[i].addEventListener('click', () => {
      sort(i);
      document.querySelector('.stat').innerHTML = '';
      fillTable(cardCards.element);
    });
  }
}

export { readData, createStatPage };
