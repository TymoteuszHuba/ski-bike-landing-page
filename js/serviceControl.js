// const carousel = document.querySelector('.servie__carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let squares = document.querySelectorAll('.service__carousel-square');
let carouselCards = document.querySelectorAll('.service__carousel-card');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	if (n > carouselCards.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = carouselCards.length;
	}

	for (let i = 0; i < carouselCards.length; i++) {
		carouselCards[i].style.display = 'none';
	}

	for (let i = 0; i < squares.length; i++) {
		squares[i].className = squares[i].className.replace(' square--active', '');
	}

	carouselCards[slideIndex - 1].style.display = 'flex';
	squares[slideIndex - 1].className += ' square--active';
}

nextBtn.addEventListener('click', () => {
	plusSlides(1);
});

prevBtn.addEventListener('click', () => {
	plusSlides(-1);
});

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        currentSlide(index + 1);
    })
});
