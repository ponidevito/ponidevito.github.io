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
    en: 'Hello! My name is Oleh, and I’m 34 years old, proudly hailing from the beautiful city of Lviv, Ukraine. I like to think of myself as punctual and responsible, always eager to learn and grow in my field. When I’m not coding, you can usually find me exploring new places, or enjoying a good movie (yes, I’m a film buff!) Check out my website >>> <a title="Create your own movie collection" class="link" href="https://collection-films.org.ua/" target="_blank" rel="noopener noreferrer">Collection films</a>. I’m excited to join a team that values creativity and innovation, and I’m ready to tackle new challenges while bringing a touch of humor and enthusiasm to everything I do. Let’s make some great things happen together!',
    es: 'Mi nombre es Oleh, tengo 34 años y soy orgullosamente de la hermosa ciudad de Lviv, Ucrania. Me considero una persona puntual y responsable, siempre con ganas de aprender y crecer en mi campo. Cuando no estoy programando o diseñando, generalmente me encontrarás explorando nuevos lugares o disfrutando de una buena película (sí, soy un cinéfilo) Echa un vistazo a mi sitio web >>> <a title="Crea tu propia colección de películas" class="link" href="https://collection-films.org.ua/" target="_blank" rel="noopener noreferrer">Collection films</a>. Me emociona formar parte de un equipo que valore la creatividad y la innovación, y estoy listo para afrontar nuevos desafíos mientras aporto un toque de humor y entusiasmo a todo lo que hago. ¡Hagamos grandes cosas juntos!',
    ua: 'Мене звати Олег, мені 34 роки, і я з прекрасного міста Львів, Україна. Вважаю себе пунктуальною та відповідальною людиною, яка завжди прагне вчитися і розвиватися у своїй сфері. Коли я не займаюся кодингом, мене можна знайти в подорожах новими місцями або за переглядом хорошого фільму (так, я кіноман!) Зацініть мій сайт >>> <a title="Створіть свою колекцію фільмів" class="link" href="https://collection-films.org.ua/" target="_blank" rel="noopener noreferrer">Collection films</a>. Мене надихає можливість приєднатися до команди, що цінує креативність та інновації, і я готовий приймати нові виклики, додаючи трохи гумору та ентузіазму в усе, що роблю. Давайте творити круті речі разом!',
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
};

// Burger
document.addEventListener("DOMContentLoaded", function () {
  function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    const menuLinks = document.querySelectorAll(".menu__item-link");

    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
      body.classList.toggle("locked");
    });

    // Закриття меню при натисканні на пункт меню
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("locked");
      });
    });

    // Закриваємо меню при зміні розміру екрану
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("locked");
      }
    });
  }

  burgerMenu();
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function handleScroll() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const isBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 10; // Точніше порівняння

  const topBox = document.querySelector(".topBox");
  topBox.classList.toggle("_active", scrollTop > 500);

  document.querySelector(".header").classList.toggle("_active", scrollTop > 0);
}

window.addEventListener("scroll", handleScroll);

