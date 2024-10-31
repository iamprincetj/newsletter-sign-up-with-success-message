const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const input = document.querySelector("#email");
const error = document.querySelector(".error");
const mainContainer = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const thanksContainer = document.querySelector(
  ".secondary-main-container .thanks-container"
);
const confirmEmail = document.querySelector(".confirm-email");
const form = document.querySelector("form");

const tomatoColor = "var(--Tomato)";

input.addEventListener("change", (e) => {
  e.preventDefault();
  if (input.validity.typeMismatch) {
    error.innerHTML = "Valid email required";
    input.style.borderColor = "var(--Tomato)";
    input.style.color = "var(--Tomato)";
    input.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
  } else if (input.validity.valueMissing) {
    error.innerHTML = "This field is required";
    input.style.borderColor = "var(--Tomato)";
    input.style.color = "var(--Tomato)";
    input.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
  } else {
    error.innerHTML = "";
    input.style.borderColor = "";
    input.style.color = "";
    input.style.backgroundColor = "";
  }
});

const handleSubmit = (e) => {
  e.preventDefault();
  if (input.validity.valueMissing) {
    error.innerHTML = "This field is required";
    input.style.borderColor = "var(--Tomato)";
    input.style.color = "var(--Tomato)";
    input.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
  } else if (!input.validity.valueMissing && !input.validity.typeMismatch) {
    formContainer.style.display = "none";
    thanksContainer.style.display = "block";
    confirmEmail.textContent = input.value;
  }
};

submitBtn.addEventListener("click", handleSubmit);
form.addEventListener("submit", handleSubmit);

dismissBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
  thanksContainer.style.display = "none";
  input.value = "";
});
