export { getProfileInfo, patchProfileInfo, getCards, postCard, deleteCard, patchAvatar, likeCard, unlikeCard };

const token = "883e0234-47f8-49e4-92ee-690f5802db36";
const cohort = "wff-cohort-14";

function handleResponse(result) {
    if (!result.ok) {
        return Promise.reject(`Ошибка: ${result.status}`);
    }
    return result.json();
}

function getProfileInfo() {
    return fetch(`https://nomoreparties.co/v1/${cohort}/users/me`, {
        headers: {
            authorization: token
        }
    })
        .then(response => handleResponse(response))
}

function patchProfileInfo(name, about) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(response => handleResponse(response))
};


function getCards() {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards`, {
        headers: {
            authorization: token
        }
    })
        .then(response => handleResponse(response))
}

function postCard(name, link) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards`, {
        method: 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(response => handleResponse(response))
}

function deleteCard(cardId) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        }
    })
        .then(response => handleResponse(response))
}

function patchAvatar(link) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: link
        })
    })
        .then(response => handleResponse(response))
}

function likeCard(cardId) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
    })
        .then(response => handleResponse(response))
}

function unlikeCard(cardId) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
    })
        .then(response => handleResponse(response))
}
