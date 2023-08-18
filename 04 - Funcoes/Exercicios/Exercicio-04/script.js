// Escreva uma função que retorne um número aleatório
// O número máximo retornado deve ser passado via parâmetro

const exibeNumeroAleatorio = (valorMaximo) => {
  return Math.round(Math.random() * valorMaximo);
};

console.log(exibeNumeroAleatorio(500));
console.log(exibeNumeroAleatorio(231321));
console.log(exibeNumeroAleatorio(321321412421321));
