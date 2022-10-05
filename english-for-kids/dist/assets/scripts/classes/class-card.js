import ElementNew from './class-html-element';

class Card {
  constructor(parent) {
    this.parent = parent;
  }

  addImg(imgURL, imgClass, altText) {
    new ElementNew(this.parent, 'img', imgClass, null, [['src', imgURL], ['alt', altText]])
      .createElem();
    return this;
  }

  addName(nameText, nameClass) {
    new ElementNew(this.parent, 'p', nameClass, nameText)
      .createElem();
    return this;
  }
}

export default Card;
