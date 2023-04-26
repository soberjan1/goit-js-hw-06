const btnEl = document.querySelector(".change-color");
const spnEl = document.querySelector(".color");
const bodyEl = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spnEl.textContent = getRandomHexColor();
});
