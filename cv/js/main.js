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

var acc = document.getElementsByClassName("accordion");
var content = document.getElementsByClassName('accordion__content');
var i;
var panel;

// accordion
function accordion() {
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      panel = this.firstElementChild.lastElementChild;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

accordion();

function toggle() {
  var _loop = function _loop(a) {
    acc[a].addEventListener('click', function () {
      content[a].classList.toggle("active");
    });
  };

  for (var a = 0; a < acc.length; a++) {
    _loop(a);
  }
}

toggle();
