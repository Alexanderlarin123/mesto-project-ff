import "./pages/index.css";
import {
  initialCards
} from "./components/cards.js"

import {
  deleteCard,
  likeCard,
  createCard,
  viewCard
} from "./components/card.js"

import {
  openPopup,
  closePopup
} from "./components/modal.js"



// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
const desription = document.querySelector('.profile__description');
const title = document.querySelector('.profile__title');
const popupNewCard = document.querySelector('.popup_type_new-card');
const cardNameInput = popupNewCard.querySelector('input[name="place-name"]');
const imageLinkInput = popupNewCard.querySelector('input[name="link"]');
const popupImage=document.querySelector('.popup_type_image');
const image = popupImage.querySelector('.popup__image');
const caption = popupImage.querySelector('.popup__caption');

// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
    placesList.append(createCard(initialCards[i],deleteCard,likeCard,viewCard));
  }
// Add event listener for all bottons. Open tree different 
document.addEventListener("click", (evt)=> {
  if (evt.target.className==="profile__add-button"){
    openPopup(popupNewCard);
  }
  if (evt.target.className==="profile__edit-button"){
    openPopup(popupEdit);
  }
  });

  export {popupImage,image,caption,popupNewCard,cardNameInput,imageLinkInput,popupEdit,desription,title};


