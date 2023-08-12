// Propriedades únicas que não podem ser alteradas e nem criadas duas vezes.
// Pode ser utilizada como uma constante, só que para propriedade de objeto.

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let pug = new Cachorro("Pug");

// acessando o symbol

console.log(Cachorro.prototype[patas]);
