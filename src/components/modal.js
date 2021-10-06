const onOverlayClick = (popup, event) => {
  if (event.target.id === popup.id) {
    closePopup(popup);
  }
}

const onEscapePress = (popup, event) => {
  if (event.key === 'Escape') {
    closePopup(popup);
  }
}

export const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  popup.querySelector('.popup__close').removeEventListener('click', () => closePopup(popup));
  popup.removeEventListener('click', (event) => onOverlayClick(popup, event));
  document.removeEventListener('keydown', (event) => onEscapePress(popup, event));
  Array.from(popup.querySelectorAll('input')).forEach((input) => {
    input.classList.remove('input__error');
    input.value = '';
    popup.querySelector(`.${input.name}-error`).textContent = '';
  });
}

export const openPopup = (popup) => {
  popup.classList.add('popup_active');
  popup.querySelector('.popup__close').addEventListener('click', () => closePopup(popup));
  popup.addEventListener('click', (event) => onOverlayClick(popup, event));
  document.addEventListener('keydown', (event) => onEscapePress(popup, event));
}
