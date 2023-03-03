const passInput = document.getElementById("inputPassword5");
const eye = document.getElementById("eye");
let submitBtn = document.getElementById("submit");
const passwordWrapper = document.querySelector(".password");

const validPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const wrapperRect = passwordWrapper.getBoundingClientRect();
const btnRect = submitBtn.getBoundingClientRect();

// -----------------EVENT LISTENERS-----------------

submitBtn.addEventListener("mouseover", () => {
	if (checkPass()) {
		submitBtn.classList = "";
		submitBtn.classList.add("btn", "btn-success");
	} else {
		moveBtn();
		submitBtn.classList = "";
		submitBtn.classList.add("btn", "btn-danger");
	}
});

passInput.addEventListener("input", () => {
	if (checkPass()) {
		submitBtn.classList = "";
		submitBtn.classList.add("btn", "btn-success");
	} else {
		submitBtn.classList = "";
		submitBtn.classList.add("btn", "btn-danger");
	}
});

eye.addEventListener("click", () => {
	if (passInput.type === "text") {
		passInput.type = "password";
	} else {
		passInput.type = "text";
	}
});

// -----------------FUNCTIONS-----------------
function moveBtn() {
	const x = Math.floor(Math.random() * (wrapperRect.width - btnRect.width) + 1);
	const y =
		145 +
		Math.floor(Math.random() * (wrapperRect.height - 145 - btnRect.height) + 1);
	submitBtn.style.left = x + "px";
	submitBtn.style.top = y + "px";
}

function checkPass() {
	let password = passInput.value;
	if (password.trim() === "") {
		return false;
	}
	for (let i = 0; i < password.length; i++) {
		if (password.length < 8 || password.length > 20) {
			return false;
		} else if (password[i] === " ") {
			return false;
		} else if (!validPassword.test(password)) {
			return false;
		} else return true;
	}
}
