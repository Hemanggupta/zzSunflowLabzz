/* imgs */

const accessories = [
	{
		name: "earings",
		url: "../alpaca-generator-assets/alpaca/accessories/earings.png",
	},
	{
		name: "flower",
		url: "../alpaca-generator-assets/alpaca/accessories/flower.png",
	},
	{
		name: "glasses",
		url: "../alpaca-generator-assets/alpaca/accessories/glasses.png",
	},
	{
		name: "headphone",
		url: "../alpaca-generator-assets/alpaca/accessories/headphone.png",
		default: true,
	},
];

const backgrounds = [
	{
		name: "blue50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/blue50.png",
		default: true,
	},
	{
		name: "blue60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/blue60.png",
	},
	{
		name: "blue70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/blue70.png",
	},
	{
		name: "darkblue30",
		url: "../alpaca-generator-assets/alpaca/backgrounds/darkblue30.png",
	},
	{
		name: "darkblue50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/darkblue50.png",
	},
	{
		name: "darkblue70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/darkblue70.png",
	},
	{
		name: "green50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/green50.png",
	},
	{
		name: "green60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/green60.png",
	},
	{
		name: "green70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/green70.png",
	},
	{
		name: "grey40",
		url: "../alpaca-generator-assets/alpaca/backgrounds/grey40.png",
	},
	{
		name: "grey70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/grey70.png",
	},
	{
		name: "grey80",
		url: "../alpaca-generator-assets/alpaca/backgrounds/grey80.png",
	},
	{
		name: "red50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/red50.png",
	},
	{
		name: "red60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/red60.png",
	},
	{
		name: "red70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/red70.png",
	},
	{
		name: "yellow50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/yellow50.png",
	},
	{
		name: "yellow60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/yellow60.png",
	},
	{
		name: "yellow70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/yellow70.png",
	},
];

const ears = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/ears/default.png",
		default: true,
	},
	{
		name: "tilt-backward",
		url: "../alpaca-generator-assets/alpaca/ears/tilt-backward.png",
	},
	{
		name: "tilt-forward",
		url: "../alpaca-generator-assets/alpaca/ears/tilt-forward.png",
	},
];
const eyes = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/eyes/default.png",
		default: true,
	},
	{
		name: "angry",
		url: "../alpaca-generator-assets/alpaca/eyes/angry.png",
	},
	{
		name: "naughty",
		url: "../alpaca-generator-assets/alpaca/eyes/naughty.png",
	},
	{
		name: "panda",
		url: "../alpaca-generator-assets/alpaca/eyes/panda.png",
	},
	{
		name: "smart",
		url: "../alpaca-generator-assets/alpaca/eyes/smart.png",
	},
	{
		name: "star",
		url: "../alpaca-generator-assets/alpaca/eyes/star.png",
	},
];

const hair = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/hair/default.png",
		default: true,
	},
	{
		name: "bang",
		url: "../alpaca-generator-assets/alpaca/hair/bang.png",
	},

	{
		name: "curls",
		url: "../alpaca-generator-assets/alpaca/hair/curls.png",
	},
	{
		name: "elegant",
		url: "../alpaca-generator-assets/alpaca/hair/elegant.png",
	},
	{
		name: "fancy",
		url: "../alpaca-generator-assets/alpaca/hair/fancy.png",
	},

	{
		name: "quiff",
		url: "../alpaca-generator-assets/alpaca/hair/quiff.png",
	},
	{
		name: "short",
		url: "../alpaca-generator-assets/alpaca/hair/short.png",
	},
];

const leg = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/leg/default.png",
		default: true,
	},
	{
		name: "bubble-tea",
		url: "../alpaca-generator-assets/alpaca/leg/bubble-tea.png",
	},
	{
		name: "cookie",
		url: "../alpaca-generator-assets/alpaca/leg/cookie.png",
	},
	{
		name: "game-console",
		url: "../alpaca-generator-assets/alpaca/leg/game-console.png",
	},
	{
		name: "tilt-backward",
		url: "../alpaca-generator-assets/alpaca/leg/tilt-backward.png",
	},
	{
		name: "tilt-forward",
		url: "../alpaca-generator-assets/alpaca/leg/tilt-forward.png",
	},
];

