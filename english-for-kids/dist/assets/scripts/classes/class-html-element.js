import { addElemToParentError } from '../utils/string-variables';

class ElementNew {
  constructor(parentElem, type, className = null, textContent = null, attribute = null) {
    this.element = document.createElement(type);
    this.parent = parentElem;
    this.class = className;
    this.attribute = attribute;
    this.text = textContent;
  }

  addClassToElement() {
    if (this.class) {
      if (typeof this.class === 'string') {
        this.element.classList.add(this.class);
      } else if (Array.isArray(this.class)) {
        this.class.forEach((e) => this.element.classList.add(e));
      }
    }
    return this;
  }

  toggleClassToElement() {
    if (this.class) {
      if (typeof this.class === 'string') {
        this.element.classList.toggle(this.class);
      } else if (Array.isArray(this.class)) {
        this.class.forEach((e) => this.element.classList.toggle(e));
      }
    }
    return this;
  }

  addTextContentToElement() {
    if (this.text) {
      this.element.innerHTML = this.text;
    }
    return this;
  }

  addAttributeToElement() {
    if (this.attribute) {
      this.attribute.forEach((e) => this.element.setAttribute(e[0], e[1]));
    }
    return this;
  }

  addElemToParent(action) {
    switch (action) {
      case 'append':
        this.parent.append(this.element);
        break;
      case 'prepend':
        this.parent.prepend(this.element);
        break;
      default:
        throw new Error(addElemToParentError);
    }
    return this;
  }

  createElem(action = 'append') {
    this
      .addClassToElement()
      .addTextContentToElement()
      .addAttributeToElement()
      .addElemToParent(action);
  }
}

export default ElementNew;
