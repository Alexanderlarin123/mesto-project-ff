// @todo: Темплейт карточки


// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(link,name) {   
  const card=document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);
  card.querySelector('img').src=link;
  card.querySelector('h2').textContent=name;
  card.id=name;
  card.querySelector('.card__delete-button').addEventListener('click', function (){
   deleteCard (card.id);
  });
  return card;
}
// @todo: Функция удаления карточки
function deleteCard (id) {
    const cardItem=document.getElementById(id);
    if (cardItem){
          cardItem.remove();
    }
}
// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
    placesList.append(createCard(initialCards[i].link,initialCards[i].name));
  }
