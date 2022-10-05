import { createStatPage } from '../pages/page-stat';
import { pageWrapper } from '../main-elements/body-wrapper';

document
  .querySelector('.header__stat')
  .addEventListener('click', () => {
    pageWrapper.element.children[1].innerHTML = '';
    createStatPage();
  });
