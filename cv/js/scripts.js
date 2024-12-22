// Custom Scripts
"use strict";

const langArr = {
  'unit': {
    en: "CV",
    es: "Curriculum",
    ua: "Резюме",
  },
  'name': {
    en: "Kravchuk Oleh",
    es: "Kravchuk Oleh",
    ua: "Кравчук Олег",
  },
  'profession': {
    en: "Web-developer",
    es: "Desarrollador web",
    ua: "Веб-розробник",
  },
  'age': {
    en: "Age",
    es: "Años",
    ua: "Вік",
  },

  /*   adress       */
  'adress': {
    en: "Adress",
    es: "Direccion",
    ua: "Адреса",
  },

  'adress-name': {
    en: "Lviv Doroshenka st 63",
    es: "Lviv c/Doroshenka 63",
    ua: "м.Львів Дорошенка 63",
  },

  /*   adress       */

  'phone': {
    en: "Phone",
    es: "Telefono",
    ua: "Телефон",
  },

  'email': {
    en: "Email",
    es: "Correo electronico",
    ua: "Ел.пошта",
  },
  'skills': {
    en: "Skills",
    es: "Habilidades",
    ua: "Навички",
  },
  'website': {
    en: "My website",
    es: "Mi sitio web",
    ua: "Мій вебсайт",
  },

   /*   about       */
  'about': {
    en: "About me",
    es: "Sobre mi",
    ua: "Про мене",
  },

  'about-text': {
    en: "Hello! My name is Oleg. I am 34 years old. I am punctual and responsible for my work, I am ready to learn something new and develop in this area in your team!",
    es: "Hola! Mi nombre es Oleh ! Tengo 34 años. Soy puntual y responsable de mi trabajo.¡Estoy listo para aprender algo nuevo y desarrollarme en este campo en su equipo!",
    ua: "Привіт! Мене звати Олег! Мені 34 роки. Я пунктуальний та відповідально ставлюся до своєї роботи. Я готовий навчатися чомусь новому та розвиватись у цій сфері у вашій команді!",
  },
   /*   about       */

   // contacts 

   'contacts': {
    en: "Contacts",
    es: "Contactos",
    ua: "Контакти",
  },

  
  'phone-contacts': {
    en: "Phone:",
    es: "Telefono:",
    ua: "Телефон:",
  },

  'email-contacts': {
    en: "Email:",
    es: "Correo electronico:",
    ua: "Ел.пошта:",
  },

};

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  
  items.forEach((item,index) => {
  
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
          gsap.set(parent, {  });
        // parent.style.backgroundColor = "#dde4ce";
      } else {
        // parent.style.backgroundColor = "rgb(233 243 211 / 38%)";
       
        document.querySelectorAll(".accordion__item").forEach((child) => child.classList.remove("accordion__item-active"));
        // document.querySelectorAll(".accordion__item").forEach((item) => item.style.backgroundColor = "rgb(233 243 211 / 38%)");
        parent.classList.add("accordion__item-active");
        // parent.style.backgroundColor = "rgb(233 243 211 / 38%)";
      }
    });
  });
}
accordion();

// const list = gsap.utils.toArray(".accordion");

// list.forEach((accordion, index) => {
//   let isOpen = index === 0 ? true : false;

//   const title = accordion.getElementsByClassName("accordion__item-trigger")[0];
//   // const icon = accordion.getElementsByClassName("accordion__icon")[0];
//   const content = accordion.getElementsByClassName(
//     "accordion__item-content"
//   )[0];

//   gsap.set(
//     title,
//     isOpen
//       ? { background: "#fff", color: "#000" }
//       : { background: "#4b0082", color: "#fff" }
//   );
//   gsap.set(content, { height: isOpen ? "auto" : "0px"});
//   gsap.set(content, {  display: isOpen ? "block" : 'nonne' });

//   // gsap.set(icon, { scale: isOpen ? -1 : 1 });

//   title.addEventListener("click", () => {
//     isOpen = !isOpen;

//     gsap.to(
//       title,
//       isOpen
//         ? { background: "#fff", color: "#000" }
//         : { background: "#4b0082", color: "#fff" }
//     );
//     gsap.to(content, { height: isOpen ? "auto" : "0px" });
//     // gsap.to(icon, { scale: isOpen ? -1 : 1 });
//   });
// });

// Custom scripts
let acc = document.getElementsByClassName("accordion");
let content = document.getElementsByClassName("accordion__content");
let i;
let panel;


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
    let text = this.innerText, // Видаляємо toLowerCase
        select = this.closest(".select"),
        currentText = select.querySelector(".select__current");
  
    currentText.innerText = text.toUpperCase(); // Встановлюємо відображення тексту з великої літери
  
    let lang = text.toLowerCase(); // Для URL та localStorage використовуємо нижній регістр
    location.href = window.location.pathname + "#" + lang;
    localStorage.setItem("lang", lang);
  
    selectBody.classList.remove("opacity");
    changeLanguage();
  }


};

select();


window.addEventListener("load", function () { 
  let savedLang = localStorage.getItem("lang") || "en"; // За замовчуванням англійська
  document.querySelector(".select__current").innerText = savedLang.toUpperCase(); // Відображаємо з великої літери
  location.href = window.location.pathname + "#" + savedLang;
  changeLanguage(); // Зміна мови при завантаженні
});

// function change lenguage
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    // location.reload();
    return;
  }
  
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();

function setFlag(language) {
  const selectCurrent = document.querySelector('.select__current');
  selectCurrent.textContent = language.toUpperCase(); // Встановлюємо великі літери для відображення

  // Оновлюємо URL з новою мовою
  window.location.hash = language.toLowerCase(); // URL все ще з маленької літери
}


// html or body close click 
html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || e.target.tagName !== "BODY") {
    selectBody.classList.remove("opacity");
  }
});

window.addEventListener('load', function() {
  const language = window.location.hash.substring(1).toUpperCase(); // Отримуємо мову з хешу, наприклад, "en"
  
  // Якщо мова присутня в хеші, оновлюємо відображену мову
  if (language) {
    setFlag(language);
  }
});




// gsap

//header
gsap.fromTo(".header__image", {opacity: 0}, {opacity: 1, duration: 0.3});
gsap.fromTo(".title", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.1});
gsap.fromTo(".header__lenguage", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.2});
gsap.fromTo(".lng-age", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.3});
gsap.fromTo(".textInfo-age", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.3});
gsap.fromTo(".lng-adress", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.4});
gsap.fromTo(".lng-adress-name", {x:400}, {x:0, duration: 1.4,});
gsap.fromTo(".lng-phone", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.5});
gsap.fromTo(".textInfoPhone", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.5});
gsap.fromTo(".lng-email", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.6});
gsap.fromTo(".textInfoEmail", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.6});

//accrodeon
gsap.fromTo(".accordion", {y:200,opacity:0}, {y:0,opacity: 1, duration: 1.5});
gsap.fromTo(".accordion__item-trigger", {opacity:0}, {opacity: 1, duration: 2});



//footer

gsap.from(".footer", {opacity:0,delay:1.8});









