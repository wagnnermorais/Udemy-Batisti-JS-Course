// escreva uma função que receba dois números, o primeiro é a base e o segundo a potência
// depois faça essa operação e retorne o resultado;

function potencia(base, potencia) {
  return Math.pow(base, potencia);
  // pode ser usado tb a opção:
  // return base ** potencia
}

console.log(potencia(3, 3));
console.log(potencia(5, 3));
console.log(potencia(10, 3));
