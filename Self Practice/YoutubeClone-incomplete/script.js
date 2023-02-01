const menu = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", () => {
	sidebar.classList.toggle("small-sidebar");
});
// menu.onclick = function () {
// 	sidebar.classList.toggle("small-sidebar");
// };
