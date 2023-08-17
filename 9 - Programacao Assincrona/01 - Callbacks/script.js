// Uma das vertentes da programação assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks.
// Callback é uma função que faz uma ação após algum acontecimento no código.
// Podemos realizar um callback com a função setTimeout.

console.log("Ainda não invocou o callback.");

setTimeout(() => {
  console.log("Invocou o callback!");
}, 2000);

console.log("Callback será invocado no próximo retorno.");
