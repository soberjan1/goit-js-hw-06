const submitEl = document.querySelector(".login-form");

submitEl.addEventListener("submit", onLoginVal);

function onLoginVal(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  } else {
    const fullForm = {
      email: email.value,
      password: password.value,
    };
    console.log(fullForm);
    event.currentTarget.reset();
  }
}
