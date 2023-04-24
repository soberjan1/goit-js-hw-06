const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameEl.textContent = "Anonymous";
  }
  return (nameEl.textContent = event.currentTarget.value);
}
