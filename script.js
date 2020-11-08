//NAVIGATION SCROLL
const scroll = new SmoothScroll('.nav-bar a[href*="#"]', {
	speed: 800
});


//TO TOP BUTTON
var scrollBtn = document.querySelector('.to-top')

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 100){
		scrollBtn.classList.add('active');
	}
	else{
			scrollBtn.classList.remove('active');
		}
})


//STICKY NAV
var navbar = document.querySelector('.nav-bar')
var logo = document.querySelector('.logo')
var li = document.querySelector('.nav-items')
var nav = document.getElementById('nav');
var signinBtn = document.querySelector('.sign-in')

var fixedNavbar = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= fixedNavbar) {
  navbar.classList.add("activenav")
  } else {
  navbar.classList.remove("activenav");
  }
}

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 150){
		logo.style.color = '#fff';
		nav.classList.add('nav-active')
		li.classList.add('nav-active');
		signinBtn.style.backgroundColor = '#fff';
		signinBtn.style.color = '#121212';
	}else{
		li.classList.remove('nav-active');
	nav.classList.remove('nav-active')
		logo.style.color = '#121212';
		signinBtn.style.backgroundColor = '#121212';
		signinBtn.style.color = '#fff';
	}

})


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



