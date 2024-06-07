export { getProfileInfo, patchProfileInfo, getCards, postCard, deleteCard, patchAvatar };

const token = "883e0234-47f8-49e4-92ee-690f5802db36";
const cohort = "wff-cohort-14";

function getProfileInfo() {
    return fetch(`https://nomoreparties.co/v1/${cohort}/users/me`, {
        headers: {
            authorization: token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
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
                throw new Error('Network response was not ok');
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
                throw new Error('Network response was not ok');
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
                throw new Error('Network response was not ok');
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
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        })
}

function patchAvatar(link){
    return fetch(`https://nomoreparties.co/v1/${cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization:token,
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
}
