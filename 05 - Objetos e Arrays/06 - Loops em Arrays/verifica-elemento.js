// verificar cada elemento dentro de um array

let numeros = [1, 2, 5, 7, 123, 312, 5, 32, 11, 124, 4, 77, 8];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("*******************************");

let i = numeros.length - 1;

while (i >= 0) {
  console.log(numeros[i]);
  i--;
}
