// O prototype do JS pode ser chamado de Classe, pois nas outras linguagens, uma class é um molde de um objeto
// Ou seja, podemos criar diversos objetos em cima de um prototype

let cachorro = {
  patas: 4,
  raca: "SRD", // sem raça definida
  latir: () => {
    console.log("Au au!");
  },
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";
console.log(labrador);

console.log(cachorro);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor);
