// escreva uma função que recebe uma string, se o texto conter mais de 10 caracteres imprima "texto mt longo"
// se conter menos, escreva "texto dentro do limite"

function limitaTexto(texto) {
  if (texto.length > 10) return console.log("Texto muito longo!");
  return console.log("Texto dentro do limite!");
}

limitaTexto("Esse texto terá mais de 10 caracteres propositalmente!");
limitaTexto("Esse não.");
