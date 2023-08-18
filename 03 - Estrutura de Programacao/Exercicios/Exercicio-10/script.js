// Verifique se o número é primo
// Um número primo é um número natural maior que 1 e apenas divísivel por si próprio e por 1;

let numero = 312321321;
let numeroDeDivisoes = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    numeroDeDivisoes++;
  }
}

if (numeroDeDivisoes == 2) {
  console.log(`O número ${numero} é primo!`);
} else {
  console.log(`O número ${numero} não é primo!`);
}
