const threeOptions = document.querySelectorAll(".content-option-btn");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

const sentences = document.querySelectorAll(".neque-text");

// EVENTLISTENERS

// threeOptions.forEach(btn => {
// 	btn.addEventListener("click", () => {
// 		if (btn.classList.contains("btn1")) {
// 			if (!btn.classList.contains("active"))  {
// 				clearSentencesActive();
// 				clearBtnActive();
// 				btn1.classList.add("active");
// 				sentences[0].classList.add("active");
// 			}
// 		}
// 	});
// });

btn1.addEventListener("click", () => {
	if (!btn1.classList.contains("active")) {
		clearSentencesActive();
		clearBtnActive();
		btn1.classList.add("active");
		sentences[0].classList.add("active");
	}
});
btn2.addEventListener("click", () => {
	if (!btn2.classList.contains("active")) {
		clearSentencesActive();
		clearBtnActive();
		btn2.classList.add("active");
		sentences[1].classList.add("active");
	}
});
btn3.addEventListener("click", () => {
	if (!btn3.classList.contains("active")) {
		clearSentencesActive();
		clearBtnActive();
		btn3.classList.add("active");
		sentences[2].classList.add("active");
	}
});

// FUNCTIONS

function clearSentencesActive() {
	sentences.forEach(sentence => {
		if (sentence.classList.contains("active")) {
			sentence.classList.remove("active");
		}
	});
}
function clearBtnActive() {
	threeOptions.forEach(option => {
		if (option.classList.contains("active")) {
			option.classList.remove("active");
		}
	});
}

// =====TESTIMONIALS=====
