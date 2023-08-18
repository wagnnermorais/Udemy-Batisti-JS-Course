// Escreva uma função chamada reverseString que recebe uma string como argumento.
// A função deve inverter a ordem dos caracteres na string.
// A função deve retornar a string invertida.

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("Kiwi"));
console.log(reverseString("Mãe"));
console.log(reverseString("Sport Club Internacional"));

// Explicação do código:

// split(''): Converte a string em um array, onde cada caractere da string se torna um elemento do array.

// reverse(): Inverte a ordem dos elementos no array.

// join(''): Junta os elementos do array em uma string novamente, formando a string invertida.
