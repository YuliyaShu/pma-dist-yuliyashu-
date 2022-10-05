/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/classes/class-card.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/classes/class-card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _class_html_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-html-element */ "./src/assets/scripts/classes/class-html-element.js");




var Card = /*#__PURE__*/function () {
  function Card(parent) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    this.parent = parent;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "addImg",
    value: function addImg(imgURL, imgClass, altText) {
      new _class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](this.parent, 'img', imgClass, null, [['src', imgURL], ['alt', altText]]).createElem();
      return this;
    }
  }, {
    key: "addName",
    value: function addName(nameText, nameClass) {
      new _class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](this.parent, 'p', nameClass, nameText).createElem();
      return this;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/assets/scripts/classes/class-html-element.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/classes/class-html-element.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_string_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js");




var ElementNew = /*#__PURE__*/function () {
  function ElementNew(parentElem, type) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var textContent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var attribute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ElementNew);

    this.element = document.createElement(type);
    this.parent = parentElem;
    this["class"] = className;
    this.attribute = attribute;
    this.text = textContent;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ElementNew, [{
    key: "addClassToElement",
    value: function addClassToElement() {
      var _this = this;

      if (this["class"]) {
        if (typeof this["class"] === 'string') {
          this.element.classList.add(this["class"]);
        } else if (Array.isArray(this["class"])) {
          this["class"].forEach(function (e) {
            return _this.element.classList.add(e);
          });
        }
      }

      return this;
    }
  }, {
    key: "toggleClassToElement",
    value: function toggleClassToElement() {
      var _this2 = this;

      if (this["class"]) {
        if (typeof this["class"] === 'string') {
          this.element.classList.toggle(this["class"]);
        } else if (Array.isArray(this["class"])) {
          this["class"].forEach(function (e) {
            return _this2.element.classList.toggle(e);
          });
        }
      }

      return this;
    }
  }, {
    key: "addTextContentToElement",
    value: function addTextContentToElement() {
      if (this.text) {
        this.element.innerHTML = this.text;
      }

      return this;
    }
  }, {
    key: "addAttributeToElement",
    value: function addAttributeToElement() {
      var _this3 = this;

      if (this.attribute) {
        this.attribute.forEach(function (e) {
          return _this3.element.setAttribute(e[0], e[1]);
        });
      }

      return this;
    }
  }, {
    key: "addElemToParent",
    value: function addElemToParent(action) {
      switch (action) {
        case 'append':
          this.parent.append(this.element);
          break;

        case 'prepend':
          this.parent.prepend(this.element);
          break;

        default:
          throw new Error(_utils_string_variables__WEBPACK_IMPORTED_MODULE_2__.addElemToParentError);
      }

      return this;
    }
  }, {
    key: "createElem",
    value: function createElem() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'append';
      this.addClassToElement().addTextContentToElement().addAttributeToElement().addElemToParent(action);
    }
  }]);

  return ElementNew;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementNew);

/***/ }),

/***/ "./src/assets/scripts/events/event-card-click.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/events/event-card-click.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/text-to-speech */ "./src/assets/scripts/main-elements/text-to-speech.js");


function click() {
  var cardItem = document.querySelectorAll('.card-train__item');

  var _loop = function _loop(j) {
    cardItem[j].addEventListener('click', function (eventCard) {
      var cardRotate = document.querySelectorAll('.card-train__item-rotate');

      if (eventCard.target === cardItem[j]) {
        var cardClicked1 = eventCard.target.innerText.toLowerCase();
        (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_0__["default"])(cardClicked1);
      } else if (eventCard.target === cardRotate[j]) {
        var cardItemFrontBack = document.querySelectorAll('.card-train__front-back');
        cardItemFrontBack[j].style.transform = 'rotateY(180deg)';
        var cardBack = document.querySelectorAll('.card-train__item-back-hidden');
        cardBack[j].addEventListener('mouseout', function () {
          cardItemFrontBack[j].style.transform = 'rotateY(0deg)';
        });
      } else {
        var cardClicked2 = eventCard.target.parentElement.innerText.toLowerCase();
        (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_0__["default"])(cardClicked2);
      }
    });
  };

  for (var j = 0; j < cardItem.length; j += 1) {
    _loop(j);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (click);

/***/ }),

/***/ "./src/assets/scripts/events/event-category-click.js":
/*!***********************************************************!*\
  !*** ./src/assets/scripts/events/event-category-click.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _pages_page_cards_train__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/page-cards-train */ "./src/assets/scripts/pages/page-cards-train.js");
/* harmony import */ var _pages_page_cards_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/page-cards-play */ "./src/assets/scripts/pages/page-cards-play.js");
/* harmony import */ var _event_game_start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-game-start */ "./src/assets/scripts/events/event-game-start.js");





function eventCategoryClick() {
  var categoryItems = document.querySelectorAll('.category__item');

  var _loop = function _loop(i) {
    categoryItems[i].addEventListener('click', function (event) {
      if (event.target === categoryItems[i]) {
        var categoryClicked1 = event.target.innerText.toLowerCase();
        _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';

        if (!document.querySelector('.switch__input').checked) {
          (0,_pages_page_cards_train__WEBPACK_IMPORTED_MODULE_1__["default"])(categoryClicked1);
        } else {
          (0,_pages_page_cards_play__WEBPACK_IMPORTED_MODULE_2__["default"])(categoryClicked1);
        }
      } else {
        var categoryClicked2 = event.target.parentElement.innerText.toLowerCase();
        _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';

        if (!document.querySelector('.switch__input').checked) {
          (0,_pages_page_cards_train__WEBPACK_IMPORTED_MODULE_1__["default"])(categoryClicked2);
        } else {
          (0,_pages_page_cards_play__WEBPACK_IMPORTED_MODULE_2__["default"])(categoryClicked2);
          setTimeout(function () {
            (0,_event_game_start__WEBPACK_IMPORTED_MODULE_3__.playMode)();
          }, 100);
        }
      }
    });
  };

  for (var i = 0; i < categoryItems.length; i += 1) {
    _loop(i);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventCategoryClick);

/***/ }),

/***/ "./src/assets/scripts/events/event-game-start.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/events/event-game-start.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guessClick": () => (/* binding */ guessClick),
/* harmony export */   "playMode": () => (/* binding */ playMode),
/* harmony export */   "playModeContinue": () => (/* binding */ playModeContinue)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _pages_page_game_end__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/page-game-end */ "./src/assets/scripts/pages/page-game-end.js");
/* harmony import */ var _main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-elements/text-to-speech */ "./src/assets/scripts/main-elements/text-to-speech.js");
/* harmony import */ var _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js");
/* eslint-disable no-use-before-define */




var countOfNo = true;

function startClick() {
  var startButton = document.querySelector('.card-play__begin-button');

  if (startButton) {
    startButton.classList.add('card-play__continue-button');
    startButton.classList.remove('card-play__begin-button');
    var nameOfCards = [];
    document.querySelectorAll('.card-play__item-name').forEach(function (item) {
      return nameOfCards.push(item.innerHTML.toLowerCase());
    });
    localStorage.setItem('nameOfCards', nameOfCards);

    if (startButton.textContent === _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.start) {
      var random = Math.floor(Math.random() * nameOfCards.length);
      var itemName = nameOfCards[random];
      (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])(itemName);
      localStorage.setItem('savedSound', itemName);
      startButton.textContent = _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.repeat;
      guessClick(itemName);
    }
  } else {
    var getSound = localStorage.getItem('savedSound');
    (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])(getSound);
  }
}

function playMode() {
  var startButton = document.querySelector('.card-play__begin-button');
  startButton.addEventListener('click', startClick);
}

function click(eventCard) {
  var continueButton = document.querySelector('.card-play__continue-button');
  var name1 = localStorage.getItem('name').toLowerCase();
  var cardClick = eventCard.target.tagName.toLowerCase() !== 'img' ? eventCard.target.children[1].innerText.toLowerCase() : eventCard.target.parentElement.children[1].innerText.toLowerCase();
  var cardItem = eventCard.target.tagName.toLowerCase() !== 'img' ? eventCard.target : eventCard.target.parentElement;

  if (name1 === cardClick) {
    (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.yes);
    continueButton.textContent = _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.start;
    cardItem.classList.add('card-play__item-inactive');
    cardItem.classList.remove('card-play__item');
    var nameCorrect = +localStorage.getItem("".concat(name1).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.correct)) ? +localStorage.getItem("".concat(name1).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.correct)) : 0;
    nameCorrect += 1;
    localStorage.setItem("".concat(name1).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.correct), nameCorrect);
    playModeContinue(name1);

    if (countOfNo) {
      var stars = document.querySelectorAll('.card-play__stars-star');

      for (var i = 0; i < 8; i += 1) {
        if (stars[i].src.split('/').slice(-1).join() === '02icon-star.png') {
          stars[i].src = './assets/images/02icon-star-green.png';
          break;
        }
      }
    }

    countOfNo = true;
  } else {
    if (countOfNo) {
      var currentCountOfFailed = +localStorage.getItem('countOfFailed');
      var newCountOfFailed = currentCountOfFailed + 1;
      localStorage.setItem('countOfFailed', newCountOfFailed);
      countOfNo = false;
    }

    var nameMistake = +localStorage.getItem("".concat(name1).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.mistake)) ? +localStorage.getItem("".concat(name1).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.mistake)) : 0;
    nameMistake += 1;
    localStorage.setItem("".concat(name1).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.mistake), nameMistake);
    (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])('no');
  }
}

function guessClick(name) {
  localStorage.setItem('name', name);
  var cardPlayWrapper = document.querySelector('.card-play__wrapper');
  cardPlayWrapper.addEventListener('click', click);
}

function playModeContinue(nameIncome) {
  var nameOfCardsContinue = localStorage.getItem('nameOfCards').split(',');

  if (nameOfCardsContinue.includes(nameIncome)) {
    nameOfCardsContinue.splice(nameOfCardsContinue.indexOf(nameIncome), 1);
    localStorage.setItem('nameOfCards', nameOfCardsContinue);
  }

  if (!nameOfCardsContinue.length) {
    var cardItemInactive = document.querySelectorAll('.card-play__item-inactive');

    for (var h = 0; h < cardItemInactive.length; h += 1) {
      cardItemInactive[h].classList.remove('card-play__item-inactive');
      cardItemInactive[h].classList.add('card-play__item');
    }

    var continueButton = document.querySelector('.card-play__continue-button');
    continueButton.classList.remove('card-play__continue-button');
    continueButton.classList.add('card-play__begin-button');
    _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';

    if (localStorage.getItem('countOfFailed') > 0) {
      (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.textWhenSuccess);
      (0,_pages_page_game_end__WEBPACK_IMPORTED_MODULE_1__.createFinishPageFailed)();
    } else {
      (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.textWhenFailed);
      (0,_pages_page_game_end__WEBPACK_IMPORTED_MODULE_1__.createFinishPageSuccess)();
    }

    localStorage.setItem('countOfFailed', 0);
    var stars = document.querySelectorAll('.card-play__stars-star');

    for (var i = 0; i < 8; i += 1) {
      stars[i].src = './assets/images/02icon-star-green.png';
    }
  } else {
    var _continueButton = document.querySelector('.card-play__continue-button');

    if (_continueButton.textContent === _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.start) {
      var random = Math.floor(Math.random() * nameOfCardsContinue.length);
      (0,_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_2__["default"])(nameOfCardsContinue[random]);
      localStorage.setItem('savedSound', nameOfCardsContinue[random]);
      _continueButton.textContent = _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.repeat;
      guessClick(nameOfCardsContinue[random]);
    }
  }
}



/***/ }),

/***/ "./src/assets/scripts/events/event-menu-click.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/events/event-menu-click.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _event_game_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-game-start */ "./src/assets/scripts/events/event-game-start.js");
/* harmony import */ var _pages_page_cards_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/page-cards-play */ "./src/assets/scripts/pages/page-cards-play.js");
/* harmony import */ var _pages_page_cards_train__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/page-cards-train */ "./src/assets/scripts/pages/page-cards-train.js");




var headerMenu = document.querySelector('.header__menu');

function toggle() {
  document.querySelector('html').classList.toggle('open');
  document.querySelector('.page__burger').classList.toggle('overlay');
  headerMenu.classList.toggle('open');
  document.querySelector('.header__burger').classList.toggle('open');
}

headerMenu.addEventListener('click', toggle);
document.querySelector('.page__burger').addEventListener('click', toggle);

function eventMenuClick() {
  var burgerMenuItems = document.querySelectorAll('.burger__menu-item');

  var _loop = function _loop(i) {
    burgerMenuItems[i].addEventListener('click', function (eventMenu) {
      if (eventMenu.target === burgerMenuItems[i]) {
        var menuClicked1 = eventMenu.target.innerText.toLowerCase();
        _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';
        toggle();

        if (!document.querySelector('.switch__input').checked) {
          (0,_pages_page_cards_train__WEBPACK_IMPORTED_MODULE_3__["default"])(menuClicked1);
        } else {
          (0,_pages_page_cards_play__WEBPACK_IMPORTED_MODULE_2__["default"])(menuClicked1);
        }
      } else {
        var menuClicked2 = eventMenu.target.parentElement.innerText.toLowerCase();
        _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';
        toggle();

        if (!document.querySelector('.switch__input').checked) {
          (0,_pages_page_cards_train__WEBPACK_IMPORTED_MODULE_3__["default"])(menuClicked2);
        } else {
          (0,_pages_page_cards_play__WEBPACK_IMPORTED_MODULE_2__["default"])(menuClicked2);
          setTimeout(function () {
            (0,_event_game_start__WEBPACK_IMPORTED_MODULE_1__.playMode)();
          }, 100);
        }
      }
    });
  };

  for (var i = 0; i < burgerMenuItems.length; i += 1) {
    _loop(i);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventMenuClick);

/***/ }),

/***/ "./src/assets/scripts/events/event-stat-clean-click.js":
/*!*************************************************************!*\
  !*** ./src/assets/scripts/events/event-stat-clean-click.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_string_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js");


function cleanStat() {
  document.querySelector('.main__stat-buttons-clean').addEventListener('click', function () {
    // eslint-disable-next-line no-alert
    if (window.confirm(_utils_string_variables__WEBPACK_IMPORTED_MODULE_0__.messageToConfirmClear)) {
      fetch('./assets/jsons/categories.json').then(function (response) {
        return response.json();
      }).then(function (dataCategory) {
        Object.keys(dataCategory).forEach(function (category) {
          fetch("./assets/jsons/".concat(category, ".json")).then(function (response) {
            return response.json();
          }).then(function (dataCard) {
            Object.keys(dataCard).forEach(function (card) {
              localStorage.setItem("".concat(card).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_0__.correct), 0);
              localStorage.setItem("".concat(card).concat(_utils_string_variables__WEBPACK_IMPORTED_MODULE_0__.mistake), 0);
            });
          });
        });
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanStat);

/***/ }),

