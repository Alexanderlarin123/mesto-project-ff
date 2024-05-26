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
  openPopup
} from "./components/modal.js"

//DOM узлы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');

//Вывести карточки на страницу
initialCards.forEach(function(element){
  placesList.append(createCard(element,deleteCard,likeCard,viewCard));
})

//Add event listener for the buttons: profile_edit and add_new_card
profileEditButton.addEventListener("click", (evt)=> {
    openPopup(popupEdit);
    popupEdit.addEventListener('submit', handleFormSubmit);
    popupEdit.querySelector('input[name="name"]').value=document.querySelector('.profile__title').textContent;
    popupEdit.querySelector('input[name="description"]').value=document.querySelector('.profile__description').textContent;
  });
newCardButton.addEventListener("click", (evt)=>{
    openPopup(popupNewCard);
    popupNewCard.addEventListener('submit', handleFormSubmit);
  })
  

  function handleFormSubmit (evt) {
    evt.preventDefault(); 
    const popup = evt.target.closest('.popup');
    if (popup.classList.contains('popup_type_edit')){
      document.querySelector('.profile__description').textContent=popup.querySelector('input[name="description"]').value;
      document.querySelector('.profile__title').textContent=popup.querySelector('input[name="name"]').value;
      evt.target.closest('.popup').removeEventListener('submit', handleFormSubmit);
      closePopup(popup);
    }
    if (evt.target.closest('.popup').classList.contains('popup_type_new-card')){
      const newCardData={
        name: "",
        link: "",
      };
      newCardData.name=popup.querySelector('input[name="place-name"]').value;
      newCardData.link=popup.querySelector('input[name="link"]').value;

      document.querySelector('.places__list').prepend(createCard(newCardData,deleteCard,likeCard,viewCard))
      popup.querySelector('input[name="place-name"]').value="";
      popup.querySelector('input[name="link"]').value="";
      popup.removeEventListener('submit', handleFormSubmit);
      closePopup(popup);
    }
}

function viewCard(name,link) {
    const popupImage=document.querySelector('.popup_type_image');
    const image = popupImage.querySelector('.popup__image');
    const caption = popupImage.querySelector('.popup__caption');
    image.src = link;
    caption.textContent = name;
    openPopup(popupImage);
}

document.querySelectorAll('.popup').forEach(function(element){
  setClosePopupEventListeners(element);
});
console.log(querySelectorAll('.popup'));
 function setClosePopupEventListeners (popup) {
  popup.querySelector(".popup__close").addEventListener("click", () => {
  closePopup(popup);
});
  popup.addEventListener("mousedown", (evt) => {
   if (evt.target.classList.contains("popup")) {
      closePopup(popup);
   }
});
}