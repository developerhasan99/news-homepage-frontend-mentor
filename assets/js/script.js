const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerOpenBtn = document.querySelector(".hamburger-open-btn");
const hamburgerCloseBtn = document.querySelector(".hamburger-close-btn");

hamburgerOpenBtn.addEventListener("click", () => {
  hamburgerMenu.style.right = "0";
});

hamburgerCloseBtn.addEventListener("click", (e) => {
  hamburgerMenu.style.right = "-300px";
});
