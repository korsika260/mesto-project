/* Подключение popup Редактирование профиля */
const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popupEdit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const formEdit = popupEdit.querySelector('.form');

profileEdit.addEventListener('click', function() {
    popupEdit.classList.add('popup_active');
    const name = document.querySelector('.profile__name').textContent;
    popupEdit.querySelectorAll('input')[0].value = name;
    const subtitle = document.querySelector('.profile__subtitle').textContent;
    popupEdit.querySelectorAll('input')[1].value = subtitle;

});

popupEditClose.addEventListener('click', function() {
    popupEdit.classList.remove('popup_active');
});

formEdit.addEventListener('submit', function(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = popupEdit.querySelectorAll('input')[0].value;
    document.querySelector('.profile__subtitle').textContent = popupEdit.querySelectorAll('input')[1].value;
    popupEdit.classList.remove('popup_active');
});

/* Подключение карточек */
const initialCards = [
    {
      name: 'Морское дно',
      link: 'images/david-boca.jpg'
    },
    {
      name: 'Волосистая цианея',
      link: 'images/mathilda-khoo.jpg'
    },
    {
      name: 'Подводный фон',
      link: 'images/ali-abdul-rahman.jpg'
    },
    {
      name: 'Рыба актиния',
      link: 'images/david-clode.jpg'
    },
    {
      name: 'Белая медуза',
      link: 'images/joel-filipe.jpg'
    },
    {
      name: 'Океанариум Тюрауми',
      link: 'images/tomas-nozina.jpg'
    }
  ]; 

  const photoGridCards = document.querySelector('.photo-grid__cards');

  function addCard(name,link){
    photoGridCards.insertAdjacentHTML('afterbegin',`
    <li class="card">
          <img class="card__image" src="${link}" alt="${name}">
          <div class="card__info">
            <h2 class="card__title">${name}</h2>
            <button type="button" class="card__like">
            </button>
          </div>
        </li>`); 
  }

  for(let index=initialCards.length -1; index>=0; index--){
      addCard(initialCards[index].name, initialCards[index].link);
  }
  

/* Подключение popup Добавление карточки */
const popupAdd = document.querySelector('#popupAdd');
const popupAddClose = popupAdd.querySelector('.popup__close');
const formAdd = popupAdd.querySelector('.form');
const profileAdd = document.querySelector('.profile__add');

profileAdd.addEventListener('click', function() {
    popupAdd.classList.add('popup_active');
});

popupAddClose.addEventListener('click', function() {
    popupAdd.classList.remove('popup_active');
});

formAdd.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const name = popupAdd.querySelectorAll('input')[0].value;
    const link = popupAdd.querySelectorAll('input')[1].value;
    addCard(name,link);
    popupAdd.querySelectorAll('input')[0].value = '';
    popupAdd.querySelectorAll('input')[1].value = '';
    popupAdd.classList.remove('popup_active');
});
