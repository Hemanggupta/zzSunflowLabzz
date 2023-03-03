const btn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const burgerNav = document.querySelector(".burger-nav");
const linksParent = document.querySelector(".links");
const links = linksParent.childNodes;

const arrow = document.querySelector(".top-arrow");

arrow.addEventListener("click", () => {
	console.log("ok");
	document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
	arrow.classList.toggle("active", window.scrollY > 500);
});

btn.addEventListener("click", () => {
	updateNavIcon();
	burgerNav.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
	updateNavIcon();
	burgerNav.classList.remove("active");
});
links.forEach(link => {
	link.addEventListener("click", () => {
		updateNavIcon();
		burgerNav.classList.remove("active");
	});
});

function updateNavIcon() {
	if (btn.classList.contains("fa-bars")) {
		btn.classList.remove("fa-bars");
		btn.classList.add("fa-xmark");
	} else {
		btn.classList.remove("fa-xmark");
		btn.classList.add("fa-bars");
	}
}

// fa-solid fa-bars
// fa-solid fa-xmark
