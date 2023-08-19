let lista = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  let item = document.createElement("li");
  let texto = document.createTextNode(`${i + 1}º item da lista.`);
  item.appendChild(texto);
  lista.appendChild(item);
}

let container = document.getElementById("container");
container.appendChild(lista);
