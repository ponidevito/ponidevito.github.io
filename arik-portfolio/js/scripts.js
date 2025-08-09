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
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

document.addEventListener("DOMContentLoaded", function () {
  // submenu
  const submenuLink = document.querySelector(".menu__item-link.sub");
  const submenu = submenuLink.nextElementSibling;

  submenuLink.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Перемикання submenu
    submenu.classList.toggle("active");
    submenuLink.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".menu__item-link.sub") &&
      !e.target.closest(".submenu")
    ) {
      submenu.classList.remove("active");
      submenuLink.classList.remove("active");
    }
  });

  // infiniti text
  const content = document.querySelector(".talk__content");

  if (content) {
    const items = content.querySelectorAll(".talk__item");
    const cloneCount = items.length;

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      content.appendChild(clone);
    });

    gsap.set(".talk__item", {
      xPercent: (i) => i * 100,
    });

    gsap.to(".talk__item", {
      xPercent: "-=100",
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100 * cloneCount, 0),
      },
    });
  }

  // infiniti text for about section arik andersson text
  if (window.location.pathname.includes("/index")) {
    const wrapper = document.querySelector(".ticker__wrapper");
    const itemsAuthor = wrapper.querySelector(".ticker__item");

    const repeatCount =
      Math.ceil(window.innerWidth / (itemsAuthor.offsetWidth + 580)) + 2;

    for (let i = 1; i < repeatCount; i++) {
      const clone = itemsAuthor.cloneNode(true);
      wrapper.appendChild(clone);
    }

    const fullWidth = wrapper.offsetWidth;

    gsap.to(wrapper, {
      x: `-=${itemsAuthor.offsetWidth + 580}`,
      duration: 15,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(
          (x) => parseFloat(x) % (itemsAuthor.offsetWidth + 580)
        ),
      },
    });
  }

  function numCounter(selector, number, time, step, options = {}) {
    const counter = document.querySelector(selector);
    if (!counter) return;

    let res = 0;
    const allTime = Math.round(time / (number / step));

    const interval = setInterval(() => {
      res += step;
      if (res >= number) {
        res = number;
        clearInterval(interval);
      }

      let displayValue = res;

      // Скорочення до k, якщо більше 999
      if (options.shortK && res >= 1000) {
        displayValue = Math.round(res / 1000) + "k";
      }

      // Додавання % при потребі
      if (options.percent) {
        displayValue = res + "%";
      }

      // Додавання плюса
      if (options.plus) {
        displayValue += "+";
      }

      counter.innerHTML = displayValue;
    }, allTime);
  }

  // Анімація при появі секції
  let triggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !triggered &&
        entry.target.classList.contains("section-3")
      ) {
        triggered = true;

        numCounter("#num-1", 150, 2000, 5, { plus: true }); // 150+
        numCounter("#num-2", 300, 2000, 5, { plus: true }); // 300+
        numCounter("#num-3", 100, 1500, 5, { percent: true }); // 100%
        numCounter("#num-4", 100000, 2000, 1000, { shortK: true }); // 100k
      }
    });
  });

  document.querySelectorAll(".section-3").forEach((section) => {
    observer.observe(section);
  });

  const topButton = document.querySelector(".global-top");

  // Показати/приховати кнопку при скролі
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const quarterPage = document.documentElement.scrollHeight / 4;

    if (scrollTop > quarterPage) {
      topButton.classList.add("visible");
    } else {
      topButton.classList.remove("visible");
    }
  });

  // Скрол до верху при кліку
  topButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Accordion
  function accordion() {
    const items = document.querySelectorAll(".accordion__item-trigger");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const parent = item.parentNode;
        if (parent.classList.contains("accordion__item-active")) {
          parent.classList.remove("accordion__item-active");
        } else {
          document
            .querySelectorAll(".accordion__item")
            .forEach((child) =>
              child.classList.remove("accordion__item-active")
            );
          parent.classList.add("accordion__item-active");
        }
      });
    });
  }
  accordion();

  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".menu__item-link");

  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

});

