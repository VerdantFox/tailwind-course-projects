const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

console.log(btn);
console.log(menu);

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
