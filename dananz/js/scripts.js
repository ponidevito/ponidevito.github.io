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

// counter

function numCounter(selector, targetNumber, duration) {
  const counter = document.querySelector(selector);

  if (!counter) {
    console.error(`Елемент з селектором ${selector} не знайдено!`);
    return;
  }

  const startNumber = 0;
  const startTime = performance.now();

  const step = (timestamp) => {
    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentNumber = Math.floor(progress * targetNumber);

    counter.textContent = `${currentNumber}+`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counter.textContent = `${targetNumber}+`;
    }
  };

  requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Запускаємо анімацію для всіх елементів з числами
      entry.target.querySelectorAll(".counter__item-number").forEach((counter, index) => {
        const targetNumbers = [350, 23, 15]; // Вкажіть ваші числа
        numCounter(`.num-${index + 1}`, targetNumbers[index], 500);
      });

      // Зупиняємо спостереження для цього елемента
      observerInstance.unobserve(entry.target);
    }
  });
});

// Спостерігаємо за всіма секціями з класами counter
document.querySelectorAll(".counter").forEach((section) => {
  observer.observe(section);
});



function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode; // Поточний елемент акордеона
      const accordion = parent.closest('.accordion'); // Знайти батьківський акордеон

      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active');
      } else {
        // Закрити всі інші елементи тільки в поточному акордеоні
        accordion.querySelectorAll('.accordion__item').forEach(child => child.classList.remove('accordion__item-active'));
        parent.classList.add('accordion__item-active');
      }
    });
  });
}

accordion();



const lineGlobals = document.querySelectorAll('.line-global');

// Додаємо слухач на скрол
window.addEventListener('scroll', () => {
  lineGlobals.forEach(lineGlobal => {
    const rect = lineGlobal.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Коли елемент у полі видимості
    if (rect.top < windowHeight && rect.bottom > 0) {
      lineGlobal.classList.add('animate'); // Додаємо клас для запуску анімації
    } else {
      lineGlobal.classList.remove('animate'); // Забираємо клас, якщо елемент вийшов за межі
    }
  });
});

// phone country select
if (document.title === "Contact Us") {

  document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.querySelector('.phone__input'); // Поле вводу телефону
    const selectElement = document.getElementById("country-code"); // Нативний селект
    const customDisplay = document.querySelector('.custom-select__country'); // Відображення вибраної країни

    // Ініціалізація маски
    let mask = null;

    // Функція для оновлення маски на основі вибраного коду країни
    function setMask(countryCode) {
      let maskOptions = '';

      // Формуємо маску на основі вибраного коду країни
      switch (countryCode) {
        case '+1': // США
          maskOptions = '+{1} (000) 000-00-00';
          break;
        case '+44': // Великобританія
          maskOptions = '+{44} (000) 000-00-00';
          break;
        case '+33': // Франція
          maskOptions = '+{33} (000) 000-00-00';
          break;
        case '+38': // Україна
          maskOptions = '+{38} (000) 000-00-00'; // Формат для України
          break;
        case '+49': // Німеччина
          maskOptions = '+{49} (000) 000-00-00';
          break;
        default:
          maskOptions = '+{38} (000) 000-00-00'; // Базовий формат
          break;
      }

      // Оновлюємо маску, якщо вона вже існує
      if (mask) {
        mask.updateOptions({ mask: maskOptions });
      } else {
        mask = IMask(phoneInput, { mask: maskOptions }); // Ініціалізуємо маску, якщо вона не існує
      }
    }

    // Оновлення кастомного селекту
    function updateCustomSelect(countryName) {
      customDisplay.textContent = countryName; // Оновлюємо видимий текст
    }

    // Оновлення маски при зміні вибору країни
    selectElement.addEventListener("change", function () {
      const selectedCountryCode = this.value; // Отримуємо вибраний код країни
      const selectedCountryName = this.options[this.selectedIndex].text; // Отримуємо ім'я країни
      setMask(selectedCountryCode); // Оновлюємо маску відповідно до вибраного коду
      updateCustomSelect(selectedCountryName); // Оновлюємо кастомний селект
      phoneInput.value = ''; // Очищаємо поле телефону
    });

    // Встановлюємо код країни в інпут, але він не з'являється, поки не почнеться введення
    phoneInput.addEventListener("input", function () {
      const selectedCountryCode = selectElement.value; // Отримуємо вибраний код країни
      const currentValue = phoneInput.value.trim();

      // Додаємо код країни тільки при введенні
      if (!currentValue.startsWith(selectedCountryCode)) {
        phoneInput.value = selectedCountryCode + currentValue;
      }
    });

    // Ініціалізація маски для початкової країни
    const initialCountryCode = selectElement.value; // Початковий код країни
    const initialCountryName = selectElement.options[selectElement.selectedIndex].text; // Початкова назва країни
    setMask(initialCountryCode); // Встановлюємо маску для початкової країни
    updateCustomSelect(initialCountryName); // Оновлюємо кастомний селект
  });


  document.addEventListener("DOMContentLoaded", () => {
    const phoneGroup = document.querySelector(".form__phone-group");
    const phoneInput = document.querySelector(".phone__input");
    const selectElement = document.getElementById("country-code");
    const selectDisplay = document.querySelector(".custom-select__display");

    // Додаємо клас focus до групи
    function addGroupFocus() {
      phoneGroup.classList.add("focus");
    }

    // Забираємо клас focus з групи
    function removeGroupFocus() {
      phoneGroup.classList.remove("focus");
    }

    // Слухаємо фокус на селекті
    selectElement.addEventListener("focus", () => {
      addGroupFocus();
    });

    // Слухаємо фокус на інпуті
    phoneInput.addEventListener("focus", () => {
      addGroupFocus();
    });

    // Слухаємо втрату фокусу на селекті
    selectElement.addEventListener("blur", () => {
      setTimeout(() => {
        if (!phoneGroup.contains(document.activeElement)) {
          removeGroupFocus();
        }
      }, 0);
    });

    // Слухаємо втрату фокусу на інпуті
    phoneInput.addEventListener("blur", () => {
      setTimeout(() => {
        if (!phoneGroup.contains(document.activeElement)) {
          removeGroupFocus();
        }
      }, 0);
    });

    // Слухаємо кліки на групі
    phoneGroup.addEventListener("click", (event) => {
      if (event.target === selectElement || event.target.closest(".custom-select__display")) {
        selectElement.focus(); // Фокусуємо селект
      } else {
        phoneInput.focus(); // Фокусуємо інпут
      }
    });
  });

}

// active menu
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu__item-link");
  const currentPage = window.location.pathname.split("/").pop(); // Отримуємо назву поточної сторінки

  menuLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active"); // Додаємо клас 'active' до відповідного пункту меню
    }
  });
});







