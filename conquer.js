// This opens and closes the menu with a click on screens less than 900px
document.querySelector('.hamburger').addEventListener('click', openMenu);

function openMenu() {
	document.querySelector('.nav').classList.toggle('nav-open');
};

// This changes the menu on scroll
let divsToHighlight = ['about', 'home', 'services', 'contact'];

console.log(document.getElementById(divsToHighlight[0]));

function canISeeDiv(array, showfn, hidefn){
	let isshown = false;
	function check () {
		for (let x = 0; x < array.length; x++){
			if (match(pageBoundaries(), elementBoundaries(document.getElementById(array[x]))) !== isshown) {
			isshown = !isshown;
			isshown? showfn() : hidefn();
			}
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

function showfn(){
		console.log('div in view!');
		console.log(this);
		document.getElementById('nav-ser').style.backgroundColor = "white";
	}

function hidefn(){
		console.log('div gone away!');
		document.getElementById('nav-ser').style.backgroundColor = "grey";
	}

canISeeDiv(divsToHighlight, showfn, hidefn);

