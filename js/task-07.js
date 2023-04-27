const docs = {
  inputEl: document.querySelector("#font-size-control"),
  txt: document.querySelector("#text"),
};

docs.txt.style.fontSize = `${docs.inputEl.value}px`;

docs.inputEl.addEventListener("input", () => {
  docs.txt.style.fontSize = `${docs.inputEl.value}px`;
});
