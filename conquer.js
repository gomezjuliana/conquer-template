// This opens and closes the menu with a click on screens less than 900px
document.querySelector('.hamburger').addEventListener('click', openMenu);

function openMenu() {
	document.querySelector('.nav').classList.toggle('nav-open');
};

// This changes the menu on scroll

document.querySelector('.col-3').addEventListener('onscroll', changeMenu);

function changeMenu() {
	console.log("you're here!");
}