// Construtores são formas de instanciar uma classa em uma linguagem de programação.
// Instanciar significa criar um objeto novo
// No construtor, já podemos definir propriedades.

function registrarCachorro(raca, cor, porte) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.cor = cor;
  cachorro.porte = porte;
  return cachorro;
}

let pinscher = registrarCachorro("Pinscher", "Laranja", "Médio");

console.log(pinscher);
