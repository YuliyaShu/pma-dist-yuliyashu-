import { pageWrapper } from '../main-elements/body-wrapper';
import ElementNew from '../classes/class-html-element';

function createFinishPageSuccess() {
  const finish = new ElementNew(pageWrapper.element.children[1], 'div', [['main__finish'], ['finish']]);
  finish
    .createElem();
  new ElementNew(finish.element, 'p', 'finish__name', 'You have finished! Wonderful!').createElem();
  new ElementNew(finish.element, 'img', 'finish__image', null, [['src', './assets/images/finish-success.jpg'], ['alt', 'success image']])
    .createElem();

  setTimeout(() => {
    pageWrapper.element.children[1].innerHTML = '';
    document.location.reload();
  }, 7000);
}

function createFinishPageFailed() {
  const finish = new ElementNew(pageWrapper.element.children[1], 'div', [['main__finish'], ['finish']]);
  finish
    .createElem();
  new ElementNew(finish.element, 'p', 'finish__name', 'You can do it better!').createElem();
  new ElementNew(finish.element, 'p', 'finish__result', `${localStorage.getItem('countOfFailed')} of 8 mistake(s)`).createElem();
  new ElementNew(finish.element, 'img', 'finish__image', null, [['src', './assets/images/finish-failed.jpg'], ['alt', 'success image']])
    .createElem();
  localStorage.setItem('countOfSuccess', 0);
  localStorage.setItem('countOfFailed', 0);
  setTimeout(() => {
    pageWrapper.element.children[1].innerHTML = '';
    document.location.reload();
  }, 7000);
}

export { createFinishPageSuccess, createFinishPageFailed };
