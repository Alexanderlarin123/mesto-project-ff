//import styles
import "./pages/index.css";
//import function and variables
import {
  initialCards
} from "./components/cards.js"
import {
  createCard
} from "./components/card.js"
import {
  closePopup,
  openPopup,
  setClosePopupEventListeners
} from "./components/modal.js"
import {
  enableValidation,
  clearValidation,
  hideInputError
} from "./components/validation.js"
import {
  getProfileInfo,
  patchProfileInfo,
  getCards,
  postCard,
  deleteCard,
  patchAvatar,
  likeCard,
  unlikeCard
} from "./components/api.js"

//DOM узлы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const avatarButton = document.querySelector('.profile__image');
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
//hideInputError(popupEdit, popupEdit.querySelector('input[name="description"]'));
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupAvatar = document.querySelector('.popup_type_avatar');

function updateProfileInfo(name, about, avatar) {
  document.querySelector('.profile__title').textContent = name;
  document.querySelector('.profile__description').textContent = about;
  document.querySelector('.profile__image').style = `background-image: url(${avatar})`;
}

let userId;
Promise.all([getProfileInfo(), getCards()])
.then(([userData, cards]) => {
    userId = userData._id;
    //отрисовка данных профиля
    updateProfileInfo(userData.name, userData.about, userData.avatar)
    //отрисовка нач карточек
    cards.forEach(function (element) {
      placesList.append(createCard(element, deleteCard, likeCard, unlikeCard, viewCard));
    })
}).catch(error => console.log(error))


/* getProfileInfo()
.then((result) => {
updateProfileInfo(result.name, result.about, result.avatar);
})
.catch(error => {
console.log(error);
});

getCards()
.then((result) => {
placesList.innerHTML = '';
result.forEach(function (element) {
placesList.append(createCard(element, deleteCard, likeCard, unlikeCard, viewCard));
})
})
.catch(error => {
console.log(error);
}); */


placesList.addEventListener("click", (evt) => {
  if (evt.target.classList.contains('card__delete-button') || evt.target.classList.contains('card__like-button')) {
    getCards()
      .then((result) => {
        placesList.innerHTML = '';
        result.forEach(function (element) {
          placesList.append(createCard(element, deleteCard, likeCard, unlikeCard, viewCard));
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
})

avatarButton.addEventListener("click", (evt) => {
  //hideInputError(popupAvatar, popupAvatar.querySelector('input[name="link"]'));
  clearValidation(popupAvatar);
  popupAvatar.querySelector('input[name="link"]').value = "";
  openPopup(popupAvatar);
});

//Add event listener for the buttons: profile_edit and add_new_card
profileEditButton.addEventListener("click", (evt) => {
  //hideInputError(popupEdit, popupEdit.querySelector('input[name="name"]'));
  //hideInputError(popupEdit, popupEdit.querySelector('input[name="description"]'));
  clearValidation(popupEdit);
  openPopup(popupEdit);
  popupEdit.querySelector('input[name="name"]').value = document.querySelector('.profile__title').textContent;
  popupEdit.querySelector('input[name="description"]').value = document.querySelector('.profile__description').textContent;
});

newCardButton.addEventListener("click", (evt) => {
  //hideInputError(popupNewCard, popupNewCard.querySelector('input[name="place-name"]'));
  //hideInputError(popupNewCard, popupNewCard.querySelector('input[name="link"]'));
  clearValidation(popupNewCard);
  popupNewCard.querySelector('input[name="place-name"]').value = "";
  popupNewCard.querySelector('input[name="link"]').value = "";
  openPopup(popupNewCard);
})

popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupNewCard.addEventListener('submit', handleFormSubmitAddNewCard);
popupAvatar.addEventListener('submit', handleFormSubmitAvatar);

function handleFormSubmitEdit(evt) {
  evt.target.querySelector('.popup__button').textContent="Сохранение...";
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  patchProfileInfo(popup.querySelector('input[name="name"]').value, popup.querySelector('input[name="description"]').value)
    .then((result) => {
      updateProfileInfo(result.name, result.about, result.avatar)
    })
    .catch(error => {
      console.log(error);
    });
/* getProfileInfo()
  .then((result) => {
    updateProfileInfo(result.name, result.about, result.avatar)
  })
  .catch(error => {
    console.log(error);
  }); */
  closePopup(popup);
}

function handleFormSubmitAddNewCard(evt) {
  evt.target.querySelector('.popup__button').textContent="Сохранение...";
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  const newCardData = {
    name: popup.querySelector('input[name="place-name"]').value,
    link: popup.querySelector('input[name="link"]').value
  };
  /* newCardData.name = popup.querySelector('input[name="place-name"]').value;
  newCardData.link = popup.querySelector('input[name="link"]').value; */
  postCard(popup.querySelector('input[name="place-name"]').value, popup.querySelector('input[name="link"]').value)
    .then((result) => {
      //console.log(result)
      //placesList.append(createCard(result, deleteCard, likeCard, unlikeCard, viewCard))
      placesList.insertBefore(createCard(result, deleteCard, likeCard, unlikeCard, viewCard),placesList.firstChild)
      /* getCards()
        .then((result) => {
          placesList.innerHTML = '';
          result.forEach(function (element) {
            placesList.append(createCard(element, deleteCard, likeCard, unlikeCard, viewCard));
          })
        })
        .catch(error => {
          console.log(error);
        }); */
    })
    .catch(error => {
      console.log(error);
    });

  popup.querySelector('input[name="place-name"]').value = "";
  popup.querySelector('input[name="link"]').value = "";
  closePopup(popup);
}

function handleFormSubmitAvatar(evt) {
  evt.target.querySelector('.popup__button').textContent="Сохранение...";
  evt.preventDefault();
  const popup = evt.target.closest('.popup');

  patchAvatar(popup.querySelector('input[name="link"]').value)
    .then((result) => {
      console.log(result)
      updateProfileInfo(result.name, result.about, result.avatar)
    })
    .catch(error => {
      console.log(error);
    });

  popup.querySelector('input[name="link"]').value = "";
  /* getProfileInfo()
    .then((result) => {
      updateProfileInfo(result.name, result.about, result.avatar)
    })
    .catch(error => {
      console.log(error);
    }); */
  closePopup(popup);
}


function viewCard(name, link) {
  const popupImage = document.querySelector('.popup_type_image');
  const image = popupImage.querySelector('.popup__image');
  const caption = popupImage.querySelector('.popup__caption');
  image.src = link;
  caption.textContent = name;
  openPopup(popupImage);
}

document.querySelectorAll('.popup').forEach(function (element) {
  setClosePopupEventListeners(element);
});

enableValidation();

