// Custom Scripts
// burger

const body = document.querySelector("body");
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      burger.setAttribute("aria-expanded", "true");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}
burgerMenu();

// calculator
const items = document.getElementById("deposit");
const complexity = document.getElementById("period");

if (items && complexity) {
  const itemsVal = document.getElementById("deposit-val");
  const complexityVal = document.getElementById("period-val");
  const resultVal = document.getElementById("result-val");

  const complexityText = ["Basic", "Medium", "Advanced"];
  const resultText = ["Simple Layout", "Interactive UI", "Advanced Interface"];

  function updateSliderFill(slider, color) {
    const min = Number(slider.min);
    const max = Number(slider.max);
    const value = Number(slider.value);

    const percent = ((value - min) / (max - min)) * 100;

    slider.style.background = `
      linear-gradient(
        to right,
        ${color} ${percent}%,
        #ffffff ${percent}%
      )
    `;
  }

  function update() {
    const itemsValue = Number(items.value);
    const complexityValue = Number(complexity.value);

    itemsVal.textContent = itemsValue;
    complexityVal.textContent = complexityText[complexityValue];
    resultVal.textContent = resultText[complexityValue];
  }

  items.addEventListener("input", () => {
    updateSliderFill(items, "#16a34a");
    update();
  });

  complexity.addEventListener("input", () => {
    updateSliderFill(complexity, "#2563eb");
    update();
  });

  updateSliderFill(items, "#16a34a");
  updateSliderFill(complexity, "#2563eb");
  update();
}

// live table
const tbody = document.getElementById("table-body");

if (tbody) {
  const people = [
    { name: "Alex M.", avatar: "img/live/antoine.jpg" },
    { name: "Emma D.", avatar: "img/live/elodie.jpg" },
    { name: "Daniel L.", avatar: "img/live/baptiste.jpg" },
    { name: "Olivia R.", avatar: "img/live/chloe.jpg" },
    { name: "Michael P.", avatar: "img/live/maxime.jpg" },
    { name: "Sophia C.", avatar: "img/live/manon.jpg" },
    { name: "James F.", avatar: "img/live/adrien.jpg" },
    { name: "Isabella T.", avatar: "img/live/lea.jpg" },
    { name: "Ethan M.", avatar: "img/live/hugo.jpg" },
    { name: "Charlotte S.", avatar: "img/live/camille.jpg" },
    { name: "Jacob B.", avatar: "img/live/theo.jpg" },
    { name: "Mia V.", avatar: "img/live/ines.jpg" },
    { name: "William J.", avatar: "img/live/quentin.jpg" },
    { name: "Amelia N.", avatar: "img/live/maelle.jpg" },
    { name: "Lucas A.", avatar: "img/live/lucas.jpg" },
    { name: "Harper K.", avatar: "img/live/anais.jpg" },
    { name: "Henry E.", avatar: "img/live/louis.jpg" },
    { name: "Emily H.", avatar: "img/live/juliette.jpg" },
    { name: "Benjamin O.", avatar: "img/live/nathan.jpg" },
    { name: "Grace W.", avatar: "img/live/clara.jpg" },
  ];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const usedNames = new Set();

  function getUniquePerson() {
    const available = people.filter((p) => !usedNames.has(p.name));
    return randomItem(available.length ? available : people);
  }

  function generateRow() {
    const tr = document.createElement("tr");
    tr.className = "table__row";

    const person = getUniquePerson();
    usedNames.add(person.name);
    const balanceNum = Math.floor(5000 + Math.random() * 20000);
    const variationNum = Math.floor(balanceNum * (0.01 + Math.random() * 0.03));
    const perfNum = ((variationNum / balanceNum) * 100).toFixed(1);

    const balance = `$${balanceNum.toLocaleString("en-US")}`;
    const variation = `+$${variationNum.toLocaleString("en-US")}`;
    const perf = `${perfNum}%`;

    const time = new Date().toLocaleTimeString("en-US");

    tr.innerHTML = `
    <td class="table__cell">
      <img class="table__avatar" src="${person.avatar}" alt="${person.name}">
      <span class="table__name">${person.name}</span>
    </td>
    <td class="table__cell" style="color:#109c35">${balance}</td>
    <td class="table__cell" style="color:#109c35">${variation}</td>
    <td class="table__cell" style="color:#1a73e8">${perf}</td>
    <td class="table__cell cell-time">${time}</td>
  `;

    return tr;
  }

  for (let i = 0; i < 7; i++) {
    tbody.appendChild(generateRow());
  }

  const wrapper = document.querySelector(".live__table-wrapper");

  const images = tbody.querySelectorAll("img");
  const imagePromises = [...images].map((img) =>
    img.complete
      ? Promise.resolve()
      : new Promise((res) => {
          img.onload = res;
          img.onerror = res;
        }),
  );
  Promise.all(imagePromises).then(() => {
    requestAnimationFrame(() => {
      wrapper.style.height = wrapper.offsetHeight + "px";
    });
  });

  setInterval(() => {
    const firstRow = tbody.firstElementChild;
    const rowHeight = firstRow.offsetHeight;
    const removedName = firstRow.querySelector(".table__name").textContent; // ← зчитуємо перед видаленням

    tbody.appendChild(generateRow());

    tbody.style.transition = "transform 0.6s ease";
    tbody.style.transform = `translateY(-${rowHeight}px)`;

    setTimeout(() => {
      tbody.style.transition = "none";
      tbody.style.transform = "translateY(0)";
      firstRow.remove();
      usedNames.delete(removedName);
    }, 620);
  }, 2000);
}

