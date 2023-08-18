// Escreva uma função chamada isPalindrome que recebe uma palavra como argumento. A função deve verificar se a palavra é um palíndromo.

// Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.

// A função deve retornar true se a palavra for um palíndromo e false caso contrário.

function isPalindrome(word) {
  // Remove espaços e transforma tudo em letras minúsculas
  word = word.replace(/\s/g, "").toLowerCase();

  // Compara a palavra original com sua versão invertida
  return word === word.split("").reverse().join("");
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("deified"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Subi no onibus"));

// Explicação do código:

// word.replace(/\s/g, '').toLowerCase(): Essa linha remove todos os espaços da palavra e transforma todas as letras em minúsculas. Isso garante que a função seja case-insensitive (ou seja, não diferencia entre letras maiúsculas e minúsculas) e que espaços não interferirão na comparação.

// word.split('').reverse().join(''): Essa linha divide a palavra em um array de caracteres, inverte a ordem do array e, em seguida, junta os caracteres novamente em uma string invertida.

// return word === ...: A função compara a palavra original com a sua versão invertida. Se ambas forem iguais, a palavra é um palíndromo e a função retorna true. Caso contrário, a função retorna false.
