"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var swiper = new Swiper(".swiper__team", {
  // Navigation arrows
  navigation: {
    nextEl: ".next__btn",
    prevEl: ".prev__btn"
  },
  //Responsive breakpoints
  breakpoints: {
    //     // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 60,
      loop: true
    }
  }
});
; //burger

var burgerMenu = document.querySelector(".menu__icon");
var btns = document.querySelector(".header__buttons");
var html = document.querySelector("html");

function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
  btns.classList.toggle("active");
}

burgerMenu.addEventListener("click", burger); //submenu

var sub = document.querySelector(".sub");
var menu = document.querySelector(".submenu");
var menuLink = document.querySelector(".menu__link");

function submenu() {
  menu.classList.toggle("active");
  menuLink.classList.toggle("active");
  event.stopPropagation();
}

sub.addEventListener("click", submenu);
html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || !e.target.tagName == "BODY") {
    menu.classList.remove("active");
    menuLink.classList.remove("active");
  }
}); // offers buttons

var ofBtn = document.querySelector(".offers__btn");