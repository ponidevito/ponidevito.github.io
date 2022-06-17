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

toggle(); // select lenguage

var selectHeader = document.querySelector(".select__header");
var selectItem = document.querySelectorAll(".select__item");
var selectBody = document.querySelector(".select__body");
var html = document.querySelector("html");
var allLang = ["en", "es", "ua"];

var select = function select() {
  selectItem.forEach(function (item) {
    item.addEventListener("click", selectChoose);
  });
  selectHeader.addEventListener("click", selectToggle);

  function selectToggle() {
    selectBody.classList.toggle("opacity");
    event.stopPropagation();
  }

  function selectChoose() {
    var text = this.innerText,
        select = this.closest(".select"),
        currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    var lang = this.innerText;
    location.href = window.location.pathname + "#" + lang.toLowerCase();
    localStorage.setItem('place1', lang);
    selectBody.classList.remove("opacity");
    location.reload();

    if (localStorage.getItem('place1')) {
      lang = localStorage.getItem('place1');
    }
  }
};

select();
window.addEventListener("load", function () {
  if (localStorage.getItem('place1')) document.querySelector('.select__current').innerHTML = localStorage.getItem('place1');
});

function changeLanguage() {
  var hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  } // document.querySelector("title").innerHTML = langArr["unit"][hash];
  // for (let key in langArr) {
  //   let elem = document.querySelector(".lng-" + key);
  //   if (elem) {
  //     elem.innerHTML = langArr[key][hash];
  //   }
  // }

}

changeLanguage(); //burger 

var btns = document.querySelector('.header__btns');
var burgerMenu = document.querySelector(".menu__icon");

function burger() {
  btns.classList.toggle('active');
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}

burgerMenu.addEventListener("click", burger);
html.addEventListener('click', function (e) {
  if (e.target.tagName !== 'HTML' || e.target.tagName !== 'BODY') {
    selectBody.classList.remove("opacity");
  }
}); //switcher 

function togglePrice() {
  var billing = document.querySelector(".pricing__billing");
  var billingItems = document.querySelectorAll(".billing__item");
  billing.addEventListener('click', function () {
    billing.classList.toggle('active');

    if (!billing.classList.contains('active')) {
      billingItems[0].classList.add('active');
      billingItems[2].classList.remove('active');
    } else {
      billingItems[0].classList.remove('active');
      billingItems[2].classList.add('active');
    }
  });
}

togglePrice();
