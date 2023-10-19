const showBtn = document.querySelector('.show-btn');
const sectionBikes = document.querySelector('.bikes');

const selectBikes = document.querySelector('.bikes__select');
const bikeCards = document.querySelector('.bikes__cards');
const cards = document.querySelectorAll('.bikes__card');

showBtn.addEventListener('click', () => {
	sectionBikes.classList.toggle('bikes__show');
});

// function checking the which card was choose
const cardSelect = (selectedT) => {
	cards.forEach((card) => {
		if (selectedT === 'allBikes' || card.id === selectedT) {
			card.style.display = 'flex';
		} else {
			card.style.display = 'none';
		}
	});
};

selectBikes.addEventListener('change', () => {
	const selectedType = selectBikes.value;
	// console.log(selectedType);

	cardSelect(selectedType);
});

cards.forEach((card) => {
	card.addEventListener('mouseover', (event) => {
		console.log(event.target);
	});
});

