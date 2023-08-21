window.addEventListener("keydown", (event) => {
  if (event.key == "q") {
    console.log("Apertou a letra Q.");
  } else if (event.key == "Enter") {
    console.log("Apertou Enter!");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log("Soltou o enter!");
  }
});
