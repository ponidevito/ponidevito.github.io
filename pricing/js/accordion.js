"use strict";

/
var acc = document.getElementsByClassName("accordion");
var content = document.getElementsByClassName('accordion__content');
var i;
var panel;

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
