const onOverlayClick = (event) => {
  if (event.target.classList.contains('popup_active')) {
    closePopup(event.target)
  }
}

const onEscapePress = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  }
}

export function closePopup(popup) {
  popup.classList.remove('popup_active');
  popup.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onEscapePress);
}

export const openPopup = (popup) => {
  popup.classList.add('popup_active');
  popup.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscapePress);
}
