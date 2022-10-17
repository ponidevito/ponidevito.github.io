// Custom Scripts
// Custom scripts

addEventListener('fetch', event => {  event.respondWith(handleRequest(event.request))})async function handleRequest(request) {  let response = await fetch(request)  let newHeaders = new Headers(response.headers)  newHeaders.set("Permissions-Policy", "interest-cohort=()")  return new Response(response.body, {    status: response.status,    statusText: response.statusText,    headers: newHeaders  })}

const lins = document.getElementsByClassName("menu__item a");

//burger js

let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

let html = document.querySelector("html");
let sub = document.querySelector(".sub");
let menu = document.querySelector(".submenu");
let menulink = document.querySelector(".menu__linkSub");
let arrow = document.querySelector(".menu__item-svg");
const arrowRotate = document.querySelector(".menu__link-svg");
function submenu() {
  menu.classList.toggle("_active");
  arrow.classList.add("_active");
  arrowRotate.classList.add("_active");
  menulink.classList.toggle("_activeArrow");
  event.stopPropagation();
}

sub.addEventListener("click", submenu);

// click function

html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || !e.target.tagName == "BODY") {
    menu.classList.remove("_active");
    arrow.classList.remove("_active");
    menulink.classList.remove("_activeArrow");
    arrowRotate.classList.remove("_active");
  }
});

// calculator

if (document.querySelector(".section__calculator")) {
  let btnResult = document.querySelector(".form__resultBtn");
  let btnXo = document.querySelectorAll(".form-btn");
  let result = document.querySelector(".form__result");
  let massive = [];
  let mass = [];
  let xo = [];
  let number = [];

  let form = document.forms["form"];
  let carbohydrates = form.carbohydrates;
  let totalWeight = form.totalWeight;
  function addInfo(e) {
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

  if (document.querySelector(".section__calculator")) {
  }

  function check() {
    mass.push(carbohydrates.value);
    number.push(totalWeight.value);
    let sum = (mass / xo) * number;
    massive.push(sum);
    let a = Array.from(massive.toString(), Number);
    let finalSum = a.join("");
    let summa = parseFloat(finalSum);

    result.textContent += `${summa.toFixed(2) / 100} хо `;
    event.preventDefault();
    resetAll();
    return true;
  }
  btnResult.addEventListener("click", check);

  function resetAll() {
    carbohydrates.value = "";
    totalWeight.value = "";
    btnXo.forEach((item) => {
      item.style.backgroundColor = "#d3f1aa";
      btnResult.setAttribute("disabled", "");
    });
    massive = [];
    mass = [];
    xo = [];
    number = [];
    return true;
  }

  let carbonRegExp = /^[0-9]{2,20}$/;
  carbohydrates.oninput = () => {
    let loginValid = carbonRegExp.test(carbohydrates.value);
    if (loginValid) {
      carbohydrates.style.border = "1px solid rgb(124, 231, 241)";
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
  let btn1 = document.querySelector(".form__btn1");
  let btn2 = document.querySelector(".form__btn2");

  const checking = () =>
    (btnResult.disabled =
      carbohydrates.value.length < 2 ||
      totalWeight.value.length < 2 ||
      (btn1.style.backgroundColor !== "rgb(140, 211, 41)") &
        (btn2.style.backgroundColor !== "rgb(140, 211, 41)"));

  carbohydrates.addEventListener("input", checking);
  totalWeight.addEventListener("input", checking);
  btn1.addEventListener("click", checking);
  btn2.addEventListener("click", checking);
}

