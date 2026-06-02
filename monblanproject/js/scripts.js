// Custom Scripts
// flatpickr
document.querySelectorAll(".js-datepicker").forEach((input) => {
  const picker = flatpickr(input, {
    dateFormat: "d.m.Y",
  });

  const field = input.closest(".header__field");

  field.querySelector(".header__calendar").addEventListener("click", () => {
    picker.open();
  });

  field.querySelector(".header__clear").addEventListener("click", () => {
    input.value = "";
  });
});

// load more
const items = document.querySelectorAll(".gallery__item");
const loadMoreBtn = document.querySelector(".gallery__load");

let visibleCount = 9;

function updateGalleryView(view) {
  visibleCount = view === "tiles" ? 8 : 9;

  items.forEach((item, index) => {
    item.style.display = index < visibleCount ? "" : "none";
  });

  loadMoreBtn.style.display = items.length > visibleCount ? "block" : "none";
}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 4;

  items.forEach((item, index) => {
    item.style.display = index < visibleCount ? "" : "none";
  });

  if (visibleCount >= items.length) {
    loadMoreBtn.style.display = "none";
  }
});

// gallery

const buttons = document.querySelectorAll(".gallery__btn");
const gallery = document.querySelector(".gallery__list");

const savedView = localStorage.getItem("galleryView") || "rows";

updateGalleryView(savedView);

gallery.classList.remove("gallery__list--rows", "gallery__list--tiles");
gallery.classList.add(`gallery__list--${savedView}`);

buttons.forEach((btn) => {
  btn.classList.toggle("gallery__btn--active", btn.dataset.view === savedView);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;

    buttons.forEach((btn) => btn.classList.remove("gallery__btn--active"));

    button.classList.add("gallery__btn--active");

    gallery.classList.remove("gallery__list--rows", "gallery__list--tiles");

    gallery.classList.add(`gallery__list--${view}`);

    updateGalleryView(view);

    localStorage.setItem("galleryView", view);
  });
});


