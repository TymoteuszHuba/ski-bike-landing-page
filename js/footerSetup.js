const footerYear = document.querySelector('.footer__year');
const currDate = new Date().getFullYear();

// add current year into footerYear span
footerYear.textContent = ` ${currDate}`;
