let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

document.addEventListener('DOMContentLoaded', function(){
	var nav = document.getElementById("nav");
	var current_pos = nav.offsetTop;
	window.onscroll = function(){
		var window_pos = document.documentElement.scrollTop;
		if(window_pos>=current_pos){
			nav.classList.add("sticky");
		}
		else{
			nav.classList.remove("sticky");
		}
	}
} )