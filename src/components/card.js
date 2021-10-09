/* Подключение карточек */
import {openPopup} from "./modal";
import {modalImage, modalImageCaption, photoGridCards, popupImage} from "./constants";

export const addCard = (name, link) => {
  const cardTemplate = document.querySelector('#cardTemplate').content;
  const card = cardTemplate.cloneNode(true);
  const image = card.querySelector('.card__image');
  const title = card.querySelector('.card__title')
  const like = card.querySelector('.card__like');
  const remove = card.querySelector('.card__remove');

  image.src = link;
  image.alt = name;
  title.textContent = name;

  like.addEventListener('click', function () {
    if (like.classList.contains('card__like_active')) {
      like.classList.remove('card__like_active');
    } else {
      like.classList.add('card__like_active');
    }
  });

  remove.addEventListener('click', function (event) {
    event.target.closest('.card').remove();
  });

  image.addEventListener('click', function () {
    modalImage.src = link;
    modalImageCaption.textContent = name;
    openPopup(popupImage);
  });

  photoGridCards.prepend(card);
}
