const onOverlayClick = (event) => {
  if (Array.from(event.target.classList).includes('popup_active')) {
    closePopup(event.target)
  }
}

const onEscapePress = (popup, event) => {
  if (event.key === 'Escape') {
    closePopup(popup);
  }
}

export function closePopup(popup) {
  popup.classList.remove('popup_active');
  popup.querySelector('.popup__close').removeEventListener('click', closePopup);
  popup.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onEscapePress);
}

export const openPopup = (popup) => {
  popup.classList.add('popup_active');
  popup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(popup);
  });
  popup.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', (event) => onEscapePress(popup, event));
}
