// Pode verificar quem é o pai do objeto utilizando o instanceof

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  latir() {
    console.log("Au au!");
  }
}

let pug = new Cachorro(4, "Pug");

console.log(new Cachorro() instanceof Mamifero);
console.log(coiote instanceof Mamifero);
console.log(pug instanceof Mamifero);
