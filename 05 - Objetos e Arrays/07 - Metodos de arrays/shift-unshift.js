// shift() : remove o PRIMEIRO elemento de um array
// unshift() : adiciona um ou mais elementos no incio de um array.

let frutas = ["Maçã", "Melão", "Uva"];

let frutaRemovida = frutas.shift();

console.log(frutaRemovida);
console.log(frutas);

frutas.unshift("Banana");
console.log(frutas);