// animation
document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

 if (typeof gsap === "undefined") {
    console.error("GSAP не знайдено. Підключи gsap.min.js перед цим скриптом.");
    return;
  }
  const hasScrollTrigger = typeof ScrollTrigger !== "undefined";
  if (hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  } else {
    console.warn("ScrollTrigger не підключено.");
  }

  
  function animateHomePage() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".hero__head img", {
      y: 30,
      scale: 1.05,
      filter: "blur(10px)",
      duration: 1.2,
      clearProps: "all",
    })
      .from(
        ".header",
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".hero__title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ".hero__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      );

    gsap.fromTo(
      ".logos__item",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".logos",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".services__column",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services",
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.from(".global-line__head", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".work__column:nth-child(-n+2)", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".work__body",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".work__column:nth-child(n+3)", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".work__column:nth-child(n+3)",
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".process__abovetitle", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".process__title", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process__abovetitle",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".process__undertitle", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process__title",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    document.querySelectorAll(".column-process").forEach((column) => {
      gsap.fromTo(
        column,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.from(".testimonials__title", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".testimonials__undertitle", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".testimonials__title",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    const boxes = document.querySelectorAll(".testimonials__box");

    boxes.forEach((box, boxIndex) => {
      const cards = box.querySelectorAll(".testimonials__card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.2 + boxIndex * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    gsap.from(".about__head img", {
      y: 30,
      scale: 1.05,
      filter: "blur(10px)",
      duration: 1.2,
      clearProps: "all",
      scrollTrigger: {
        trigger: ".about",
        start: "top 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".about__item:first-child", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about__body",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      clearProps: "all",
    });

    gsap.from(".about__item:last-child", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about__body",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      clearProps: "all",
    });
  }

  function animateServicesPage() {
    const tl = gsap.timeline();

    tl.from(".hero-services__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".hero-services__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".hero-services__actions",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        ".hero-services__picture",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.4"
      );
  }

  function animateWorkPage() {
    const tl = gsap.timeline();

    tl.from(".latest-work__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".latest-work__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".work__body",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.4"
      );
  }

  function animateAboutPage() {
    const tl = gsap.timeline();
    tl.from(".section-about__picture img", {
      y: 30,
      scale: 1.05,
      filter: "blur(10px)",
      duration: 1.2,
      clearProps: "all",
    })
      .from(
        ".section-about__title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ".section-about__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".section-about__actions",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      );
    gsap.fromTo(
      ".section-about__card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-about__card",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none",
        },
      }
    );
  }

  function animateBlogPage() {
    const tl = gsap.timeline();
    tl.from(".blog-hero__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".blog-hero__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".blog-hero__row",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.4"
      );
  }

  function animatePricingPage() {
    const tl = gsap.timeline();
    tl.from(".pricing-hero__abovetitle", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".pricing-hero__title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".pricing-hero__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.4"
      )
      .from(
        ".pricing-hero__row",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.4"
      );
  }

  function animateSpacePage() {
    const tl = gsap.timeline();
    tl.from(".space__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".space__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".space__row",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.4"
      )
      .from(
        ".space__actions",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        ".space__picture",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );
  }

  function animateFramerPage() {
    const tl = gsap.timeline();
    tl.from(".framer__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".framer__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".framer__actions",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.4"
      )
      .from(
        ".framer__row",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.3"
      )
      .from(
        ".framer__picture",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.3"
      );
  }

  const path = window.location.pathname;

  if (mediaQuery.matches && hasScrollTrigger) {
    if (path === "/" || path.includes("/index")) {
      animateHomePage();
    }
    if (path.includes("/services")) {
      animateServicesPage();
    }
    if (path.includes("/work-page")) {
      animateWorkPage();
    }
    if (path.includes("/about")) {
      animateAboutPage();
    }
    if (path.includes("/blog")) {
      animateBlogPage();
    }
    if (path.includes("/pricing")) {
      animatePricingPage();
    }
    if (path.includes("/space")) {
      animateSpacePage();
    }
    if (path.includes("/framer-website")) {
      animateFramerPage();
    }
    ScrollTrigger.refresh();
  }
  
});

