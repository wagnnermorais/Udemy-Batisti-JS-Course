// Escreva uma função chamada countVowels que recebe uma string como argumento.

// A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).

// A função deve retornar o total de vogais encontradas.

function countVogais(string) {
  const vogais = "aeiouAEIOU";
  let count = 0;

  for (let caractere of string) {
    if (vogais.includes(caractere)) {
      count++;
    }
  }

  return count;
}

console.log(countVogais("Hello World")); // Saída: 3 (o, o, o)
console.log(countVogais("Programming")); // Saída: 3 (o, a, i)
console.log(countVogais("JavaScript")); // Saída: 4 (a, i, a, i)

// Explicação:

// const vowels = "aeiouAEIOU": Definimos uma string que contém todas as vogais, tanto em letras minúsculas quanto em letras maiúsculas.

// let count = 0: Inicializamos uma variável chamada count para armazenar o total de vogais encontradas na string.

// for (let char of str) { ... }: Percorremos cada caractere da string str.

// if (vowels.includes(char)) { ... }: Verificamos se o caractere atual está presente na string vowels (ou seja, se é uma vogal). Se sim, incrementamos o contador count.

// return count: Retornamos o total de vogais encontradas na string.
