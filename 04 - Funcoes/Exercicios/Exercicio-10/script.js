// escreva uma função que recebe um número e o decrementa de 1 em 1 com um loop
// além disso, imprima somente os números pares no console

const systemOfAdownPrisonSong = (numero) => {
  for (let i = numero; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(`O número atual é: ${i}`);
    }
  }
};

systemOfAdownPrisonSong(13);
