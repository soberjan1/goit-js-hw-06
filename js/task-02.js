const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const repetaVozmiNaRobotuEl = document.querySelector("ul");

const newLi = [];

ingredients.forEach((item) => {
  const lishkaEl = document.createElement("li");
  lishkaEl.classList.add("item");
  lishkaEl.textContent = item;
  console.log(item);
  newLi.push(lishkaEl);
});
repetaVozmiNaRobotuEl.append(...newLi);
