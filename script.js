const form = document.querySelector("#quote-form");
const fields = document.querySelector("#form-fields");
const success = document.querySelector("#form-success");
const resetButton = document.querySelector("#reset-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fields.hidden = true;
  success.hidden = false;
});

resetButton.addEventListener("click", () => {
  form.reset();
  success.hidden = true;
  fields.hidden = false;
  form.querySelector("input").focus();
});
