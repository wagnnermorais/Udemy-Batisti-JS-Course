// Crie um objeto calculadora que tem os seguintes métodos:
// Soma, subtrai, multiplica e divide
// Os métodos só devem aceitar dois parâmetros
// Utilize cada um dos métodos e imprima os valores no console

let calculadora = {
  soma: (a, b) => {
    return a + b;
  },
  subtrai: (a, b) => {
    return a - b;
  },
  multiplica: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

console.log(calculadora.soma(5, 5));
console.log(calculadora.subtrai(20, 10));
console.log(calculadora.multiplica(5, 2));
console.log(calculadora.divide(50, 5));
