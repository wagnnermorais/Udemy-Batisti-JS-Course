// um argumento pode ter o seu valor pré-determinado caso o usuário não informe um valor para o argumento específico.

function repetirFrase(frase, n = 2) {
  for (let x = 1; x <= n; x++) {
    console.log(frase + " " + x);
  }
}

repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");
