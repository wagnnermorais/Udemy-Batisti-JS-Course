// Crie uma classe chamada "Retangulo" que representa um retângulo.
// A classe deve ter os seguintes atributos:
// largura: representando a largura do retângulo (número maior que zero).
// altura: representando a altura do retângulo (número maior que zero).
// A classe deve ter os seguintes métodos:
// calcularArea(): retorna a área do retângulo (largura * altura).
// calcularPerimetro(): retorna o perímetro do retângulo (2 * (largura + altura)).

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    // prettier-ignore
    if (this.largura <= 0 || this.altura <= 0) return console.log("Ambas medidas precisam ser maior que 0!");
    console.log(this.largura * this.altura);
  }

  calcularPerimetro() {
    // prettier-ignore
    if (this.largura <= 0 || this.altura <= 0) return console.log("Ambas medidas precisam ser maior que 0!");
    console.log(2 * (this.largura + this.altura));
  }
}

const retangulo = new Retangulo(2, 5);

retangulo.calcularArea();
retangulo.calcularPerimetro();
