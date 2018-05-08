var firstNav = document.querySelector("header nav .first-nav");
var secondNav = document.querySelector("header nav .second-nav");
var burger = document.querySelector(".hamburger");
var x = document.querySelector("nav .first-nav button")

firstNav.style.display ="none";

burger.addEventListener("click", function(){
	burger.style.display = "none";
	if( firstNav.style.display === "none" ) {
		firstNav.style.display = "block";
	}	
});

x.addEventListener("click", function(){
	firstNav.style.display = "none";
	burger.style.display = "block";
});

var nav = function () {
	if(secondNav.style.display === "flex"){
		burger.style.display ="none";
	}
//making it so if second nav is showing first nav wont show and vice versa
}

nav();