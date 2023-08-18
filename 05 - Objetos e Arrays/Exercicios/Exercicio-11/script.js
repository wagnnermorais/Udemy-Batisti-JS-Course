// Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.
// A função deve retornar o maior número presente no array.

function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    throw new Error("O array está vazio.");
  }

  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}

// Exemplo de uso:
const arrayDeNumeros = [10, 5, 23, 8, 45, 17];
const maiorNumero = findMaxNumber(arrayDeNumeros);
console.log("O maior número é:", maiorNumero); // Saída: O maior número é: 45

// A função findMaxNumber itera pelo array de números e compara cada número com o valor máximo atual. Se encontrar um número maior, atualiza o valor máximo. No final, retorna o maior número encontrado. Certifique-se de passar um array válido como argumento para a função.
