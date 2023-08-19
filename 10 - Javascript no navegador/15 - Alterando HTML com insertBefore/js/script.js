let novoElemento = document.createElement("p");
let elementoAlvo = document.querySelector("#titulo");
let elementoPai = document.querySelector(".container");
// prettier-ignore
let texto = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, quod!";
novoElemento.appendChild(texto);

elementoPai.insertBefore(novoElemento, elementoAlvo);
