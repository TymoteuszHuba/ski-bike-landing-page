const sectionBikes = document.querySelector('.bikes');
const showBtn = document.querySelector('.show-btn');
const showBtnIcon = document.querySelector('.show-btn__icon');

showBtn.addEventListener('click', () => {
    sectionBikes.classList.toggle('bikes__show');
});