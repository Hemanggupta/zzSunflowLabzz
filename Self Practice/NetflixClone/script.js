const toggles = document.querySelectorAll(".display-question");

toggles.forEach(toggle => {
	toggle.addEventListener("click", () => {
		// removeToggle();
		console.log(toggle);
		toggle.parentNode.classList.toggle("active");
	});
});

// function removeToggle() {
// 	toggles.forEach(remove => {
// 		remove.parentNode.classList.remove("active");
// 	});
// }

// open 1 question at a time and close all others
// PROBLEM: not toggling
