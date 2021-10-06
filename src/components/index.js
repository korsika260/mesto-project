import { openPopup, closePopup } from './modal'
import { enableValidation } from './validate';
import {initialCards, addCard} from './card'

/* Подключение popup Редактирование профиля */
const btnProfileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popupEdit');
const formEdit = popupEdit.querySelector('.form');

// открыть попап редактирования профиля
const profilePopupOpen = () => {
  openPopup(popupEdit);
  const name = document.querySelector('.profile__name').textContent;
  popupEdit.querySelectorAll('input')[0].value = name;
  const subtitle = document.querySelector('.profile__subtitle').textContent;
  popupEdit.querySelectorAll('input')[1].value = subtitle;
}


// добавить обработчики на кнопки открытия и закрытия попапа редактирования профиля
btnProfileEdit.addEventListener('click', profilePopupOpen);

formEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = popupEdit.querySelectorAll('input')[0].value;
  document.querySelector('.profile__subtitle').textContent = popupEdit.querySelectorAll('input')[1].value;
  closePopup(popupEdit);
});




for (let index = initialCards.length - 1; index >= 0; index--) {
  addCard(initialCards[index].name, initialCards[index].link);
}


/* Подключение popup Добавление карточки */
const popupAdd = document.querySelector('#popupAdd');
const formAdd = popupAdd.querySelector('.form');
const profileAdd = document.querySelector('.profile__add');

// добавить обработчики на кнопки открытия и закрытия попапа редактирования нового места
profileAdd.addEventListener('click', ()=>openPopup(popupAdd));


formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const name = popupAdd.querySelectorAll('input')[0].value;
  const link = popupAdd.querySelectorAll('input')[1].value;
  addCard(name, link);
  popupAdd.querySelectorAll('input')[0].value = '';
  popupAdd.querySelectorAll('input')[1].value = '';
  newPopupClose();
});


enableValidation({
  formSelector: '#formProfile',
  inputSelector: '.input',
  buttonSelector: '.form__submit'
});

enableValidation({
  formSelector: '#formNew',
  inputSelector: '.input',
  buttonSelector: '.form__submit'
});
