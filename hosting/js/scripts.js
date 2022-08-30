// Custom Scripts
// Custom scripts


//burger js
let burgerMenu = document.querySelector(".menu__icon");
let contacts = document.querySelector(".contact");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
  contacts.classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

let sectionTabs = document.querySelector(".tabs__section");
if (sectionTabs) {
  //tabs
  function tabs(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = "flex"
  ) {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);
    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = "none";
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }
    function showTabContent(i = 0) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();
    header.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
      ) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");
}

// billing

function togglePrice() {
  const billing = document.querySelector(".billing");
  const billingItems = document.querySelectorAll(".billing__item");
  billing.addEventListener("click", () => {
    billing.classList.toggle("_active");
    if (!billing.classList.contains("_active")) {
      billingItems[0].classList.add("_active");
      billingItems[2].classList.remove("_active");
    } else {
      billingItems[0].classList.remove("_active");
      billingItems[2].classList.add("_active");
    }
  });
}
togglePrice();

let packages = document.querySelector(".tabs__pricing");
if (packages) {
  function tabs(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = "flex"
  ) {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);
    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = "none";
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }
    function showTabContent(i = 0) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();
    header.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
      ) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }
  tabs(
    ".tabs__pricing",
    ".tabs__pricing-item",
    ".tabs__packages-item",
    "active"
  );
}

// progress

function activation() {
  const actives = document.querySelectorAll(".tabs__pricing-item");
  const progress = document.querySelector(".progress__succes");
  actives.forEach((item) => {
    item.addEventListener("click", () => {
      progress.classList.toggle("active");
    });
  });
}
activation();

