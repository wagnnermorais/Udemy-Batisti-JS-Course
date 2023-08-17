// As promises são ações assíncronas que podem produzir um valor em algum momento no código.
// Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código.
// O objeto das promises é o Promise, resolve() é o método que resolve uma promise, o then() é o que faz ela poder ser executada em um ponto futuro.

let promessa = Promise.resolve(4 + 8);

promessa
  .then((value) => {
    console.log(value);
    return value + 8;
  })
  .then((value) => {
    console.log(`Agora, o valor é: ${value}`);
  });
