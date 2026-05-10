// Custom Scripts
const langArr = {
  unit: {
    en: "Portfolio",
    es: "Portfolio",
    ua: "Портфоліо",
  },
  name: {
    en: "Oleh <span>Kravchuk</span>",
    es: "Oleh <span>Kravchuk</span>",
    ua: "Олег <span>Кравчук</span>",
  },
  nameShort: {
    en: "Oleh <span>K.</span>",
    es: "Oleh <span>K.</span>",
    ua: "Олег <span>K.</span>",
  },
  home: {
    en: "Home",
    ua: "Головна",
    es: "Inicio",
  },
  about: {
    en: "About",
    ua: "Про мене",
    es: "Sobre mí",
  },
  skills: {
    en: "Skills",
    ua: "Навички",
    es: "Habilidades",
  },
  projects: {
    en: "Projects",
    ua: "Проєкти",
    es: "Proyectos",
  },
  contact: {
    en: "Contact",
    ua: "Контакти",
    es: "Contacto",
  },
  homeTitle: {
    en: "Hello, <br> I'm <span>Oleh</span> <br> Web Developer",
    es: "Hola, <br> soy <span>Oleh</span> <br> Desarrollador Web",
    ua: "Привіт, <br> я <span>Олег</span> <br> веб-розробник",
  },
  contactBtn: {
    en: "Contact",
    es: "Contacto",
    ua: "Контакти",
  },
  aboutMe: {
    en: "About Me",
    es: "Sobre mi",
    ua: "Про мене",
  },
  aboutMeTitle: {
    en: "Hey there!",
    es: "¡Hola!",
    ua: "Привіт!",
  },
  aboutMeUndertitle: {
    en: 'Hello! My name is Oleh, I am 35 years old and based in the city of Lviv, Ukraine. I consider myself a punctual and responsible professional, always motivated to learn and grow in my field. When I’m not coding, I enjoy traveling and exploring new places or watching a good movie. In my free time, I develop my own pet project - <a title="Create your own movie collection" class="link" href="https://collection-films.org.ua/" target="_blank" rel="noopener noreferrer">Collection Films</a>, which I use as a platform to practice and further improve my web development skills. I am inspired by working in a team environment where creativity, knowledge sharing, and mutual support are valued. I enjoy contributing to processes that help create meaningful and useful digital products.',
    es: 'Me llamo Oleg, tengo 35 años y soy de la ciudad de Lviv, Ucrania. Me considero una persona puntual y responsable, siempre enfocada en aprender y desarrollarme profesionalmente. Cuando no estoy programando, me gusta viajar y descubrir nuevos lugares o ver una buena película. También, en mi tiempo libre, desarrollo mi propio pet project - <a title="Crea tu colección de películas" class="link" href="https://collection-films.org.ua/" target="_blank" rel="noopener noreferrer">Collection Films</a>, que utilizo como espacio para practicar y mejorar mis habilidades en desarrollo web. Me motiva trabajar en equipo, en entornos donde se valoran la creatividad, el intercambio de conocimientos y el apoyo mutuo. Me gusta participar en procesos que contribuyen a crear productos realmente interesantes y útiles.',
    ua: 'Мене звати Олег, мені 35 роки, і я з прекрасного міста Львів, Україна. Вважаю себе пунктуальною та відповідальною людиною, яка завжди прагне вчитися і розвиватися у своїй сфері. Коли я не займаюся кодингом, мене можна знайти в подорожах новими місцями або за переглядом хорошого фільму (так, я кіноман!) Також у вільний час розвиваю власний pet-проєкт - <a title="Створіть свою колекцію фільмів" class="link" href="https://collection-films.org.ua/" target="_blank" rel="noopener noreferrer">Collection Films</a>, який використовую для практики та вдосконалення навичок веб-розробки. Я отримую натхнення від роботи в команді, де цінуються креативність, обмін досвідом і підтримка. Мені подобається долучатися до процесів, які допомагають створювати щось справді цікаве й корисне.',
  },
  skillsTitle: {
    en: "Skills",
    es: "Habilidades",
    ua: "Навички",
  },
  projectsTitle: {
    en: "Projects",
    es: "Proyectos",
    ua: "Проєкти",
  },
  contactsTitle: {
    en: "Contact",
    es: "Contacto",
    ua: "Контакти",
  },
  labelName: {
    en: "Name",
    es: "Nombre",
    ua: "Ім'я",
  },
  labelEmail: {
    en: "Email",
    es: "Email / Correo",
    ua: "Email",
  },
  labelMessage: {
    en: "Message",
    es: "Mensaje",
    ua: "Повідомлення",
  },

  placeholderName: {
    en: "Enter your name",
    es: "Introduce tu nombre",
    ua: "Введіть ваше ім'я",
  },
  placeholderEmail: {
    en: "Enter your email",
    es: "Introduce tu correo",
    ua: "Введіть ваш email",
  },
  placeholderMessage: {
    en: "Type your message here",
    es: "Escribe tu mensaje aquí",
    ua: "Напишіть ваше повідомлення тут",
  },
  showMore: {
    en: "Show more",
    es: "Mostrar más",
    ua: "Показати більше",
  },
  showLess: {
    en: "Show less",
    es: "Mostrar menos",
    ua: "Показати менше",
  },
  submit: {
    en: "Submit",
    es: "Enviar",
    ua: "Надіслати",
  },
  seoTitle: {
    en: "Oleh Kravchuk | Frontend Developer Portfolio",
    es: "Oleh Kravchuk | Portafolio Frontend",
    ua: "Олег Кравчук | Frontend Developer Portfolio",
  },
  seoDescription: {
    en: "Frontend Developer portfolio featuring responsive websites, animations, JavaScript projects and modern UI development.",
    es: "Portafolio de desarrollador frontend con sitios responsivos, animaciones, proyectos JavaScript e interfaces modernas.",
    ua: "Портфоліо frontend-розробника з адаптивними сайтами, анімаціями, JavaScript-проєктами та сучасними UI інтерфейсами.",
  },
};

