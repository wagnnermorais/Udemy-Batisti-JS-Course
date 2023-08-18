// Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.

// A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.

function removeDuplicates(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (uniqueArray.indexOf(element) === -1) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

const elementos = [1, 2, 3, 2, 4, 5, 4, 6];
const arraySemDuplos = removeDuplicates(elementos);
console.log(arraySemDuplos);
