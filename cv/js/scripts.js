// Custom Scripts
// Burger
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// function handleScroll() {
//   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight;
//   const clientHeight = document.documentElement.clientHeight;
//   const isBottom = scrollTop + clientHeight >= scrollHeight - 10; // Якщо майже внизу
  
//   // Перемикаємо клас для кнопки "наверх"
//   const topBox = document.querySelector(".topBox");
//   topBox.classList.toggle("_active", scrollTop > 500);
  
//   // Якщо внизу, змінюємо розташування
//   if (isBottom) {
//     topBox.style.bottom = "90px";
//   } else {
//     topBox.style.bottom = "20px"; // Стандартне значення
//   }
  
//   // Перемикаємо клас для хедера
//   document.querySelector(".header").classList.toggle("_active", scrollTop > 0);
// }

function handleScroll() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const isBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 10; // Точніше порівняння
  
  const topBox = document.querySelector(".topBox");
  topBox.classList.toggle("_active", scrollTop > 500);
  

  
  document.querySelector(".header").classList.toggle("_active", scrollTop > 0);
}


// Додаємо обробник події
window.addEventListener("scroll", handleScroll);


  /*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 20;
const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8;

const canvas = document.querySelector( 'canvas' ),
      context = canvas.getContext( '2d' );

let scale = 1, // device pixel ratio
    width,
    height;

let stars = [];

let pointerX,
    pointerY;

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

   for( let i = 0; i < STAR_COUNT; i++ ) {
    stars.push({
      x: 0,
      y: 0,
      z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
    });
   }

}

function placeStar( star ) {

  star.x = Math.random() * width;
  star.y = Math.random() * height;

}

function recycleStar( star ) {

  let direction = 'z';

  let vx = Math.abs( velocity.x ),
	    vy = Math.abs( velocity.y );

  if( vx > 1 || vy > 1 ) {
    let axis;

    if( vx > vy ) {
      axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
    }
    else {
      axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
    }

    if( axis === 'h' ) {
      direction = velocity.x > 0 ? 'l' : 'r';
    }
    else {
      direction = velocity.y > 0 ? 't' : 'b';
    }
  }
  
  star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );

  if( direction === 'z' ) {
    star.z = 0.1;
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }
  else if( direction === 'l' ) {
    star.x = -OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  }
  else if( direction === 'r' ) {
    star.x = width + OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  }
  else if( direction === 't' ) {
    star.x = width * Math.random();
    star.y = -OVERFLOW_THRESHOLD;
  }
  else if( direction === 'b' ) {
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

  stars.forEach( placeStar );

}

function step() {

  context.clearRect( 0, 0, width, height );

  update();
  render();

  requestAnimationFrame( step );

}

function update() {

  velocity.tx *= 0.96;
  velocity.ty *= 0.96;

  velocity.x += ( velocity.tx - velocity.x ) * 0.2;
  velocity.y += ( velocity.ty - velocity.y ) * 0.2;

  stars.forEach( ( star ) => {

    star.x += velocity.x * star.z;
    star.y += velocity.y * star.z;

    star.x += ( star.x - width/2 ) * velocity.z * star.z;
    star.y += ( star.y - height/2 ) * velocity.z * star.z;
    star.z += velocity.z;
  
    // recycle when out of bounds
    if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
      recycleStar( star );
    }

  } );

}

function render() {

  stars.forEach( ( star ) => {

    context.beginPath();
    context.lineCap = 'round';
    context.lineWidth = STAR_SIZE * star.z * scale;
    context.globalAlpha = 0.5 + 0.5*Math.random();
    context.strokeStyle = STAR_COLOR;

    context.beginPath();
    context.moveTo( star.x, star.y );

    var tailX = velocity.x * 1,
        tailY = velocity.y * 1;

    // stroke() wont work on an invisible line
    if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
    if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;

    context.lineTo( star.x + tailX, star.y + tailY );

    context.stroke();

  } );

}

 
   function movePointer( x, y ) {
   
     if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {
   
       let ox = x - pointerX,
           oy = y - pointerY;
   
       // Зменшуємо множник (наприклад, замість 2*scale, використовуємо 10*scale)
       const slowdownFactor = 300; // Це значення визначає, наскільки сповільниться рух
       velocity.tx = velocity.tx + ( ox / slowdownFactor ) * ( touchInput ? 1 : -1 );
       velocity.ty = velocity.ty + ( oy / slowdownFactor ) * ( touchInput ? 1 : -1 );
   
     }
   
     pointerX = x;
     pointerY = y;
   }

function onMouseMove( event ) {

  touchInput = false;

  movePointer( event.clientX, event.clientY );

}

function onTouchMove( event ) {

  touchInput = true;

  movePointer( event.touches[0].clientX, event.touches[0].clientY, true );

  event.preventDefault();

}

function onMouseLeave() {

  pointerX = null;
  pointerY = null;

}


const button = document.querySelector('.premium-btn');
const titleSpan = document.querySelector('.home__title span');

button.addEventListener('mouseenter', () => {
  titleSpan.style.color = '#ffd52d';
});

button.addEventListener('mouseleave', () => {
  titleSpan.style.color = '#fff';  // Відновлення початкового кольору
});


document.querySelectorAll('a[data-scroll]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    const headerHeight = document.querySelector('.header').offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight, // Відступ на висоту header
      behavior: 'smooth'
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]"); // Отримуємо всі секції з ID
  const navLinks = document.querySelectorAll(".menu__item-link"); // Отримуємо всі посилання у меню
  const header = document.querySelector(".header"); // Отримуємо header
  const headerHeight = header ? header.offsetHeight : 0; // Висота хедера, перевіряємо на null

  function changeActiveLink() {
    let currentSection = null;
    let minDifference = Number.MAX_VALUE; // Мінімальна різниця від верху

    // Якщо на самому верху сторінки, завжди активний Hero
    if (window.scrollY === 0) {
      currentSection = "hero";
    } else {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
        const difference = Math.abs(window.scrollY - sectionTop); // Відстань від поточного положення

        if (window.scrollY >= sectionTop && difference < minDifference) {
          minDifference = difference;
          currentSection = section.getAttribute("id");
        }
      });
    }

    // Оновлюємо класи активного пункту меню
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href").substring(1) === currentSection);
    });
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink(); // Викликаємо одразу, щоб активний пункт оновився після завантаження сторінки
});


// gsap

document.addEventListener("DOMContentLoaded", function () {
  const homeContent = document.querySelector(".home__body");

  if (window.matchMedia("(min-width: 767px)").matches) {
    if (homeContent) {
      gsap.fromTo(homeContent, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
    }

    const homeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          gsap.to(homeContent, { opacity: 0, duration: 1.5, y: -50, ease: "power2.out" });
        } else {
          gsap.to(homeContent, { opacity: 1, duration: 1.5, y: 0, ease: "power2.out" });
        }
      });
    }, { threshold: 0.5 });

    if (homeContent) homeObserver.observe(homeContent);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target.querySelector(".about__body"), { opacity: 1, duration: 1, y: 0, ease: "power2.out" });
        } else {
          gsap.to(entry.target.querySelector(".about__body"), { opacity: 0, duration: 1, y: -50 });
        }
      });
    }, { threshold: 0.2 });

    const sectionAbout = document.querySelector("#about");
    if (sectionAbout) {
      observer.observe(sectionAbout);
      gsap.fromTo(sectionAbout.querySelector(".about__picture"), { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      gsap.fromTo(sectionAbout.querySelector(".about__content"), { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }
    const sectionProjects = document.querySelector("#projects");

    if (!sectionProjects) return;
  
    const projectsRow = sectionProjects.querySelector(".projects__row");
  
    if (!projectsRow) return;
  
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(projectsRow, { opacity: 1, y: 0, duration: 1.8, ease: "power2.out" });
        } else {
          gsap.to(projectsRow, { opacity: 0, y: -50, duration: 1.8 });
        }
      });
    }, { threshold: 0.5 });
  
    // Початково ховаємо секцію
    gsap.set(projectsRow, { opacity: 0, y: -50 });
  
    projectsObserver.observe(sectionProjects);
  }

  // Обробка прогрес-бару з урахуванням ширини екрану
  const skillsSection = document.querySelector(".skills");
  if (!skillsSection) return;

  const updateProgressBars = () => {
    document.querySelectorAll(".skills__column").forEach(column => {
      let progress = column.getAttribute("data-progress");

      if (window.matchMedia("(max-width: 767px)").matches) {
        // Для мобільних (без анімації)
        column.querySelector(".progress-bar").style.width = progress + "%";
      } else {
        // Для >= 767px з анімацією
        const skillsObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(column.querySelector(".progress-bar"), { width: progress + "%", duration: 2, ease: "power2.out" });
            } else {
              gsap.to(column.querySelector(".progress-bar"), { width: "0%", duration: 2, ease: "power2.in" });
            }
          });
        }, { threshold: 0.5 });

        skillsObserver.observe(skillsSection);
      }
    });


  };

  updateProgressBars(); // Викликаємо при завантаженні
  window.addEventListener("resize", updateProgressBars); // Обробляємо зміну розміру вікна
});

// Form submit

let contactForm = document.getElementById('contact-form');
let sendEmail = (e) => {
  e.preventDefault();
  
  // init emailjs
  emailjs.sendForm('service_m76nym2', 'template_a2895ez', '#contact-form', 'KI5CC2YsSzCCF6DZ2');
  contactForm.reset();
  displaySuccesMessage()

}

contactForm.addEventListener('submit', sendEmail);

// success function

function displaySuccesMessage() {
  toastr.options = {
    timeOut: 1500, // 1.5s
    positionClass: "toast-top-right" // зміна позиції
  };
  toastr.success("Your message has been successfully sent!");
}
