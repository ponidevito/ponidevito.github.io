// Custom Scripts
// Custom scripts

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".prev__btn",
    prevEl: ".next__btn",
  },
});

const reviewsSwiper = document.querySelector(".swiper__second");

if (reviewsSwiper) {
  const swiper = new Swiper(".swiper__second", {
    // Optional parameters
    autoHeight: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

//  link active
let links = document.getElementsByClassName("menu__item a");

onload = function () {
  for (let lnk = document.links, j = 0; j < lnk.length; j++)
    if (lnk[j].href == document.URL)
     lnk[j].style.cssText = "color:#FEA3AC;";
     event.preventDefault();
};


