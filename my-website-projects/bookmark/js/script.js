// Start Hamburger Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburgerIcon = document.querySelectorAll(".hamburger-line ");
const navList = document.querySelector("#menu ul");
const navLinks = document.querySelectorAll("#menu ul li a");
const logoWhite = document.getElementById("nav-logo-white");
const logoBlack = document.getElementById("nav-logo-black");

btn.addEventListener("click", navToggle);
navLinks.forEach((link) => {
  link.addEventListener("click", navToggle);
});

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("max-lg:bg-slate-900/75");
  menu.classList.toggle("max-lg:bg-slate-900/0");
  menu.classList.toggle("max-lg:text-white/100");
  menu.classList.toggle("max-lg:translate-x-full");
  menu.classList.toggle("loading");
  navList.classList.toggle("max-lg:hidden");
  hamburgerIcon.forEach((line) => {
    line.classList.toggle("bg-white");
  });
  logoWhite.classList.toggle("hidden");
  logoBlack.classList.toggle("hidden");
}
// End Hamburger Menu

// Start tab menu
const featuresMenu = document.querySelectorAll("#features-menu-list button");
const featuresContent = document.querySelectorAll("#features-content > div");

// Add event listener to each button that will toggle
// showing the content of the corresponding tab by index
// and add "selected-feature" class to the button
// and remove "selected-feature" class from the other buttons
featuresMenu.forEach((button, index) => {
  button.addEventListener("click", () => {
    featuresContent.forEach((content) => {
      content.classList.add("hidden");
    });
    featuresContent[index].classList.remove("hidden");
    featuresMenu.forEach((button) => {
      button.classList.remove("selected-feature");
    });
    button.classList.add("selected-feature");
  });
});
