import './index.css';

/* Подключение popup Редактирование профиля */
const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popupEdit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const formEdit = popupEdit.querySelector('.form');

profileEdit.addEventListener('click', function () {
  popupEdit.classList.add('popup_active');
  const name = document.querySelector('.profile__name').textContent;
  popupEdit.querySelectorAll('input')[0].value = name;
  const subtitle = document.querySelector('.profile__subtitle').textContent;
  popupEdit.querySelectorAll('input')[1].value = subtitle;

});

popupEditClose.addEventListener('click', function () {
  popupEdit.classList.remove('popup_active');
});

formEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = popupEdit.querySelectorAll('input')[0].value;
  document.querySelector('.profile__subtitle').textContent = popupEdit.querySelectorAll('input')[1].value;
  popupEdit.classList.remove('popup_active');
});

/* Подключение карточек */
const initialCards = [
  {
    name: 'Морское дно',
    link: require('./images/david-boca.jpg'),
  },
  {
    name: 'Волосистая цианея',
    link: require('./images/mathilda-khoo.jpg')
  },
  {
    name: 'Подводный фон',
    link: require('./images/ali-abdul-rahman.jpg')
  },
  {
    name: 'Рыба актиния',
    link: require('./images/david-clode.jpg')
  },
  {
    name: 'Белая медуза',
    link: require('./images/joel-filipe.jpg')
  },
  {
    name: 'Океанариум Тюрауми',
    link: require('./images/tomas-nozina.jpg')
  }
];

const photoGridCards = document.querySelector('.photo-grid__cards');
const popupImage = document.querySelector('#popapImage');
const popupImageClose = popupImage.querySelector('.popup__close');
const modalImage = popupImage.querySelector('.modal__img');

popupImageClose.addEventListener('click', function () {
  popupImage.classList.remove('popup_active');
});

function addCard(name, link) {
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
    popupImage.classList.add('popup_active');
  })
}

for (let index = initialCards.length - 1; index >= 0; index--) {
  addCard(initialCards[index].name, initialCards[index].link);
}


/* Подключение popup Добавление карточки */
const popupAdd = document.querySelector('#popupAdd');
const popupAddClose = popupAdd.querySelector('.popup__close');
const formAdd = popupAdd.querySelector('.form');
const profileAdd = document.querySelector('.profile__add');

profileAdd.addEventListener('click', function () {
  popupAdd.classList.add('popup_active');
});

popupAddClose.addEventListener('click', function () {
  popupAdd.classList.remove('popup_active');
});

formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const name = popupAdd.querySelectorAll('input')[0].value;
  const link = popupAdd.querySelectorAll('input')[1].value;
  addCard(name, link);
  popupAdd.querySelectorAll('input')[0].value = '';
  popupAdd.querySelectorAll('input')[1].value = '';
  popupAdd.classList.remove('popup_active');
});