/***/ "./src/assets/scripts/events/event-stat-click.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/events/event-stat-click.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_page_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/page-stat */ "./src/assets/scripts/pages/page-stat.js");
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");


document.querySelector('.header__stat').addEventListener('click', function () {
  _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_1__.pageWrapper.element.children[1].innerHTML = '';
  (0,_pages_page_stat__WEBPACK_IMPORTED_MODULE_0__.createStatPage)();
});

/***/ }),

/***/ "./src/assets/scripts/events/event-stat-train-mistakes-click.js":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/events/event-stat-train-mistakes-click.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_page_mistakes_train__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/page-mistakes-train */ "./src/assets/scripts/pages/page-mistakes-train.js");
/* harmony import */ var _event_card_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-card-click */ "./src/assets/scripts/events/event-card-click.js");



function trainMistakesStat(data) {
  document.querySelector('.main__stat-buttons-train').addEventListener('click', function () {
    (0,_pages_page_mistakes_train__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    setTimeout(function () {
      (0,_event_card_click__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }, 100);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trainMistakesStat);

/***/ }),

/***/ "./src/assets/scripts/events/event-switch-click.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/events/event-switch-click.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _event_card_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-card-click */ "./src/assets/scripts/events/event-card-click.js");
/* harmony import */ var _event_game_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-game-start */ "./src/assets/scripts/events/event-game-start.js");
/* harmony import */ var _pages_page_cards_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/page-cards-play */ "./src/assets/scripts/pages/page-cards-play.js");
/* harmony import */ var _pages_page_cards_train__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/page-cards-train */ "./src/assets/scripts/pages/page-cards-train.js");
/* harmony import */ var _utils_string_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js");






var switchMode = document.querySelector('.switch__mode');
var switchInput = document.querySelector('.switch__input');

function switchClick() {
  var categoryName = document.querySelector('.card-train__h1') ? document.querySelector('.card-train__h1').textContent.toLowerCase() : document.querySelector('.category__h1').textContent.toLowerCase();

  if (categoryName !== _utils_string_variables__WEBPACK_IMPORTED_MODULE_5__.categoryMain) {
    if (categoryName === _utils_string_variables__WEBPACK_IMPORTED_MODULE_5__.categoryTrain || categoryName === _utils_string_variables__WEBPACK_IMPORTED_MODULE_5__.categoryNothingToTrain) {
      document.querySelector('.card-train__h1').innerHTML = _utils_string_variables__WEBPACK_IMPORTED_MODULE_5__.categoryNothingToTrain.toUpperCase();
    } else {
      _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';

      if (switchInput.checked) {
        (0,_pages_page_cards_train__WEBPACK_IMPORTED_MODULE_4__["default"])(categoryName);
        setTimeout(function () {
          (0,_event_card_click__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }, 100);
      } else {
        (0,_pages_page_cards_play__WEBPACK_IMPORTED_MODULE_3__["default"])(categoryName);
        (0,_event_game_start__WEBPACK_IMPORTED_MODULE_2__.playMode)();
      }
    }
  }
}

switchMode.addEventListener('click', switchClick);


/***/ }),

/***/ "./src/assets/scripts/main-elements/body-wrapper.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/main-elements/body-wrapper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageBurger": () => (/* binding */ pageBurger),
/* harmony export */   "pageWrapper": () => (/* binding */ pageWrapper)
/* harmony export */ });
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");

var page = document.querySelector('.page');
var pageBurger = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](page, 'div', 'page__burger');
pageBurger.createElem();
var pageWrapper = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](page, 'div', 'page__wrapper');
pageWrapper.createElem();
var pageElements = ['header', 'main', 'footer'];
pageElements.forEach(function (e) {
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](pageWrapper.element, e, [e, "page__".concat(e)]).createElem();
});


/***/ }),

/***/ "./src/assets/scripts/main-elements/burger-menu.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/main-elements/burger-menu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_class_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/class-card */ "./src/assets/scripts/classes/class-card.js");
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* harmony import */ var _events_event_menu_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event-menu-click */ "./src/assets/scripts/events/event-menu-click.js");
/* harmony import */ var _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js");




var headerBurger = document.querySelector('.header__burger');
headerBurger.classList.add('burger');
var burgerLogo = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](headerBurger, 'div', ['burger__logo', 'open']);
burgerLogo.createElem();
new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](burgerLogo.element, 'a', 'burger__logo-name', _utils_string_variables__WEBPACK_IMPORTED_MODULE_3__.categoryMain.toLocaleUpperCase(), [['href', 'https://yuliyashu-english-for-kids.netlify.app/']]).createElem();
var prefixBurgerMenu = 'burger__menu';
var burgerMenu = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](headerBurger, 'div', [prefixBurgerMenu, 'open']);
burgerMenu.createElem();
fetch('./assets/jsons/categories.json').then(function (response) {
  return response.json();
}).then(function (data) {
  for (var i = 0; i < Object.keys(data).length; i += 1) {
    var arrOfValues = Object.values(data);
    var menuItem = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](burgerMenu.element, 'div', ["".concat(prefixBurgerMenu, "-item")]);
    menuItem.createElem();
    new _classes_class_card__WEBPACK_IMPORTED_MODULE_0__["default"](menuItem.element).addImg(arrOfValues[i].url, "".concat(prefixBurgerMenu, "-item-img"), arrOfValues[i].name).addName(arrOfValues[i].name.toUpperCase(), "".concat(prefixBurgerMenu, "-item-name"));
  }

  (0,_events_event_menu_click__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/assets/scripts/main-elements/footer.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/main-elements/footer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js"),
    pageWrapper = _require.pageWrapper;

var _require2 = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js"),
    ElementNew = _require2["default"];

var _require3 = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js"),
    footerInspired = _require3.footerInspired,
    footerAuthor = _require3.footerAuthor,
    footerSchool = _require3.footerSchool;

var footerBlocks = new ElementNew(pageWrapper.element.children[2], 'div', 'footer__blocks');
footerBlocks.createElem();
var arrFooterLinks = [[footerInspired, 'https://www.freepik.com/author/stories'], [footerAuthor, 'https://github.com/YuliyaShu'], [footerSchool, 'https://rs.school/']];

for (var i = 0; i < arrFooterLinks.length; i += 1) {
  new ElementNew(footerBlocks.element, 'a', 'footer__links', arrFooterLinks[i][0], [['href', arrFooterLinks[i][1]]]).createElem();
}

/***/ }),

/***/ "./src/assets/scripts/main-elements/header.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/main-elements/header.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* harmony import */ var _utils_string_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/string-variables */ "./src/assets/scripts/utils/string-variables.js");
/* harmony import */ var _body_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");



var headerBlocks = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](_body_wrapper__WEBPACK_IMPORTED_MODULE_2__.pageWrapper.element.children[0], 'div', 'header__blocks');
headerBlocks.createElem();
var headerElements = ['menu', 'burger', 'switch', 'stat'];
headerElements.forEach(function (e) {
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](headerBlocks.element, 'div', "header__".concat(e), null, [['id', e]]).createElem();
});
var headerMenu = document.querySelector('.header__menu');

for (var i = 1; i < 4; i += 1) {
  var line = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](headerMenu, 'span', ['header__menu-line', 'line']);
  line.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](line.element, 'hr', ['line__hr', "line__hr-".concat(i)]).createElem();
}

var headerSwitch = document.querySelector('.header__switch');
new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](headerSwitch, 'div', 'switch').createElem();
var switchWrapper = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](headerSwitch.children[0], 'label', 'switch__wrapper');
switchWrapper.createElem();
new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](switchWrapper.element, 'input', 'switch__input', null, [['type', 'checkbox']]).createElem();
new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](switchWrapper.element, 'span', ['switch__slider', 'switch__slider_round']).createElem();
new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](switchWrapper.element, 'span', 'switch__mode', null, [['data-on', _utils_string_variables__WEBPACK_IMPORTED_MODULE_1__.play], ['data-off', _utils_string_variables__WEBPACK_IMPORTED_MODULE_1__.train]]).createElem();
var headerStat = document.querySelector('.header__stat');
var linkStat = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](headerStat, 'a', 'header__stat-link', null, [['href', '#']]);
linkStat.createElem();
new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](linkStat.element, 'img', 'header__stat-img', null, [['src', './assets/images/bar-chart.png'], ['alt', 'statistics']]).createElem();


/***/ }),

/***/ "./src/assets/scripts/main-elements/text-to-speech.js":
/*!************************************************************!*\
  !*** ./src/assets/scripts/main-elements/text-to-speech.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textToSpeech(text) {
  var speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en';
  speech.text = text;
  window.speechSynthesis.speak(speech);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textToSpeech);

/***/ }),

/***/ "./src/assets/scripts/pages/page-cards-play.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/pages/page-cards-play.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _classes_class_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/class-card */ "./src/assets/scripts/classes/class-card.js");
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");




function createCardPagePlay(nameOfCategory) {
  var cardCards = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1], 'div', [['main__card-play'], ['card-play']]);
  cardCards.createElem();
  var playPanel = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardCards.element, 'div', 'card-play__panel');
  playPanel.createElem();
  var playBegin = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](playPanel.element, 'div', 'card-play__begin');
  playBegin.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](playBegin.element, 'button', 'card-play__begin-button', 'START').createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](playPanel.element, 'h1', 'card-train__h1', nameOfCategory.toUpperCase()).createElem();
  var playStars = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](playPanel.element, 'div', 'card-play__stars');
  playStars.createElem();

  while (playStars.element.children.length < 8) {
    new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](playStars.element, 'img', 'card-play__stars-star', null, [['src', './assets/images/02icon-star.png'], ['alt', 'star image']]).createElem();
  }

  var cardWrapper = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardCards.element, 'div', 'card-play__wrapper');
  cardWrapper.createElem();
  fetch("./assets/jsons/".concat(nameOfCategory, ".json")).then(function (response) {
    return response.json();
  }).then(function (data) {
    for (var i = 0; i < Object.keys(data).length; i += 1) {
      var arrOfValues = Object.values(data);
      var cardItemFront = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardWrapper.element, 'div', ['card-play__item', "card-play__item-".concat(arrOfValues[i].name)]);
      cardItemFront.createElem();
      new _classes_class_card__WEBPACK_IMPORTED_MODULE_1__["default"](cardItemFront.element).addImg(arrOfValues[i].url, 'card-play__item-img', arrOfValues[i].name).addName(arrOfValues[i].name.toUpperCase(), 'card-play__item-name');
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardPagePlay);

/***/ }),

/***/ "./src/assets/scripts/pages/page-cards-train.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/pages/page-cards-train.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _classes_class_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/class-card */ "./src/assets/scripts/classes/class-card.js");
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* harmony import */ var _events_event_card_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/event-card-click */ "./src/assets/scripts/events/event-card-click.js");





function createCardPageTrain(nameOfCategory) {
  var cardCards = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  cardCards.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardCards.element, 'h1', 'card-train__h1', nameOfCategory.toUpperCase()).createElem();
  var cardWrapper = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardCards.element, 'div', 'card-train__wrapper');
  cardWrapper.createElem();
  fetch("./assets/jsons/".concat(nameOfCategory, ".json")).then(function (response) {
    return response.json();
  }).then(function (data) {
    for (var i = 0; i < Object.keys(data).length; i += 1) {
      var arrOfValues = Object.values(data);
      var cardContainer = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardWrapper.element, 'div', 'card-train__wrapper-container');
      cardContainer.createElem();
      var cardFrontBack = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardContainer.element, 'div', 'card-train__front-back');
      cardFrontBack.createElem();
      var cardItemFront = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardFrontBack.element, 'div', ['card-train__item', "card-train__item-".concat(arrOfValues[i].name)]);
      cardItemFront.createElem();
      var cardItemBack = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardFrontBack.element, 'div', 'card-train__item-back-hidden');
      cardItemBack.createElem();
      new _classes_class_card__WEBPACK_IMPORTED_MODULE_1__["default"](cardItemBack.element).addName(arrOfValues[i].translate, 'card-train__item-back-translate');
      new _classes_class_card__WEBPACK_IMPORTED_MODULE_1__["default"](cardItemFront.element).addImg(arrOfValues[i].url, 'card-train__item-img', arrOfValues[i].name).addName(arrOfValues[i].name.toUpperCase(), 'card-train__item-name').addImg('./assets/images/01icons8-synchronize-150.png', 'card-train__item-rotate', 'rotate icon');
    }

    (0,_events_event_card_click__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardPageTrain);

/***/ }),

/***/ "./src/assets/scripts/pages/page-categories.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/pages/page-categories.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _classes_class_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/class-card */ "./src/assets/scripts/classes/class-card.js");
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* harmony import */ var _events_event_category_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/event-category-click */ "./src/assets/scripts/events/event-category-click.js");





function createCategoryPage() {
  var categoryCards = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1], 'div', [['main-category'], ['category']]);
  categoryCards.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](categoryCards.element, 'h1', 'category__h1', 'english kid'.toUpperCase()).createElem();
  var categoryWrapper = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](categoryCards.element, 'div', 'category__wrapper');
  categoryWrapper.createElem();
  fetch('./assets/jsons/categories.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    for (var i = 0; i < Object.keys(data).length; i += 1) {
      var arrOfValues = Object.values(data);
      var categoryItem = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](categoryWrapper.element, 'div', ['category__item', "category__item-".concat(arrOfValues[i].name)]);
      categoryItem.createElem();
      new _classes_class_card__WEBPACK_IMPORTED_MODULE_1__["default"](categoryItem.element).addImg(arrOfValues[i].url, 'category__item-img', arrOfValues[i].name).addName(arrOfValues[i].name.toUpperCase(), 'category__item-name');
    }

    (0,_events_event_category_click__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  localStorage.setItem('countOfFailed', 0);
  localStorage.setItem('countOfSuccess', 0);
}

createCategoryPage();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCategoryPage);

/***/ }),

/***/ "./src/assets/scripts/pages/page-game-end.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/pages/page-game-end.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFinishPageFailed": () => (/* binding */ createFinishPageFailed),
/* harmony export */   "createFinishPageSuccess": () => (/* binding */ createFinishPageSuccess)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");



