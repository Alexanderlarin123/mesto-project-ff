// @todo: Темплейт карточки


// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData,callback) { 
  const card=document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);
  card.querySelector('img').src=cardData['link'];
  card.querySelector('img').alt=cardData['name'];
  card.querySelector('h2').textContent=cardData['name'];;
  card.querySelector('.card__delete-button').addEventListener('click', function (){
   callback(card);
  });
  return card;
}
// @todo: Функция удаления карточки
function deleteCard (card) {
          card.remove();
}

// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
    placesList.append(createCard(initialCards[i],deleteCard));
  }
