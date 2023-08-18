// Generators funcionam semelhantes as Promises onde ações podem ser pausadas e continuadas depois.
// Caracterizados pelo function* e yield.
// O yield podesalvar o estado da variável.

function* genTest() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

let criarId = genTest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
