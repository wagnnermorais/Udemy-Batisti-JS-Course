// Além de propriedades, podemos criar a classe base já com métodos
// Basta definir ao prototype o método desejado

function CadastraCachorro(nome, idade, raca, cor, porte) {
  this.nome = nome;
  this.idade = idade;
  this.raca = raca;
  this.cor = cor;
  this.porte = porte;
}

CadastraCachorro.prototype.latir = () => {
  console.log("Au au!");
};

let pug = new CadastraCachorro("Thor", 0.2, "Pug", "Branco", "Medio");

console.log(pug);
pug.latir();
