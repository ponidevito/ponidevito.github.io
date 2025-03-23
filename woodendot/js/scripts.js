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
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

function fixedHeader() {
  const nav = document.querySelector(".header");
  const headerHeight = nav.offsetHeight; // Отримуємо висоту хедера
  const breakpoint = 1000;

  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed", "visible");
    document.body.style.paddingTop = `${headerHeight}px`; // Додаємо відступ, щоб контент не стрибав
  } else {
    nav.classList.remove("fixed", "visible");
    document.body.style.paddingTop = "0"; // Забираємо відступ
  }
}
window.addEventListener("scroll", fixedHeader);

// swiper header main
const swiperMain = new Swiper(".swiper-header-main", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1500,

  loop: true,
});

const swiperWhoAre = new Swiper(".swiper-who-are", {
    loop: true, // Безкінечне повторення
  speed: 5000,
  slidesPerView: 10,
  autoplay: {
    // enabled: true,
    delay: 1,
  },
  //   spaceBetween: 20

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 10,
      spaceBetween: 20,
    },
  },
});

const swiperPieces = new Swiper(".swiper-our-pieces", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // slidesPerView: 3,
  // spaceBetween: 10,

  //   // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    467: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperFeedBack = new Swiper(".swiper-feedback", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
});

gsap.registerPlugin(ScrollTrigger);

function initAnimation() {
  // Перевіряємо ширину екрану
  if (window.innerWidth < 992) return; // Якщо екран менший за 992px, анімація не ініціалізується

  document.querySelectorAll(".products__row").forEach((row) => {
    const items = row.querySelectorAll(".products__item");

    if (items.length !== 2) return; // Переконуємось, що є два елементи

    const isReversed = row.classList.contains("row-reverse");

    gsap.fromTo(
      items[0],
      { x: isReversed ? 100 : -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      items[1],
      { x: isReversed ? -100 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
}

// Ініціалізуємо анімацію при завантаженні сторінки
initAnimation();

// Оновлюємо анімацію, якщо змінилася ширина екрану
window.addEventListener("resize", initAnimation);

