//import styles
import "./pages/index.css";
//import function and variables
import {
  initialCards
} from "./components/cards.js"
import {
  createCard
} from "./components/card.js"
import {
  closePopup,
  openPopup,
  setClosePopupEventListeners
} from "./components/modal.js"
import {
  enableValidation,
  clearValidation
} from "./components/validation.js"
import {
  getProfileInfo,
  patchProfileInfo,
  getCards,
  postCard,
  deleteCard,
  patchAvatar,
  likeCard,
  unlikeCard
} from "./components/api.js"

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

//DOM узлы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const avatarButton = document.querySelector('.profile__image');
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupAvatar = document.querySelector('.popup_type_avatar');


function updateProfileInfo(name, about, avatar) {
  document.querySelector('.profile__title').textContent = name;
  document.querySelector('.profile__description').textContent = about;
  document.querySelector('.profile__image').style = `background-image: url(${avatar})`;
}

let userId;
Promise.all([getProfileInfo(), getCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    updateProfileInfo(userData.name, userData.about, userData.avatar)
    cards.forEach(function (element) {
      placesList.append(createCard(element, deleteCard, likeCallback, viewCard, userId));
    })
  }).catch(error => console.log(error))


avatarButton.addEventListener("click", (evt) => {
  clearValidation(validationConfig,popupAvatar);
  popupAvatar.querySelector('input[name="link"]').value = "";
  openPopup(popupAvatar);
});

profileEditButton.addEventListener("click", (evt) => {
  clearValidation(validationConfig,popupEdit);
  openPopup(popupEdit);
  popupEdit.querySelector('input[name="name"]').value = document.querySelector('.profile__title').textContent;
  popupEdit.querySelector('input[name="description"]').value = document.querySelector('.profile__description').textContent;
});

newCardButton.addEventListener("click", (evt) => {
  clearValidation(validationConfig,popupNewCard);
  popupNewCard.querySelector('input[name="place-name"]').value = "";
  popupNewCard.querySelector('input[name="link"]').value = "";
  openPopup(popupNewCard);
})

popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupNewCard.addEventListener('submit', handleFormSubmitAddNewCard);
popupAvatar.addEventListener('submit', handleFormSubmitAvatar);

function handleFormSubmitEdit(evt) {
  evt.target.querySelector('.popup__button').textContent = "Сохранение...";
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  patchProfileInfo(popup.querySelector('input[name="name"]').value, popup.querySelector('input[name="description"]').value)
    .then((result) => {
      updateProfileInfo(result.name, result.about, result.avatar)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      evt.target.querySelector('.popup__button').textContent ="Сохранить"
    });
  closePopup(popup);
}

function handleFormSubmitAddNewCard(evt) {
  evt.target.querySelector('.popup__button').textContent = "Сохранение...";
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  const newCardData = {
    name: popup.querySelector('input[name="place-name"]').value,
    link: popup.querySelector('input[name="link"]').value
  };
  postCard(popup.querySelector('input[name="place-name"]').value, popup.querySelector('input[name="link"]').value)
    .then((result) => {
      placesList.insertBefore(createCard(result, deleteCard, likeCallback, viewCard, userId), placesList.firstChild)
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      evt.target.querySelector('.popup__button').textContent ="Сохранить"
    });

  popup.querySelector('input[name="place-name"]').value = "";
  popup.querySelector('input[name="link"]').value = "";
  closePopup(popup);
}

function handleFormSubmitAvatar(evt) {
  evt.target.querySelector('.popup__button').textContent = "Сохранение...";
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  patchAvatar(popup.querySelector('input[name="link"]').value)
    .then((result) => {
      console.log(result)
      updateProfileInfo(result.name, result.about, result.avatar)
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      evt.target.querySelector('.popup__button').textContent ="Сохранить"
    });
  popup.querySelector('input[name="link"]').value = "";
  closePopup(popup);
}

function viewCard(name, link) {
  const popupImage = document.querySelector('.popup_type_image');
  const image = popupImage.querySelector('.popup__image');
  const caption = popupImage.querySelector('.popup__caption');
  image.src = link;
  caption.textContent = name;
  openPopup(popupImage);
}

function likeCallback (cardId, likeBtn, likeCounter){
  const likeMethod = likeBtn.classList.contains('card__like-button_is-active') ? unlikeCard : likeCard;
  likeMethod(cardId) 
          .then((res) => {
             likeCounter.textContent = res.likes.length; 
             likeBtn.classList.toggle("card__like-button_is-active"); 
          })
  .catch(err => console.log(err));
  }

document.querySelectorAll('.popup').forEach(function (element) {
  setClosePopupEventListeners(element);
});

enableValidation(validationConfig);

