const menuBtn = document.querySelector("#menu-btn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
});