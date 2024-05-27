//import styles
import "./pages/index.css";
//import function and variables
import {
  initialCards
} from "./components/cards.js"
import {
  deleteCard,
  likeCard,
  createCard
} from "./components/card.js"
import {
  closePopup,
  openPopup,
  setClosePopupEventListeners
} from "./components/modal.js"

//DOM узлы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');

//Вывести карточки на страницу
initialCards.forEach(function (element) {
  placesList.append(createCard(element, deleteCard, likeCard, viewCard));
})

//Add event listener for the buttons: profile_edit and add_new_card
profileEditButton.addEventListener("click", (evt) => {
  openPopup(popupEdit);
  popupEdit.querySelector('input[name="name"]').value = document.querySelector('.profile__title').textContent;
  popupEdit.querySelector('input[name="description"]').value = document.querySelector('.profile__description').textContent;
});
newCardButton.addEventListener("click", (evt) => {
  openPopup(popupNewCard);
})
popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupNewCard.addEventListener('submit', handleFormSubmitAddNewCard);

function handleFormSubmitEdit(evt) {
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    document.querySelector('.profile__description').textContent = popup.querySelector('input[name="description"]').value;
    document.querySelector('.profile__title').textContent = popup.querySelector('input[name="name"]').value;
    closePopup(popup);  
}

function handleFormSubmitAddNewCard(evt) {
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
    const newCardData = {
      name: "",
      link: "",
    };
    newCardData.name = popup.querySelector('input[name="place-name"]').value;
    newCardData.link = popup.querySelector('input[name="link"]').value;
    document.querySelector('.places__list').prepend(createCard(newCardData, deleteCard, likeCard, viewCard))
    popup.querySelector('input[name="place-name"]').value = "";
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

document.querySelectorAll('.popup').forEach(function (element) {
  setClosePopupEventListeners(element);
});
