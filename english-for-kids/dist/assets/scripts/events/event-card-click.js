import textToSpeech from '../main-elements/text-to-speech';

function click() {
  const cardItem = document.querySelectorAll('.card-train__item');

  for (let j = 0; j < cardItem.length; j += 1) {
    cardItem[j].addEventListener(('click'), (eventCard) => {
      const cardRotate = document.querySelectorAll('.card-train__item-rotate');
      if (eventCard.target === cardItem[j]) {
        const cardClicked1 = eventCard.target.innerText.toLowerCase();
        textToSpeech(cardClicked1);
      } else if (eventCard.target === cardRotate[j]) {
        const cardItemFrontBack = document.querySelectorAll('.card-train__front-back');
        cardItemFrontBack[j].style.transform = 'rotateY(180deg)';
        const cardBack = document.querySelectorAll('.card-train__item-back-hidden');
        cardBack[j].addEventListener('mouseout', () => {
          cardItemFrontBack[j].style.transform = 'rotateY(0deg)';
        });
      } else {
        const cardClicked2 = eventCard.target.parentElement.innerText.toLowerCase();
        textToSpeech(cardClicked2);
      }
    });
  }
}

export default click;
