// Uma forma de uma função receber indefinidos parâmetros
// O operador rest vai virar um array
// O parâmetro é definido por: ...nome

let a = 1;
let b = 2;
let c = 3;
let d = 4;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros([a, b, c, d]);
imprimirNumeros([c, d]);
imprimirNumeros([2, 4, 32, 34123, 321321, 3212, 32323, 32]);
