// Get references to DOM elements
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Check if dark mode is enabled
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show light icon
  themeToggleLightIcon.classList.remove("hidden");
} else {
  // Show dark icon
  themeToggleDarkIcon.classList.remove("hidden");
}

// Listen for toggle button click
themeToggleBtn.addEventListener("click", toggleMode);

// Toggle between light and dark mode
function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // Check if color theme is set in localstorage
  if (localStorage.getItem("color-theme")) {
    toggleColorTheme();
  } else {
    toggleColorThemeFallback();
  }
}

// Toggle between light and dark mode based on localstorage value
function toggleColorTheme() {
  // If light, make dark and save in localstorage
  if (localStorage.getItem("color-theme") === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
}

// Toggle between light and dark mode based on document class
function toggleColorThemeFallback() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
}
