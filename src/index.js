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
import {
  enableValidation,
  hideInputError
} from "./components/validation.js"

//DOM узлы
const token = "883e0234-47f8-49e4-92ee-690f5802db36";
const cohort = "wff-cohort-14";
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
hideInputError(popupEdit,popupEdit.querySelector('input[name="description"]'));
const popupNewCard = document.querySelector('.popup_type_new-card');

getProfileInfo(token,cohort);
//Get user information from server
function getProfileInfo(token,cohort){
fetch(`https://nomoreparties.co/v1/${cohort}/users/me`, {
  headers: {
    authorization:token
  }
})
  .then(res => res.json())
  .then((result) => {
    updateProfileInfo(result.name,result.about,result.avatar)
  }); 
}

function updateProfileInfo(name, about, avatar) {
  document.querySelector('.profile__title').textContent=name;
  document.querySelector('.profile__description').textContent=about;
  document.querySelector('.profile__image').style=`background-image: url(${avatar})`;
}

//Вывести карточки на страницу
fetch('https://nomoreparties.co/v1/wff-cohort-14/cards', {
  headers: {
    authorization: '883e0234-47f8-49e4-92ee-690f5802db36'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result)
   
  }); 

initialCards.forEach(function (element) {
  placesList.append(createCard(element, deleteCard, likeCard, viewCard));
})

//Add event listener for the buttons: profile_edit and add_new_card
profileEditButton.addEventListener("click", (evt) => {
  hideInputError(popupEdit,popupEdit.querySelector('input[name="name"]'));
  hideInputError(popupEdit,popupEdit.querySelector('input[name="description"]'));
  openPopup(popupEdit);
  popupEdit.querySelector('input[name="name"]').value = document.querySelector('.profile__title').textContent;
  popupEdit.querySelector('input[name="description"]').value = document.querySelector('.profile__description').textContent;
});

newCardButton.addEventListener("click", (evt) => {
  hideInputError(popupNewCard,popupNewCard.querySelector('input[name="place-name"]'));
  hideInputError(popupNewCard,popupNewCard.querySelector('input[name="link"]'));
  popupNewCard.querySelector('input[name="place-name"]').value = "";
  popupNewCard.querySelector('input[name="link"]').value = "";
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

enableValidation();