function createFinishPageSuccess() {
  var finish = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1], 'div', [['main__finish'], ['finish']]);
  finish.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](finish.element, 'p', 'finish__name', 'You have finished! Wonderful!').createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](finish.element, 'img', 'finish__image', null, [['src', './assets/images/finish-success.jpg'], ['alt', 'success image']]).createElem();
  setTimeout(function () {
    _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';
    document.location.reload();
  }, 7000);
}

function createFinishPageFailed() {
  var finish = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1], 'div', [['main__finish'], ['finish']]);
  finish.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](finish.element, 'p', 'finish__name', 'You can do it better!').createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](finish.element, 'p', 'finish__result', "".concat(localStorage.getItem('countOfFailed'), " of 8 mistake(s)")).createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_1__["default"](finish.element, 'img', 'finish__image', null, [['src', './assets/images/finish-failed.jpg'], ['alt', 'success image']]).createElem();
  localStorage.setItem('countOfSuccess', 0);
  localStorage.setItem('countOfFailed', 0);
  setTimeout(function () {
    _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';
    document.location.reload();
  }, 7000);
}



/***/ }),

/***/ "./src/assets/scripts/pages/page-mistakes-train.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/pages/page-mistakes-train.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _classes_class_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/class-card */ "./src/assets/scripts/classes/class-card.js");
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* eslint-disable max-len */




function createMistakesPageTrain(data) {
  _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1].innerHTML = '';
  var cardCards = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_0__.pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  cardCards.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardCards.element, 'h1', 'card-train__h1', 'train mistakes'.toUpperCase()).createElem();
  var cardWrapper = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardCards.element, 'div', 'card-train__wrapper');
  cardWrapper.createElem();
  data.sort(function (a, b) {
    return b[5] - a[5];
  });
  var i = 0;

  while (i < 8 && data[i][5]) {
    localStorage.setItem("".concat(data[i][1], "Mistake"), 0);
    var cardContainer = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardWrapper.element, 'div', 'card-train__wrapper-container');
    cardContainer.createElem();
    var cardFrontBack = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardContainer.element, 'div', 'card-train__front-back');
    cardFrontBack.createElem();
    var cardItemFront = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardFrontBack.element, 'div', ['card-train__item']);
    cardItemFront.createElem();
    var cardItemBack = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__["default"](cardFrontBack.element, 'div', 'card-train__item-back-hidden');
    cardItemBack.createElem();
    new _classes_class_card__WEBPACK_IMPORTED_MODULE_1__["default"](cardItemBack.element).addName(data[i][2], 'card-train__item-back-translate');
    new _classes_class_card__WEBPACK_IMPORTED_MODULE_1__["default"](cardItemFront.element).addImg(data[i][7], 'card-train__item-img', data[i][1]).addName(data[i][1].toUpperCase(), 'card-train__item-name').addImg('./assets/images/01icons8-synchronize-150.png', 'card-train__item-rotate', 'rotate icon');
    i += 1;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMistakesPageTrain);

/***/ }),

/***/ "./src/assets/scripts/pages/page-stat.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/pages/page-stat.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStatPage": () => (/* binding */ createStatPage),
/* harmony export */   "readData": () => (/* binding */ readData)
/* harmony export */ });
/* harmony import */ var _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* harmony import */ var _events_event_stat_clean_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/event-stat-clean-click */ "./src/assets/scripts/events/event-stat-clean-click.js");
/* harmony import */ var _events_event_stat_train_mistakes_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event-stat-train-mistakes-click */ "./src/assets/scripts/events/event-stat-train-mistakes-click.js");
/* harmony import */ var _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");




var statData = [];
var count = 1;

function readData() {
  fetch('./assets/jsons/categories.json').then(function (response) {
    return response.json();
  }).then(function (dataCategory) {
    Object.keys(dataCategory).forEach(function (category) {
      fetch("./assets/jsons/".concat(category, ".json")).then(function (response) {
        return response.json();
      }).then(function (dataCard) {
        Object.keys(dataCard).forEach(function (card) {
          var correct = +localStorage.getItem("".concat(card, "Correct")) ? +localStorage.getItem("".concat(card, "Correct")) : 0;
          var mistaken = +localStorage.getItem("".concat(card, "Mistake")) ? +localStorage.getItem("".concat(card, "Mistake")) : 0;
          var total = correct + mistaken;
          var percent = total ? Math.round(correct / total * 100) : '-';
          statData.push([]);
          statData[statData.length - 1].push(category, card, dataCard[card].translate, total, correct, mistaken, percent, dataCard[card].url);
        });
      });
    });
  });
}

function fillTable(parent) {
  statData.forEach(function (item) {
    for (var i = 0; i < item.length - 1; i += 1) {
      new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](parent, 'div', ['stat__data'], item[i]).createElem();
    }
  });
}

function sort(index) {
  if (count % 2) {
    if (index < 3) {
      statData.sort(function (a, b) {
        return b[index].localeCompare(a[index]);
      });
    } else {
      statData.sort(function (a, b) {
        return a[index] - b[index];
      });
    }

    count += 1;
  } else {
    if (index < 3) {
      statData.sort(function (a, b) {
        return a[index].localeCompare(b[index]);
      });
    } else {
      statData.sort(function (a, b) {
        return b[index] - a[index];
      });
    }

    count += 1;
  }
}

function createStatPage() {
  var mainWrapper = _main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_3__.pageWrapper.element.children[1];
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper, 'h1', ['category__h1', 'stat__h1'], 'statistics'.toUpperCase()).createElem();
  var statButtons = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper, 'div', 'main__stat-buttons');
  statButtons.createElem();
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](statButtons.element, 'button', 'main__stat-buttons-train', 'TRAIN MISTAKES').createElem();
  (0,_events_event_stat_train_mistakes_click__WEBPACK_IMPORTED_MODULE_2__["default"])(statData);
  new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](statButtons.element, 'button', 'main__stat-buttons-clean', 'CLEAN STATISTICS').createElem();
  (0,_events_event_stat_clean_click__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var statNames = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper, 'div', [['main__stat-wrapper'], ['stat-names']]);
  statNames.createElem();
  var namesOfColumns = ['Category', 'Word', 'Translation', 'Total clicks', 'Correct', 'Mistaken', '% of correct'];
  namesOfColumns.forEach(function (columnName) {
    return new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](statNames.element, 'div', 'stat__column-name', columnName).createElem();
  });
  var cardCards = new _classes_class_html_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper, 'div', [['main__stat-wrapper'], ['stat']]);
  cardCards.createElem();
  readData();
  setTimeout(function () {
    fillTable(cardCards.element);
  }, 100);
  var cap = document.querySelectorAll('.stat__column-name');

  var _loop = function _loop(i) {
    cap[i].addEventListener('click', function () {
      sort(i);
      document.querySelector('.stat').innerHTML = '';
      fillTable(cardCards.element);
    });
  };

  for (var i = 0; i < cap.length; i += 1) {
    _loop(i);
  }
}



/***/ }),

