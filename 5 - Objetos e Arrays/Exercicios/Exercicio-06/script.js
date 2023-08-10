// Crie dois arrays, um com mais de 5 elementos e outro com menos
// Faça uma função que verifica o número de elementos
// Se possuir menos que 5, imprima "Poucos elementos" no console
// Se tiver mais, imprima "Muitos Elementos"

let nomes = ["Wagner", "Vitor", "Arthur"];
let numeros = [12, 34, 32, 2, 5, 6, 7];

function lengthAnalysis(arr) {
  let el = arr.length;
  if (el < 5) {
    console.log("Poucos Elementos");
  } else {
    console.log("Muitos Elementos");
  }
}

lengthAnalysis(nomes);
lengthAnalysis(numeros);
