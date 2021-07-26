let profileEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let form = popup.querySelector('.form');

profileEdit.addEventListener('click', function() {
    popup.classList.add('popup_active');
    let name = document.querySelector('.profile__name').textContent;
    popup.querySelectorAll('input')[0].value = name;
    let subtitle = document.querySelector('.profile__subtitle').textContent;
    popup.querySelectorAll('input')[1].value = subtitle;

});

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup_active');
});

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = popup.querySelectorAll('input')[0].value;
    document.querySelector('.profile__subtitle').textContent = popup.querySelectorAll('input')[1].value;
    popup.classList.remove('popup_active');
});