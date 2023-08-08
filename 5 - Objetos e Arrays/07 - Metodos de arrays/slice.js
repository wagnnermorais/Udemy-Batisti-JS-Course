// Retorna um novo array a partir de um array original.
// O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array;

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros.slice(4, 5)); // output: [4]

// O último parâmetro retorna um elemento antes, ou seja, para imprimir o valor dos elementos de índice 4 e 5
// precisaria ser adicionado um elemento a mais:

console.log(numeros.slice(4, 6)); // output: [4, 5]

// Caso um segundo parâmetro não seja informado, o retorno será do índice do primeiro parâmetro até o fim do array

console.log(numeros.slice(3)); // output: [3, 4, 5, 6, 7, 8, 9]
