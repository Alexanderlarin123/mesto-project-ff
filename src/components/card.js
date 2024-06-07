
//function deleteCard(card) {
//   card.remove();
//}

function likeCard(cardLikeButton) {
    cardLikeButton.classList.toggle('card__like-button_is-active');
}

function createCard(cardData, callback, like, unlike, view, getCards) {
    const card = document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);
    card.querySelector('img').src = cardData['link'];
    card.querySelector('img').alt = cardData['name'];
    card.querySelector('h2').textContent = cardData['name'];
    card.querySelector('h3').textContent = cardData['likes'].length;
    const jsonArray = cardData['likes'];
    const targetValue = document.querySelector('.profile__title').textContent;
    for (let i = 0; i < jsonArray.length; i++) {
        if (jsonArray[i].name === targetValue) {
            card.querySelector('.card__like-button').classList.add('card__like-button_is-active')
            console.log(jsonArray[i].name)
        }
    }
    if (cardData['owner'].name === document.querySelector('.profile__title').textContent) {
        card.querySelector('.card__delete-button').addEventListener('click', function () {
            callback(cardData['_id'])
        });
    }
    else {
        card.querySelector('.card__delete-button').remove();
    }
    card.querySelector('.card__like-button').addEventListener('click', function () {
        if (!card.querySelector('.card__like-button').classList.contains('card__like-button_is-active')) {
            //likeCard(card.querySelector('.card__like-button'));
            like(cardData['_id']);
        }
        else {
            //likeCard(card.querySelector('.card__like-button'));
            unlike(cardData['_id']);
        }
    });
    card.querySelector('.card__image').addEventListener('click', function () {
        view(cardData['name'], cardData['link']);
    });
    return card;
}
export { likeCard, createCard };