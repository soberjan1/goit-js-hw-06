const inputEl = document.querySelector("#font-size-control");
const txt = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  text.style.fontSize = inputEl.value + `px`;
});
