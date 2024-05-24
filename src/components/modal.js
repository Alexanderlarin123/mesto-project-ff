import {
    deleteCard,
    likeCard,
    createCard,
    viewCard
  } from "./card.js"
  import {
    title,
    desription
  } from "../index.js"

function openPopup(popup){
    popup.classList.add('popup_is-animated');
    popup.classList.add('popup_is-opened');
    popup.addEventListener('click',closePopup);
    document.addEventListener('keydown',closePopup); 
    if (popup.classList.contains('popup_type_edit')){
      popup.addEventListener('submit', handleFormSubmit); 
      popup.querySelector('input[name="name"]').value=title.textContent;
      popup.querySelector('input[name="description"]').value=desription.textContent;
    }
    if (popup.classList.contains('popup_type_new-card')){
      popup.addEventListener('submit', handleFormSubmit);
    }
  }

  function closePopup (evt){
    if(evt.target.className==="popup__close" || evt.target.classList.contains("popup") || evt.target.classList.contains("popup__button")){
      evt.target.closest('.popup').classList.remove('popup_is-opened');
      evt.target.closest('.popup').removeEventListener('click', closePopup);  
    }
    if (evt.key === 'Escape') {
        document.querySelectorAll('.popup').forEach( function(element){
        if (element.classList.contains('popup_is-opened')){
            element.classList.remove('popup_is-opened');
            element.removeEventListener('keydown', closePopup);
        }     
    });
  }
  }

  function handleFormSubmit (evt) {
    evt.preventDefault(); 
    const popup = evt.target.closest('.popup');
    if (popup.classList.contains('popup_type_edit')){
      document.querySelector('.profile__description').textContent=popup.querySelector('input[name="description"]').value;
      document.querySelector('.profile__title').textContent=popup.querySelector('input[name="name"]').value;
      evt.target.closest('.popup').removeEventListener('submit', handleFormSubmit);
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
    }
}


  export {openPopup,closePopup}