/***/ "./src/assets/scripts/utils/string-variables.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/utils/string-variables.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addElemToParentError": () => (/* binding */ addElemToParentError),
/* harmony export */   "categoryMain": () => (/* binding */ categoryMain),
/* harmony export */   "categoryNothingToTrain": () => (/* binding */ categoryNothingToTrain),
/* harmony export */   "categoryTrain": () => (/* binding */ categoryTrain),
/* harmony export */   "correct": () => (/* binding */ correct),
/* harmony export */   "footerAuthor": () => (/* binding */ footerAuthor),
/* harmony export */   "footerInspired": () => (/* binding */ footerInspired),
/* harmony export */   "footerSchool": () => (/* binding */ footerSchool),
/* harmony export */   "messageToConfirmClear": () => (/* binding */ messageToConfirmClear),
/* harmony export */   "mistake": () => (/* binding */ mistake),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "repeat": () => (/* binding */ repeat),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "textWhenFailed": () => (/* binding */ textWhenFailed),
/* harmony export */   "textWhenSuccess": () => (/* binding */ textWhenSuccess),
/* harmony export */   "train": () => (/* binding */ train),
/* harmony export */   "yes": () => (/* binding */ yes)
/* harmony export */ });
var addElemToParentError = 'Incorrect action parameter in addElemToParent()';
var start = 'START';
var repeat = 'REPEAT';
var play = 'Play';
var train = 'Train';
var yes = 'yes';
var correct = 'Correct';
var mistake = 'Mistake';
var textWhenSuccess = 'You can do it better!';
var textWhenFailed = 'You have finished! Wonderful!';
var messageToConfirmClear = 'Do you definitely want to clear the statistics?';
var categoryMain = 'english kid';
var categoryTrain = 'train mistakes';
var categoryNothingToTrain = 'there is no play mode for mistaken words';
var footerInspired = 'Inspired by storyset';
var footerAuthor = 'YuliyaShu june 2022';
var footerSchool = 'RSSchool';

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _assets_scripts_classes_class_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/classes/class-card */ "./src/assets/scripts/classes/class-card.js");
/* harmony import */ var _assets_scripts_classes_class_html_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/classes/class-html-element */ "./src/assets/scripts/classes/class-html-element.js");
/* harmony import */ var _assets_scripts_main_elements_body_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/main-elements/body-wrapper */ "./src/assets/scripts/main-elements/body-wrapper.js");
/* harmony import */ var _assets_scripts_main_elements_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scripts/main-elements/header */ "./src/assets/scripts/main-elements/header.js");
/* harmony import */ var _assets_scripts_main_elements_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/scripts/main-elements/footer */ "./src/assets/scripts/main-elements/footer.js");
/* harmony import */ var _assets_scripts_main_elements_footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_main_elements_footer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_scripts_main_elements_burger_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/scripts/main-elements/burger-menu */ "./src/assets/scripts/main-elements/burger-menu.js");
/* harmony import */ var _assets_scripts_main_elements_text_to_speech__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/scripts/main-elements/text-to-speech */ "./src/assets/scripts/main-elements/text-to-speech.js");
/* harmony import */ var _assets_scripts_pages_page_cards_train__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/scripts/pages/page-cards-train */ "./src/assets/scripts/pages/page-cards-train.js");
/* harmony import */ var _assets_scripts_pages_page_cards_play__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/scripts/pages/page-cards-play */ "./src/assets/scripts/pages/page-cards-play.js");
/* harmony import */ var _assets_scripts_pages_page_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/scripts/pages/page-categories */ "./src/assets/scripts/pages/page-categories.js");
/* harmony import */ var _assets_scripts_pages_page_game_end__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/scripts/pages/page-game-end */ "./src/assets/scripts/pages/page-game-end.js");
/* harmony import */ var _assets_scripts_pages_page_stat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/scripts/pages/page-stat */ "./src/assets/scripts/pages/page-stat.js");
/* harmony import */ var _assets_scripts_pages_page_mistakes_train__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/scripts/pages/page-mistakes-train */ "./src/assets/scripts/pages/page-mistakes-train.js");
/* harmony import */ var _assets_scripts_events_event_stat_click__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/scripts/events/event-stat-click */ "./src/assets/scripts/events/event-stat-click.js");
/* harmony import */ var _assets_scripts_events_event_stat_clean_click__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/scripts/events/event-stat-clean-click */ "./src/assets/scripts/events/event-stat-clean-click.js");
/* harmony import */ var _assets_scripts_events_event_stat_train_mistakes_click__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/scripts/events/event-stat-train-mistakes-click */ "./src/assets/scripts/events/event-stat-train-mistakes-click.js");
/* harmony import */ var _assets_scripts_events_event_category_click__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/scripts/events/event-category-click */ "./src/assets/scripts/events/event-category-click.js");
/* harmony import */ var _assets_scripts_events_event_menu_click__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/scripts/events/event-menu-click */ "./src/assets/scripts/events/event-menu-click.js");
/* harmony import */ var _assets_scripts_events_event_switch_click__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/scripts/events/event-switch-click */ "./src/assets/scripts/events/event-switch-click.js");
/* harmony import */ var _assets_scripts_events_event_card_click__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/scripts/events/event-card-click */ "./src/assets/scripts/events/event-card-click.js");
/* harmony import */ var _assets_scripts_events_event_game_start__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/scripts/events/event-game-start */ "./src/assets/scripts/events/event-game-start.js");























})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9zY3JpcHRzL2NsYXNzZXMvY2xhc3MtY2FyZC5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvY2xhc3MtaHRtbC1lbGVtZW50LmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvZXZlbnRzL2V2ZW50LWNhcmQtY2xpY2suanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtY2F0ZWdvcnktY2xpY2suanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtZ2FtZS1zdGFydC5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2V2ZW50cy9ldmVudC1tZW51LWNsaWNrLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvZXZlbnRzL2V2ZW50LXN0YXQtY2xlYW4tY2xpY2suanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtc3RhdC1jbGljay5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2V2ZW50cy9ldmVudC1zdGF0LXRyYWluLW1pc3Rha2VzLWNsaWNrLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvZXZlbnRzL2V2ZW50LXN3aXRjaC1jbGljay5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL21haW4tZWxlbWVudHMvYm9keS13cmFwcGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbWFpbi1lbGVtZW50cy9idXJnZXItbWVudS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL21haW4tZWxlbWVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbWFpbi1lbGVtZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvc2NyaXB0cy9tYWluLWVsZW1lbnRzL3RleHQtdG8tc3BlZWNoLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvcGFnZXMvcGFnZS1jYXJkcy1wbGF5LmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvcGFnZXMvcGFnZS1jYXJkcy10cmFpbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL3BhZ2VzL3BhZ2UtY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL3BhZ2VzL3BhZ2UtZ2FtZS1lbmQuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvc2NyaXB0cy9wYWdlcy9wYWdlLW1pc3Rha2VzLXRyYWluLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvcGFnZXMvcGFnZS1zdGF0LmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3NjcmlwdHMvdXRpbHMvc3RyaW5nLXZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbGVtZW50TmV3IGZyb20gJy4vY2xhc3MtaHRtbC1lbGVtZW50JztcclxuXHJcbmNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBhZGRJbWcoaW1nVVJMLCBpbWdDbGFzcywgYWx0VGV4dCkge1xyXG4gICAgbmV3IEVsZW1lbnROZXcodGhpcy5wYXJlbnQsICdpbWcnLCBpbWdDbGFzcywgbnVsbCwgW1snc3JjJywgaW1nVVJMXSwgWydhbHQnLCBhbHRUZXh0XV0pXHJcbiAgICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZE5hbWUobmFtZVRleHQsIG5hbWVDbGFzcykge1xyXG4gICAgbmV3IEVsZW1lbnROZXcodGhpcy5wYXJlbnQsICdwJywgbmFtZUNsYXNzLCBuYW1lVGV4dClcclxuICAgICAgLmNyZWF0ZUVsZW0oKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IHsgYWRkRWxlbVRvUGFyZW50RXJyb3IgfSBmcm9tICcuLi91dGlscy9zdHJpbmctdmFyaWFibGVzJztcclxuXHJcbmNsYXNzIEVsZW1lbnROZXcge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudEVsZW0sIHR5cGUsIGNsYXNzTmFtZSA9IG51bGwsIHRleHRDb250ZW50ID0gbnVsbCwgYXR0cmlidXRlID0gbnVsbCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50RWxlbTtcclxuICAgIHRoaXMuY2xhc3MgPSBjbGFzc05hbWU7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcclxuICAgIHRoaXMudGV4dCA9IHRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5jbGFzcykge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY2xhc3MgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNsYXNzKSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3MuZm9yRWFjaCgoZSkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNsYXNzVG9FbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuY2xhc3MpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3MpO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5jbGFzcykpIHtcclxuICAgICAgICB0aGlzLmNsYXNzLmZvckVhY2goKGUpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRUZXh0Q29udGVudFRvRWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLnRleHQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkQXR0cmlidXRlVG9FbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuYXR0cmlidXRlKSB7XHJcbiAgICAgIHRoaXMuYXR0cmlidXRlLmZvckVhY2goKGUpID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoZVswXSwgZVsxXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRFbGVtVG9QYXJlbnQoYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICBjYXNlICdhcHBlbmQnOlxyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwcmVwZW5kJzpcclxuICAgICAgICB0aGlzLnBhcmVudC5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGFkZEVsZW1Ub1BhcmVudEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbShhY3Rpb24gPSAnYXBwZW5kJykge1xyXG4gICAgdGhpc1xyXG4gICAgICAuYWRkQ2xhc3NUb0VsZW1lbnQoKVxyXG4gICAgICAuYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQoKVxyXG4gICAgICAuYWRkQXR0cmlidXRlVG9FbGVtZW50KClcclxuICAgICAgLmFkZEVsZW1Ub1BhcmVudChhY3Rpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudE5ldztcclxuIiwiaW1wb3J0IHRleHRUb1NwZWVjaCBmcm9tICcuLi9tYWluLWVsZW1lbnRzL3RleHQtdG8tc3BlZWNoJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrKCkge1xyXG4gIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtdHJhaW5fX2l0ZW0nKTtcclxuXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBjYXJkSXRlbS5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgY2FyZEl0ZW1bal0uYWRkRXZlbnRMaXN0ZW5lcigoJ2NsaWNrJyksIChldmVudENhcmQpID0+IHtcclxuICAgICAgY29uc3QgY2FyZFJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXRyYWluX19pdGVtLXJvdGF0ZScpO1xyXG4gICAgICBpZiAoZXZlbnRDYXJkLnRhcmdldCA9PT0gY2FyZEl0ZW1bal0pIHtcclxuICAgICAgICBjb25zdCBjYXJkQ2xpY2tlZDEgPSBldmVudENhcmQudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRleHRUb1NwZWVjaChjYXJkQ2xpY2tlZDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50Q2FyZC50YXJnZXQgPT09IGNhcmRSb3RhdGVbal0pIHtcclxuICAgICAgICBjb25zdCBjYXJkSXRlbUZyb250QmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXRyYWluX19mcm9udC1iYWNrJyk7XHJcbiAgICAgICAgY2FyZEl0ZW1Gcm9udEJhY2tbal0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XHJcbiAgICAgICAgY29uc3QgY2FyZEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC10cmFpbl9faXRlbS1iYWNrLWhpZGRlbicpO1xyXG4gICAgICAgIGNhcmRCYWNrW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgY2FyZEl0ZW1Gcm9udEJhY2tbal0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVkoMGRlZyknO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNhcmRDbGlja2VkMiA9IGV2ZW50Q2FyZC50YXJnZXQucGFyZW50RWxlbWVudC5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0ZXh0VG9TcGVlY2goY2FyZENsaWNrZWQyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGljaztcclxuIiwiaW1wb3J0IHsgcGFnZVdyYXBwZXIgfSBmcm9tICcuLi9tYWluLWVsZW1lbnRzL2JvZHktd3JhcHBlcic7XHJcbmltcG9ydCBjcmVhdGVDYXJkUGFnZVRyYWluIGZyb20gJy4uL3BhZ2VzL3BhZ2UtY2FyZHMtdHJhaW4nO1xyXG5pbXBvcnQgY3JlYXRlQ2FyZFBhZ2VQbGF5IGZyb20gJy4uL3BhZ2VzL3BhZ2UtY2FyZHMtcGxheSc7XHJcbmltcG9ydCB7IHBsYXlNb2RlIH0gZnJvbSAnLi9ldmVudC1nYW1lLXN0YXJ0JztcclxuXHJcbmZ1bmN0aW9uIGV2ZW50Q2F0ZWdvcnlDbGljaygpIHtcclxuICBjb25zdCBjYXRlZ29yeUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5X19pdGVtJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjYXRlZ29yeUl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoKCdjbGljaycpLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY2F0ZWdvcnlJdGVtc1tpXSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q2xpY2tlZDEgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX2lucHV0JykuY2hlY2tlZCkge1xyXG4gICAgICAgICAgY3JlYXRlQ2FyZFBhZ2VUcmFpbihjYXRlZ29yeUNsaWNrZWQxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3JlYXRlQ2FyZFBhZ2VQbGF5KGNhdGVnb3J5Q2xpY2tlZDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNsaWNrZWQyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX2lucHV0JykuY2hlY2tlZCkge1xyXG4gICAgICAgICAgY3JlYXRlQ2FyZFBhZ2VUcmFpbihjYXRlZ29yeUNsaWNrZWQyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3JlYXRlQ2FyZFBhZ2VQbGF5KGNhdGVnb3J5Q2xpY2tlZDIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXlNb2RlKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudENhdGVnb3J5Q2xpY2s7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmltcG9ydCB7IHBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVGaW5pc2hQYWdlRmFpbGVkLCBjcmVhdGVGaW5pc2hQYWdlU3VjY2VzcyB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UtZ2FtZS1lbmQnO1xyXG5pbXBvcnQgdGV4dFRvU3BlZWNoIGZyb20gJy4uL21haW4tZWxlbWVudHMvdGV4dC10by1zcGVlY2gnO1xyXG5pbXBvcnQge1xyXG4gIGNvcnJlY3QsIG1pc3Rha2UsIHJlcGVhdCwgc3RhcnQsIHRleHRXaGVuRmFpbGVkLCB0ZXh0V2hlblN1Y2Nlc3MsIHllcyxcclxufSBmcm9tICcuLi91dGlscy9zdHJpbmctdmFyaWFibGVzJztcclxuXHJcbmxldCBjb3VudE9mTm8gPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRDbGljaygpIHtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBsYXlfX2JlZ2luLWJ1dHRvbicpO1xyXG4gIGlmIChzdGFydEJ1dHRvbikge1xyXG4gICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FyZC1wbGF5X19jb250aW51ZS1idXR0b24nKTtcclxuICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmQtcGxheV9fYmVnaW4tYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgbmFtZU9mQ2FyZHMgPSBbXTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXBsYXlfX2l0ZW0tbmFtZScpLmZvckVhY2goKGl0ZW0pID0+IG5hbWVPZkNhcmRzLnB1c2goaXRlbS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSkpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lT2ZDYXJkcycsIG5hbWVPZkNhcmRzKTtcclxuICAgIGlmIChzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9PT0gc3RhcnQpIHtcclxuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmFtZU9mQ2FyZHMubGVuZ3RoKTtcclxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBuYW1lT2ZDYXJkc1tyYW5kb21dO1xyXG4gICAgICB0ZXh0VG9TcGVlY2goaXRlbU5hbWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZWRTb3VuZCcsIGl0ZW1OYW1lKTtcclxuICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSByZXBlYXQ7XHJcbiAgICAgIGd1ZXNzQ2xpY2soaXRlbU5hbWUpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBnZXRTb3VuZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlZFNvdW5kJyk7XHJcbiAgICB0ZXh0VG9TcGVlY2goZ2V0U291bmQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheU1vZGUoKSB7XHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wbGF5X19iZWdpbi1idXR0b24nKTtcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0Q2xpY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGljayhldmVudENhcmQpIHtcclxuICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBsYXlfX2NvbnRpbnVlLWJ1dHRvbicpO1xyXG4gIGNvbnN0IG5hbWUxID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IGNhcmRDbGljayA9IChldmVudENhcmQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2ltZycpXHJcbiAgICA/IGV2ZW50Q2FyZC50YXJnZXQuY2hpbGRyZW5bMV0uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKClcclxuICAgIDogZXZlbnRDYXJkLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IGNhcmRJdGVtID0gKGV2ZW50Q2FyZC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW1nJylcclxuICAgID8gZXZlbnRDYXJkLnRhcmdldFxyXG4gICAgOiBldmVudENhcmQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgaWYgKG5hbWUxID09PSBjYXJkQ2xpY2spIHtcclxuICAgIHRleHRUb1NwZWVjaCh5ZXMpO1xyXG4gICAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSBzdGFydDtcclxuICAgIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGxheV9faXRlbS1pbmFjdGl2ZScpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1wbGF5X19pdGVtJyk7XHJcbiAgICBsZXQgbmFtZUNvcnJlY3QgPSAoK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25hbWUxfSR7Y29ycmVjdH1gKSlcclxuICAgICAgPyArbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bmFtZTF9JHtjb3JyZWN0fWApXHJcbiAgICAgIDogMDtcclxuICAgIG5hbWVDb3JyZWN0ICs9IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuYW1lMX0ke2NvcnJlY3R9YCwgbmFtZUNvcnJlY3QpO1xyXG4gICAgcGxheU1vZGVDb250aW51ZShuYW1lMSk7XHJcbiAgICBpZiAoY291bnRPZk5vKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtcGxheV9fc3RhcnMtc3RhcicpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChzdGFyc1tpXS5zcmMuc3BsaXQoJy8nKS5zbGljZSgtMSkuam9pbigpID09PSAnMDJpY29uLXN0YXIucG5nJykge1xyXG4gICAgICAgICAgc3RhcnNbaV0uc3JjID0gJy4vYXNzZXRzL2ltYWdlcy8wMmljb24tc3Rhci1ncmVlbi5wbmcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb3VudE9mTm8gPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoY291bnRPZk5vKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDb3VudE9mRmFpbGVkID0gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3VudE9mRmFpbGVkJyk7XHJcbiAgICAgIGNvbnN0IG5ld0NvdW50T2ZGYWlsZWQgPSBjdXJyZW50Q291bnRPZkZhaWxlZCArIDE7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3VudE9mRmFpbGVkJywgbmV3Q291bnRPZkZhaWxlZCk7XHJcbiAgICAgIGNvdW50T2ZObyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG5hbWVNaXN0YWtlID0gKCtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuYW1lMX0ke21pc3Rha2V9YCkpXHJcbiAgICAgID8gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25hbWUxfSR7bWlzdGFrZX1gKVxyXG4gICAgICA6IDA7XHJcbiAgICBuYW1lTWlzdGFrZSArPSAxO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7bmFtZTF9JHttaXN0YWtlfWAsIG5hbWVNaXN0YWtlKTtcclxuICAgIHRleHRUb1NwZWVjaCgnbm8nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGd1ZXNzQ2xpY2sobmFtZSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgbmFtZSk7XHJcbiAgY29uc3QgY2FyZFBsYXlXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcGxheV9fd3JhcHBlcicpO1xyXG5cclxuICBjYXJkUGxheVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlNb2RlQ29udGludWUobmFtZUluY29tZSkge1xyXG4gIGNvbnN0IG5hbWVPZkNhcmRzQ29udGludWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZU9mQ2FyZHMnKS5zcGxpdCgnLCcpO1xyXG4gIGlmIChuYW1lT2ZDYXJkc0NvbnRpbnVlLmluY2x1ZGVzKG5hbWVJbmNvbWUpKSB7XHJcbiAgICBuYW1lT2ZDYXJkc0NvbnRpbnVlLnNwbGljZShuYW1lT2ZDYXJkc0NvbnRpbnVlLmluZGV4T2YobmFtZUluY29tZSksIDEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWVPZkNhcmRzJywgbmFtZU9mQ2FyZHNDb250aW51ZSk7XHJcbiAgfVxyXG4gIGlmICghbmFtZU9mQ2FyZHNDb250aW51ZS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGNhcmRJdGVtSW5hY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1wbGF5X19pdGVtLWluYWN0aXZlJyk7XHJcbiAgICBmb3IgKGxldCBoID0gMDsgaCA8IGNhcmRJdGVtSW5hY3RpdmUubGVuZ3RoOyBoICs9IDEpIHtcclxuICAgICAgY2FyZEl0ZW1JbmFjdGl2ZVtoXS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLXBsYXlfX2l0ZW0taW5hY3RpdmUnKTtcclxuICAgICAgY2FyZEl0ZW1JbmFjdGl2ZVtoXS5jbGFzc0xpc3QuYWRkKCdjYXJkLXBsYXlfX2l0ZW0nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcGxheV9fY29udGludWUtYnV0dG9uJyk7XHJcbiAgICBjb250aW51ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLXBsYXlfX2NvbnRpbnVlLWJ1dHRvbicpO1xyXG4gICAgY29udGludWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FyZC1wbGF5X19iZWdpbi1idXR0b24nKTtcclxuICAgIHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdW50T2ZGYWlsZWQnKSA+IDApIHtcclxuICAgICAgdGV4dFRvU3BlZWNoKHRleHRXaGVuU3VjY2Vzcyk7XHJcbiAgICAgIGNyZWF0ZUZpbmlzaFBhZ2VGYWlsZWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRUb1NwZWVjaCh0ZXh0V2hlbkZhaWxlZCk7XHJcbiAgICAgIGNyZWF0ZUZpbmlzaFBhZ2VTdWNjZXNzKCk7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRPZkZhaWxlZCcsIDApO1xyXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1wbGF5X19zdGFycy1zdGFyJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xyXG4gICAgICBzdGFyc1tpXS5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzLzAyaWNvbi1zdGFyLWdyZWVuLnBuZyc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcGxheV9fY29udGludWUtYnV0dG9uJyk7XHJcbiAgICBpZiAoY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPT09IHN0YXJ0KSB7XHJcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5hbWVPZkNhcmRzQ29udGludWUubGVuZ3RoKTtcclxuICAgICAgdGV4dFRvU3BlZWNoKG5hbWVPZkNhcmRzQ29udGludWVbcmFuZG9tXSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZFNvdW5kJywgbmFtZU9mQ2FyZHNDb250aW51ZVtyYW5kb21dKTtcclxuICAgICAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSByZXBlYXQ7XHJcbiAgICAgIGd1ZXNzQ2xpY2sobmFtZU9mQ2FyZHNDb250aW51ZVtyYW5kb21dKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBsYXlNb2RlLCBndWVzc0NsaWNrLCBwbGF5TW9kZUNvbnRpbnVlIH07XHJcbiIsImltcG9ydCB7IHBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBwbGF5TW9kZSB9IGZyb20gJy4vZXZlbnQtZ2FtZS1zdGFydCc7XHJcbmltcG9ydCBjcmVhdGVDYXJkUGFnZVBsYXkgZnJvbSAnLi4vcGFnZXMvcGFnZS1jYXJkcy1wbGF5JztcclxuaW1wb3J0IGNyZWF0ZUNhcmRQYWdlVHJhaW4gZnJvbSAnLi4vcGFnZXMvcGFnZS1jYXJkcy10cmFpbic7XHJcblxyXG5jb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xyXG5mdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufVxyXG5cclxuaGVhZGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCgnY2xpY2snKSwgdG9nZ2xlKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19idXJnZXInKS5hZGRFdmVudExpc3RlbmVyKCgnY2xpY2snKSwgdG9nZ2xlKTtcclxuXHJcbmZ1bmN0aW9uIGV2ZW50TWVudUNsaWNrKCkge1xyXG4gIGNvbnN0IGJ1cmdlck1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXJnZXJfX21lbnUtaXRlbScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVyZ2VyTWVudUl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBidXJnZXJNZW51SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcigoJ2NsaWNrJyksIChldmVudE1lbnUpID0+IHtcclxuICAgICAgaWYgKGV2ZW50TWVudS50YXJnZXQgPT09IGJ1cmdlck1lbnVJdGVtc1tpXSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVDbGlja2VkMSA9IGV2ZW50TWVudS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0b2dnbGUoKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX2lucHV0JykuY2hlY2tlZCkge1xyXG4gICAgICAgICAgY3JlYXRlQ2FyZFBhZ2VUcmFpbihtZW51Q2xpY2tlZDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjcmVhdGVDYXJkUGFnZVBsYXkobWVudUNsaWNrZWQxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVudUNsaWNrZWQyID0gZXZlbnRNZW51LnRhcmdldC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdG9nZ2xlKCk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoX19pbnB1dCcpLmNoZWNrZWQpIHtcclxuICAgICAgICAgIGNyZWF0ZUNhcmRQYWdlVHJhaW4obWVudUNsaWNrZWQyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3JlYXRlQ2FyZFBhZ2VQbGF5KG1lbnVDbGlja2VkMik7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcGxheU1vZGUoKTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWVudUNsaWNrO1xyXG4iLCJpbXBvcnQgeyBjb3JyZWN0LCBtZXNzYWdlVG9Db25maXJtQ2xlYXIsIG1pc3Rha2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmctdmFyaWFibGVzJztcclxuXHJcbmZ1bmN0aW9uIGNsZWFuU3RhdCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fc3RhdC1idXR0b25zLWNsZWFuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybShtZXNzYWdlVG9Db25maXJtQ2xlYXIpKSB7XHJcbiAgICAgICAgZmV0Y2goJy4vYXNzZXRzL2pzb25zL2NhdGVnb3JpZXMuanNvbicpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhQ2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YUNhdGVnb3J5KS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgIGZldGNoKGAuL2Fzc2V0cy9qc29ucy8ke2NhdGVnb3J5fS5qc29uYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFDYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGFDYXJkKS5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y2FyZH0ke2NvcnJlY3R9YCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y2FyZH0ke21pc3Rha2V9YCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhblN0YXQ7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0YXRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcGFnZS1zdGF0JztcclxuaW1wb3J0IHsgcGFnZVdyYXBwZXIgfSBmcm9tICcuLi9tYWluLWVsZW1lbnRzL2JvZHktd3JhcHBlcic7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zdGF0JylcclxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwYWdlV3JhcHBlci5lbGVtZW50LmNoaWxkcmVuWzFdLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY3JlYXRlU3RhdFBhZ2UoKTtcclxuICB9KTtcclxuIiwiaW1wb3J0IGNyZWF0ZU1pc3Rha2VzUGFnZVRyYWluIGZyb20gJy4uL3BhZ2VzL3BhZ2UtbWlzdGFrZXMtdHJhaW4nO1xyXG5pbXBvcnQgY2xpY2sgZnJvbSAnLi9ldmVudC1jYXJkLWNsaWNrJztcclxuXHJcbmZ1bmN0aW9uIHRyYWluTWlzdGFrZXNTdGF0KGRhdGEpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fc3RhdC1idXR0b25zLXRyYWluJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY3JlYXRlTWlzdGFrZXNQYWdlVHJhaW4oZGF0YSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsaWNrKCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHJhaW5NaXN0YWtlc1N0YXQ7XHJcbiIsImltcG9ydCB7IHBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgY2xpY2sgZnJvbSAnLi9ldmVudC1jYXJkLWNsaWNrJztcclxuaW1wb3J0IHsgcGxheU1vZGUgfSBmcm9tICcuL2V2ZW50LWdhbWUtc3RhcnQnO1xyXG5pbXBvcnQgY3JlYXRlQ2FyZFBhZ2VQbGF5IGZyb20gJy4uL3BhZ2VzL3BhZ2UtY2FyZHMtcGxheSc7XHJcbmltcG9ydCBjcmVhdGVDYXJkUGFnZVRyYWluIGZyb20gJy4uL3BhZ2VzL3BhZ2UtY2FyZHMtdHJhaW4nO1xyXG5pbXBvcnQgeyBjYXRlZ29yeU1haW4sIGNhdGVnb3J5Tm90aGluZ1RvVHJhaW4sIGNhdGVnb3J5VHJhaW4gfSBmcm9tICcuLi91dGlscy9zdHJpbmctdmFyaWFibGVzJztcclxuXHJcbmNvbnN0IHN3aXRjaE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoX19tb2RlJyk7XHJcbmNvbnN0IHN3aXRjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaF9faW5wdXQnKTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENsaWNrKCkge1xyXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10cmFpbl9faDEnKSlcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHJhaW5fX2gxJykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxyXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnlfX2gxJykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoY2F0ZWdvcnlOYW1lICE9PSBjYXRlZ29yeU1haW4pIHtcclxuICAgIGlmIChjYXRlZ29yeU5hbWUgPT09IGNhdGVnb3J5VHJhaW4gfHwgY2F0ZWdvcnlOYW1lID09PSBjYXRlZ29yeU5vdGhpbmdUb1RyYWluKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRyYWluX19oMScpLmlubmVySFRNTCA9IGNhdGVnb3J5Tm90aGluZ1RvVHJhaW4udG9VcHBlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGlmIChzd2l0Y2hJbnB1dC5jaGVja2VkKSB7XHJcbiAgICAgICAgY3JlYXRlQ2FyZFBhZ2VUcmFpbihjYXRlZ29yeU5hbWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY2xpY2soKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUNhcmRQYWdlUGxheShjYXRlZ29yeU5hbWUpO1xyXG4gICAgICAgIHBsYXlNb2RlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuc3dpdGNoTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaENsaWNrKTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIiwiaW1wb3J0IEVsZW1lbnROZXcgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1odG1sLWVsZW1lbnQnO1xyXG5cclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbmNvbnN0IHBhZ2VCdXJnZXIgPSBuZXcgRWxlbWVudE5ldyhwYWdlLCAnZGl2JywgJ3BhZ2VfX2J1cmdlcicpO1xyXG5wYWdlQnVyZ2VyLmNyZWF0ZUVsZW0oKTtcclxuY29uc3QgcGFnZVdyYXBwZXIgPSBuZXcgRWxlbWVudE5ldyhwYWdlLCAnZGl2JywgJ3BhZ2VfX3dyYXBwZXInKTtcclxucGFnZVdyYXBwZXIuY3JlYXRlRWxlbSgpO1xyXG5jb25zdCBwYWdlRWxlbWVudHMgPSBbJ2hlYWRlcicsICdtYWluJywgJ2Zvb3RlciddO1xyXG5wYWdlRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gIG5ldyBFbGVtZW50TmV3KHBhZ2VXcmFwcGVyLmVsZW1lbnQsIGUsIFtlLCBgcGFnZV9fJHtlfWBdKVxyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBwYWdlV3JhcHBlciwgcGFnZUJ1cmdlciB9O1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWNhcmQnO1xyXG5pbXBvcnQgRWxlbWVudE5ldyBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWh0bWwtZWxlbWVudCc7XHJcbmltcG9ydCBldmVudE1lbnVDbGljayBmcm9tICcuLi9ldmVudHMvZXZlbnQtbWVudS1jbGljayc7XHJcbmltcG9ydCB7IGNhdGVnb3J5TWFpbiB9IGZyb20gJy4uL3V0aWxzL3N0cmluZy12YXJpYWJsZXMnO1xyXG5cclxuY29uc3QgaGVhZGVyQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XHJcbmhlYWRlckJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXInKTtcclxuXHJcbmNvbnN0IGJ1cmdlckxvZ28gPSBuZXcgRWxlbWVudE5ldyhoZWFkZXJCdXJnZXIsICdkaXYnLCBbJ2J1cmdlcl9fbG9nbycsICdvcGVuJ10pO1xyXG5idXJnZXJMb2dvXHJcbiAgLmNyZWF0ZUVsZW0oKTtcclxubmV3IEVsZW1lbnROZXcoYnVyZ2VyTG9nby5lbGVtZW50LCAnYScsICdidXJnZXJfX2xvZ28tbmFtZScsIGNhdGVnb3J5TWFpbi50b0xvY2FsZVVwcGVyQ2FzZSgpLCBbWydocmVmJywgJ2h0dHBzOi8veXVsaXlhc2h1LWVuZ2xpc2gtZm9yLWtpZHMubmV0bGlmeS5hcHAvJ11dKVxyXG4gIC5jcmVhdGVFbGVtKCk7XHJcblxyXG5jb25zdCBwcmVmaXhCdXJnZXJNZW51ID0gJ2J1cmdlcl9fbWVudSc7XHJcbmNvbnN0IGJ1cmdlck1lbnUgPSBuZXcgRWxlbWVudE5ldyhoZWFkZXJCdXJnZXIsICdkaXYnLCBbcHJlZml4QnVyZ2VyTWVudSwgJ29wZW4nXSk7XHJcbmJ1cmdlck1lbnVcclxuICAuY3JlYXRlRWxlbSgpO1xyXG5cclxuZmV0Y2goJy4vYXNzZXRzL2pzb25zL2NhdGVnb3JpZXMuanNvbicpXHJcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgYXJyT2ZWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgICBjb25zdCBtZW51SXRlbSA9IG5ldyBFbGVtZW50TmV3KGJ1cmdlck1lbnUuZWxlbWVudCwgJ2RpdicsIFtgJHtwcmVmaXhCdXJnZXJNZW51fS1pdGVtYF0pO1xyXG4gICAgICBtZW51SXRlbS5jcmVhdGVFbGVtKCk7XHJcbiAgICAgIG5ldyBDYXJkKG1lbnVJdGVtLmVsZW1lbnQpXHJcbiAgICAgICAgLmFkZEltZyhhcnJPZlZhbHVlc1tpXS51cmwsIGAke3ByZWZpeEJ1cmdlck1lbnV9LWl0ZW0taW1nYCwgYXJyT2ZWYWx1ZXNbaV0ubmFtZSlcclxuICAgICAgICAuYWRkTmFtZShhcnJPZlZhbHVlc1tpXS5uYW1lLnRvVXBwZXJDYXNlKCksIGAke3ByZWZpeEJ1cmdlck1lbnV9LWl0ZW0tbmFtZWApO1xyXG4gICAgfVxyXG4gICAgZXZlbnRNZW51Q2xpY2soKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIiwiY29uc3QgeyBwYWdlV3JhcHBlciB9ID0gcmVxdWlyZSgnLi9ib2R5LXdyYXBwZXInKTtcclxuY29uc3QgeyBkZWZhdWx0OiBFbGVtZW50TmV3IH0gPSByZXF1aXJlKCcuLi9jbGFzc2VzL2NsYXNzLWh0bWwtZWxlbWVudCcpO1xyXG5jb25zdCB7IGZvb3Rlckluc3BpcmVkLCBmb290ZXJBdXRob3IsIGZvb3RlclNjaG9vbCB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvc3RyaW5nLXZhcmlhYmxlcycpO1xyXG5cclxuY29uc3QgZm9vdGVyQmxvY2tzID0gbmV3IEVsZW1lbnROZXcocGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsyXSwgJ2RpdicsICdmb290ZXJfX2Jsb2NrcycpO1xyXG5mb290ZXJCbG9ja3MuY3JlYXRlRWxlbSgpO1xyXG5cclxuY29uc3QgYXJyRm9vdGVyTGlua3MgPSBbXHJcbiAgW2Zvb3Rlckluc3BpcmVkLCAnaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vYXV0aG9yL3N0b3JpZXMnXSxcclxuICBbZm9vdGVyQXV0aG9yLCAnaHR0cHM6Ly9naXRodWIuY29tL1l1bGl5YVNodSddLFxyXG4gIFtmb290ZXJTY2hvb2wsICdodHRwczovL3JzLnNjaG9vbC8nXSxcclxuXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGb290ZXJMaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gIG5ldyBFbGVtZW50TmV3KGZvb3RlckJsb2Nrcy5lbGVtZW50LCAnYScsICdmb290ZXJfX2xpbmtzJywgYXJyRm9vdGVyTGlua3NbaV1bMF0sIFtbJ2hyZWYnLCBhcnJGb290ZXJMaW5rc1tpXVsxXV1dKS5jcmVhdGVFbGVtKCk7XHJcbn1cclxuIiwiaW1wb3J0IEVsZW1lbnROZXcgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1odG1sLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBwbGF5LCB0cmFpbiB9IGZyb20gJy4uL3V0aWxzL3N0cmluZy12YXJpYWJsZXMnO1xyXG5pbXBvcnQgeyBwYWdlV3JhcHBlciB9IGZyb20gJy4vYm9keS13cmFwcGVyJztcclxuXHJcbmNvbnN0IGhlYWRlckJsb2NrcyA9IG5ldyBFbGVtZW50TmV3KHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMF0sICdkaXYnLCAnaGVhZGVyX19ibG9ja3MnKTtcclxuaGVhZGVyQmxvY2tzLmNyZWF0ZUVsZW0oKTtcclxuXHJcbmNvbnN0IGhlYWRlckVsZW1lbnRzID0gWydtZW51JywgJ2J1cmdlcicsICdzd2l0Y2gnLCAnc3RhdCddO1xyXG5oZWFkZXJFbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgbmV3IEVsZW1lbnROZXcoaGVhZGVyQmxvY2tzLmVsZW1lbnQsICdkaXYnLCBgaGVhZGVyX18ke2V9YCwgbnVsbCwgW1snaWQnLCBlXV0pXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG59KTtcclxuY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKTtcclxuXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSArPSAxKSB7XHJcbiAgY29uc3QgbGluZSA9IG5ldyBFbGVtZW50TmV3KGhlYWRlck1lbnUsICdzcGFuJywgWydoZWFkZXJfX21lbnUtbGluZScsICdsaW5lJ10pO1xyXG4gIGxpbmVcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgbmV3IEVsZW1lbnROZXcobGluZS5lbGVtZW50LCAnaHInLCBbJ2xpbmVfX2hyJywgYGxpbmVfX2hyLSR7aX1gXSlcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlclN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3N3aXRjaCcpO1xyXG5uZXcgRWxlbWVudE5ldyhoZWFkZXJTd2l0Y2gsICdkaXYnLCAnc3dpdGNoJylcclxuICAuY3JlYXRlRWxlbSgpO1xyXG5jb25zdCBzd2l0Y2hXcmFwcGVyID0gbmV3IEVsZW1lbnROZXcoaGVhZGVyU3dpdGNoLmNoaWxkcmVuWzBdLCAnbGFiZWwnLCAnc3dpdGNoX193cmFwcGVyJyk7XHJcbnN3aXRjaFdyYXBwZXJcclxuICAuY3JlYXRlRWxlbSgpO1xyXG5uZXcgRWxlbWVudE5ldyhzd2l0Y2hXcmFwcGVyLmVsZW1lbnQsICdpbnB1dCcsICdzd2l0Y2hfX2lucHV0JywgbnVsbCwgW1sndHlwZScsICdjaGVja2JveCddXSlcclxuICAuY3JlYXRlRWxlbSgpO1xyXG5uZXcgRWxlbWVudE5ldyhzd2l0Y2hXcmFwcGVyLmVsZW1lbnQsICdzcGFuJywgWydzd2l0Y2hfX3NsaWRlcicsICdzd2l0Y2hfX3NsaWRlcl9yb3VuZCddKVxyXG4gIC5jcmVhdGVFbGVtKCk7XHJcbm5ldyBFbGVtZW50TmV3KHN3aXRjaFdyYXBwZXIuZWxlbWVudCwgJ3NwYW4nLCAnc3dpdGNoX19tb2RlJywgbnVsbCwgW1snZGF0YS1vbicsIHBsYXldLCBbJ2RhdGEtb2ZmJywgdHJhaW5dXSlcclxuICAuY3JlYXRlRWxlbSgpO1xyXG5cclxuY29uc3QgaGVhZGVyU3RhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3N0YXQnKTtcclxuY29uc3QgbGlua1N0YXQgPSBuZXcgRWxlbWVudE5ldyhoZWFkZXJTdGF0LCAnYScsICdoZWFkZXJfX3N0YXQtbGluaycsIG51bGwsIFtbJ2hyZWYnLCAnIyddXSk7XHJcbmxpbmtTdGF0XHJcbiAgLmNyZWF0ZUVsZW0oKTtcclxubmV3IEVsZW1lbnROZXcobGlua1N0YXQuZWxlbWVudCwgJ2ltZycsICdoZWFkZXJfX3N0YXQtaW1nJywgbnVsbCwgW1snc3JjJywgJy4vYXNzZXRzL2ltYWdlcy9iYXItY2hhcnQucG5nJ10sIFsnYWx0JywgJ3N0YXRpc3RpY3MnXV0pXHJcbiAgLmNyZWF0ZUVsZW0oKTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIiwiZnVuY3Rpb24gdGV4dFRvU3BlZWNoKHRleHQpIHtcclxuICBjb25zdCBzcGVlY2ggPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHQpO1xyXG4gIHNwZWVjaC5sYW5nID0gJ2VuJztcclxuICBzcGVlY2gudGV4dCA9IHRleHQ7XHJcbiAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5zcGVhayhzcGVlY2gpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXh0VG9TcGVlY2g7XHJcbiIsImltcG9ydCB7IHBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWNhcmQnO1xyXG5pbXBvcnQgRWxlbWVudE5ldyBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWh0bWwtZWxlbWVudCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkUGFnZVBsYXkobmFtZU9mQ2F0ZWdvcnkpIHtcclxuICBjb25zdCBjYXJkQ2FyZHMgPSBuZXcgRWxlbWVudE5ldyhwYWdlV3JhcHBlci5lbGVtZW50LmNoaWxkcmVuWzFdLCAnZGl2JywgW1snbWFpbl9fY2FyZC1wbGF5J10sIFsnY2FyZC1wbGF5J11dKTtcclxuICBjYXJkQ2FyZHNcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgY29uc3QgcGxheVBhbmVsID0gbmV3IEVsZW1lbnROZXcoY2FyZENhcmRzLmVsZW1lbnQsICdkaXYnLCAnY2FyZC1wbGF5X19wYW5lbCcpO1xyXG4gIHBsYXlQYW5lbFxyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuICBjb25zdCBwbGF5QmVnaW4gPSBuZXcgRWxlbWVudE5ldyhwbGF5UGFuZWwuZWxlbWVudCwgJ2RpdicsICdjYXJkLXBsYXlfX2JlZ2luJyk7XHJcbiAgcGxheUJlZ2luXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIG5ldyBFbGVtZW50TmV3KHBsYXlCZWdpbi5lbGVtZW50LCAnYnV0dG9uJywgJ2NhcmQtcGxheV9fYmVnaW4tYnV0dG9uJywgJ1NUQVJUJylcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgbmV3IEVsZW1lbnROZXcocGxheVBhbmVsLmVsZW1lbnQsICdoMScsICdjYXJkLXRyYWluX19oMScsIG5hbWVPZkNhdGVnb3J5LnRvVXBwZXJDYXNlKCkpXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIGNvbnN0IHBsYXlTdGFycyA9IG5ldyBFbGVtZW50TmV3KHBsYXlQYW5lbC5lbGVtZW50LCAnZGl2JywgJ2NhcmQtcGxheV9fc3RhcnMnKTtcclxuICBwbGF5U3RhcnMuY3JlYXRlRWxlbSgpO1xyXG4gIHdoaWxlIChwbGF5U3RhcnMuZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPCA4KSB7XHJcbiAgICBuZXcgRWxlbWVudE5ldyhwbGF5U3RhcnMuZWxlbWVudCwgJ2ltZycsICdjYXJkLXBsYXlfX3N0YXJzLXN0YXInLCBudWxsLCBbWydzcmMnLCAnLi9hc3NldHMvaW1hZ2VzLzAyaWNvbi1zdGFyLnBuZyddLCBbJ2FsdCcsICdzdGFyIGltYWdlJ11dKVxyXG4gICAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIH1cclxuICBjb25zdCBjYXJkV3JhcHBlciA9IG5ldyBFbGVtZW50TmV3KGNhcmRDYXJkcy5lbGVtZW50LCAnZGl2JywgJ2NhcmQtcGxheV9fd3JhcHBlcicpO1xyXG4gIGNhcmRXcmFwcGVyXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG5cclxuICBmZXRjaChgLi9hc3NldHMvanNvbnMvJHtuYW1lT2ZDYXRlZ29yeX0uanNvbmApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBhcnJPZlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgY2FyZEl0ZW1Gcm9udCA9IG5ldyBFbGVtZW50TmV3KGNhcmRXcmFwcGVyLmVsZW1lbnQsICdkaXYnLCBbJ2NhcmQtcGxheV9faXRlbScsIGBjYXJkLXBsYXlfX2l0ZW0tJHthcnJPZlZhbHVlc1tpXS5uYW1lfWBdKTtcclxuICAgICAgICBjYXJkSXRlbUZyb250XHJcbiAgICAgICAgICAuY3JlYXRlRWxlbSgpO1xyXG4gICAgICAgIG5ldyBDYXJkKGNhcmRJdGVtRnJvbnQuZWxlbWVudClcclxuICAgICAgICAgIC5hZGRJbWcoYXJyT2ZWYWx1ZXNbaV0udXJsLCAnY2FyZC1wbGF5X19pdGVtLWltZycsIGFyck9mVmFsdWVzW2ldLm5hbWUpXHJcbiAgICAgICAgICAuYWRkTmFtZShhcnJPZlZhbHVlc1tpXS5uYW1lLnRvVXBwZXJDYXNlKCksICdjYXJkLXBsYXlfX2l0ZW0tbmFtZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZFBhZ2VQbGF5O1xyXG4iLCJpbXBvcnQgeyBwYWdlV3JhcHBlciB9IGZyb20gJy4uL21haW4tZWxlbWVudHMvYm9keS13cmFwcGVyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1jYXJkJztcclxuaW1wb3J0IEVsZW1lbnROZXcgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1odG1sLWVsZW1lbnQnO1xyXG5pbXBvcnQgY2xpY2sgZnJvbSAnLi4vZXZlbnRzL2V2ZW50LWNhcmQtY2xpY2snO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZFBhZ2VUcmFpbihuYW1lT2ZDYXRlZ29yeSkge1xyXG4gIGNvbnN0IGNhcmRDYXJkcyA9IG5ldyBFbGVtZW50TmV3KHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0sICdkaXYnLCBbWydtYWluX19jYXJkLXRyYWluJ10sIFsnY2FyZC10cmFpbiddXSk7XHJcbiAgY2FyZENhcmRzXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG5cclxuICBuZXcgRWxlbWVudE5ldyhjYXJkQ2FyZHMuZWxlbWVudCwgJ2gxJywgJ2NhcmQtdHJhaW5fX2gxJywgbmFtZU9mQ2F0ZWdvcnkudG9VcHBlckNhc2UoKSlcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgY29uc3QgY2FyZFdyYXBwZXIgPSBuZXcgRWxlbWVudE5ldyhjYXJkQ2FyZHMuZWxlbWVudCwgJ2RpdicsICdjYXJkLXRyYWluX193cmFwcGVyJyk7XHJcbiAgY2FyZFdyYXBwZXJcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcblxyXG4gIGZldGNoKGAuL2Fzc2V0cy9qc29ucy8ke25hbWVPZkNhdGVnb3J5fS5qc29uYClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGFyck9mVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcclxuICAgICAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gbmV3IEVsZW1lbnROZXcoY2FyZFdyYXBwZXIuZWxlbWVudCwgJ2RpdicsICdjYXJkLXRyYWluX193cmFwcGVyLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNhcmRDb250YWluZXJcclxuICAgICAgICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgICAgICAgY29uc3QgY2FyZEZyb250QmFjayA9IG5ldyBFbGVtZW50TmV3KGNhcmRDb250YWluZXIuZWxlbWVudCwgJ2RpdicsICdjYXJkLXRyYWluX19mcm9udC1iYWNrJyk7XHJcbiAgICAgICAgY2FyZEZyb250QmFja1xyXG4gICAgICAgICAgLmNyZWF0ZUVsZW0oKTtcclxuICAgICAgICBjb25zdCBjYXJkSXRlbUZyb250ID0gbmV3IEVsZW1lbnROZXcoY2FyZEZyb250QmFjay5lbGVtZW50LCAnZGl2JywgWydjYXJkLXRyYWluX19pdGVtJywgYGNhcmQtdHJhaW5fX2l0ZW0tJHthcnJPZlZhbHVlc1tpXS5uYW1lfWBdKTtcclxuICAgICAgICBjYXJkSXRlbUZyb250XHJcbiAgICAgICAgICAuY3JlYXRlRWxlbSgpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRJdGVtQmFjayA9IG5ldyBFbGVtZW50TmV3KGNhcmRGcm9udEJhY2suZWxlbWVudCwgJ2RpdicsICdjYXJkLXRyYWluX19pdGVtLWJhY2staGlkZGVuJyk7XHJcbiAgICAgICAgY2FyZEl0ZW1CYWNrXHJcbiAgICAgICAgICAuY3JlYXRlRWxlbSgpO1xyXG5cclxuICAgICAgICBuZXcgQ2FyZChjYXJkSXRlbUJhY2suZWxlbWVudClcclxuICAgICAgICAgIC5hZGROYW1lKGFyck9mVmFsdWVzW2ldLnRyYW5zbGF0ZSwgJ2NhcmQtdHJhaW5fX2l0ZW0tYmFjay10cmFuc2xhdGUnKTtcclxuXHJcbiAgICAgICAgbmV3IENhcmQoY2FyZEl0ZW1Gcm9udC5lbGVtZW50KVxyXG4gICAgICAgICAgLmFkZEltZyhhcnJPZlZhbHVlc1tpXS51cmwsICdjYXJkLXRyYWluX19pdGVtLWltZycsIGFyck9mVmFsdWVzW2ldLm5hbWUpXHJcbiAgICAgICAgICAuYWRkTmFtZShhcnJPZlZhbHVlc1tpXS5uYW1lLnRvVXBwZXJDYXNlKCksICdjYXJkLXRyYWluX19pdGVtLW5hbWUnKVxyXG4gICAgICAgICAgLmFkZEltZygnLi9hc3NldHMvaW1hZ2VzLzAxaWNvbnM4LXN5bmNocm9uaXplLTE1MC5wbmcnLCAnY2FyZC10cmFpbl9faXRlbS1yb3RhdGUnLCAncm90YXRlIGljb24nKTtcclxuICAgICAgfVxyXG4gICAgICBjbGljaygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRQYWdlVHJhaW47XHJcbiIsImltcG9ydCB7IHBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWNhcmQnO1xyXG5pbXBvcnQgRWxlbWVudE5ldyBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWh0bWwtZWxlbWVudCc7XHJcbmltcG9ydCBldmVudENhdGVnb3J5Q2xpY2sgZnJvbSAnLi4vZXZlbnRzL2V2ZW50LWNhdGVnb3J5LWNsaWNrJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5UGFnZSgpIHtcclxuICBjb25zdCBjYXRlZ29yeUNhcmRzID0gbmV3IEVsZW1lbnROZXcocGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXSwgJ2RpdicsIFtbJ21haW4tY2F0ZWdvcnknXSwgWydjYXRlZ29yeSddXSk7XHJcbiAgY2F0ZWdvcnlDYXJkc1xyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuXHJcbiAgbmV3IEVsZW1lbnROZXcoY2F0ZWdvcnlDYXJkcy5lbGVtZW50LCAnaDEnLCAnY2F0ZWdvcnlfX2gxJywgJ2VuZ2xpc2gga2lkJy50b1VwcGVyQ2FzZSgpKVxyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuICBjb25zdCBjYXRlZ29yeVdyYXBwZXIgPSBuZXcgRWxlbWVudE5ldyhjYXRlZ29yeUNhcmRzLmVsZW1lbnQsICdkaXYnLCAnY2F0ZWdvcnlfX3dyYXBwZXInKTtcclxuICBjYXRlZ29yeVdyYXBwZXJcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcblxyXG4gIGZldGNoKCcuL2Fzc2V0cy9qc29ucy9jYXRlZ29yaWVzLmpzb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgYXJyT2ZWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbSA9IG5ldyBFbGVtZW50TmV3KGNhdGVnb3J5V3JhcHBlci5lbGVtZW50LCAnZGl2JywgWydjYXRlZ29yeV9faXRlbScsIGBjYXRlZ29yeV9faXRlbS0ke2Fyck9mVmFsdWVzW2ldLm5hbWV9YF0pO1xyXG4gICAgICAgIGNhdGVnb3J5SXRlbS5jcmVhdGVFbGVtKCk7XHJcbiAgICAgICAgbmV3IENhcmQoY2F0ZWdvcnlJdGVtLmVsZW1lbnQpXHJcbiAgICAgICAgICAuYWRkSW1nKGFyck9mVmFsdWVzW2ldLnVybCwgJ2NhdGVnb3J5X19pdGVtLWltZycsIGFyck9mVmFsdWVzW2ldLm5hbWUpXHJcbiAgICAgICAgICAuYWRkTmFtZShhcnJPZlZhbHVlc1tpXS5uYW1lLnRvVXBwZXJDYXNlKCksICdjYXRlZ29yeV9faXRlbS1uYW1lJyk7XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnRDYXRlZ29yeUNsaWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50T2ZGYWlsZWQnLCAwKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRPZlN1Y2Nlc3MnLCAwKTtcclxufVxyXG5cclxuY3JlYXRlQ2F0ZWdvcnlQYWdlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXRlZ29yeVBhZ2U7XHJcbiIsImltcG9ydCB7IHBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgRWxlbWVudE5ldyBmcm9tICcuLi9jbGFzc2VzL2NsYXNzLWh0bWwtZWxlbWVudCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGaW5pc2hQYWdlU3VjY2VzcygpIHtcclxuICBjb25zdCBmaW5pc2ggPSBuZXcgRWxlbWVudE5ldyhwYWdlV3JhcHBlci5lbGVtZW50LmNoaWxkcmVuWzFdLCAnZGl2JywgW1snbWFpbl9fZmluaXNoJ10sIFsnZmluaXNoJ11dKTtcclxuICBmaW5pc2hcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgbmV3IEVsZW1lbnROZXcoZmluaXNoLmVsZW1lbnQsICdwJywgJ2ZpbmlzaF9fbmFtZScsICdZb3UgaGF2ZSBmaW5pc2hlZCEgV29uZGVyZnVsIScpLmNyZWF0ZUVsZW0oKTtcclxuICBuZXcgRWxlbWVudE5ldyhmaW5pc2guZWxlbWVudCwgJ2ltZycsICdmaW5pc2hfX2ltYWdlJywgbnVsbCwgW1snc3JjJywgJy4vYXNzZXRzL2ltYWdlcy9maW5pc2gtc3VjY2Vzcy5qcGcnXSwgWydhbHQnLCAnc3VjY2VzcyBpbWFnZSddXSlcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0sIDcwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGaW5pc2hQYWdlRmFpbGVkKCkge1xyXG4gIGNvbnN0IGZpbmlzaCA9IG5ldyBFbGVtZW50TmV3KHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0sICdkaXYnLCBbWydtYWluX19maW5pc2gnXSwgWydmaW5pc2gnXV0pO1xyXG4gIGZpbmlzaFxyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuICBuZXcgRWxlbWVudE5ldyhmaW5pc2guZWxlbWVudCwgJ3AnLCAnZmluaXNoX19uYW1lJywgJ1lvdSBjYW4gZG8gaXQgYmV0dGVyIScpLmNyZWF0ZUVsZW0oKTtcclxuICBuZXcgRWxlbWVudE5ldyhmaW5pc2guZWxlbWVudCwgJ3AnLCAnZmluaXNoX19yZXN1bHQnLCBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRPZkZhaWxlZCcpfSBvZiA4IG1pc3Rha2UocylgKS5jcmVhdGVFbGVtKCk7XHJcbiAgbmV3IEVsZW1lbnROZXcoZmluaXNoLmVsZW1lbnQsICdpbWcnLCAnZmluaXNoX19pbWFnZScsIG51bGwsIFtbJ3NyYycsICcuL2Fzc2V0cy9pbWFnZXMvZmluaXNoLWZhaWxlZC5qcGcnXSwgWydhbHQnLCAnc3VjY2VzcyBpbWFnZSddXSlcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50T2ZTdWNjZXNzJywgMCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50T2ZGYWlsZWQnLCAwKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9LCA3MDAwKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRmluaXNoUGFnZVN1Y2Nlc3MsIGNyZWF0ZUZpbmlzaFBhZ2VGYWlsZWQgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgeyBwYWdlV3JhcHBlciB9IGZyb20gJy4uL21haW4tZWxlbWVudHMvYm9keS13cmFwcGVyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1jYXJkJztcclxuaW1wb3J0IEVsZW1lbnROZXcgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1odG1sLWVsZW1lbnQnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWlzdGFrZXNQYWdlVHJhaW4oZGF0YSkge1xyXG4gIHBhZ2VXcmFwcGVyLmVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgY2FyZENhcmRzID0gbmV3IEVsZW1lbnROZXcocGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXSwgJ2RpdicsIFtbJ21haW5fX2NhcmQtdHJhaW4nXSwgWydjYXJkLXRyYWluJ11dKTtcclxuICBjYXJkQ2FyZHNcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcblxyXG4gIG5ldyBFbGVtZW50TmV3KGNhcmRDYXJkcy5lbGVtZW50LCAnaDEnLCAnY2FyZC10cmFpbl9faDEnLCAndHJhaW4gbWlzdGFrZXMnLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIGNvbnN0IGNhcmRXcmFwcGVyID0gbmV3IEVsZW1lbnROZXcoY2FyZENhcmRzLmVsZW1lbnQsICdkaXYnLCAnY2FyZC10cmFpbl9fd3JhcHBlcicpO1xyXG4gIGNhcmRXcmFwcGVyXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIGRhdGEuc29ydCgoYSwgYikgPT4gYls1XSAtIGFbNV0pO1xyXG4gIGxldCBpID0gMDtcclxuICB3aGlsZSAoaSA8IDggJiYgZGF0YVtpXVs1XSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7ZGF0YVtpXVsxXX1NaXN0YWtlYCwgMCk7XHJcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gbmV3IEVsZW1lbnROZXcoY2FyZFdyYXBwZXIuZWxlbWVudCwgJ2RpdicsICdjYXJkLXRyYWluX193cmFwcGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jcmVhdGVFbGVtKCk7XHJcbiAgICBjb25zdCBjYXJkRnJvbnRCYWNrID0gbmV3IEVsZW1lbnROZXcoY2FyZENvbnRhaW5lci5lbGVtZW50LCAnZGl2JywgJ2NhcmQtdHJhaW5fX2Zyb250LWJhY2snKTtcclxuICAgIGNhcmRGcm9udEJhY2suY3JlYXRlRWxlbSgpO1xyXG4gICAgY29uc3QgY2FyZEl0ZW1Gcm9udCA9IG5ldyBFbGVtZW50TmV3KGNhcmRGcm9udEJhY2suZWxlbWVudCwgJ2RpdicsIFsnY2FyZC10cmFpbl9faXRlbSddKTtcclxuICAgIGNhcmRJdGVtRnJvbnQuY3JlYXRlRWxlbSgpO1xyXG4gICAgY29uc3QgY2FyZEl0ZW1CYWNrID0gbmV3IEVsZW1lbnROZXcoY2FyZEZyb250QmFjay5lbGVtZW50LCAnZGl2JywgJ2NhcmQtdHJhaW5fX2l0ZW0tYmFjay1oaWRkZW4nKTtcclxuICAgIGNhcmRJdGVtQmFjay5jcmVhdGVFbGVtKCk7XHJcblxyXG4gICAgbmV3IENhcmQoY2FyZEl0ZW1CYWNrLmVsZW1lbnQpXHJcbiAgICAgIC5hZGROYW1lKGRhdGFbaV1bMl0sICdjYXJkLXRyYWluX19pdGVtLWJhY2stdHJhbnNsYXRlJyk7XHJcblxyXG4gICAgbmV3IENhcmQoY2FyZEl0ZW1Gcm9udC5lbGVtZW50KVxyXG4gICAgICAuYWRkSW1nKGRhdGFbaV1bN10sICdjYXJkLXRyYWluX19pdGVtLWltZycsIGRhdGFbaV1bMV0pXHJcbiAgICAgIC5hZGROYW1lKGRhdGFbaV1bMV0udG9VcHBlckNhc2UoKSwgJ2NhcmQtdHJhaW5fX2l0ZW0tbmFtZScpXHJcbiAgICAgIC5hZGRJbWcoJy4vYXNzZXRzL2ltYWdlcy8wMWljb25zOC1zeW5jaHJvbml6ZS0xNTAucG5nJywgJ2NhcmQtdHJhaW5fX2l0ZW0tcm90YXRlJywgJ3JvdGF0ZSBpY29uJyk7XHJcbiAgICBpICs9IDE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNaXN0YWtlc1BhZ2VUcmFpbjtcclxuIiwiaW1wb3J0IEVsZW1lbnROZXcgZnJvbSAnLi4vY2xhc3Nlcy9jbGFzcy1odG1sLWVsZW1lbnQnO1xyXG5pbXBvcnQgY2xlYW5TdGF0IGZyb20gJy4uL2V2ZW50cy9ldmVudC1zdGF0LWNsZWFuLWNsaWNrJztcclxuaW1wb3J0IHRyYWluTWlzdGFrZXNTdGF0IGZyb20gJy4uL2V2ZW50cy9ldmVudC1zdGF0LXRyYWluLW1pc3Rha2VzLWNsaWNrJztcclxuaW1wb3J0IHsgcGFnZVdyYXBwZXIgfSBmcm9tICcuLi9tYWluLWVsZW1lbnRzL2JvZHktd3JhcHBlcic7XHJcblxyXG5jb25zdCBzdGF0RGF0YSA9IFtdO1xyXG5sZXQgY291bnQgPSAxO1xyXG5cclxuZnVuY3Rpb24gcmVhZERhdGEoKSB7XHJcbiAgZmV0Y2goJy4vYXNzZXRzL2pzb25zL2NhdGVnb3JpZXMuanNvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhQ2F0ZWdvcnkpID0+IHtcclxuICAgICAgT2JqZWN0LmtleXMoZGF0YUNhdGVnb3J5KS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAuL2Fzc2V0cy9qc29ucy8ke2NhdGVnb3J5fS5qc29uYClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGFDYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGFDYXJkKS5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29ycmVjdCA9ICgrbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7Y2FyZH1Db3JyZWN0YCkpXHJcbiAgICAgICAgICAgICAgICA/ICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtjYXJkfUNvcnJlY3RgKVxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1pc3Rha2VuID0gKCtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtjYXJkfU1pc3Rha2VgKSlcclxuICAgICAgICAgICAgICAgID8gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2NhcmR9TWlzdGFrZWApXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBjb3JyZWN0ICsgbWlzdGFrZW47XHJcbiAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9ICh0b3RhbCkgPyBNYXRoLnJvdW5kKChjb3JyZWN0IC8gdG90YWwpICogMTAwKSA6ICctJztcclxuICAgICAgICAgICAgICBzdGF0RGF0YS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICBzdGF0RGF0YVtzdGF0RGF0YS5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgLnB1c2goY2F0ZWdvcnksIGNhcmQsIGRhdGFDYXJkW2NhcmRdXHJcbiAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGUsIHRvdGFsLCBjb3JyZWN0LCBtaXN0YWtlbiwgcGVyY2VudCwgZGF0YUNhcmRbY2FyZF0udXJsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFRhYmxlKHBhcmVudCkge1xyXG4gIHN0YXREYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5sZW5ndGggLSAxOyBpICs9IDEpIHtcclxuICAgICAgbmV3IEVsZW1lbnROZXcocGFyZW50LCAnZGl2JywgWydzdGF0X19kYXRhJ10sIGl0ZW1baV0pLmNyZWF0ZUVsZW0oKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydChpbmRleCkge1xyXG4gIGlmIChjb3VudCAlIDIpIHtcclxuICAgIGlmIChpbmRleCA8IDMpIHtcclxuICAgICAgc3RhdERhdGEuc29ydCgoYSwgYikgPT4gYltpbmRleF0ubG9jYWxlQ29tcGFyZShhW2luZGV4XSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdERhdGEuc29ydCgoYSwgYikgPT4gYVtpbmRleF0gLSBiW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgICBjb3VudCArPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaW5kZXggPCAzKSB7XHJcbiAgICAgIHN0YXREYXRhLnNvcnQoKGEsIGIpID0+IGFbaW5kZXhdLmxvY2FsZUNvbXBhcmUoYltpbmRleF0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXREYXRhLnNvcnQoKGEsIGIpID0+IGJbaW5kZXhdIC0gYVtpbmRleF0pO1xyXG4gICAgfVxyXG4gICAgY291bnQgKz0gMTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRQYWdlKCkge1xyXG4gIGNvbnN0IG1haW5XcmFwcGVyID0gcGFnZVdyYXBwZXIuZWxlbWVudC5jaGlsZHJlblsxXTtcclxuICBuZXcgRWxlbWVudE5ldyhtYWluV3JhcHBlciwgJ2gxJywgWydjYXRlZ29yeV9faDEnLCAnc3RhdF9faDEnXSwgJ3N0YXRpc3RpY3MnLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIGNvbnN0IHN0YXRCdXR0b25zID0gbmV3IEVsZW1lbnROZXcobWFpbldyYXBwZXIsICdkaXYnLCAnbWFpbl9fc3RhdC1idXR0b25zJyk7XHJcbiAgc3RhdEJ1dHRvbnNcclxuICAgIC5jcmVhdGVFbGVtKCk7XHJcbiAgbmV3IEVsZW1lbnROZXcoc3RhdEJ1dHRvbnMuZWxlbWVudCwgJ2J1dHRvbicsICdtYWluX19zdGF0LWJ1dHRvbnMtdHJhaW4nLCAnVFJBSU4gTUlTVEFLRVMnKVxyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuICB0cmFpbk1pc3Rha2VzU3RhdChzdGF0RGF0YSk7XHJcbiAgbmV3IEVsZW1lbnROZXcoc3RhdEJ1dHRvbnMuZWxlbWVudCwgJ2J1dHRvbicsICdtYWluX19zdGF0LWJ1dHRvbnMtY2xlYW4nLCAnQ0xFQU4gU1RBVElTVElDUycpXHJcbiAgICAuY3JlYXRlRWxlbSgpO1xyXG4gIGNsZWFuU3RhdCgpO1xyXG5cclxuICBjb25zdCBzdGF0TmFtZXMgPSBuZXcgRWxlbWVudE5ldyhtYWluV3JhcHBlciwgJ2RpdicsIFtbJ21haW5fX3N0YXQtd3JhcHBlciddLCBbJ3N0YXQtbmFtZXMnXV0pO1xyXG4gIHN0YXROYW1lc1xyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuICBjb25zdCBuYW1lc09mQ29sdW1ucyA9IFtcclxuICAgICdDYXRlZ29yeScsXHJcbiAgICAnV29yZCcsXHJcbiAgICAnVHJhbnNsYXRpb24nLFxyXG4gICAgJ1RvdGFsIGNsaWNrcycsXHJcbiAgICAnQ29ycmVjdCcsXHJcbiAgICAnTWlzdGFrZW4nLFxyXG4gICAgJyUgb2YgY29ycmVjdCcsXHJcbiAgXTtcclxuICBuYW1lc09mQ29sdW1ucy5mb3JFYWNoKChjb2x1bW5OYW1lKSA9PiBuZXcgRWxlbWVudE5ldyhzdGF0TmFtZXMuZWxlbWVudCwgJ2RpdicsICdzdGF0X19jb2x1bW4tbmFtZScsIGNvbHVtbk5hbWUpXHJcbiAgICAuY3JlYXRlRWxlbSgpKTtcclxuICBjb25zdCBjYXJkQ2FyZHMgPSBuZXcgRWxlbWVudE5ldyhtYWluV3JhcHBlciwgJ2RpdicsIFtbJ21haW5fX3N0YXQtd3JhcHBlciddLCBbJ3N0YXQnXV0pO1xyXG4gIGNhcmRDYXJkc1xyXG4gICAgLmNyZWF0ZUVsZW0oKTtcclxuXHJcbiAgcmVhZERhdGEoKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGZpbGxUYWJsZShjYXJkQ2FyZHMuZWxlbWVudCk7XHJcbiAgfSwgMTAwKTtcclxuXHJcbiAgY29uc3QgY2FwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXRfX2NvbHVtbi1uYW1lJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXAubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNhcFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc29ydChpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQnKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgZmlsbFRhYmxlKGNhcmRDYXJkcy5lbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcmVhZERhdGEsIGNyZWF0ZVN0YXRQYWdlIH07XHJcbiIsImV4cG9ydCBjb25zdCBhZGRFbGVtVG9QYXJlbnRFcnJvciA9ICdJbmNvcnJlY3QgYWN0aW9uIHBhcmFtZXRlciBpbiBhZGRFbGVtVG9QYXJlbnQoKSc7XHJcbmV4cG9ydCBjb25zdCBzdGFydCA9ICdTVEFSVCc7XHJcbmV4cG9ydCBjb25zdCByZXBlYXQgPSAnUkVQRUFUJztcclxuZXhwb3J0IGNvbnN0IHBsYXkgPSAnUGxheSc7XHJcbmV4cG9ydCBjb25zdCB0cmFpbiA9ICdUcmFpbic7XHJcbmV4cG9ydCBjb25zdCB5ZXMgPSAneWVzJztcclxuZXhwb3J0IGNvbnN0IGNvcnJlY3QgPSAnQ29ycmVjdCc7XHJcbmV4cG9ydCBjb25zdCBtaXN0YWtlID0gJ01pc3Rha2UnO1xyXG5leHBvcnQgY29uc3QgdGV4dFdoZW5TdWNjZXNzID0gJ1lvdSBjYW4gZG8gaXQgYmV0dGVyISc7XHJcbmV4cG9ydCBjb25zdCB0ZXh0V2hlbkZhaWxlZCA9ICdZb3UgaGF2ZSBmaW5pc2hlZCEgV29uZGVyZnVsISc7XHJcbmV4cG9ydCBjb25zdCBtZXNzYWdlVG9Db25maXJtQ2xlYXIgPSAnRG8geW91IGRlZmluaXRlbHkgd2FudCB0byBjbGVhciB0aGUgc3RhdGlzdGljcz8nO1xyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlNYWluID0gJ2VuZ2xpc2gga2lkJztcclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5VHJhaW4gPSAndHJhaW4gbWlzdGFrZXMnO1xyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlOb3RoaW5nVG9UcmFpbiA9ICd0aGVyZSBpcyBubyBwbGF5IG1vZGUgZm9yIG1pc3Rha2VuIHdvcmRzJztcclxuZXhwb3J0IGNvbnN0IGZvb3Rlckluc3BpcmVkID0gJ0luc3BpcmVkIGJ5IHN0b3J5c2V0JztcclxuZXhwb3J0IGNvbnN0IGZvb3RlckF1dGhvciA9ICdZdWxpeWFTaHUganVuZSAyMDIyJztcclxuZXhwb3J0IGNvbnN0IGZvb3RlclNjaG9vbCA9ICdSU1NjaG9vbCc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL2NsYXNzLWNhcmQnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvY2xhc3Nlcy9jbGFzcy1odG1sLWVsZW1lbnQnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvbWFpbi1lbGVtZW50cy9ib2R5LXdyYXBwZXInO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvbWFpbi1lbGVtZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvbWFpbi1lbGVtZW50cy9mb290ZXInO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvbWFpbi1lbGVtZW50cy9idXJnZXItbWVudSc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9tYWluLWVsZW1lbnRzL3RleHQtdG8tc3BlZWNoJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3JpcHRzL3BhZ2VzL3BhZ2UtY2FyZHMtdHJhaW4nO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvcGFnZXMvcGFnZS1jYXJkcy1wbGF5JztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3JpcHRzL3BhZ2VzL3BhZ2UtY2F0ZWdvcmllcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9wYWdlcy9wYWdlLWdhbWUtZW5kJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3JpcHRzL3BhZ2VzL3BhZ2Utc3RhdCc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9wYWdlcy9wYWdlLW1pc3Rha2VzLXRyYWluJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtc3RhdC1jbGljayc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtc3RhdC1jbGVhbi1jbGljayc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtc3RhdC10cmFpbi1taXN0YWtlcy1jbGljayc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtY2F0ZWdvcnktY2xpY2snO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvZXZlbnRzL2V2ZW50LW1lbnUtY2xpY2snO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3NjcmlwdHMvZXZlbnRzL2V2ZW50LXN3aXRjaC1jbGljayc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtY2FyZC1jbGljayc7XHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0cy9ldmVudHMvZXZlbnQtZ2FtZS1zdGFydCc7XHJcblxyXG5leHBvcnQge307XHJcbiJdLCJuYW1lcyI6WyJFbGVtZW50TmV3IiwiQ2FyZCIsInBhcmVudCIsImltZ1VSTCIsImltZ0NsYXNzIiwiYWx0VGV4dCIsImNyZWF0ZUVsZW0iLCJuYW1lVGV4dCIsIm5hbWVDbGFzcyIsImFkZEVsZW1Ub1BhcmVudEVycm9yIiwicGFyZW50RWxlbSIsInR5cGUiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImF0dHJpYnV0ZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImUiLCJ0b2dnbGUiLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiLCJhY3Rpb24iLCJhcHBlbmQiLCJwcmVwZW5kIiwiRXJyb3IiLCJhZGRDbGFzc1RvRWxlbWVudCIsImFkZFRleHRDb250ZW50VG9FbGVtZW50IiwiYWRkQXR0cmlidXRlVG9FbGVtZW50IiwiYWRkRWxlbVRvUGFyZW50IiwidGV4dFRvU3BlZWNoIiwiY2xpY2siLCJjYXJkSXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJqIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Q2FyZCIsImNhcmRSb3RhdGUiLCJ0YXJnZXQiLCJjYXJkQ2xpY2tlZDEiLCJpbm5lclRleHQiLCJ0b0xvd2VyQ2FzZSIsImNhcmRJdGVtRnJvbnRCYWNrIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjYXJkQmFjayIsImNhcmRDbGlja2VkMiIsInBhcmVudEVsZW1lbnQiLCJsZW5ndGgiLCJwYWdlV3JhcHBlciIsImNyZWF0ZUNhcmRQYWdlVHJhaW4iLCJjcmVhdGVDYXJkUGFnZVBsYXkiLCJwbGF5TW9kZSIsImV2ZW50Q2F0ZWdvcnlDbGljayIsImNhdGVnb3J5SXRlbXMiLCJpIiwiZXZlbnQiLCJjYXRlZ29yeUNsaWNrZWQxIiwiY2hpbGRyZW4iLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tlZCIsImNhdGVnb3J5Q2xpY2tlZDIiLCJzZXRUaW1lb3V0IiwiY3JlYXRlRmluaXNoUGFnZUZhaWxlZCIsImNyZWF0ZUZpbmlzaFBhZ2VTdWNjZXNzIiwiY29ycmVjdCIsIm1pc3Rha2UiLCJyZXBlYXQiLCJzdGFydCIsInRleHRXaGVuRmFpbGVkIiwidGV4dFdoZW5TdWNjZXNzIiwieWVzIiwiY291bnRPZk5vIiwic3RhcnRDbGljayIsInN0YXJ0QnV0dG9uIiwicmVtb3ZlIiwibmFtZU9mQ2FyZHMiLCJpdGVtIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJpdGVtTmFtZSIsImd1ZXNzQ2xpY2siLCJnZXRTb3VuZCIsImdldEl0ZW0iLCJjb250aW51ZUJ1dHRvbiIsIm5hbWUxIiwiY2FyZENsaWNrIiwidGFnTmFtZSIsIm5hbWVDb3JyZWN0IiwicGxheU1vZGVDb250aW51ZSIsInN0YXJzIiwic3JjIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJjdXJyZW50Q291bnRPZkZhaWxlZCIsIm5ld0NvdW50T2ZGYWlsZWQiLCJuYW1lTWlzdGFrZSIsIm5hbWUiLCJjYXJkUGxheVdyYXBwZXIiLCJuYW1lSW5jb21lIiwibmFtZU9mQ2FyZHNDb250aW51ZSIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsImNhcmRJdGVtSW5hY3RpdmUiLCJoIiwiaGVhZGVyTWVudSIsImV2ZW50TWVudUNsaWNrIiwiYnVyZ2VyTWVudUl0ZW1zIiwiZXZlbnRNZW51IiwibWVudUNsaWNrZWQxIiwibWVudUNsaWNrZWQyIiwibWVzc2FnZVRvQ29uZmlybUNsZWFyIiwiY2xlYW5TdGF0Iiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGFDYXRlZ29yeSIsIk9iamVjdCIsImtleXMiLCJjYXRlZ29yeSIsImRhdGFDYXJkIiwiY2FyZCIsImNyZWF0ZVN0YXRQYWdlIiwiY3JlYXRlTWlzdGFrZXNQYWdlVHJhaW4iLCJ0cmFpbk1pc3Rha2VzU3RhdCIsImRhdGEiLCJjYXRlZ29yeU1haW4iLCJjYXRlZ29yeU5vdGhpbmdUb1RyYWluIiwiY2F0ZWdvcnlUcmFpbiIsInN3aXRjaE1vZGUiLCJzd2l0Y2hJbnB1dCIsInN3aXRjaENsaWNrIiwiY2F0ZWdvcnlOYW1lIiwidG9VcHBlckNhc2UiLCJwYWdlIiwicGFnZUJ1cmdlciIsInBhZ2VFbGVtZW50cyIsImhlYWRlckJ1cmdlciIsImJ1cmdlckxvZ28iLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInByZWZpeEJ1cmdlck1lbnUiLCJidXJnZXJNZW51IiwiYXJyT2ZWYWx1ZXMiLCJ2YWx1ZXMiLCJtZW51SXRlbSIsImFkZEltZyIsInVybCIsImFkZE5hbWUiLCJyZXF1aXJlIiwiZm9vdGVySW5zcGlyZWQiLCJmb290ZXJBdXRob3IiLCJmb290ZXJTY2hvb2wiLCJmb290ZXJCbG9ja3MiLCJhcnJGb290ZXJMaW5rcyIsInBsYXkiLCJ0cmFpbiIsImhlYWRlckJsb2NrcyIsImhlYWRlckVsZW1lbnRzIiwibGluZSIsImhlYWRlclN3aXRjaCIsInN3aXRjaFdyYXBwZXIiLCJoZWFkZXJTdGF0IiwibGlua1N0YXQiLCJzcGVlY2giLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJsYW5nIiwic3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJuYW1lT2ZDYXRlZ29yeSIsImNhcmRDYXJkcyIsInBsYXlQYW5lbCIsInBsYXlCZWdpbiIsInBsYXlTdGFycyIsImNhcmRXcmFwcGVyIiwiY2FyZEl0ZW1Gcm9udCIsImNhcmRDb250YWluZXIiLCJjYXJkRnJvbnRCYWNrIiwiY2FyZEl0ZW1CYWNrIiwidHJhbnNsYXRlIiwiY3JlYXRlQ2F0ZWdvcnlQYWdlIiwiY2F0ZWdvcnlDYXJkcyIsImNhdGVnb3J5V3JhcHBlciIsImNhdGVnb3J5SXRlbSIsImZpbmlzaCIsImxvY2F0aW9uIiwicmVsb2FkIiwic29ydCIsImEiLCJiIiwic3RhdERhdGEiLCJjb3VudCIsInJlYWREYXRhIiwibWlzdGFrZW4iLCJ0b3RhbCIsInBlcmNlbnQiLCJyb3VuZCIsImZpbGxUYWJsZSIsImluZGV4IiwibG9jYWxlQ29tcGFyZSIsIm1haW5XcmFwcGVyIiwic3RhdEJ1dHRvbnMiLCJzdGF0TmFtZXMiLCJuYW1lc09mQ29sdW1ucyIsImNvbHVtbk5hbWUiLCJjYXAiXSwic291cmNlUm9vdCI6IiJ9