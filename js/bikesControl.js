const showBtn = document.querySelector('.show-btn');
const sectionBikes = document.querySelector('.bikes');

const selectBikes = document.querySelector('.bikes__select');
const bikeCards = document.querySelector('.bikes__cards');
const cards = document.querySelectorAll('.bikes__card');
// object which contain all mouseover parameters of card
const bikeData = {};

const cardData = {
	'Trek Fuel EXe 9.9 XTR': {
		type: 'electric',
		mountain: 10,
		hill: 10,
		forest: 10,
		city: 9,
	},
	'Trek Slash 9.9 XXT': {
		type: 'enduro',
		mountain: 9,
		hill: 8,
		forest: 6,
		city: 3,
	},
	'Trek Slash 7': {
		type: 'trail',
		mountain: 7,
		hill: 8,
		forest: 7,
		city: 4,
	},
	'Trek Roscoe 7': {
		type: 'hardtail',
		mountain: 5,
		hill: 5,
		forest: 6,
		city: 5,
	},
	'Trek Rail 9.7': {
		type: 'electric',
		mountain: 9,
		hill: 9,
		forest: 9,
		city: 9,
	},
	'Trek Slash 9.7': {
		type: 'enduro',
		mountain: 8,
		hill: 7,
		forest: 6,
		city: 3,
	},
	'Trek Top Fuel 9.9': {
		type: 'trail',
		mountain: 7,
		hill: 8,
		forest: 7,
		city: 4,
	},
	'Trek Procaliber 9.7': {
		type: 'hardtail',
		mountain: 5,
		hill: 6,
		forest: 7,
		city: 5,
	},
	'Trek Supercaliber SLR 9.9': {
		type: 'xc',
		mountain: 5,
		hill: 8,
		forest: 8,
		city: 5,
	},
	'Trek Supercaliber 9.7': {
		type: 'xc',
		mountain: 5,
		hill: 7,
		forest: 7,
		city: 5,
	},
};

// show more bikes (showbar)
showBtn.addEventListener('click', () => {
	sectionBikes.classList.toggle('bikes--show');
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

// function which updates squares based on bike spec from object cardData
const updateSpecificationSquares = (card, bikeName) => {
	// object cardData[bikeName] (bikeName as key) pass all elements to specification, which is new object contains all spec from type of bike
	const specification = cardData[bikeName];

	// for each specType in specification
	for (const specType in specification) {
		// new variable squares which contains all square from card
		// specType is like a name for class
		const squares = card.querySelectorAll(`.${specType}-square`);
		// numSquares contains all keys of object specification[specType] (specType is key)
		const numSquares = specification[specType];

		// if statement check if squares length is bigger or the same like numSquares
		if (squares.length >= numSquares) {
			// for loop which check i value is bigger than numSquares if yes then iteration i++
			for (let i = 0; i < numSquares; i++) {
				// add card__hover-effects for each square
				squares[i].classList.add('squares--color');
			}
		}
	}
};

// function which add effects on click on card
const addClickOnCard = (card) => {
	// for all cards remove effect
	cards.forEach((card) => {
		card.classList.remove('card--active');
	});

	// for clicked card add effect
	card.classList.add('card--active');
};

// we move for each card from cards variable
cards.forEach((card) => {
	// variable bikeName take name from card
	const bikeName = card.querySelector('.bikes__card-spec-name').textContent;
	// turn on function updateSpecificationSquares
	updateSpecificationSquares(card, bikeName);

	card.addEventListener('click', () => {
		addCardsToBikeData(card);

		if (card.classList.contains('card--active')) {
			card.classList.remove('card--active');
		} else {
			if (card.classList.contains('card--active')) {
				card.classList.remove('card--active');
			} else {
				addClickOnCard(card);
			}
		}
	});
});

// listener on select which turn on the function cardSelect
selectBikes.addEventListener('change', () => {
	const selectedType = selectBikes.value;
	// console.log(selectedType);

	cardSelect(selectedType);
});
