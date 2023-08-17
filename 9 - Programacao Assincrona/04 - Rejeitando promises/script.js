// Além do resolve, há o metodo reject.
// Que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com o reject, em vez de resolve().
// Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then, por exemplo.

function verificaAlgo(numero) {
  return new Promise((resolve, reject) => {
    if (numero == 2) {
      resolve(console.log("O número é 2."));
    } else {
      reject(new Error("Número precisa ser 2!"));
    }
  });
}

verificaAlgo(2);
verificaAlgo(3);
