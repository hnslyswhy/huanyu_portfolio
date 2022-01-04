const toggleButton = document.querySelector(".theme-toggle-button");
const toggleIcon = document.querySelector("#toggle-icon");
const body = document.body;
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const copyright = document.querySelector(".copyright");

toggleButton.addEventListener("click", () => {
  toggleIcon.classList.toggle("toggle-icon");

  body.classList.toggle("cloud");

  header.classList.toggle("light-blue");
});
