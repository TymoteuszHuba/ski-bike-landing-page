const showBtn = document.querySelector('.show-btn');
const sectionBikes = document.querySelector('.bikes');

const selectBikes = document.querySelector('.bikes__select');
const bikeCards = document.querySelector('.bikes__cards');
const cards = document.querySelectorAll('.bikes__card');

// object which contain all mouseover parameters of card
const bikeData = {};

// show more bikes (showbar)
showBtn.addEventListener('click', () => {
	sectionBikes.classList.toggle('bikes__show');
});

// function setting the cards which was selected
const cardSelect = (selectedT) => {
	cards.forEach((card) => {
		if (selectedT === 'allBikes' || card.id === selectedT) {
			card.style.display = 'flex';
		} else {
			card.style.display = 'none';
		}
	});
};

// function responsible for catch all necessery values
const addCardsToBikeData = (card) => {
	const type = card.id;
	const name = card.querySelector('.bikes__card-spec-name').textContent;

	// create an object of specification
	const spec = {};

	const specElements = ['mountains', 'hills', 'forset', 'city'];

	// create an object with the extracted data
	const BikeInfo = {
		type,
		name,
		spec,
	};

	// use the id as a key to store the data in the bikeFata object
	bikeData[name] = BikeInfo;

	console.log('bikeData: ', bikeData);
};

// function which show squares
const showSquares = (cardName, card) => {
	let mountainSquare = card.querySelectorAll('.mountain-square');
	let hillSquare = card.querySelectorAll('.hill-square');
	let forestSquare = card.querySelectorAll('.forest-square');
	let citySquare = card.querySelectorAll('.city-square');

	if (cardName === 'Trek Fuel EXe 9.9 XTR') {
		for (let i = 0; i <= 9; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
			hillSquare[i].classList.add('card__hover-effects');
			forestSquare[i].classList.add('card__hover-effects');
		}
		for (let i = 0; i <= 8; i++) {
			citySquare[i].classList.add('card__hover-effects');
		}
	} else if (cardName === 'Trek Rail 9.7') {
		for (let i = 0; i <= 8; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
			hillSquare[i].classList.add('card__hover-effects');
			forestSquare[i].classList.add('card__hover-effects');
			citySquare[i].classList.add('card__hover-effects');
		}
	} else if (cardName === 'Trek Slash 9.9 XXT') {
        for (let i = 0; i <= 8; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 7; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 5; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 2; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } else if (cardName === 'Trek Slash 9.7') {
        for (let i = 0; i <= 7; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 6; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 5; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 2; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } else if (cardName === 'Trek Slash 7' || cardName === 'Trek Top Fuel 9.9') {
        for (let i = 0; i <= 6; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 7; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 6; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 3; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } else if (cardName === 'Trek Roscoe 7') {
        for (let i = 0; i <= 4; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 4; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 5; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 4; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } else if (cardName === 'Trek Procaliber 9.7') {
        for (let i = 0; i <= 4; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 5; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 6; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 4; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } else if (cardName === 'Trek Supercaliber SLR 9.9') {
        for (let i = 0; i <= 4; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 7; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 7; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 4; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } else if (cardName === 'Trek Supercaliber 9.7') {
        for (let i = 0; i <= 4; i++) {
			mountainSquare[i].classList.add('card__hover-effects');
		}
        for (let i = 0; i <= 6; i++) {
            hillSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 6; i++) {
            forestSquare[i].classList.add('card__hover-effects');
        }
        for (let i = 0; i <= 4; i++) {
            citySquare[i].classList.add('card__hover-effects');
        }
    } 
};

// add listener of each card on mouseover
cards.forEach((card) => {
	card.addEventListener('mouseover', (event) => {
		console.log(event.target.children[1].childNodes[1].innerText);
		const cardName = event.target.children[1].childNodes[1].innerText;
		const cardId = event.target.id;
		console.log(cardId);
		addCardsToBikeData(card);
		showSquares(cardName, card);
	});
});

// listener on select which turn on the function cardSelect
selectBikes.addEventListener('change', () => {
	const selectedType = selectBikes.value;
	// console.log(selectedType);

	cardSelect(selectedType);
});
