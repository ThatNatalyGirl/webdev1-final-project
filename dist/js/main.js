"use strict";

var dropdown = document.querySelector("header nav ul");
var burger = document.querySelector(".hamburger");
var x = document.querySelector("nav ul button");

dropdown.style.display = "none";

burger.addEventListener("click", function () {
	burger.style.display = "none";
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
	}
});

x.addEventListener("click", function () {
	dropdown.style.display = "none";
	burger.style.display = "block";
});
//# sourceMappingURL=main.js.map