/*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
const STAR_COLOR = "#fff";
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 20;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

const canvas = document.querySelector("canvas"),
  context = canvas.getContext("2d");

let scale = 1, // device pixel ratio
  width,
  height;

let stars = [];

let pointerX, pointerY;

let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

let touchInput = false;

generate();
resize();
step();

window.onresize = resize;
canvas.onmousemove = onMouseMove;
canvas.ontouchmove = onTouchMove;
canvas.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave;

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

function resize() {
  scale = window.devicePixelRatio || 1;

  width = window.innerWidth * scale;
  height = window.innerHeight * scale;

  canvas.width = width;
  canvas.height = height;

  stars.forEach(placeStar);
}

function step() {
  context.clearRect(0, 0, width, height);

  update();
  render();

  requestAnimationFrame(step);
}

function update() {
  velocity.tx *= 0.96;
  velocity.ty *= 0.96;

  velocity.x += (velocity.tx - velocity.x) * 0.2;
  velocity.y += (velocity.ty - velocity.y) * 0.2;

  stars.forEach((star) => {
    star.x += velocity.x * star.z;
    star.y += velocity.y * star.z;

    star.x += (star.x - width / 2) * velocity.z * star.z;
    star.y += (star.y - height / 2) * velocity.z * star.z;
    star.z += velocity.z;

    // recycle when out of bounds
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

function render() {
  stars.forEach((star) => {
    context.beginPath();
    context.lineCap = "round";
    context.lineWidth = STAR_SIZE * star.z * scale;
    context.globalAlpha = 0.5 + 0.5 * Math.random();
    context.strokeStyle = STAR_COLOR;

    context.beginPath();
    context.moveTo(star.x, star.y);

    var tailX = velocity.x * 1,
      tailY = velocity.y * 1;

    // stroke() wont work on an invisible line
    if (Math.abs(tailX) < 0.1) tailX = 0.5;
    if (Math.abs(tailY) < 0.1) tailY = 0.5;

    context.lineTo(star.x + tailX, star.y + tailY);

    context.stroke();
  });
}

function movePointer(x, y) {
  if (typeof pointerX === "number" && typeof pointerY === "number") {
    let ox = x - pointerX,
      oy = y - pointerY;

    const slowdownFactor = 300;
    velocity.tx = velocity.tx + (ox / slowdownFactor) * (touchInput ? 1 : -1);
    velocity.ty = velocity.ty + (oy / slowdownFactor) * (touchInput ? 1 : -1);
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

const button = document.querySelector(".premium-btn");

function updateTitleSpan() {
  return document.querySelector(".home__title span");
}

button.addEventListener("mouseenter", () => {
  const titleSpan = updateTitleSpan();
  if (titleSpan) {
    titleSpan.style.color = "#ffd52d";
  }
});

button.addEventListener("mouseleave", () => {
  const titleSpan = updateTitleSpan();
  if (titleSpan) {
    titleSpan.style.color = "#fff";
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu__item-link");
  const header = document.querySelector(".header");
  const headerHeight = header ? header.offsetHeight : 0;

  function changeActiveLink() {
    let currentSection = null;
    let minDifference = Number.MAX_VALUE; // Мінімальна різниця від верху

    // Якщо на самому верху сторінки, завжди активний Hero
    if (window.scrollY === 0) {
      currentSection = "hero";
    } else {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          10;
        const difference = Math.abs(window.scrollY - sectionTop); // Відстань від поточного положення

        if (window.scrollY >= sectionTop && difference < minDifference) {
          minDifference = difference;
          currentSection = section.getAttribute("id");
        }
      });
    }

    // Оновлюємо класи активного пункту меню
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href").substring(1) === currentSection
      );
    });
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink();
});

// gsap

document.addEventListener("DOMContentLoaded", function () {
  const homeContent = document.querySelector(".home__body");

  if (window.matchMedia("(min-width: 767px)").matches) {
    if (homeContent) {
      gsap.fromTo(
        homeContent,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
      );
    }

    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            gsap.to(homeContent, {
              opacity: 0,
              duration: 1.5,
              y: -50,
              ease: "power2.out",
            });
          } else {
            gsap.to(homeContent, {
              opacity: 1,
              duration: 1.5,
              y: 0,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (homeContent) homeObserver.observe(homeContent);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.querySelector(".about__body"), {
              opacity: 1,
              duration: 1,
              y: 0,
              ease: "power2.out",
            });
          } else {
            gsap.to(entry.target.querySelector(".about__body"), {
              opacity: 0,
              duration: 1,
              y: -50,
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionAbout = document.querySelector("#about");
    if (sectionAbout) {
      observer.observe(sectionAbout);
      gsap.fromTo(
        sectionAbout.querySelector(".about__picture"),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      gsap.fromTo(
        sectionAbout.querySelector(".about__content"),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
    const sectionProjects = document.querySelector("#projects");

    if (!sectionProjects) return;

    const projectsRow = sectionProjects.querySelector(".projects__row");

    if (!projectsRow) return;

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
          } else {
            gsap.to(projectsRow, { opacity: 0, y: -50, duration: 1.8 });
          }
        });
      },
      { threshold: 0.3 }
    );

    gsap.set(projectsRow, { opacity: 0, y: -50 });

    projectsObserver.observe(sectionProjects);
  }

  const skillsSection = document.querySelector(".skills");
  if (!skillsSection) return;

  const updateProgressBars = () => {
    document.querySelectorAll(".skills__column").forEach((column) => {
      let progress = column.getAttribute("data-progress");

      if (window.matchMedia("(max-width: 767px)").matches) {
        // Для мобільних (без анімації)
        column.querySelector(".progress-bar").style.width = progress + "%";
      } else {
        // Для >= 767px з анімацією
        const skillsObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.to(column.querySelector(".progress-bar"), {
                  width: progress + "%",
                  duration: 2,
                  ease: "power2.out",
                });
              } else {
                gsap.to(column.querySelector(".progress-bar"), {
                  width: "0%",
                  duration: 2,
                  ease: "power2.in",
                });
              }
            });
          },
          { threshold: 0.5 }
        );

        skillsObserver.observe(skillsSection);
      }
    });
  };

  updateProgressBars();
  window.addEventListener("resize", updateProgressBars);
});

// Form submit

let contactForm = document.getElementById("contact-form");
let sendEmail = (e) => {
  e.preventDefault();

  // init emailjs
  emailjs.sendForm(
    "service_m76nym2",
    "template_a2895ez",
    "#contact-form",
    "KI5CC2YsSzCCF6DZ2"
  );
  contactForm.reset();
  displaySuccesMessage();
};

contactForm.addEventListener("submit", sendEmail);

// success function

const successMessages = {
  en: "Your message has been successfully sent!",
  es: "¡Tu mensaje ha sido enviado con éxito!",
  ua: "Ваше повідомлення було успішно надіслано!",
};

function displaySuccesMessage() {
  const currentLang = localStorage.getItem("lang") || "en";

  toastr.options = {
    timeOut: 1500,
    positionClass: "toast-top-right",
  };

  toastr.success(successMessages[currentLang]);
}

// select lenguage
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

  function selectToggle() {
    selectBody.classList.toggle("opacity");
    event.stopPropagation();
  }

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

window.addEventListener("load", function () {
  let savedLang = localStorage.getItem("lang") || "en";
  document.querySelector(".select__current").innerText =
    savedLang.toUpperCase();
  location.href = window.location.pathname + "#" + savedLang;
  changeLanguage();
});

// function change lenguage
function changeLanguage() {
  let hash = window.location.hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    return;
  }

  document.querySelector("title").innerHTML = langArr["unit"][hash];

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

  // placeholders
  document
    .getElementById("name")
    ?.setAttribute("placeholder", langArr.placeholderName[hash]);
  document
    .getElementById("email")
    ?.setAttribute("placeholder", langArr.placeholderEmail[hash]);
  document
    .getElementById("textarea")
    ?.setAttribute("placeholder", langArr.placeholderMessage[hash]);

  let desktopLogo = document.querySelector(".lng-name");
  let mobileLogo = document.querySelector(".lng-name-mobile");

  if (desktopLogo) desktopLogo.innerHTML = langArr["name"][hash];
  if (mobileLogo) mobileLogo.innerHTML = langArr["nameShort"][hash];

  // 🔹 Триггер оновлення кнопки
  document.dispatchEvent(new Event("languageChanged"));
}

changeLanguage();

function setFlag(language) {
  const selectCurrent = document.querySelector(".select__current");
  selectCurrent.textContent = language.toUpperCase();

  // Оновлюємо URL з новою мовою
  window.location.hash = language.toLowerCase();
}

window.addEventListener("load", function () {
  const language = window.location.hash.substring(1).toUpperCase();

  if (language) {
    setFlag(language);
  }
});

// html or body close click
html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" && e.target.tagName !== "BODY") {
    selectBody.classList.remove("opacity");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleProjectsBtn");
  const arrowIcon = toggleBtn.querySelector(".arrow-icon");
  const hiddenProjects = document.querySelectorAll(".projects__column.hidden");
  let isExpanded = false;

  function updateButtonText() {
    const lang = localStorage.getItem("lang") || "ua";
    toggleBtn.childNodes[0].textContent = isExpanded
      ? langArr.showLess[lang] + " "
      : langArr.showMore[lang] + " ";
  }

  toggleBtn.addEventListener("click", () => {
    if (!isExpanded) {
      hiddenProjects.forEach((proj) => proj.classList.remove("hidden"));
      isExpanded = true;
      arrowIcon.classList.add("rotate");
    } else {
      hiddenProjects.forEach((proj) => proj.classList.add("hidden"));
      isExpanded = false;
      arrowIcon.classList.remove("rotate");
      window.scrollTo({
        top: document.querySelector("#projects").offsetTop,
        behavior: "smooth",
      });
    }
    updateButtonText();
  });

  updateButtonText();

  document.addEventListener("languageChanged", updateButtonText);
});



