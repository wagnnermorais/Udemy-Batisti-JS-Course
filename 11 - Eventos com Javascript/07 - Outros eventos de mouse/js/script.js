let button = document.querySelector("#add-event");

button.addEventListener("mousedown", () => {
  console.log("Apertou o botão.");
});

button.addEventListener("mouseup", () => {
  console.log("Soltou o botão.");
});

button.addEventListener("dblclick", () => {
  console.log("Clicou duas vezes.");
});

// Usando o botão direito do mouse

button.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log("Clicou com o botão direito.");
});
