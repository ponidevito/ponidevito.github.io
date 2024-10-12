// Custom Scripts
// Custom scripts

// burger

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

// submenu
const submenu = document.querySelector(".submenu");
const submenuLinkRotate = submenu.querySelector(".link-submenu img");
const submenuLink = submenu.querySelector(".link-submenu");

document.addEventListener("DOMContentLoaded", function () {
  submenuLink.addEventListener("click", function (event) {
    event.preventDefault();
    submenu.classList.toggle("open");
    submenuLink.classList.toggle("_active");
    submenuLinkRotate.classList.toggle("_active");
  });
});

document.addEventListener("click", function (event) {
  if (!submenu.contains(event.target) && submenu.classList.contains("open")) {
    submenu.classList.remove("open");
    submenuLinkRotate.classList.remove("_active");
    submenuLink.classList.remove("_active");
  }
});

let headerMainSwiper = document.querySelector(".header-main__swiper");
if (headerMainSwiper) {
  const swiper = new Swiper(".swiper-header", {
    slidesToScroll: 1,
    loop: true,
    // // Autoplay
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 1300, // Швидкість переходу між слайдами (у мілісекундах)

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
}

let reviewsSwiper = document.querySelector(".reviews__swiper");
if (reviewsSwiper) {
  const swiperReviews = new Swiper(".swiper-reviews", {
  

    // Navigation arrows
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 992: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      // 1200: {
      //   slidesPerView: 4,
      //   spaceBetween: 30,
      // },
    
    },
  });
}

// our sponsor swiper

let ourSponsorSwiper = document.querySelector(".our-sponsor__swiper");
if (ourSponsorSwiper) {
  const swiperReviews = new Swiper(".swiper-sponsor", {
  

    // Navigation arrows
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 992: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      // 1200: {
      //   slidesPerView: 4,
      //   spaceBetween: 30,
      // },
    
    },
  });
}

// counter 
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.header-main-about__number');
  const speed = 180; // Швидкість анімації

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText.replace('K', '');

          const increment = target / speed;

          if (count < target) {
              counter.innerText = Math.ceil(count + increment) + 'K';
              setTimeout(updateCount, 1);
          } else {
              counter.innerText = target.toLocaleString() + 'K';
          }
      };

      updateCount();
  });
});

if (document.title === "About") {
// mask
var element = document.getElementById('phone');
var maskOptions = {
    mask: '+{38} (000) 000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);
}

// tabs podcast detail

if (document.title === "Podcast detail") {
  function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
  }
  
  // ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
  // ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
  // ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
  // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
  tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
}


// tabs news

if (document.title === "News") {
  function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
  }
  
  // ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
  // ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
  // ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
  // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
  tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
}




