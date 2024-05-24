import {
    openPopup
  } from "./modal.js"

import {
    popupImage,
    image,
    caption
  } from "../index.js"

function deleteCard (card) {
   card.remove();
}

function likeCard (cardLikeButton) {
   cardLikeButton.classList.toggle('card__like-button_is-active');
}

function createCard(cardData,callback,like,view) { 
    const card=document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);
    card.querySelector('img').src=cardData['link'];
    card.querySelector('img').alt=cardData['name'];
    card.querySelector('h2').textContent=cardData['name'];;
    card.querySelector('.card__delete-button').addEventListener('click', function (){
     callback(card);
    });
    card.querySelector('.card__like-button').addEventListener('click',function(){
     like(card.querySelector('.card__like-button')); 
    });
    card.querySelector('.card__image').addEventListener('click',function(){
     view(card); 
    });
    return card;
  }

  function viewCard(card){
    image.src=card.querySelector('.card__image').src;
    caption.textContent=card.querySelector('.card__title').textContent;
    openPopup(popupImage);       
  }


export {deleteCard,likeCard,createCard,viewCard};