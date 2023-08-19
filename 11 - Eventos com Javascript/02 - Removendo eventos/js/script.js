let count = document.querySelector("#count");
let incremento = document.querySelector("#add-event");
let removeIncremento = document.querySelector("#remove-event");

function incrementa() {
  count.innerHTML++;
}

incremento.addEventListener("click", incrementa);

removeIncremento.addEventListener("click", () => {
  alert("A contagem não será mais processada.");
  incremento.removeEventListener("click", incrementa);
  count.innerHTML = 0;
});
