const infoBtn = document.querySelector('.header__info');
const popupInfo = document.querySelector('.popup');

function openInfo() {
    popupInfo.classList.toggle('popup__opened');
}

infoBtn.addEventListener('click', openInfo);