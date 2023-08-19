let novoElemento = document.createElement("p");

// prettier-ignore
let texto = document.createTextNode("Tonight's the night, and it's going to happen again and again.");
novoElemento.appendChild(texto);

const paragrafo = document.querySelector("#paragrafo-box");
const pai = paragrafo.parentNode; // parentNode retorna o pai do elemento criado.

pai.appendChild(novoElemento);