const mouth = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/mouth/default.png",
		default: true,
	},
	{
		name: "astonished",
		url: "../alpaca-generator-assets/alpaca/mouth/astonished.png",
	},
	{
		name: "eating",
		url: "../alpaca-generator-assets/alpaca/mouth/eating.png",
	},
	{
		name: "laugh",
		url: "../alpaca-generator-assets/alpaca/mouth/laugh.png",
	},
	{
		name: "tongue",
		url: "../alpaca-generator-assets/alpaca/mouth/tongue.png",
	},
];

const neck = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/neck/default.png",
		default: true,
	},
	{
		name: "bend-backward",
		url: "../alpaca-generator-assets/alpaca/neck/bend-backward.png",
	},
	{
		name: "bend-forward",
		url: "../alpaca-generator-assets/alpaca/neck/bend-forward.png",
	},
	{
		name: "thick",
		url: "../alpaca-generator-assets/alpaca/neck/thick.png",
	},
];

// -----------bringing everything from html---------->

// ---------imgs
const bgColor = document.querySelector(".bg-img"); //need to change in css
const hairImg = document.querySelector(".hairs");
const earsImg = document.querySelector(".ears");
const eyesImg = document.querySelector(".eyes");
const mouthImg = document.querySelector(".mouth");
const neckImg = document.querySelector(".neck");
const legImg = document.querySelector(".leg");
const accessoriesImg = document.querySelector(".accessories");

// -----------buttons
const randomBtn = document.querySelector(".rand");
const downloadBtn = document.querySelector(".down");

const hairBtn = document.querySelector(".hair-btn");
const earsBtn = document.querySelector(".ears-btn");
const eyesBtn = document.querySelector(".eyes-btn");
const mouthBtn = document.querySelector(".mouth-btn");
const neckBtn = document.querySelector(".neck-btn");
const legBtn = document.querySelector(".leg-btn");
const accessoriesBtn = document.querySelector(".accessories-btn");
const bgBtn = document.querySelector(".bg-btn");

const primaryButtons = document.querySelectorAll(".p-btn");
const styleButtons = document.querySelectorAll(".s-btn");
console.log(styleButtons);

const parentStyleButtons = document.querySelector(".style--buttons");

const styleArr = [];

// ----------------ARRAY OF CLASSES------------------------------->
// const classArr = [
// 	"hair-btn",
// 	"ears-btn",
// 	"eyes-btn",
// 	"mouth-btn",
// 	"neck-btn",
// 	"leg-btn",
// 	"accessories-btn",
// 	"bg-btn",
// ];
// ----------------ONLOAD------------------------------->
window.onload = updateStyle;
// ----------------EVENTLISTENERS------------------------------->

// primary-btn
primaryButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		removeActiveClass(primaryButtons);
		btn.classList.add("round-active");
		updateStyle();
	});
});
// style-btn
styleArr.forEach(btn => {
	btn.addEventListener("click", () => {});
});
// --------------------FUNCTIONS--------------------------------->

// ACTIVE CLASS REMOVER
function removeActiveClass(btns) {
	btns.forEach(btn => {
		btn.classList.remove("round-active");
	});
}

// UPDATE STYLE BTNS
function updateStyle() {
	primaryButtons.forEach(btn => {
		if (btn.classList.contains("round-active")) {
			// console.log(btn.classList[2]);
			switch (btn.classList[2]) {
				case "hair-btn":
					updateStyleButtons(hair);
					break;
				case "ears-btn":
					updateStyleButtons(ears);
					break;
				case "eyes-btn":
					updateStyleButtons(eyes);
					break;
				case "mouth-btn":
					updateStyleButtons(mouth);
					break;
				case "neck-btn":
					updateStyleButtons(neck);
					break;
				case "leg-btn":
					updateStyleButtons(leg);
					break;
				case "accessories-btn":
					updateStyleButtons(accessories);
					break;
				case "bg-btn":
					updateStyleButtons(backgrounds);
					break;
			}
		}
	});
}
function updateStyleButtons(arrayName) {
	parentStyleButtons.innerHTML = "";

	styleArr.length = 0;
	for (let i = 0; i < arrayName.length; i++) {
		let newButton = document.createElement("button");
		newButton.classList.add("btn-round", "s-btn"); //, "round-active"
		newButton.innerText = arrayName[i].name;

		styleArr.push(newButton);

		parentStyleButtons.append(newButton);
	}
}
