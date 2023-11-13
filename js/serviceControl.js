// const carousel = document.querySelector('.servie__carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let squares = document.querySelectorAll('.service__carousel-square');
let carouselCards = document.querySelectorAll('.service__carousel-card');

let slideIndex = 1;
showSlides(slideIndex);

let touchStartX = 0;
let touchEndX = 0;
const serviceCarousel = document.querySelector('.service__carousel');

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

// touch start event handler
function handleTouchStart(e) {
	touchStartX = e.touches[0].clientX;
}
// touch end event handler
function handleTouchMove(e) {
	touchEndX = e.touches[0].clientX;
}

// Touch end event handler
function handleTouchEnd() {
	const touchDiff = touchStartX - touchEndX;

	// adjust the sensivity 
	if (touchDiff > 50) {
		plusSlides(1);
	} else if (touchDiff < -50) {
		plusSlides(-1);
	}
}
// add listeners
serviceCarousel.addEventListener('touchstart', handleTouchStart, false);
serviceCarousel.addEventListener('touchmove', handleTouchMove, false);
serviceCarousel.addEventListener('touchend', handleTouchEnd, false);

nextBtn.addEventListener('click', () => {
	plusSlides(1);
});

prevBtn.addEventListener('click', () => {
	plusSlides(-1);
});

squares.forEach((square, index) => {
	square.addEventListener('click', () => {
		currentSlide(index + 1);
	});
});
