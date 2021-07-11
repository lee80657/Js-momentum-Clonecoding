const greetingsScreen = document.querySelector(".greetings-screen");
const mainScreen = document.querySelector(".main-screen");
const nameForm = greetingsScreen.querySelector("form");
const nameInput = nameForm.querySelector("input");
const HIDDEN_CLASSNAME = "hidden";
const savedName = localStorage.getItem("name");
const sayHello = mainScreen.querySelector(".hello");

if (savedName === null) {
  greetingsScreen.classList.remove(HIDDEN_CLASSNAME);
} else {
  mainScreen.classList.remove(HIDDEN_CLASSNAME);
  sayHello.innerText = `Hello, ${savedName}`;
}

function doNameSubmit() {
  const name = nameInput.value;
  localStorage.setItem("name", name);
  name.innerText = "";
}

nameForm.addEventListener("submit", doNameSubmit);
