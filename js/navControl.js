const burgerBtn = document.querySelector('.nav__burger-btn');
const navItems = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('section');
const routePathAnimation = document.querySelector('.routes--line-path');

const sectionContainer = document.querySelectorAll('.section__container');

const toggleBurgerMenu = () => {
	navItems.classList.toggle('burger-menu--active');
	burgerBtn.classList.toggle('burger-btn--active');

	if (burgerBtn.classList.contains('burger-btn--active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'scroll';
	}

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('burger-menu--active');
			burgerBtn.classList.remove('burger-btn--active');
			document.body.style.overflowY = 'scroll';
		});
	});
};

burgerBtn.addEventListener('click', () => {
	toggleBurgerMenu();
});

// add effects each menu item after scroll
window.onscroll = () => {
	sections.forEach((section) => {
		let top = window.scrollY;
		let offset = section.offsetTop - 150;
		let height = section.offsetHeight;
		let id = section.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navItem.forEach((item) => {
				item.classList.remove('nav--active');

				console.log(top);

				if (document.querySelector(`.nav__item[href*= ${id}]`) === null) {
					// console.log('is null');
					return;
				} else {
					document.querySelector(`.nav__item[href*= ${id}]`).classList.add('nav--active');
				}
			});

			if (section.id == 'routes') {
				routePathAnimation.style.animation = 'dashAnimation 5s linear forwards';
			}

			if (section.classList.contains('about-us')) {
				sectionContainer[0].classList.add(
					'section__container-active',
					'fade-left-active'
				);
			} else if (section.classList.contains('bikes')) {
				sectionContainer[1].classList.add(
					'section__container-active',
					'fade-left-active'
				);
			} else if (section.classList.contains('routes')) {
				sectionContainer[2].classList.add(
					'section__container-active',
					'fade-left-active'
				);
			} else if (section.classList.contains('service')) {
				sectionContainer[3].classList.add(
					'section__container-active',
					'fade-left-active'
				);
			} else if (section.classList.contains('contact')) {
				sectionContainer[4].classList.add(
					'section__container-active',
					'fade-left-active'
				);
			} else if (section.classList.contains('photos')) {
				sectionContainer[5].classList.add(
					'section__container-active',
					'fade-left-active'
				);
			}
		} else if (top <= 500) {
			navItem[0].classList.remove('nav--active');
		} else if (top > 6561) {
			navItem[4].classList.remove('nav--active');
		}
	});
};
