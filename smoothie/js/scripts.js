// Custom Scripts
// Custom scripts

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".prev__btn",
    prevEl: ".next__btn",
  },
});

const reviewsSwiper = document.querySelector(".swiper__second");

if (reviewsSwiper) {
  const swiper = new Swiper(".swiper__second", {
    // Optional parameters
    autoHeight: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

//  link active
let links = document.getElementsByClassName("menu__item a");

onload = function () {
  for (let lnk = document.links, j = 0; j < lnk.length; j++)
    if (lnk[j].href == document.URL) lnk[j].style.cssText = "color:#FEA3AC;";
  event.preventDefault();
};

// greenSock
let tl = gsap.timeline();

function greenSock() {
  // logo
  if (screen.width > 1200) {
    tl.from(".menu__logo", { duration: 2, opacity: 0, scale: 0.3 });
  }

  // index page animation

  //section smoothies
  if (document.querySelector(".smoothies__container") && screen.width > 1200) {
    gsap.to(".smoothies__container", {
      scrollTrigger: {
        trigger: ".smoothies__container",
        start: "20px 100%",
      },
      duration: 2,
      left: "50%",
    });
  }

  if (document.querySelector(".smoothies__header") && screen.width > 1200) {
    let smoothiesHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".smoothies__header",
        start: "center 80%",
        end: "center 50%",
      },
    });
    smoothiesHeader.fromTo(
      ".smoothies__header",
      { y: "70" },
      { duration: 1.5, y: "0" },
      "+=1"
    );
  }

  //section coctails
  if (document.querySelector(".coctails__container") && screen.width > 1200) {
    let coctails = gsap.timeline({
      scrollTrigger: {
        trigger: ".coctails__container",
        start: "center 100%",
        end: "center 50%",
      },
    });
    coctails.fromTo(
      ".coctails__container",
      { opacity: 0, scale: 0.3 },
      { duration: 0.7, opacity: 1, scale: 1 }
    );
  }

  //section subscribe
  if (document.querySelector(".subscribe__body") && screen.width > 1200) {
    let subscribe = gsap.timeline({
      scrollTrigger: {
        trigger: ".subscribe__body",
        start: "center 80%",
        end: "center 50%",
      },
    });
    subscribe.fromTo(
      ".subscribe__body",
      { opacity: 0, scale: 0.3 },
      { duration: 0.7, opacity: 1, scale: 1 }
    );
  }

  //section blog
  if (document.querySelector(".blog") && screen.width > 1200) {
    gsap.to(".blog", {
      scrollTrigger: {
        trigger: ".blog__container",
        start: "20px 100%",
        end: "center 50%",
      },
      duration: 2,
      right: "0",
    });
  }

  if (document.querySelector(".blog__content") && screen.width > 1200) {
    let blogHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".blog__content",
        start: "center 80%",
        end: "center 50%",
      },
    });
    blogHeader.fromTo(
      ".blog__content",
      { y: "50" },
      { duration: 1.5, y: "0" },
      "+=1"
    );
  }

  //section our menu
  if (document.querySelector(".ourMenu__content") && screen.width > 1200) {
    let ourMenu = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourMenu__content",
        start: "center 100%",
        end: "center 50%",
      },
    });
    ourMenu.fromTo(
      ".ourMenu__container",
      { opacity: 0, scale: 0.3 },
      { duration: 0.7, opacity: 1, scale: 1 }
    );
    ourMenu.fromTo(".ourMenu__content", { y: "50" }, { duration: 1.5, y: "0" });
  }

  if (document.querySelector(".testimonials__content") && screen.width > 1200) {
    let testimonials = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials__content",
        start: "center 80%",
        end: "center 50%",
      },
    });
    testimonials.fromTo(
      ".testimonials",
      { opacity: 0, scale: 0.3 },
      { duration: 0.7, opacity: 1, scale: 1 }
    );
  }

  // about page animation

  //section aboutus
  if (document.querySelector(".aboutus") && screen.width > 1200) {
    let aboutus = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutus",
        start: "center 80%",
        end: "center 50%",
      },
    });
    aboutus.fromTo(".aboutus__content", { y: "70" }, { duration: 1.5, y: "0" });
  }

  // section aboutStats

  if (document.querySelector(".aboutStats__item") && screen.width > 1200) {
    let aboutStats = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutStats",
        start: "center 80%",
        end: "center 50%",
      },
    });
    aboutStats.fromTo(
      ".aboutStats__item",
      { y: 50 },
      { y: 0, stagger: 0.5, duration: 1 }
    );
  }

  // section aboutTeam
  if (document.querySelector(".aboutTeam__section") && screen.width > 1200) {
    let aboutTeam = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutTeam__section",
        start: "center 80%",
        end: "center 50%",
      },
    });
    aboutTeam.fromTo(
      ".aboutTeam__section",
      { y: "70" },
      { duration: 1.5, y: "0" }
    );
  }

  //aboutTeam row

  if (document.querySelector(".aboutTeam__row") && screen.width > 1200) {
    let row = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutTeam__body",
        start: "center 100%",
        end: "center 80%",
        scrub: 6,
      },
    });
    row.fromTo(".row-left", { x: -500 }, { x: "0" });
    row.fromTo(".row-right", { x: 500 }, { x: "0" });
  }

  // menu page animation

  // section menu smoothies

  if (document.querySelector(".menuSmoothies__column") && screen.width > 1200) {
    let menuSmoothies = gsap.timeline({
      scrollTrigger: {
        trigger: ".menuSmoothies__column",
        start: "center 100%",
        end: "center 50%",
      },
    });
    menuSmoothies.fromTo(
      ".menuSmoothies__column",
      { opacity: 0, scale: 0.3 },
      { duration: 0.7, opacity: 1, scale: 1 }
    );
  }

  // section menu tables

  if (document.querySelector(".tables") && screen.width > 1200) {
    let tableTop = gsap.timeline({
      scrollTrigger: {
        trigger: ".tables__text",
        start: "center 80%",
        end: "center 50%",
      },
    });
    tableTop.fromTo(
      ".tables__text",
      { y: 50 },
      { y: 0, stagger: 0.5, duration: 1 }
    );

    if (document.querySelector(".tables__row") && screen.width > 1200) {
      let tableRow = gsap.timeline({
        scrollTrigger: {
          trigger: ".tables__row",
          start: "center 80%",
          end: "center 50%",
        },
      });
      tableRow.fromTo(
        ".table-left",
        { x: "-100%" },
        { x: 0, duration: 1, ease: "bounce.out" }
      );
      tableRow.fromTo(
        ".table-right",
        { x: "100%" },
        { x: 0, duration: 1, ease: "bounce.out" },
        "-=1"
      );
    }
  }
}

greenSock();

