// Podemos criar erros no programa, caso alguma condição não seja atendida.
// Porém as exceptions abortam o programa, só geram o erro.

let a = 1;

if (a != 2) {
  throw new Error("O valor de a não pode ser 1");
}

function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("O parâmetro nome precisa ser string.");
  } else {
    console.log(`Bem-vindo, ${nome}`);
  }
}

saudacao("Wagner");
saudacao(1);

console.log(
  "Esse console não será exibido caso aconteça algum erro, pois o Exception aborta o programa, ou seja, não chega até esse ponto."
);
