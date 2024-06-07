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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   getCards: () => (/* binding */ getCards),\n/* harmony export */   getProfileInfo: () => (/* binding */ getProfileInfo),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   patchAvatar: () => (/* binding */ patchAvatar),\n/* harmony export */   patchProfileInfo: () => (/* binding */ patchProfileInfo),\n/* harmony export */   postCard: () => (/* binding */ postCard),\n/* harmony export */   unlikeCard: () => (/* binding */ unlikeCard)\n/* harmony export */ });\n\nvar token = \"883e0234-47f8-49e4-92ee-690f5802db36\";\nvar cohort = \"wff-cohort-14\";\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-14',\n  headers: {\n    authorization: '883e0234-47f8-49e4-92ee-690f5802db36',\n    'Content-Type': 'application/json'\n  }\n};\nfunction getProfileInfo() {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/users/me\"), {\n    headers: {\n      authorization: token\n    }\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\nfunction patchProfileInfo(name, about) {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/users/me\"), {\n    method: 'PATCH',\n    headers: {\n      authorization: token,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\n;\nfunction getCards() {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/cards\"), {\n    headers: {\n      authorization: token\n    }\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\nfunction postCard(name, link) {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/cards\"), {\n    method: 'POST',\n    headers: {\n      authorization: token,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\nfunction deleteCard(cardId) {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: token,\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\nfunction patchAvatar(link) {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: {\n      authorization: token,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      avatar: link\n    })\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\nfunction likeCard(cardId) {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: {\n      authorization: token,\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\nfunction unlikeCard(cardId) {\n  return fetch(\"https://nomoreparties.co/v1/\".concat(cohort, \"/cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: token,\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    if (!response.ok) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n    }\n    return response.json(); // Parse the response as JSON\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\n//function deleteCard(card) {\n//   card.remove();\n//}\n\nfunction likeCard(cardLikeButton) {\n  cardLikeButton.classList.toggle('card__like-button_is-active');\n}\nfunction createCard(cardData, callback, like, unlike, view, getCards) {\n  var card = document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);\n  card.querySelector('img').src = cardData['link'];\n  card.querySelector('img').alt = cardData['name'];\n  card.querySelector('h2').textContent = cardData['name'];\n  card.querySelector('h3').textContent = cardData['likes'].length;\n  var jsonArray = cardData['likes'];\n  var targetValue = document.querySelector('.profile__title').textContent;\n  for (var i = 0; i < jsonArray.length; i++) {\n    if (jsonArray[i].name === targetValue) {\n      card.querySelector('.card__like-button').classList.add('card__like-button_is-active');\n      console.log(jsonArray[i].name);\n    }\n  }\n  if (cardData['owner'].name === document.querySelector('.profile__title').textContent) {\n    card.querySelector('.card__delete-button').addEventListener('click', function () {\n      callback(cardData['_id']);\n    });\n  } else {\n    card.querySelector('.card__delete-button').remove();\n  }\n  card.querySelector('.card__like-button').addEventListener('click', function () {\n    if (!card.querySelector('.card__like-button').classList.contains('card__like-button_is-active')) {\n      //likeCard(card.querySelector('.card__like-button'));\n      like(cardData['_id']);\n    } else {\n      //likeCard(card.querySelector('.card__like-button'));\n      unlike(cardData['_id']);\n    }\n  });\n  card.querySelector('.card__image').addEventListener('click', function () {\n    view(cardData['name'], cardData['link']);\n  });\n  return card;\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

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

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation),\n/* harmony export */   hideInputError: () => (/* binding */ hideInputError)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add('popup__input_type_error');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('popup__input-error_active');\n};\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove('popup__input_type_error');\n  errorElement.classList.remove('popup__input-error_active');\n  errorElement.textContent = '';\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  // чтобы проверить состояние кнопки в самом начале\n  toggleButtonState(inputList, buttonElement);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement);\n      // чтобы проверять его при изменении любого из полей\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n};\nvar enableValidation = function enableValidation() {\n  var formList = Array.from(document.querySelectorAll('.popup__form'));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement);\n  });\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  // Если есть хотя бы один невалидный инпут\n  if (hasInvalidInput(inputList)) {\n    // сделай кнопку неактивной\n    buttonElement.disabled = true;\n    buttonElement.classList.add('button_inactive');\n  } else {\n    // иначе сделай кнопку активной\n    buttonElement.disabled = false;\n    buttonElement.classList.remove('button_inactive');\n  }\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/api.js */ \"./src/components/api.js\");\n//import styles\n\n//import function and variables\n\n\n\n\n\n\n//DOM узлы\nvar token = \"883e0234-47f8-49e4-92ee-690f5802db36\";\nvar cohort = \"wff-cohort-14\";\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar newCardButton = document.querySelector('.profile__add-button');\nvar avatarButton = document.querySelector('.profile__image');\nvar placesList = document.querySelector('.places__list');\nvar popupEdit = document.querySelector('.popup_type_edit');\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.hideInputError)(popupEdit, popupEdit.querySelector('input[name=\"description\"]'));\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupAvatar = document.querySelector('.popup_type_avatar');\nfunction updateProfileInfo(name, about, avatar) {\n  document.querySelector('.profile__title').textContent = name;\n  document.querySelector('.profile__description').textContent = about;\n  document.querySelector('.profile__image').style = \"background-image: url(\".concat(avatar, \")\");\n}\n(0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getProfileInfo)().then(function (result) {\n  updateProfileInfo(result.name, result.about, result.avatar);\n}).catch(function (error) {\n  console.log(error);\n});\n(0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getCards)().then(function (result) {\n  placesList.innerHTML = '';\n  result.forEach(function (element) {\n    placesList.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.deleteCard, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.likeCard, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.unlikeCard, viewCard));\n  });\n}).catch(function (error) {\n  console.log(error);\n});\nplacesList.addEventListener(\"click\", function (evt) {\n  if (evt.target.classList.contains('card__delete-button') || evt.target.classList.contains('card__like-button')) {\n    (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getCards)().then(function (result) {\n      placesList.innerHTML = '';\n      result.forEach(function (element) {\n        placesList.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.deleteCard, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.likeCard, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.unlikeCard, viewCard));\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n});\navatarButton.addEventListener(\"click\", function (evt) {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.hideInputError)(popupAvatar, popupAvatar.querySelector('input[name=\"link\"]'));\n  popupAvatar.querySelector('input[name=\"link\"]').value = \"\";\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupAvatar);\n});\n\n//Add event listener for the buttons: profile_edit and add_new_card\nprofileEditButton.addEventListener(\"click\", function (evt) {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.hideInputError)(popupEdit, popupEdit.querySelector('input[name=\"name\"]'));\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.hideInputError)(popupEdit, popupEdit.querySelector('input[name=\"description\"]'));\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupEdit);\n  popupEdit.querySelector('input[name=\"name\"]').value = document.querySelector('.profile__title').textContent;\n  popupEdit.querySelector('input[name=\"description\"]').value = document.querySelector('.profile__description').textContent;\n});\nnewCardButton.addEventListener(\"click\", function (evt) {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.hideInputError)(popupNewCard, popupNewCard.querySelector('input[name=\"place-name\"]'));\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.hideInputError)(popupNewCard, popupNewCard.querySelector('input[name=\"link\"]'));\n  popupNewCard.querySelector('input[name=\"place-name\"]').value = \"\";\n  popupNewCard.querySelector('input[name=\"link\"]').value = \"\";\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupNewCard);\n});\npopupEdit.addEventListener('submit', handleFormSubmitEdit);\npopupNewCard.addEventListener('submit', handleFormSubmitAddNewCard);\npopupAvatar.addEventListener('submit', handleFormSubmitAvatar);\nfunction handleFormSubmitEdit(evt) {\n  evt.preventDefault();\n  var popup = evt.target.closest('.popup');\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.patchProfileInfo)(popup.querySelector('input[name=\"name\"]').value, popup.querySelector('input[name=\"description\"]').value).then(function (result) {\n    updateProfileInfo(result.name, result.about, result.avatar);\n  }).catch(function (error) {\n    console.log(error);\n  });\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getProfileInfo)().then(function (result) {\n    updateProfileInfo(result.name, result.about, result.avatar);\n  }).catch(function (error) {\n    console.log(error);\n  });\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n}\nfunction handleFormSubmitAddNewCard(evt) {\n  evt.preventDefault();\n  var popup = evt.target.closest('.popup');\n  var newCardData = {\n    name: \"\",\n    link: \"\"\n  };\n  newCardData.name = popup.querySelector('input[name=\"place-name\"]').value;\n  newCardData.link = popup.querySelector('input[name=\"link\"]').value;\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.postCard)(popup.querySelector('input[name=\"place-name\"]').value, popup.querySelector('input[name=\"link\"]').value).then(function (result) {\n    (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getCards)().then(function (result) {\n      placesList.innerHTML = '';\n      result.forEach(function (element) {\n        placesList.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.deleteCard, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.likeCard, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.unlikeCard, viewCard));\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }).catch(function (error) {\n    console.log(error);\n  });\n  popup.querySelector('input[name=\"place-name\"]').value = \"\";\n  popup.querySelector('input[name=\"link\"]').value = \"\";\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n}\nfunction handleFormSubmitAvatar(evt) {\n  evt.preventDefault();\n  var popup = evt.target.closest('.popup');\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.patchAvatar)(popup.querySelector('input[name=\"link\"]').value).then(function (result) {\n    console.log(result);\n  }).catch(function (error) {\n    console.log(error);\n  });\n  popup.querySelector('input[name=\"link\"]').value = \"\";\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getProfileInfo)().then(function (result) {\n    updateProfileInfo(result.name, result.about, result.avatar);\n  }).catch(function (error) {\n    console.log(error);\n  });\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n}\nfunction viewCard(name, link) {\n  var popupImage = document.querySelector('.popup_type_image');\n  var image = popupImage.querySelector('.popup__image');\n  var caption = popupImage.querySelector('.popup__caption');\n  image.src = link;\n  caption.textContent = name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupImage);\n}\ndocument.querySelectorAll('.popup').forEach(function (element) {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.setClosePopupEventListeners)(element);\n});\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.enableValidation)();\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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