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

   /*   about       */
  'about': {
    en: "About me",
    es: "Sobre mi",
    ua: "Про мене",
  },

  'about-text': {
    en: "Hello! My name is Oleg. I am 31 years old. I am punctual and responsible for my work, I am ready to learn something new and develop in this area in your team!",
    es: "Hola! Mi nombre es Oleh ! Tengo 31 años. Soy puntual y responsable de mi trabajo.¡Estoy listo para aprender algo nuevo y desarrollarme en este campo en su equipo!",
    ua: "Привіт! Мене звати Олег! Мені 31 рік. Я пунктуальний та відповідально ставлюся до своєї роботи. Я готовий навчатися чомусь новому та розвиватись у цій сфері у вашій команді!",
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

// Custom scripts
let acc = document.getElementsByClassName("accordion");
let content = document.getElementsByClassName('accordion__content');
let i;
let panel;

// accordion
function accordion() {
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      panel = this.firstElementChild.lastElementChild;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

accordion();

function toggle() {
  let _loop = function _loop(a) {
    acc[a].addEventListener('click', function () {
      content[a].classList.toggle("active");
    });
  };

  for (let a = 0; a < acc.length; a++) {
    _loop(a);
  }
}

toggle();


// select lenguage


let selectHeader = document.querySelector(".select__header");
let selectItem = document.querySelectorAll(".select__item");
let selectBody = document.querySelector(".select__body");
let html=document.querySelector("html")

const allLang = ["en", "es", "ua"];

let select = function () {
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  selectHeader.addEventListener("click", selectToggle);

  function selectToggle() {
    selectBody.classList.add("opacity");
    event.stopPropagation();
  }



  function selectChoose() {
    
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    let lang = this.innerText;
    location.href = window.location.pathname + "#" + lang.toLowerCase();
    localStorage.setItem('place1', lang);
    selectBody.classList.remove("opacity");
    location.reload();
    
    if(localStorage.getItem('place1')){ 
      lang = localStorage.getItem('place1');
    }
  }
};

select();

window.addEventListener("load",function(){ if(localStorage.getItem('place1'))  document.querySelector('.select__current').innerHTML=localStorage.getItem('place1')})

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
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

html.addEventListener('click', function(e) {
  if(e.target.tagName !== 'HTML' || e.target.tagName !== 'BODY'){
      selectBody.classList.remove('opacity');
  }
});



