// Custom Scripts
const html = document.querySelector("html");
const btnResult = document.querySelector(".form__resultBtn");
const btnXo = document.querySelectorAll(".form-btn");
const result = document.querySelector(".form__result");

const form = document.forms["form"];
const carbohydrates = form.carbohydrates;
const totalWeight = form.totalWeight;

// currently selected ХО norm (10 or 12), null = nothing selected yet
let selectedXo = null;

// This code adds the checking function that sets the disabled property of the btnResult button based on the user input in the carbohydrates and totalWeight input fields, as well as whether an ХО norm has been selected.
const checking = () => {
  const carbValue = Number(carbohydrates.value);
  btnResult.disabled =
    carbohydrates.value.length < 1 ||
    carbValue > 100 ||
    carbValue < 1 ||
    totalWeight.value.length < 2 ||
    selectedXo === null;
};

// add button info
function addInfo() {
  btnXo.forEach((item) => {
    item.addEventListener("click", (event) => {
      btnXo.forEach((btn) => {
        btn.style.backgroundColor = "rgb(239 246 231)";
      });
      item.style.backgroundColor = "rgb(255, 213, 45)";
      selectedXo = parseInt(item.value, 10);
      result.innerHTML = "";
      event.preventDefault();
      checking();
    });
  });
  return true;
}
addInfo();

// calculate and display the result
function pushValue(event) {
  event.preventDefault();

  const carbValue = parseFloat(carbohydrates.value);
  const totalWeightValue = parseFloat(totalWeight.value);

  if (
    isNaN(carbValue) ||
    isNaN(totalWeightValue) ||
    carbValue === 0 ||
    totalWeightValue === 0 ||
    !selectedXo
  ) {
    result.textContent = "Error: incorrect input";
    return false;
  }

  const sum = ((carbValue / 100) * totalWeightValue) / selectedXo;

  if (isNaN(sum) || !isFinite(sum)) {
    result.textContent = "Error: undefined result";
    return false;
  }

  result.textContent = sum.toFixed(2);
  carbohydrates.style.border = "1px solid rgb(124, 231, 241)";
  resetAll();
  return true;
}

btnResult.addEventListener("click", pushValue);

// reset form state after a calculation (keeps the shown result)
function resetAll() {
  selectedXo = null;
  carbohydrates.value = "";
  totalWeight.value = "";
  btnXo.forEach((item) => {
    item.style.backgroundColor = "rgb(239 246 231)";
  });
  btnResult.setAttribute("disabled", "");
  return true;
}

// regular expression
let carbonRegExp = /^[0-9]{1,20}$/;
carbohydrates.oninput = () => {
  let loginValid = carbonRegExp.test(carbohydrates.value);
  if (loginValid) {
    carbohydrates.style.border = "1px solid rgb(124, 231, 241)";
    if (carbohydrates.value > 100) {
      carbohydrates.value = carbohydrates.value.slice(0, 2);
      document.querySelector(".form__modal-carbon").classList.add("_active");
      carbohydrates.style.border = "1px solid red";
    } else if (carbohydrates.value < 1) {
      document
        .querySelector(".form__modal-carbon-second")
        .classList.add("_active");
      carbohydrates.style.border = "1px solid red";
    } else {
      document.querySelector(".form__modal-carbon").classList.remove("_active");
      document
        .querySelector(".form__modal-carbon-second")
        .classList.remove("_active");
    }
  } else {
    carbohydrates.style.border = "1px solid red";
  }
  checking();
};

// regular expression
let totalRegExp = /^[0-9]{2,20}$/;
totalWeight.oninput = () => {
  let loginValid = totalRegExp.test(totalWeight.value);
  if (loginValid) {
    totalWeight.style.border = "1px solid rgb(124, 231, 241)";
  } else {
    totalWeight.style.border = "1px solid red";
  }
  checking();
};

// This function adds an event listener to the html object, which allows to track all clicks on the page. On every click, it checks if the click was not made on an element with the "HTML" or "BODY" tag
html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || !e.target.tagName == "BODY") {
    document.querySelector(".form__modal-carbon").classList.remove("_active");
    document
      .querySelector(".form__modal-carbon-second")
      .classList.remove("_active");
  }
});

checking();

