
//function deleteCard(card) {
 //  card.remove();
//}

function likeCard(cardLikeButton) {
    cardLikeButton.classList.toggle('card__like-button_is-active');
}

function createCard(cardData, deleteCard, like, unlike, view, userId) {
    const card = document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);
    card.querySelector('img').src = cardData['link'];
    card.querySelector('img').alt = cardData['name'];
    card.querySelector('h2').textContent = cardData['name'];
    card.querySelector('h3').textContent = cardData['likes'].length;
    const targetValue = document.querySelector('.profile__title').textContent;


    if(cardData.likes.some(element => element._id === userId)){ 
        card.querySelector('.card__like-button').classList.add("card__like-button_is-active"); 
 }
    if (cardData['owner']._id === userId) {
        card.querySelector('.card__delete-button').addEventListener('click', function () {
            deleteCard(cardData['_id']);
            card.remove();
        });
    }
    else {
        card.querySelector('.card__delete-button').remove();
    }
    card.querySelector('.card__like-button').addEventListener('click', function () {
        if (!card.querySelector('.card__like-button').classList.contains('card__like-button_is-active')) {
            like(cardData['_id']);
        }
        else {
            unlike(cardData['_id']);
        }
    });
    card.querySelector('.card__image').addEventListener('click', function () {
        view(cardData['name'], cardData['link']);
    });
    return card;
}
export { likeCard, createCard };