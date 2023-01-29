// Custom Scripts
// Custom scripts

//burger js
let burgerMenu = document.querySelector(".menu__icon");
let linkMenu = document.querySelectorAll(".menu__link");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  if (burgerMenu.classList.contains("_active")) {
    burgerMenu.classList.add("_changeColor");
    linkMenu.forEach((item) => {
      item.classList.add("_changeColor");
    });
  } else {
    burgerMenu.classList.remove("_changeColor");
    linkMenu.forEach((item) => {
      item.classList.remove("_changeColor");
    });
  }
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);


window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").classList.add("_active");
  } else {
    document.querySelector(".header").classList.remove("_active");
  }
}