// slider
const reviewsSlider = document.querySelector(".swiper__reviews");

if (reviewsSlider) {
  const swiper = new Swiper(".swiper__reviews", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper__button--next",
      prevEl: ".swiper__button--prev",
    },

    //   // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
    },
  });
}

// Accordion
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  if (!items.length) return;
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

// form
// ==============================
// INIT
// ==============================

initForms();

function initForms() {
  const forms = document.querySelectorAll(".form");
  if (!forms.length) return;

  document
    .querySelectorAll('input[name="firstname"], input[name="lastname"]')
    .forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁіІїЇєЄ\s-]/g, "");
      });
    });

  forms.forEach((form) => setupForm(form));
}

// ==============================
// SETUP FORM
// ==============================

function setupForm(form) {
  const inputs = form.querySelectorAll(".form__input");

  // submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    inputs.forEach((input) => {
      clearState(input);

      if (!validateInput(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      console.log("Form OK");
      form.submit();
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      clearState(input);
      validateInput(input);
    });
    input.addEventListener("focus", () => {
      clearState(input);
    });

    input.addEventListener("input", () => {
      clearState(input);
    });
  });

  // phone only digits
  const phone = form.querySelector('input[name="phone"]');

  if (phone) {
    phone.addEventListener("input", () => {
      let value = phone.value;

      value = value.replace(/[^0-9+]/g, "");

      value = value.replace(/(?!^)\+/g, "");

      value = value.slice(0, 15);

      phone.value = value;
    });
  }
}

// ==============================
// VALIDATION
// ==============================

function validateInput(input) {
  const value = input.value.trim();

  // required
  if (!value) {
    showError(input, "This field is required");
    return false;
  }

  // email
  if (input.type === "email" && !validateEmail(value)) {
    showError(input, "Invalid email address");
    return false;
  }

  // phone
  if (input.name === "phone") {
    if (!/^\+?[0-9]{8,15}$/.test(value)) {
      showError(input, "Invalid phone number");
      return false;
    }
  }

  showSuccess(input);
  return true;
}

// ==============================
// UI STATES
// ==============================

function showError(input, message) {
  input.classList.add("form__input--error");

  const wrapper = input.closest(".form__field");

  let error = wrapper.querySelector(".form__error");

  if (!error) {
    error = document.createElement("div");
    error.className = "form__error";
    wrapper.appendChild(error);
  }

  error.textContent = message;
}

function showSuccess(input) {
  input.classList.add("form__input--success");
}

function clearState(input) {
  input.classList.remove("form__input--error", "form__input--success");

  const wrapper = input.closest(".form__field");
  const error = wrapper.querySelector(".form__error");

  if (error) error.remove();
}

// ==============================
// HELPERS
// ==============================

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// login modal

const loginBtn = document.querySelector(".header__login");
const loginModal = document.getElementById("login-modal");
const loginClose = document.querySelector(".login-modal__close");
const loginOverlay = document.querySelector(".login-modal__overlay");

if (loginBtn && loginModal) {
  loginBtn.addEventListener("click", () => {
    loginModal.classList.add("active");
    body.classList.add("locked");
  });
}

function closeLoginModal() {
  loginModal.classList.remove("active");
  body.classList.remove("locked");
}

if (loginClose) {
  loginClose.addEventListener("click", closeLoginModal);
}

if (loginOverlay) {
  loginOverlay.addEventListener("click", closeLoginModal);
}

// active navigation menu

const currentPage = window.location.pathname.split("/").pop();

const menuLinks = document.querySelectorAll(".menu__item-link");

menuLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");

  if (linkPath === currentPage || (currentPage === "" && linkPath === "/")) {
    link.classList.add("active");
  }
});

// scroll top

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollTopBtn.classList.toggle("show", window.scrollY > 800);
        ticking = false;
      });
      ticking = true;
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


