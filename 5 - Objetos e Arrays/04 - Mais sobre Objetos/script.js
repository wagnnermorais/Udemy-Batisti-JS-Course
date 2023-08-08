let carro = {
  portas: 2,
  motor: 2.0,
};

let adicionais = {
  ac: true,
  borboletas: true,
};

console.log(carro);

Object.assign(carro, adicionais); // copia as propriedades de um objeto para outro.

console.log(carro);

let objetoA = {
  prop1: "teste",
  prop2: "testando",
};

console.log(Object.keys(objetoA)); // imprime somente as propriedades de um objeto.