// Scroll page to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Toggle header & back-to-top button on scroll
function handleScroll() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const isBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 10;

  const topBox = document.querySelector(".topBox");
  topBox.classList.toggle("_active", scrollTop > 500);

  document.querySelector(".header").classList.toggle("_active", scrollTop > 0);
}

// ─── Language selector ───────────────────────────────────────────────────────

let selectHeader = document.querySelector(".select__header");
let selectItem = document.querySelectorAll(".select__item");
let selectBody = document.querySelector(".select__body");
let html = document.querySelector("html");

const allLang = ["en", "es", "ua"];

let select = function () {
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  selectHeader.addEventListener("click", selectToggle);

  // Open / close dropdown
  function selectToggle() {
    selectBody.classList.toggle("opacity");
    event.stopPropagation();
  }

  // Pick a language, save to localStorage, apply
  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");

    currentText.innerText = text.toUpperCase();

    let lang = text.toLowerCase();
    location.href = window.location.pathname + "#" + lang;
    localStorage.setItem("lang", lang);

    selectBody.classList.remove("opacity");
    changeLanguage();
  }
};

select();

// Restore saved language on page load
window.addEventListener("load", function () {
  let savedLang = localStorage.getItem("lang") || "en";
  document.querySelector(".select__current").innerText =
    savedLang.toUpperCase();
  location.href = window.location.pathname + "#" + savedLang;
  changeLanguage();
});

// ─── Apply translations ──────────────────────────────────────────────────────

function changeLanguage() {
  let hash = window.location.hash.substring(1);

  // Fallback to English if unknown hash
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    return;
  }
  document.documentElement.lang = hash;

  document.title = langArr.seoTitle[hash];

  // Replace text / HTML for every .lng-* element
  for (let key in langArr) {
    let elems = document.querySelectorAll(".lng-" + key);
    if (elems.length) {
      elems.forEach((elem) => {
        const value = langArr[key][hash];
        if (/<[a-z][\s\S]*>/i.test(value)) {
          elem.innerHTML = value;
        } else {
          elem.textContent = value;
        }
      });
    }
  }

  // Update form placeholders
  document
    .getElementById("name")
    ?.setAttribute("placeholder", langArr.placeholderName[hash]);
  document
    .getElementById("email")
    ?.setAttribute("placeholder", langArr.placeholderEmail[hash]);
  document
    .getElementById("textarea")
    ?.setAttribute("placeholder", langArr.placeholderMessage[hash]);
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", langArr.seoDescription[hash]);

  // Update logo text
  let desktopLogo = document.querySelector(".lng-name");
  let mobileLogo = document.querySelector(".lng-name-mobile");
  if (desktopLogo) desktopLogo.innerHTML = langArr["name"][hash];
  if (mobileLogo) mobileLogo.innerHTML = langArr["nameShort"][hash];

  // Notify other components that language changed
  document.dispatchEvent(new Event("languageChanged"));
}

changeLanguage();

// Sync flag label with current URL hash
function setFlag(language) {
  const selectCurrent = document.querySelector(".select__current");
  selectCurrent.textContent = language.toUpperCase();
  window.location.hash = language.toLowerCase();
}

