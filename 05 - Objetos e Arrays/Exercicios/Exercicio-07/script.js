// Crie um array com 5 elementos e faça uma iteração entre todos eles e imprima no console o valor

let numeros = [1, 5, 4, 3, 7, 4, 22];

// Com forEach

numeros.forEach((numero) => {
  console.log(`O número é: ${numero}`);
});

console.log(
  "\nFim de iteração com forEach \n-----------------------------\nInicio de iteração com laço for\n"
);

// Com for
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
