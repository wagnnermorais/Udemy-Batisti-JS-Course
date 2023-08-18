// Com a versão do ES6, uma possibilidade de criar uma classe (objeto) com construtor foi adicionada.
// Então não precisamos mais criar por meio de uma function.

class CadastraCachorro {
  constructor(nome, idade, raca, cor, porte) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.cor = cor;
    this.porte = porte;
  }
}

let poodle = new CadastraCachorro("Lua", 1, "Poodle", "Preto", "Pequeno");

console.log(poodle);
