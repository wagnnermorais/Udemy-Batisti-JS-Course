// Crie um array a partir de uma frase;
// Imprima cada palavra do array no console por meio de um for

let frase = "Tonight's the night!";

let arrayDaFrase = frase.split(" ");

for (let i = 0; i < arrayDaFrase.length; i++) {
  console.log(arrayDaFrase[i]);
}
