// Nas async functions, podemos determinar uma instrução await que vai esperar uma promise ser resolvida, para apresentar os resultados

function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

async function soma(a, b, c) {
  let x = somaComDelay(a, b);
  let y = c;
  // prettier-ignore
  return await x + y;
}

soma(2, 4, 6).then((value) => console.log(value));
