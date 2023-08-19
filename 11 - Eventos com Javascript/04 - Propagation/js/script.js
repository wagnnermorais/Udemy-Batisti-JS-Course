let count = document.querySelector("#count");
let incremento = document.querySelector("#add-event");
let removeIncremento = document.querySelector("#remove-event");
let p = document.querySelector("#paragraph");
let reset = document.querySelector("#reset");

function incrementa(event) {
  count.innerHTML++;
  event.stopPropagation();
  console.log("Incrementando pelo button.");
}

incremento.addEventListener("click", incrementa);

removeIncremento.addEventListener("click", () => {
  alert("A contagem não será mais processada.");
  incremento.removeEventListener("click", incrementa);
  count.innerHTML = 0;
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
});

p.addEventListener("click", () => {
  count.innerHTML++;
  console.log("Incrementando pelo parágrafo");
});
