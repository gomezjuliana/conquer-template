// This opens and closes the menu with a click on screens less than 900px
document.querySelector('.hamburger').addEventListener('click', openMenu);

function openMenu() {
	document.querySelector('.nav').classList.toggle('nav-open');
};

// This changes the menu on scroll

let current = '';
let divsToHighlight = ['home', 'about', 'services', 'contact'];
const navChildren = document.querySelector('.nav').querySelectorAll('li');

for (let x = 0; x < divsToHighlight.length; x++){
	let element = document.getElementById(divsToHighlight[x]);
	canISeeDiv(element, showfn);
	}

function canISeeDiv(element, showfn){
	let isshown = false;
	function check() {
		if (match(pageBoundaries(), elementBoundaries(element)) !== isshown) {
		isshown = !isshown;
			if (isshown == true){showfn(element)};
		}
	};
		document.defaultView.addEventListener('resize', check);
		document.defaultView.addEventListener('scroll', check);
		check();
}

// This grabs the page boundaries
function pageBoundaries() {
	let page = document.body;
	let y = page.scrollTop;
	let h = 'innerHeight' in window? window.innerHeight : page.clientHeight;
	return [y, h+y];
}

// This grabs the element boundaries
function elementBoundaries(element) {
	let y = 0;
	let h = element.offsetHeight;
	while (element.offsetParent!==null){
		y+= element.offsetTop;
		element= element.offsetParent;
	}
	return [y, y+h];
}

// This checks if there's a match between the two, meaning they're overlapping
function match(a,b){
	return a[0]<b[1] && a[1]>b[0];
}

// This changes the nav-bar background colours
function showfn(element){
	current = element.id;
	let id = element.id;
	for (let i = 0; i< navChildren.length; i++){
		navChildren[i].classList.remove('nav-option-current');
	}
	document.getElementById(`nav-${current}`).classList.add('nav-option-current');
}

// This adds a parallax effects to .header, .services and .contact

let backgroundsToParallax = ['.header', '.services-banner', '.contact'];

window.addEventListener('scroll', parallaxScroll);

function parallaxScroll(){
let scrolledHeight = window.pageYOffset;
backgroundsToParallax.forEach(function(el,index, array) {
	let elSelector = document.querySelector(`${el}`);
	let limit = elSelector.offsetTop+elSelector.offsetHeight;
	if (scrolledHeight > elSelector.offsetTop && scrolledHeight <= limit){
		elSelector.style.backgroundPositionY = (scrolledHeight - elSelector.offsetTop) / 1.5+'px';
	}
	else {
		elSelector.style.backgroundPositionY ='0';
	}
});
};