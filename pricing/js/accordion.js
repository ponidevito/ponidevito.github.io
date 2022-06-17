"use strict";

// let acc = document.getElementsByClassName("accordion");
// let i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let panel = this.firstElementChild.lastElementChild;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
// let acc = document.getElementsByClassName("accordion");
// let accIcon = document.getElementsByClassName("accordion__content");
// let i;
// let a;
// // let panel ;
// let panel;
// let pan;
// function accordion() {
//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       panel = this.firstElementChild.lastElementChild;
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//         document.querySelector('.linePlus').style.display="block";
//         document.querySelector('.lineMinus').style.display="none";
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//         document.querySelector('.lineMinus').style.display="block";
//         document.querySelector('.linePlus').style.display="none";
//       }
//     });
//   }
// }
// accordion();
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