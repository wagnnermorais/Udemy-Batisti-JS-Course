let pessoa = {
  nome: "Wagner",
};

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "Pedro";
console.log(pessoa.nome); // mudando o nome de outro objeto, ira mudar tb no objeto original pois é uma referencia e alocam o mesmo espaço de memória

pessoa.nome = "Maria";
console.log(pessoa2.nome);
