// This opens and closes the menu with a click on screens less than 900px
document.querySelector('.hamburger').addEventListener('click', openMenu);

function openMenu() {
	document.querySelector('.nav').classList.toggle('nav-open');
};

// This changes the menu on scroll
let divsToHighlight = ['home', 'about', 'services', 'contact'];

for (let x = 0; x < divsToHighlight.length; x++){
	let element = document.getElementById(divsToHighlight[x]);
	canISeeDiv(element, showfn, hidefn);
	}

function canISeeDiv(element, showfn, hidefn){
	let isshown = false;
	function check () {
		if (match(pageBoundaries(), elementBoundaries(element)) !== isshown) {
		isshown = !isshown;
		console.log(element, isshown)
		isshown? showfn(element) : hidefn(element);
		}
	};
		window.onscroll=window.onresize = check;
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

function showfn(element){
		console.log(element, 'div in view!');
		element.style.backgroundColor = "white";
	}

function hidefn(element){
		console.log(element, 'div gone away!');
		element.style.backgroundColor = "grey";
	}



