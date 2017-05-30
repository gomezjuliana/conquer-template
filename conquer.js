// This opens and closes the menu with a click on screens less than 900px
document.querySelector('.hamburger').addEventListener('click', openMenu);

function openMenu() {
	document.querySelector('.nav').classList.toggle('nav-open');
};

// This changes the menu on scroll
function canISeeDiv(element, showfn, hidefn){
	let isshown = false;
	function check () {
		if (match(pageRectangle(), elementRectangle(element)) !== isshown) {
			isshown = !isshown;
			isshown? showfn() : hidefn();
		}
	};
	window.onscroll=window.onresize = check;
	check();
}

function pageRectangle() {
	let page = document.body;
	let y = page.scrollTop;
	let h = 'innerHeight' in window? window.innerHeight : page.clientHeight;
	return [y, h+y];
}

function elementRectangle(element) {
	let y = 0;
	let h = element.offsetHeight;
	while (element.offsetParent!==null){
		y+= element.offsetTop;
		element= element.offsetParent;
	}
	return [y, y+h];
}

function match(a,b){
	return a[1]<b[3] && a[3]>b[1];
}

canISeeDiv(
	document.getElementById('services'),
	function(){
		alert('div in view!');
	},
	function(){
		alert('div gone away!');
	}
	);