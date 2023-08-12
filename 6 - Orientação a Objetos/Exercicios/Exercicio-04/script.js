// Crie uma classe que simule um carro
// Propriedades: marca, cor, gasolina restante
// Crie um metodo de dirigir o carro, que vá diminuindo a gasolina gradativamente
// E um de abastecer para aumentar a gasolina quando necessário

class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigirCarro(quilometros) {
    let litrosConsumidos = quilometros / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecerCarro(combustivel) {
    this.gasolinaRestante += combustivel;
  }
}

let carro = new Carro("Civic", "Preto", 40, 12.5);

console.log(carro);

carro.dirigirCarro(40);
console.log(carro);
console.log(carro);
console.log(carro);
console.log(carro);
