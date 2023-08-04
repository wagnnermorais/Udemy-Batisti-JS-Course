// Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.

// A função deve calcular e retornar a soma de todos os números pares presentes no array.

// Utilize o operador de módulo (%) para determinar se um número é par.

// Considere que o array pode conter tanto números inteiros positivos quanto negativos.

function somarNumerosPares(numeros) {
  let soma = 0;

  for (let numero of numeros) {
    if (numero % 2 === 0) {
      soma += numero;
    }
  }
  return soma;
}

console.log(somarNumerosPares([1, 2, 3, 4, 5, 6]));
console.log(somarNumerosPares([-2, 10, 7, -6]));
console.log(somarNumerosPares([]));

// Explicação:

// let soma = 0;: Inicializamos uma variável chamada soma para armazenar a soma dos números pares.

// for (let numero of numeros) { ... }: Percorremos cada número do array numeros.

// if (numero % 2 === 0) { ... }: Verificamos se o número atual é par, usando o operador de módulo %. Se o resto da divisão por 2 for igual a 0, isso significa que o número é par.

// soma += numero;: Se o número for par, adicionamos seu valor à variável soma.

// return soma;: Retornamos a soma total dos números pares encontrados no array.
