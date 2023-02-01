const toggles = document.querySelectorAll(".display-question");

toggles.forEach(toggle => {
	toggle.addEventListener("click", () => {
		if (toggle.parentNode.classList.contains("active")) {
			removeToggle();
		} else {
			removeToggle();
			toggle.parentNode.classList.add("active");
		}
	});
});

function removeToggle() {
	toggles.forEach(remove => {
		remove.parentNode.classList.remove("active");
	});
}

// open 1 question at a time and close all others
// PROBLEM: not toggling
