// Com o método all(), podemos resolver várias promessas de uma vez só.
// Ou seja, passamos elas por array e quando a última for resolvida, receberemos a resposta.

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 2500);
});

const p2 = Promise.resolve(5);

const p3 = new Promise((resolve) => {
  resolve(10);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

// Como há um setTimeout na primeira Promise, o programa leva o tempo especificado para rodar.
