// Custom Scripts
// Custom scripts

//burger
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

// scroll nav menu
function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.querySelector(".header").classList.add("_active");
    document.querySelector(".header__items").classList.add("_active");
    document.body.classList.add("_top");
  } else {
    document.querySelector(".header").classList.remove("_active");
    document.querySelector(".header__items").classList.remove("_active");

    document.body.classList.remove("_top");
  }
}

window.onscroll = function () {
  scrollFunction();
};

