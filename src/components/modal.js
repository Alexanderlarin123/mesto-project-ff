
function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener("keyup", handleEscUp);
};

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscUp);
};

const handleEscUp = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
};

function setClosePopupEventListeners(popup) {
  popup.querySelector(".popup__close").addEventListener("click", () => {
    closePopup(popup);
  });
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
}
export { openPopup, closePopup, setClosePopupEventListeners }