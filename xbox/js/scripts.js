// Custom Scripts
// burger
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

document.querySelectorAll(".menu__item--has-submenu > a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const parentItem = this.closest(".menu__item--has-submenu");
    const isOpen = parentItem.classList.contains("menu__item--open");

    // Закриваємо всі відкриті
    document.querySelectorAll(".menu__item--has-submenu").forEach((item) => {
      item.classList.remove("menu__item--open");
    });

    if (!isOpen) {
      parentItem.classList.add("menu__item--open");
    }
  });
});

document.addEventListener("click", function (e) {
  const isClickInsideMenu = e.target.closest(".menu__item--has-submenu");

  if (!isClickInsideMenu) {
    document.querySelectorAll(".menu__item--has-submenu").forEach((item) => {
      item.classList.remove("menu__item--open");
    });
  }
});

const wrapper = document.querySelector(".header__search-wrapper");
const searchIcon = wrapper.querySelector(".header__search-icon");
const backBtn = wrapper.querySelector(".header__search-back");

searchIcon.addEventListener("click", () => {
  wrapper.classList.add("search-open");
});

backBtn.addEventListener("click", () => {
  wrapper.classList.remove("search-open");
});

const swiperHero = new Swiper(".hero-swiper", {
  // Autoplay
  autoplay: {
    delay: 3000, // затримка між слайдами в мс
    disableOnInteraction: false, // не зупиняти після взаємодії
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// const swiperExclusive = new Swiper(".swiper-exclusive", {
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-btn-next",
//     prevEl: ".swiper-btn-prev",
//   },
//   centeredSlides: false,
//   //   // Responsive breakpoints
//   breakpoints: {
//     //   // when window width is >= 320px
//     //   320: {
//     //     slidesPerView: 3,
//     //     spaceBetween: 20
//     //   },
//     //   // when window width is >= 480px
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1640: {
//       slidesPerView: 5,
//       spaceBetween: 30,
//     },
//   },
// });

const swiperExclusive = new Swiper(".swiper-exclusive", {
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  centeredSlides: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1640: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  on: {
    init: () => matchSlideHeights(),
    resize: () => matchSlideHeights(),
  },
});

function matchSlideHeights() {
  const slides = document.querySelectorAll(".swiper-exclusive .swiper-slide");
  let maxHeight = 0;

  // Скидаємо попередню висоту
  slides.forEach((slide) => {
    slide.style.height = "auto";
  });

  // Знаходимо найвищий слайд
  slides.forEach((slide) => {
    const height = slide.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  // Присвоюємо однакову висоту всім
  slides.forEach((slide) => {
    slide.style.height = `${maxHeight}px`;
  });
}

// Select
const getTemplate = (data = [], placeholder, selectedId, withImg) => {
  let text = placeholder ?? "";

  const items = data.map((item) => {
    let cls = "";

    if (item.id === selectedId) {
      text = item.value;
      cls = "selected";
    }

    if (withImg) {
      return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">
                <img src="./img/select/${item.image}" class="select__img" />
                ${item.value}
            </li>
        `;
    }

    return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `;
  });

  if (withImg) {
    return `
            <input type="hidden" class="hidden__input">
            <div class="select__backdrop" data-type="backdrop"></div>
            <div class="select__input" data-type="input">
                <img class="select__img" src="./img/select/${selectedId}.png"/>
                <span data-type="value">${text}</span>
              
            </div>
            <div class="select__dropdown">
                <ul class="select__list">
                    ${items.join("")}
                </ul>
            </div>
        `;
  }

  return `
        <input type="hidden" class="hidden__input">
        <div class="select__backdrop" data-type="backdrop"></div>
        <div class="select__input" data-type="input">
            <span data-type="value">${text}</span>
          
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                ${items.join("")}
            </ul>
        </div>
    `;
};
class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;
    this.render();
    this.setup();
  }

  render() {
    const { placeholder, data, withImg } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(
      data,
      placeholder,
      this.selectedId,
      withImg
    );
  }
  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    // this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "input") {
      this.toggle();
    } else if (type === "item") {
      const id = event.target.dataset.id;

      this.select(id);
    } else if (type === "backdrop") {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  get current() {
    return this.options.data.find((item) => item.id === this.selectedId);
  }

  select(id) {
    this.selectedId = id;
    this.$value.textContent = this.current.value;

    this.$el
      .querySelectorAll(`[data-type="item"]`)
      .forEach((el) => el.classList.remove("selected"));
    this.$el.querySelector(`[data-id="${id}"]`).classList.add("selected");

    // [ENG] If you are using not png just replace down png on type what you need
    // [RU] Если используете другой формат то просто нужно изменить ниже png на нужный формат
    if (this.options.withImg === true) {
      this.$el.querySelector(
        `.select__img`
      ).src = `./img/select/${this.selectedId}.png`;
    }

    this.options.onSelect ? this.options.onSelect(this.current) : null;
    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add("open");
    // this.$arrow.classList.add('open')
  }

  close() {
    this.$el.classList.remove("open");
    // this.$arrow.classList.remove('open')
  }

  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
    this.$el.innerHTML = "";
  }
}
// Select Init
const selectLang = new Select("#select", {
  // [ENG] Placeholder
  placeholder: "Выберите элемент",

  // [ENG] If you need image set this option to true
  // [RU] Если нужно изображение то измините параметр false на true
  withImg: false,

  // [ENG] Required if withImg === true
  // [ENG] selectedId must be === image

  selectedId: "En",
  data: [
    {
      // [ENG] Option id
      id: "En",
      // [ENG] Image fullname (if yon don't use png type you will need to change method select() path to img)
      // [RU] Имя изображения (если используется формат не png то нужно в классе Select(выше в коде) -> и методе select() изменить путь к картинке )
      image: "En.png",
      // [ENG] Text content
      // [RU] Отображаемый текст
      value: "English (United States)",
    },
    {
      // [ENG] Option id
      id: "Ua",
      // [ENG] Image fullname (if yon don't use png type need to change method select() path to img)
      // [RU] Имя изображения (если используется формат не png то нужно в классе Select(выше в коде) -> и методе select() изменить путь к картинке )
      image: "Ua.png",
      // [ENG] Text content
      // [RU] Отображаемый текст
      value: "Україна - Українська",
    },
    {
      // [ENG] Option id
      id: "Es",
      // [ENG] Image fullname (if yon don't use png type need to change method select() path to img)
      // [RU] Имя изображения (если используется формат не png то нужно в классе Select(выше в коде) -> и методе select() изменить путь к картинке )
      image: "Es.png",
      // [ENG] Text content
      // [RU] Отображаемый текст
      value: "España - Español",
    },
  ],
  onSelect(item) {
    // [ENG] Form logic after choosing option
    // [RU] Обработка формы после выбора
    document.querySelector(".hidden__input").value = item.value;
    console.log(item.value);
  },
});

// video play
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("details-game")) {
    const video = document.getElementById("custom-video");
    const playButton = document.getElementById("play-button");

    if (video && playButton) {
      playButton.addEventListener("click", function () {
        video.setAttribute("controls", "controls");
        video.play();
        playButton.style.display = "none";
      });
    }
  }
});

