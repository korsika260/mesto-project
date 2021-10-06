/* Подключение карточек */
import {openPopup} from "./modal";

export const initialCards = [
  {
    name: 'Морское дно',
    link: require('../images/david-boca.jpg'),
  },
  {
    name: 'Волосистая цианея',
    link: require('../images/mathilda-khoo.jpg')
  },
  {
    name: 'Подводный фон',
    link: require('../images/ali-abdul-rahman.jpg')
  },
  {
    name: 'Рыба актиния',
    link: require('../images/david-clode.jpg')
  },
  {
    name: 'Белая медуза',
    link: require('../images/joel-filipe.jpg')
  },
  {
    name: 'Океанариум Тюрауми',
    link: require('../images/tomas-nozina.jpg')
  }
];

const photoGridCards = document.querySelector('.photo-grid__cards');
const popupImage = document.querySelector('#popapImage');
const modalImage = popupImage.querySelector('.modal__img');
const modalImageCaption = popupImage.querySelector('.modal__caption');


export const addCard = (name, link) => {
  const card = document.createElement('li');
  card.innerHTML = `
      <img class="card__image" src="${link}" alt="${name}">
          <div class="card__info">
            <h2 class="card__title">${name}</h2>
            <button type="button" class="card__like"></button>
            <button type="button" class="card__remove"></button>
          </div>
      `;
  card.classList.add('card');
  photoGridCards.insertAdjacentElement('afterbegin', card);
  const like = card.querySelector('.card__like');
  like.addEventListener('click', function () {
    if (like.classList.contains('card__like_active')) {
      like.classList.remove('card__like_active');
    } else {
      like.classList.add('card__like_active');
    }
  });

  const remove = card.querySelector('.card__remove');
  remove.addEventListener('click', function () {
    photoGridCards.removeChild(card);
  });

  card.querySelector('.card__image').addEventListener('click', function () {
    modalImage.src = link;
    modalImageCaption.textContent = name;
    openPopup(popupImage);
  })
}
