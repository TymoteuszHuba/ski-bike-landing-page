// trailforks settings
const script = document.createElement('script');
script.setAttribute(
	'src',
	'https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js'
);
document.getElementsByTagName('head')[0].appendChild(script);
const widgetCheck = false;

// routes control
const routeType = document.querySelectorAll('.routes__cards-type');

routeType.forEach((route) => {
	route.addEventListener('click', (event) => {
		const clickType = event.currentTarget;

		clickType.classList.toggle('type-active');

		routeType.forEach((el) => {
			if (el != route) {
				el.classList.remove('type-active');
			}
		});
	});
});
