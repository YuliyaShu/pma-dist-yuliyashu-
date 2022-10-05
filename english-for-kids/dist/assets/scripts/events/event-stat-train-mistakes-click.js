import createMistakesPageTrain from '../pages/page-mistakes-train';
import click from './event-card-click';

function trainMistakesStat(data) {
  document.querySelector('.main__stat-buttons-train')
    .addEventListener('click', () => {
      createMistakesPageTrain(data);
      setTimeout(() => {
        click();
      }, 100);
    });
}

export default trainMistakesStat;
