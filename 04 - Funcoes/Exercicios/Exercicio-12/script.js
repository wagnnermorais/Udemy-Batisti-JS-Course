// Escreva uma função chamada calculateAverage que recebe um array de números como argumento. A função deve calcular a média dos números no array.

// A média é calculada somando todos os números e dividindo pelo total de números no array.

// A função deve retornar o valor da média calculada.

function calcularMedia(numeros) {
  if (numeros.length === 0) {
    return 0;
  }

  const total = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  const media = total / numeros.length;
  return media;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(calcularMedia([10, 20, 30]));
console.log(calcularMedia([]));

// Explicação:

// if (numeros.length === 0): Verificamos se o array numeros está vazio. Se estiver vazio, retornamos 0 como média.

// numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual): Usamos o método reduce para somar todos os números no array. O reduce itera por todos os elementos do array e acumula a soma em acumulador.

// const media = total / numeros.length: Calculamos a média dividindo a soma total pelo número de elementos no array (comprimento do array).

// return media: Retornamos o valor da média calculada.
