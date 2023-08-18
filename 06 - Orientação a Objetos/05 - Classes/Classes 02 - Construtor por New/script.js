// Em muitas linguagens temos a possibilidade de instanciar um objeto com a palavra reservada "new", no JS também.

function CadastraCachorro(nome, idade, raca, cor, porte) {
  this.nome = nome;
  this.idade = idade;
  this.raca = raca;
  this.cor = cor;
  this.porte = porte;
}

let pug = new CadastraCachorro("Thor", 0.2, "Pug", "Branco", "Medio");

console.log(pug);
