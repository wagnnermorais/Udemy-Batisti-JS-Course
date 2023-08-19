let novoElemento = document.createElement("p");
let texto = document.createTextNode("O título foi substituido pelo parágrafo!");
novoElemento.appendChild(texto);

let title = document.querySelector(".titulo");
let parent = title.parentNode;

parent.replaceChild(novoElemento, title);
