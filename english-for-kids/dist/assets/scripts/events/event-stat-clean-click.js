import { correct, messageToConfirmClear, mistake } from '../utils/string-variables';

function cleanStat() {
  document.querySelector('.main__stat-buttons-clean')
    .addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      if (window.confirm(messageToConfirmClear)) {
        fetch('./assets/jsons/categories.json')
          .then((response) => response.json())
          .then((dataCategory) => {
            Object.keys(dataCategory).forEach((category) => {
              fetch(`./assets/jsons/${category}.json`)
                .then((response) => response.json())
                .then((dataCard) => {
                  Object.keys(dataCard).forEach((card) => {
                    localStorage.setItem(`${card}${correct}`, 0);
                    localStorage.setItem(`${card}${mistake}`, 0);
                  });
                });
            });
          });
      }
    });
}

export default cleanStat;
