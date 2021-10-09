import {closePopup, openPopup} from './modal'
import {clearValidation, enableValidation} from './validate';
import {addCard} from './card'
import {
  btnProfileEdit,
  formAdd,
  formEdit,
  inputAddLink,
  inputAddName,
  inputProfileName,
  inputProfileSubtitle,
  popupAdd,
  popupEdit,
  profileAdd,
  profileName,
  profileSubtitle,
  initialCards
} from "./constants";

// открыть попап редактирования профиля
const profilePopupOpen = () => {
  openPopup(popupEdit);
  clearValidation(formEdit);
  inputProfileName.value = profileName.textContent;
  inputProfileSubtitle.value = profileSubtitle.textContent;
}

// добавить обработчики на кнопки открытия и закрытия попапа редактирования профиля
btnProfileEdit.addEventListener('click', profilePopupOpen);

formEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileSubtitle.textContent = inputProfileSubtitle.value;
  closePopup(popupEdit);
});

initialCards.forEach(item => {
  addCard(item.name, item.link);
});

// добавить обработчики на кнопки открытия и закрытия попапа редактирования нового места
profileAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  clearValidation(formAdd);
});

formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const name = inputAddName.value;
  const link = inputAddLink.value;
  addCard(name, link);
  inputAddName.value = '';
  inputAddLink.value = '';
  closePopup(popupAdd);
});

enableValidation({
  formSelector: '.form',
  inputSelector: '.input',
  buttonSelector: '.form__submit',
  errorClass: 'input__error'
});
