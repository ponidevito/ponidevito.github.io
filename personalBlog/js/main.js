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
var burgerMenu = document.querySelector(".menu__icon");

function burger() {
  burgerMenu.classList.toggle("_active"); // this.document.body.classList.toggle("_lock");

  document.querySelector(".menu__body").classList.toggle("_active");

  if (burgerMenu.matches("._active")) {
    burgerMenu.classList.add('_color');
  } else {
    burgerMenu.classList.remove('_color');
  }
}

burgerMenu.addEventListener("click", burger);
;