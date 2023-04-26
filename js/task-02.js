const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const repetaVozmiNaRobotuEl = document.querySelector("ul");

ingredients.forEach((item) => {
  const lishkaEl = document.createElement("li");
  lishkaEl.classList.add("item");
  lishkaEl.textContent = item;
  repetaVozmiNaRobotuEl.append(lishkaEl);
  console.log(item);
});
