// Não podemos adicionar propriedades na classe, só via prototype
// A classe só aceita métodos.

class CadastraCachorro {
  constructor(nome, idade, raca, cor, porte) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.cor = cor;
    this.porte = porte;
  }

  latir() {
    console.log("Au au!"); // Pode ser definido métodos caso necessite ser utilizado em uma nova instancia da classe.
  }
}

// Caso queiramos definir uma propriedade padrão do objeto, podemos adicionar via prototype
// Supondo que a propriedade "patas" estivesse como argumento, poderia ser removida e adicionada via prototype
// Reduzindo o número de argumentos da função.

CadastraCachorro.prototype.patas = 4;

let poodle = new CadastraCachorro("Lua", 1, "Poodle", "Preto", "Pequeno");

console.log(poodle);
console.log(poodle.patas);
poodle.latir();
