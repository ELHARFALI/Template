/////////////////////////////////////////////////////////////
// ------- Navbar -------
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
// Display Mobile Menu
const mobieMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobieMenu);
