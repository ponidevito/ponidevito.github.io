// Custom Scripts
"use strict";

let langArr = {
  "unit": {
    "es": "Calculadora hidratos de carbono",
    "en": "Bread units calculator",
    "ua": "Калькулятор ХО"
  },
  "bread": {
    "es": "RACIONES DE HC",
    "en": "Bread unit",
    "ua": "Хлібна одиниця"
  },
  "title": {
    "es": "Calculadora para calcular HC",
    "en": "Calculator for counting bread units",
    "ua": "Калькулятор для підрахунку ХО"
  },
  "carbohydrates": {
    "es": "Carbohidratos en 100 gramos",
    "en": "Carbohydrates in 100 grams",
    "ua": "Вуглеводи в 100 грамах"
  },
  "units-bread": {
    "es": "Carbohidratos en 100 gramos",
    "en": "Carbohydrates in 100 grams",
    "ua": "Вуглеводи в 100 грамах"
  },
  "modal-carbon": {
    "es": "No más de 100 gramos de carbohidratos",
    "en": "No more than 100 grams of carbohydrates",
    "ua": "Не більше 100 грам вуглеводів"
  },
  "bu": {
    "es": "HC",
    "en": "BU",
    "ua": "ХО"
  },"total": {
    "es": "Peso total del producto en gramos",
    "en": "Total product weight in grams",
    "ua": "Загальна вага продукта в грамах"
  },
  "count": {
    "es": "Contar",
    "en": "Count",
    "ua": "Підрахунок"
  },
};
// Custom scripts

// window.addEventListener("load", function () {
//   if (localStorage.getItem("place1"))
//     document.querySelector(".select__current").innerHTML =
//       localStorage.getItem("place1");
// });
window.onload = () => {
 
  if (localStorage.getItem("place1"))
    document.querySelector(".select__current").innerHTML =
      localStorage.getItem("place1");
      if(localStorage.getItem("href")){
        location.href=localStorage.getItem("href");
        console.log("href")
      }
      
  
};

const html = document.querySelector("html");
let btnResult = document.querySelector(".form__resultBtn");
let btnXo = document.querySelectorAll(".form-btn");
let result = document.querySelector(".form__result");
let btn1 = document.querySelector(".form__btn1");
let btn2 = document.querySelector(".form__btn2");
let massive = [];
let mass = [];
let xo = [];
let number = [];

let form = document.forms["form"];
let carbohydrates = form.carbohydrates;
let totalWeight = form.totalWeight;

// select
let selectHeader = document.querySelector(".select__header");
let selectItem = document.querySelectorAll(".select__item");
let selectBody = document.querySelector(".select__body");

const allLang = ["en", "es", "ua"];

let select = function () {
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  selectHeader.addEventListener("click", selectToggle);

  function selectToggle() {
    selectBody.classList.toggle("opacity");
    event.stopPropagation();
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    let lang = this.innerText;
    location.href = window.location.pathname + "#" + lang.toLowerCase();
    localStorage.setItem("place1", lang);
    localStorage.setItem("href",document.location.href)
    selectBody.classList.remove("opacity");
    location.reload();

    if (localStorage.getItem("place1")) {
      lang = localStorage.getItem("place1");
    }
     if(localStorage.getItem("href")){
        location.href=localStorage.getItem("href");
        console.log("href")
      }
  }
};

select();

window.addEventListener("load", function () {
  if (localStorage.getItem("place1"))
    document.querySelector(".select__current").innerHTML =
      localStorage.getItem("place1");
});

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    if(localStorage.getItem("href")){
      location.href=localStorage.getItem("href");
      console.log("href")
    }

    location.reload();
  }
  localStorage.setItem("lenguage", window.location);
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();

// add button info

function addInfo() {
  btnXo.forEach((item) => {
    item.addEventListener("click", () => {
      btnXo.forEach((item) => {
        item.style.backgroundColor = "rgb(211, 241, 170)";
      });
      item.style.backgroundColor = "rgb(140, 211, 41)";
      xo.push(item.value);
      result.innerHTML = "";
      event.preventDefault();
    });
  });
  return true;
}
addInfo();

// function push value to array

function pushValue() {
  mass.push(carbohydrates.value);
  number.push(totalWeight.value);
  let sum = (mass / xo) * number;
  massive.push(sum);
  let a = Array.from(massive.toString(), Number);
  let finalSum = a.join("");
  let summa = parseFloat(finalSum);
  result.textContent += `${summa.toFixed(2) / 100}`;
  event.preventDefault();
  resetAll();
  return true;
}
btnResult.addEventListener("click", pushValue);

//function reset value

function resetAll() {
  carbohydrates.value = "";
  totalWeight.value = "";
  btnXo.forEach((item) => {
    item.style.backgroundColor = "#d3f1aa";
    btnResult.setAttribute("disabled", "");
  });
  return true;
}

let carbonRegExp = /^[0-9]{1,20}$/;
carbohydrates.oninput = () => {
  let loginValid = carbonRegExp.test(carbohydrates.value);
  if (loginValid) {
    carbohydrates.style.border = "1px solid rgb(124, 231, 241)";
    if (carbohydrates.value > 100) {
      document.querySelector(".form__modal-carbon").classList.add("_active");
    } else if (carbohydrates.value < 1) {
      document
        .querySelector(".form__modal-carbon-second")
        .classList.add("_active");
    } else {
      document.querySelector(".form__modal-carbon").classList.remove("_active");
      document
        .querySelector(".form__modal-carbon-second")
        .classList.remove("_active");
    }
  } else {
    carbohydrates.style.border = "1px solid red";
  }
};
let totalRegExp = /^[0-9]{2,20}$/;
totalWeight.oninput = () => {
  let loginValid = totalRegExp.test(totalWeight.value);
  if (loginValid) {
    totalWeight.style.border = "1px solid rgb(124, 231, 241)";
  } else {
    totalWeight.style.border = "1px solid red";
  }
};

const checking = () =>
  (btnResult.disabled =
    carbohydrates.value.length < 1 ||
    carbohydrates.value > 100 ||
    carbohydrates.value < 1 ||
    totalWeight.value.length < 2 ||
    (btn1.style.backgroundColor !== "rgb(140, 211, 41)") &
      (btn2.style.backgroundColor !== "rgb(140, 211, 41)"));

carbohydrates.addEventListener("input", checking);
totalWeight.addEventListener("input", checking);
btn1.addEventListener("click", checking);
btn2.addEventListener("click", checking);

html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || !e.target.tagName == "BODY") {
    document.querySelector(".form__modal-carbon").classList.remove("_active");
    document
      .querySelector(".form__modal-carbon-second")
      .classList.remove("_active");
    selectBody.classList.remove("opacity");
  }
});

