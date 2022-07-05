/* eslint-disable no-use-before-define */
import { pageWrapper } from '../main-elements/body-wrapper';
import { createFinishPageFailed, createFinishPageSuccess } from '../pages/page-game-end';
import textToSpeech from '../main-elements/text-to-speech';

let countOfNo = true;

function startClick() {
  const startButton = document.querySelector('.card-play__begin-button');
  if (!startButton) {
    const continueButton = document.querySelector('.card-play__continue-button');
    continueButton.addEventListener('click', () => {
      const getSound = localStorage.getItem('savedSound');
      textToSpeech(getSound);
    });
  } else {
    startButton.classList.add('card-play__continue-button');
    startButton.classList.remove('card-play__begin-button');
    const nameOfGameCategory = document.querySelector('.card-train__h1').textContent.toLowerCase();
    fetch(`./assets/jsons/${nameOfGameCategory}.json`)
      .then((response) => response.json())
      .then((data) => {
        const nameOfCards = Object.keys(data);
        localStorage.setItem('nameOfCards', nameOfCards);
        if (startButton.textContent === 'START') {
          const random = Math.floor(Math.random() * nameOfCards.length);
          textToSpeech(nameOfCards[random]);
          localStorage.setItem('savedSound', nameOfCards[random]);
          startButton.textContent = 'REPEAT';
          guessClick(nameOfCards[random]);
        } else if (startButton.textContent === 'REPEAT') {
          const getSound = localStorage.getItem('savedSound');
          textToSpeech(getSound);
          // guessClick(getSound);
        }
      });
  }
}

function playMode() {
  const startButton = document.querySelector('.card-play__begin-button');
  startButton.addEventListener('click', startClick);
}

function click(eventCard) {
  const continueButton = document.querySelector('.card-play__continue-button');
  const name1 = localStorage.getItem('name');
  const cardClick = (eventCard.target.tagName.toLowerCase() !== 'img')
    ? eventCard.target.children[1].innerText.toLowerCase()
    : eventCard.target.parentElement.children[1].innerText.toLowerCase();
  const cardItem = (eventCard.target.tagName.toLowerCase() !== 'img')
    ? eventCard.target
    : eventCard.target.parentElement;
  if (name1 === cardClick) {
    console.log(cardClick);
    textToSpeech('yes');
    continueButton.textContent = 'START';
    cardItem.classList.add('card-play__item-inactive');
    cardItem.classList.remove('card-play__item');
    let nameCorrect = (+localStorage.getItem(`${name1}Correct`))
      ? +localStorage.getItem(`${name1}Correct`)
      : 0;
    nameCorrect += 1;
    localStorage.setItem(`${name1}Correct`, nameCorrect);
    playModeContinue(name1);
    if (countOfNo) {
      const stars = document.querySelectorAll('.card-play__stars-star');
      for (let i = 0; i < 8; i += 1) {
        if (stars[i].src.split('/').slice(-1).join() === '02icon-star.png') {
          stars[i].src = './assets/images/02icon-star-green.png';
          break;
        }
      }
    }
    countOfNo = true;
  } else {
    if (countOfNo) {
      const currentCountOfFailed = +localStorage.getItem('countOfFailed');
      const newCountOfFailed = currentCountOfFailed + 1;
      localStorage.setItem('countOfFailed', newCountOfFailed);
      countOfNo = false;
    }
    let nameMistake = (+localStorage.getItem(`${name1}Mistake`))
      ? +localStorage.getItem(`${name1}Mistake`)
      : 0;
    nameMistake += 1;
    localStorage.setItem(`${name1}Mistake`, nameMistake);
    textToSpeech('no');
  }
}

function guessClick(name) {
  localStorage.setItem('name', name);
  const cardPlayWrapper = document.querySelector('.card-play__wrapper');

  cardPlayWrapper.addEventListener('click', click);
}

function playModeContinue(nameIncome) {
  const nameOfCardsContinue = localStorage.getItem('nameOfCards').split(',');
  if (nameOfCardsContinue.includes(nameIncome)) {
    nameOfCardsContinue.splice(nameOfCardsContinue.indexOf(nameIncome), 1);
    localStorage.setItem('nameOfCards', nameOfCardsContinue);
  }
  if (!nameOfCardsContinue.length) {
    const cardItemInactive = document.querySelectorAll('.card-play__item-inactive');
    for (let h = 0; h < cardItemInactive.length; h += 1) {
      cardItemInactive[h].classList.remove('card-play__item-inactive');
      cardItemInactive[h].classList.add('card-play__item');
    }
    const continueButton = document.querySelector('.card-play__continue-button');
    continueButton.classList.remove('card-play__continue-button');
    continueButton.classList.add('card-play__begin-button');
    pageWrapper.element.children[1].innerHTML = '';
    if (localStorage.getItem('countOfFailed') > 0) {
      textToSpeech('You can do it better!');
      createFinishPageFailed();
    } else {
      textToSpeech('You have finished! Wonderful!');
      createFinishPageSuccess();
    }
    localStorage.setItem('countOfFailed', 0);
    const stars = document.querySelectorAll('.card-play__stars-star');
    for (let i = 0; i < 8; i += 1) {
      stars[i].src = './assets/images/02icon-star-green.png';
    }
  } else {
    const continueButton = document.querySelector('.card-play__continue-button');
    if (continueButton.textContent === 'START') {
      const random = Math.floor(Math.random() * nameOfCardsContinue.length);
      textToSpeech(nameOfCardsContinue[random]);
      localStorage.setItem('savedSound', nameOfCardsContinue[random]);
      continueButton.textContent = 'REPEAT';
      guessClick(nameOfCardsContinue[random]);
    }
  }
}

export { playMode, guessClick, playModeContinue };
