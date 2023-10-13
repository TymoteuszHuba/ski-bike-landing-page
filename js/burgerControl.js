const burgerBtn = document.querySelector('.nav__burger-btn');
const navItems = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');

const toggleBurgerMenu = () => {
	navItems.classList.toggle('burger-menu-active');
	burgerBtn.classList.toggle('burger-btn-active');

	if (burgerBtn.classList.contains('burger-btn-active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'scroll';
	}

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('burger-menu-active');
			burgerBtn.classList.remove('burger-btn-active');
			document.body.style.overflowY = 'scroll';
		});
	});
};

burgerBtn.addEventListener('click', () => {
	toggleBurgerMenu();
});
