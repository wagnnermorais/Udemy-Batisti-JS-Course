let input = document.querySelector("#input");

input.addEventListener("focus", () => {
  console.log("Foco no input.");
});

input.addEventListener("blur", () => {
  console.log("Perdeu o foco.");
});
