let menuImg = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
menuImg.addEventListener('click', openMenu);

function openMenu() {
	nav.classList.toggle('nav-open');
};