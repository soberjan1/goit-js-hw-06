const decrementBtn = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');

let totalVal = 0;

decrementBtn.addEventListener("click", () => {
  totalVal -= 1;
  counterValue.textContent = totalVal;
});

incrementBtn.addEventListener("click", () => {
  totalVal += 1;
  counterValue.textContent = totalVal;
});
