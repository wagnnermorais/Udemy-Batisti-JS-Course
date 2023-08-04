// escreva uma função que recebe a idade de uma pessoa;
// se ela tem 18 anos ou mais ela pode entrar na auto escola, imprima uma mensagem informando isso
// se ela tem menos, não pode, imprima outra mensagem com este aviso
// execute a função nos dois casos

function podeTirarCnh(idade) {
  return idade >= 18
    ? "Pode entrar para auto-escola"
    : "Não pode entrar ainda pois é menor de idade";
}

console.log(podeTirarCnh(18));
console.log(podeTirarCnh(31));
console.log(podeTirarCnh(17));
console.log(podeTirarCnh(12));
