const liEl = document.querySelectorAll(".item");
console.log("Number of categories:", liEl.length);

const headerEl = liEl.forEach((item) => {
  console.log("Category:" + item.firstElementChild.textContent);
  console.log("Elements:" + item.lastElementChild.children.length);
});
