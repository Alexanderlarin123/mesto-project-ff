export { getProfileInfo, patchProfileInfo, getCards, postCard, deleteCard, patchAvatar, likeCard, unlikeCard };

const token = "883e0234-47f8-49e4-92ee-690f5802db36";
const cohort = "wff-cohort-14";

const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-14',
    headers: {
        authorization: '883e0234-47f8-49e4-92ee-690f5802db36',
        'Content-Type': 'application/json'
    }
}


function getProfileInfo() {
    return fetch(`https://nomoreparties.co/v1/${cohort}/users/me`, {
        headers: {
            authorization: token
        }
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        });

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
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        });
};



function getCards() {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards`, {
        headers: {
            authorization: token
        }
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        });
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
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        });
}

function deleteCard(cardId) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
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
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
}

function likeCard(cardId) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
}

function unlikeCard(cardId) {
    return fetch(`https://nomoreparties.co/v1/${cohort}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
}
