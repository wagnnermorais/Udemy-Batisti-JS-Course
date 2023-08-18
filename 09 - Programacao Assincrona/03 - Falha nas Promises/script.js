// Uma Promsie pode falhar, podemos reter esse erro com um método chamado catch
// Com ele, podemos exibir o erro no console e fazer o debug no código.

let promiseErrada = Promise.resolve(new Error("Algo deu errado!"));

promiseErrada
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(`Erro: ${reason}`);
  });
