// Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no Prototype.
// Podemos substituir a do Prototype.

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

let poodle = new Cachorro("Poodle");

Cachorro.prototype.raca = "SRD"; // Atribui um valor default com Prototype caso a classe seja instanciada sem definir um valor para a proriedade específica

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);
