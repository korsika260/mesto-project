export const btnProfileEdit = document.querySelector('.profile__edit');
export const popupEdit = document.querySelector('.popup__edit');
export const formEdit = popupEdit.querySelector('.form');
export const profileName = document.querySelector('.profile__name');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const inputProfileName = formEdit.querySelector('.input_profile-name');
export const inputProfileSubtitle = formEdit.querySelector('.input__profile-subtitle');
export const popupAdd = document.querySelector('.popup__add');
export const formAdd = popupAdd.querySelector('.form');
export const profileAdd = document.querySelector('.profile__add');
export const inputAddName = formAdd.querySelector('.input__add-name');
export const inputAddLink = formAdd.querySelector('.input__add-link');
export const photoGridCards = document.querySelector('.photo-grid__cards');
export const popupImage = document.querySelector('.popup_image');
export const modalImage = popupImage.querySelector('.modal__img');
export const modalImageCaption = popupImage.querySelector('.modal__caption');

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