window.addEventListener("load", function () {
  const language = window.location.hash.substring(1).toUpperCase();
  if (language) setFlag(language);
});

// Close dropdown when clicking outside
html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" && e.target.tagName !== "BODY") {
    selectBody.classList.remove("opacity");
  }
});

// ─── DOM ready ───────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  // ── Burger menu ────────────────────────────────────────────────────────────
  function initBurgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.body;
    const menuLinks = document.querySelectorAll(".menu__item-link");

    // Toggle menu open / closed
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
      body.classList.toggle("locked");
    });

    // Close menu when a link is clicked
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("locked");
      });
    });

    // Auto-close on desktop resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("locked");
      }
    });
  }

  // ── Canvas star animation ───────────────────────────────────────────────────
  function stars() {
    const STAR_COLOR = "#fff";
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 20;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 14; // tuned for performance

    const canvas = document.querySelector("canvas"),
      context = canvas.getContext("2d");

    let scale = 1,
      width,
      height;

    let stars = [];
    let pointerX, pointerY;
    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
    let touchInput = false;

    generate();
    resize();
    step();

    window.addEventListener("resize", resize);
    canvas.onmousemove = onMouseMove;
    canvas.ontouchmove = onTouchMove;
    canvas.ontouchend = onMouseLeave;
    document.onmouseleave = onMouseLeave;

    // Populate star pool
    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function placeStar(star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    // Reposition a star that went out of bounds
    function recycleStar(star) {
      let direction = "z";
      let vx = Math.abs(velocity.x),
        vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        let axis;
        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          axis = Math.random() < vy / (vx + vy) ? "v" : "h";
        }
        if (axis === "h") {
          direction = velocity.x > 0 ? "l" : "r";
        } else {
          direction = velocity.y > 0 ? "t" : "b";
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      if (direction === "z") {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === "l") {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "r") {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "t") {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === "b") {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    // Resize canvas to match window + pixel ratio
    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(placeStar);
    }

    // Main animation loop
    let animFrameId;

    function step() {
      context.clearRect(0, 0, width, height);
      update();
      render();
      animFrameId = requestAnimationFrame(step);
    }

    // Pause animation when tab is hidden, resume when visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(animFrameId);
      } else {
        step();
      }
    });

    // Move stars and compute alpha once per frame
    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.2;
      velocity.y += (velocity.ty - velocity.y) * 0.2;

      stars.forEach((star) => {
        star.alpha = 0.5 + 0.5 * Math.random(); // computed here, not in render
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    // Draw each star as a short stroked line
    function render() {
      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = star.alpha ?? 0.7;
        context.strokeStyle = STAR_COLOR;

        context.beginPath();
        context.moveTo(star.x, star.y);

        var tailX = velocity.x * 1,
          tailY = velocity.y * 1;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    // Track pointer and update velocity
    function movePointer(x, y) {
      if (typeof pointerX === "number" && typeof pointerY === "number") {
        let ox = x - pointerX,
          oy = y - pointerY;
        const slowdownFactor = 300;
        velocity.tx += (ox / slowdownFactor) * (touchInput ? 1 : -1);
        velocity.ty += (oy / slowdownFactor) * (touchInput ? 1 : -1);
      }
      pointerX = x;
      pointerY = y;
    }

    function onMouseMove(event) {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    }

    function onTouchMove(event) {
      touchInput = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY, true);
      event.preventDefault();
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }
  }

  // ── Hover effect: tint hero title on button hover ─────────────────────────
  function changeColorTitle() {
    const button = document.querySelector(".premium-btn");

    function updateTitleSpan() {
      return document.querySelector(".home__title span");
    }

    button.addEventListener("mouseenter", () => {
      const titleSpan = updateTitleSpan();
      if (titleSpan) titleSpan.style.color = "#ffd52d";
    });

    button.addEventListener("mouseleave", () => {
      const titleSpan = updateTitleSpan();
      if (titleSpan) titleSpan.style.color = "#fff";
    });
  }

  // ── Smooth scroll offset by header height ─────────────────────────────────
  document.querySelectorAll("a[data-scroll]").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const headerHeight = document.querySelector(".header").offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    });
  });

  // ── Active nav link on scroll ──────────────────────────────────────────────
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu__item-link");
  const header = document.querySelector(".header");
  const headerHeight = header ? header.offsetHeight : 0;

  function changeActiveLink() {
    let currentSection = null;
    let minDifference = Number.MAX_VALUE;

    if (window.scrollY === 0) {
      currentSection = "hero";
    } else {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          10;
        const difference = Math.abs(window.scrollY - sectionTop);
        if (window.scrollY >= sectionTop && difference < minDifference) {
          minDifference = difference;
          currentSection = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href").substring(1) === currentSection,
      );
    });
  }

  // Throttle scroll handlers with rAF — avoids duplicate listeners
  let scrollTicking = false;
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleScroll();
        changeActiveLink();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  changeActiveLink();
  handleScroll();

  // ── GSAP animations ────────────────────────────────────────────────────────
  // function animationGsap() {
  //   const homeContent = document.querySelector(".home__body");

  //   if (window.matchMedia("(min-width: 767px)").matches) {
  //     // Hero fade-in
  //     if (homeContent) {
  //       gsap.fromTo(
  //         homeContent,
  //         { opacity: 0, y: -50 },
  //         { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
  //       );
  //     }

  //     // Fade hero out when scrolled away
  //     const homeObserver = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           gsap.to(homeContent, {
  //             opacity: entry.isIntersecting ? 1 : 0,
  //             y: entry.isIntersecting ? 0 : -50,
  //             duration: 1.5,
  //             ease: "power2.out",
  //           });
  //         });
  //       },
  //       { threshold: 0.5 },
  //     );
  //     if (homeContent) homeObserver.observe(homeContent);

  //     // About section fade-in / out
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           gsap.to(entry.target.querySelector(".about__body"), {
  //             opacity: entry.isIntersecting ? 1 : 0,
  //             y: entry.isIntersecting ? 0 : -50,
  //             duration: 1,
  //             ease: entry.isIntersecting ? "power2.out" : "none",
  //           });
  //         });
  //       },
  //       { threshold: 0.2 },
  //     );

  //     const sectionAbout = document.querySelector("#about");
  //     if (sectionAbout) {
  //       observer.observe(sectionAbout);
  //       gsap.fromTo(
  //         sectionAbout.querySelector(".about__picture"),
  //         { opacity: 0, y: -50 },
  //         { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  //       );
  //       gsap.fromTo(
  //         sectionAbout.querySelector(".about__content"),
  //         { opacity: 0, y: -50 },
  //         { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  //       );
  //     }

  //     // Projects row fade-in / out
  //     const sectionProjects = document.querySelector("#projects");
  //     if (!sectionProjects) return;

  //     const projectsRow = sectionProjects.querySelector(".projects__row");
  //     if (!projectsRow) return;

  //     const projectsObserver = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           gsap.to(projectsRow, {
  //             opacity: entry.isIntersecting ? 1 : 0,
  //             y: entry.isIntersecting ? 0 : -50,
  //             duration: 1.8,
  //             ease: entry.isIntersecting ? "power2.out" : "none",
  //           });
  //         });
  //       },
  //       { threshold: 0.3 },
  //     );

  //     gsap.set(projectsRow, { opacity: 0, y: -50 });
  //     projectsObserver.observe(sectionProjects);
  //   }

  //   // ── Skills progress bars ─────────────────────────────────────────────────
  //   const skillsSection = document.querySelector(".skills");
  //   if (!skillsSection) return;

  //   const columns = document.querySelectorAll(".skills__column");

  //   // Single observer — created once, reused on resize
  //   const skillsObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         columns.forEach((column) => {
  //           const progress = column.getAttribute("data-progress");
  //           gsap.to(column.querySelector(".progress-bar"), {
  //             width: entry.isIntersecting ? progress + "%" : "0%",
  //             duration: 2,
  //             ease: entry.isIntersecting ? "power2.out" : "power2.in",
  //           });
  //         });
  //       });
  //     },
  //     { threshold: 0.5 },
  //   );

  //   const updateProgressBars = () => {
  //     if (window.matchMedia("(max-width: 767px)").matches) {
  //       // Mobile: instant width, no animation
  //       skillsObserver.disconnect();
  //       columns.forEach((column) => {
  //         column.querySelector(".progress-bar").style.width =
  //           column.getAttribute("data-progress") + "%";
  //       });
  //     } else {
  //       skillsObserver.observe(skillsSection);
  //     }
  //   };

  //   updateProgressBars();
  //   window.addEventListener("resize", updateProgressBars);
  // }

  function animationGsap() {
    const homeContent = document.querySelector(".home__body");

    if (window.matchMedia("(min-width: 767px)").matches) {
      // Hero fade-in — one time only
      if (homeContent) {
        gsap.fromTo(
          homeContent,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
        );
      }

      // About section — animate in once, then disconnect
      const sectionAbout = document.querySelector("#about");
      if (sectionAbout) {
        gsap.set(
          [
            sectionAbout.querySelector(".about__picture"),
            sectionAbout.querySelector(".about__content"),
            sectionAbout.querySelector(".about__body"),
          ],
          { opacity: 0, y: -50 },
        );

        const aboutObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.to(sectionAbout.querySelector(".about__body"), {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                });
                gsap.to(sectionAbout.querySelector(".about__picture"), {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                });
                gsap.to(sectionAbout.querySelector(".about__content"), {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                });
                aboutObserver.disconnect(); // ← fire once, never reset
              }
            });
          },
          { threshold: 0.2 },
        );

        aboutObserver.observe(sectionAbout);
      }

      // Projects row — animate in once, then disconnect
      const sectionProjects = document.querySelector("#projects");
      if (!sectionProjects) return;

      const projectsRow = sectionProjects.querySelector(".projects__row");
      if (!projectsRow) return;

      gsap.set(projectsRow, { opacity: 0, y: -50 });

      const projectsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(projectsRow, {
                opacity: 1,
                y: 0,
                duration: 1.8,
                ease: "power2.out",
              });
              projectsObserver.disconnect(); // ← fire once, never reset
            }
          });
        },
        { threshold: 0.3 },
      );

      projectsObserver.observe(sectionProjects);
    }

    // ── Skills progress bars — animate in once, then disconnect ───────────────
    const skillsSection = document.querySelector(".skills");
    if (!skillsSection) return;

    const columns = document.querySelectorAll(".skills__column");

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            columns.forEach((column) => {
              const progress = column.getAttribute("data-progress");
              gsap.to(column.querySelector(".progress-bar"), {
                width: progress + "%",
                duration: 2,
                ease: "power2.out",
              });
            });
            skillsObserver.disconnect(); // ← fire once, never reset
          }
        });
      },
      { threshold: 0.5 },
    );

    const updateProgressBars = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        // Mobile: instant width, no animation
        skillsObserver.disconnect();
        columns.forEach((column) => {
          column.querySelector(".progress-bar").style.width =
            column.getAttribute("data-progress") + "%";
        });
      } else {
        skillsObserver.observe(skillsSection);
      }
    };

    updateProgressBars();
    window.addEventListener("resize", updateProgressBars);
  }

  // ── Contact form ───────────────────────────────────────────────────────────
  let contactForm = document.getElementById("contact-form");

  let sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_m76nym2",
      "template_a2895ez",
      "#contact-form",
      "KI5CC2YsSzCCF6DZ2",
    );
    contactForm.reset();
    displaySuccesMessage();
  };

  contactForm.addEventListener("submit", sendEmail);

  const successMessages = {
    en: "Your message has been successfully sent!",
    es: "¡Tu mensaje ha sido enviado con éxito!",
    ua: "Ваше повідомлення було успішно надіслано!",
  };

  // Show localised success toast
  function displaySuccesMessage() {
    const currentLang = localStorage.getItem("lang") || "en";
    toastr.options = { timeOut: 1500, positionClass: "toast-top-right" };
    toastr.success(successMessages[currentLang]);
  }

  // ── Show more / less projects ──────────────────────────────────────────────
  function initToggleProjects() {
    const toggleBtn = document.getElementById("toggleProjectsBtn");
    if (!toggleBtn) return;

    const arrowIcon = toggleBtn.querySelector(".arrow-icon");
    const hiddenProjects = document.querySelectorAll(
      ".projects__column.hidden",
    );
    let isExpanded = false;

    function updateButtonText() {
      const lang = localStorage.getItem("lang") || "ua";
      toggleBtn.childNodes[0].textContent = isExpanded
        ? langArr.showLess[lang] + " "
        : langArr.showMore[lang] + " ";
    }

    toggleBtn.addEventListener("click", () => {
      hiddenProjects.forEach((proj) =>
        proj.classList.toggle("hidden", isExpanded),
      );
      isExpanded = !isExpanded;
      arrowIcon.classList.toggle("rotate", isExpanded);

      // Scroll back to projects section on collapse
      if (!isExpanded) {
        window.scrollTo({
          top: document.querySelector("#projects").offsetTop,
          behavior: "smooth",
        });
      }

      updateButtonText();
    });

    updateButtonText();
    document.addEventListener("languageChanged", updateButtonText);
  }

  // ── Init all modules ───────────────────────────────────────────────────────
  initBurgerMenu();
  stars();
  changeColorTitle();
  animationGsap();
  initToggleProjects();
});



