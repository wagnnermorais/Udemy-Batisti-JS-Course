// se a arrow function só tem um parâmetro, pode ser removido os parênteses do argumento e o return, podendo ser feita até em uma linha.

const multiplicaPorDois = (x) => {
  return x * 2;
};

const multiplica = (x) => x * 2;

console.log(multiplicaPorDois(4));
console.log(multiplica(4));
