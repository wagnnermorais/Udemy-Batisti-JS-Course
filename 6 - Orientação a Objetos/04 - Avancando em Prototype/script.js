// Quando criamos um objeto a partir de um outro, a base será o prototype
// Ele herdará tanto os métodos e propriedades do Object (prototyp do obj base)
// Quanto os do objeto base para este novo.

let pessoa = {
  maos: 2,
};

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
