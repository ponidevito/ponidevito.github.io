"use strict";

const selector = (selector) => document.querySelector(selector);
/* ============ burger ============ */

let burgerMenu = selector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");

  selector(".menu__body").classList.toggle("_active");
  selector("body").classList.toggle("_lock");
}
burgerMenu.addEventListener("click", burger);

/* ============ burger ============ */

/*============ mouse move item service ============ */

let firstItem = selector(".item-service1 ");
let icon1white = selector(".icon1green");
let icon1green = selector(".icon1night");
let secondItem = selector(".item-service2 ");
let icon2white = selector(".icon2green");
let icon2green = selector(".icon2night");
let thirdItem = selector(".item-service_green");
let icon3white = selector(".icon3white");
let icon3green = selector(".icon3green");
let itemTel = selector(".item-support1");
let iconTelGreen = selector(".icon1TelGreen");
let iconTelWhite = selector(".icon1TelWhite");
let itemGps = selector(".item-support2");
let iconGpsWhite = selector(".icon2GpsWhite");
let iconGpsGreen = selector(".icon2GpsGreen");
let arrow = selector(".item-support3");
let iconArrowGreen = selector(".icon3ArrowGreen");
let iconArrowWhite = selector(".icon3ArrowWhite");

function mouseOver() {
  icon1white.style.display = "none";
  icon1green.style.display = "block";
}

function mouseOut() {
  icon1white.style.display = "block";
  icon1green.style.display = "none";
}
firstItem.addEventListener("mouseover", mouseOver, false);
firstItem.addEventListener("mouseout", mouseOut, false);

function mouseOver1() {
  icon2white.style.display = "none";
  icon2green.style.display = "block";
}
function mouseOut1() {
  icon2white.style.display = "block";
  icon2green.style.display = "none";
}

secondItem.addEventListener("mouseover", mouseOver1, false);
secondItem.addEventListener("mouseout", mouseOut1, false);

function mouseOver2() {
  icon3white.style.display = "none";
  icon3green.style.display = "block";
}
function mouseOut2() {
  icon3white.style.display = "block";
  icon3green.style.display = "none";
}

thirdItem.addEventListener("mouseover", mouseOver2, false);
thirdItem.addEventListener("mouseout", mouseOut2, false);

function mouseOver3() {
  iconGpsGreen.style.display = "none";
  iconGpsWhite.style.display = "block";
}
function mouseOut3() {
  iconGpsGreen.style.display = "block";
  iconGpsWhite.style.display = "none";
}
itemGps.addEventListener("mouseover", mouseOver3, false);
itemGps.addEventListener("mouseout", mouseOut3, false);

function mouseOver4() {
  iconTelGreen.style.display = "none";
  iconTelWhite.style.display = "block";
}
function mouseOut4() {
  iconTelGreen.style.display = "block";
  iconTelWhite.style.display = "none";
}
itemTel.addEventListener("mouseover", mouseOver4, false);
itemTel.addEventListener("mouseout", mouseOut4, false);

function mouseOver5() {
  iconArrowGreen.style.display = "none";
  iconArrowWhite.style.display = "block";
}
function mouseOut5() {
  iconArrowGreen.style.display = "block";
  iconArrowWhite.style.display = "none";
}
arrow.addEventListener("mouseover", mouseOver5, false);
arrow.addEventListener("mouseout", mouseOut5, false);

/*============ mouse move item service ============ */
