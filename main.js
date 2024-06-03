/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\nfunction deleteCard(card) {\n  card.remove();\n}\nfunction likeCard(cardLikeButton) {\n  cardLikeButton.classList.toggle('card__like-button_is-active');\n}\nfunction createCard(cardData, callback, like, view) {\n  var card = document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);\n  card.querySelector('img').src = cardData['link'];\n  card.querySelector('img').alt = cardData['name'];\n  card.querySelector('h2').textContent = cardData['name'];\n  ;\n  card.querySelector('.card__delete-button').addEventListener('click', function () {\n    callback(card);\n  });\n  card.querySelector('.card__like-button').addEventListener('click', function () {\n    like(card.querySelector('.card__like-button'));\n  });\n  card.querySelector('.card__image').addEventListener('click', function () {\n    view(cardData['name'], cardData['link']);\n  });\n  return card;\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup),\n/* harmony export */   setClosePopupEventListeners: () => (/* binding */ setClosePopupEventListeners)\n/* harmony export */ });\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-animated');\n  popup.classList.add('popup_is-opened');\n  document.addEventListener(\"keyup\", handleEscUp);\n}\n;\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keyup\", handleEscUp);\n}\n;\nvar handleEscUp = function handleEscUp(evt) {\n  if (evt.key === \"Escape\") {\n    var activePopup = document.querySelector(\".popup_is-opened\");\n    closePopup(activePopup);\n  }\n};\nfunction setClosePopupEventListeners(popup) {\n  popup.querySelector(\".popup__close\").addEventListener(\"click\", function () {\n    closePopup(popup);\n  });\n  popup.addEventListener(\"mousedown\", function (evt) {\n    if (evt.target.classList.contains(\"popup\")) {\n      closePopup(popup);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n//import styles\n\n//import function and variables\n\n\n\n\n//DOM узлы\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar newCardButton = document.querySelector('.profile__add-button');\nvar placesList = document.querySelector('.places__list');\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\n\n//Вывести карточки на страницу\n_components_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (element) {\n  placesList.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, viewCard));\n});\n\n//Add event listener for the buttons: profile_edit and add_new_card\nprofileEditButton.addEventListener(\"click\", function (evt) {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupEdit);\n  popupEdit.querySelector('input[name=\"name\"]').value = document.querySelector('.profile__title').textContent;\n  popupEdit.querySelector('input[name=\"description\"]').value = document.querySelector('.profile__description').textContent;\n});\nnewCardButton.addEventListener(\"click\", function (evt) {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupNewCard);\n});\npopupEdit.addEventListener('submit', handleFormSubmitEdit);\npopupNewCard.addEventListener('submit', handleFormSubmitAddNewCard);\nfunction handleFormSubmitEdit(evt) {\n  evt.preventDefault();\n  var popup = evt.target.closest('.popup');\n  document.querySelector('.profile__description').textContent = popup.querySelector('input[name=\"description\"]').value;\n  document.querySelector('.profile__title').textContent = popup.querySelector('input[name=\"name\"]').value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n}\nfunction handleFormSubmitAddNewCard(evt) {\n  evt.preventDefault();\n  var popup = evt.target.closest('.popup');\n  var newCardData = {\n    name: \"\",\n    link: \"\"\n  };\n  newCardData.name = popup.querySelector('input[name=\"place-name\"]').value;\n  newCardData.link = popup.querySelector('input[name=\"link\"]').value;\n  document.querySelector('.places__list').prepend((0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(newCardData, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, viewCard));\n  popup.querySelector('input[name=\"place-name\"]').value = \"\";\n  popup.querySelector('input[name=\"link\"]').value = \"\";\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n}\nfunction viewCard(name, link) {\n  var popupImage = document.querySelector('.popup_type_image');\n  var image = popupImage.querySelector('.popup__image');\n  var caption = popupImage.querySelector('.popup__caption');\n  image.src = link;\n  caption.textContent = name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupImage);\n}\ndocument.querySelectorAll('.popup').forEach(function (element) {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.setClosePopupEventListeners)(element);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;