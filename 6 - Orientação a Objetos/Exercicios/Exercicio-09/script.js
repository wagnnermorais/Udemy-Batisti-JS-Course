// Crie uma classe chamada "Voo" que representa um voo em um sistema de reservas de voo.
// A classe deve ter os seguintes atributos:
// codigoVoo: representando o código único do voo (string ou número).
// origem: representando a cidade de origem do voo (string).
// destino: representando a cidade de destino do voo (string).
// assentosDisponiveis: representando a quantidade de assentos disponíveis no voo (número).
// A classe deve ter os seguintes métodos:
// reservarAssento(): verifica se há assentos disponíveis no voo e, se houver, decrementa a quantidade de assentos disponíveis em um.
// consultarAssentosDisponiveis(): retorna a quantidade de assentos disponíveis no voo.

class Voo {
  constructor(codigoVoo, origem, destino, assentosDisponiveis) {
    this.codigoVoo = codigoVoo;
    this.origem = origem;
    this.destino = destino;
    this.assentosDisponiveis = assentosDisponiveis;
  }

  reservarAssento(quantidade) {
    // prettier-ignore
    if (quantidade > this.assentosDisponiveis) {
      return console.log(`Reserva não efetuada pois só restam ${this.assentosDisponiveis} assentos disponíveis.`);
    }
    return (this.assentosDisponiveis -= quantidade);
  }

  consultarAssentosDisponiveis() {
    return console.log(this.assentosDisponiveis);
  }
}

const voo = new Voo(184, "Porto Alegre", "São Paulo", 150);
const reserva = voo.reservarAssento(2);
const consulta = voo.consultarAssentosDisponiveis();
