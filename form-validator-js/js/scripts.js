// Custom Scripts
/**
 * FormValidator — reusable form validation class with IMask phone support.
 * Usage: new FormValidator("form-id")
 */
class FormValidator {
  // Allowed characters for name fields (uk/en), min 2 chars
  #nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2,}([ '-][A-Za-zА-Яа-яІіЇїЄєҐґ]{2,})*$/;
  // Standard email format, ASCII only, min 3 chars before @
  #emailRegex =
    /^[a-zA-Z0-9._%+\-=!#$&'*/^`{|}~]{3,}@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) return;

    this.fields = this.#buildFields();
    this.mask = this.#initPhoneMask();
    this.#bindEvents();
  }

  // Define fields with their elements and validation rules
  #buildFields() {
    const form = this.form;

    return {
      firstName: {
        el: form.querySelector('[name="firstName"]'),
        errorEl: form.querySelector('[id$="firstName-error"]'),
        validate: (v) => {
          if (!v) return "Обов'язкове поле";
          if (v.length < 2) return "Мінімум 2 літери";
          if (!this.#nameRegex.test(v)) return "Тільки літери (укр/англ)";
          return "";
        },
      },
      lastName: {
        el: form.querySelector('[name="lastName"]'),
        errorEl: form.querySelector('[id$="lastName-error"]'),
        validate: (v) => {
          if (!v) return "Обов'язкове поле";
          if (!this.#nameRegex.test(v)) return "Тільки літери (укр/англ)";
          return "";
        },
      },
      email: {
        el: form.querySelector('[name="email"]'),
        errorEl: form.querySelector('[id$="email-error"]'),
        validate: (v) => {
          if (!v) return "Обов'язкове поле";
          if (!this.#emailRegex.test(v)) return "Некоректний email";
          return "";
        },
      },
    };
  }

  // Initialize IMask on phone input (UA format)
  #initPhoneMask() {
    const phoneEl = this.form.querySelector(".phone__input");
    if (!phoneEl || typeof IMask === "undefined") return null;
    return IMask(phoneEl, { mask: "+{38}(000) 000-00-00" });
  }

  // Validate a single field and update its UI state
  #validateField(field) {
    const value = field.el.value.trim();
    const error = field.validate(value);

    field.errorEl.textContent = error;
    field.el.classList.toggle("invalid", !!error);
    field.el.classList.toggle("valid", !error);
    field.el.setAttribute("aria-invalid", String(!!error));

    return !error;
  }

  // Validate phone via IMask completion check

  #validatePhone() {
    const phoneEl = this.form.querySelector(".phone__input");
    const errorEl = this.form.querySelector('[id$="phone-error"]');
    if (!phoneEl || !errorEl) return true;

    let isValid;

    if (this.mask) {
      isValid = this.mask.masked.isComplete;
    } else {
      const value = phoneEl.value.trim();
      isValid = value.length >= 10; // fallback
    }

    errorEl.textContent = isValid ? "" : "Введіть повний номер";
    phoneEl.classList.toggle("invalid", !isValid);
    phoneEl.classList.toggle("valid", isValid);

    return isValid;
  }

  // Bind blur/input events to all fields and handle form submit
  #bindEvents() {
    Object.values(this.fields).forEach((field) => {
      field.el?.addEventListener("blur", () => this.#validateField(field));
      field.el?.addEventListener("input", () => {
        field.errorEl.textContent = "";
        field.el.classList.remove("invalid");
      });
    });

    const phoneEl = this.form.querySelector(".phone__input");
    phoneEl?.addEventListener("blur", () => this.#validatePhone());
    phoneEl?.addEventListener("input", () => this.#validatePhone());

    this.form.addEventListener("submit", (e) => {
      console.log("SUBMIT intercepted");
      e.preventDefault();
      this.submit();
    });
  }

  // Clear field value and reset its visual state
  #resetField(field) {
    field.el.value = "";
    field.el.classList.remove("valid", "invalid");
    field.el.removeAttribute("aria-invalid");
    field.errorEl.textContent = "";
  }

  // Reset phone input via IMask setter and clear its visual state
  #resetPhone() {
    const phoneEl = this.form.querySelector(".phone__input");
    const errorEl = this.form.querySelector('[id$="phone-error"]');
    if (!phoneEl || !errorEl) return;

    if (this.mask) this.mask.value = "";
    phoneEl.classList.remove("valid", "invalid");
    errorEl.textContent = "";
  }

  // Reset all fields and phone to initial state
  #resetForm() {
    Object.values(this.fields).forEach((f) => this.#resetField(f));
    this.#resetPhone();
  }

  // Run full validation; reset on success, focus first error on failure
  submit() {
    const fieldsValid = Object.values(this.fields).every((f) =>
      this.#validateField(f),
    );
    const phoneValid = this.#validatePhone();

    if (fieldsValid && phoneValid) {
      const formData = new FormData(this.form);

      console.log(Object.fromEntries(formData));
      this.#resetForm();
    } else {
      this.form.querySelector(".invalid")?.focus();
    }
  }
}

// Initialize validators — add more form IDs as needed
document.addEventListener("DOMContentLoaded", () => {
  new FormValidator("form");
  // new FormValidator("contact-form");
  // new FormValidator("footer-form");
});


