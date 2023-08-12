// Crie um objeto que simula um endereço de um cliente
// Propriedades: rua, bairro, cidade e estado
// No construtor o endereco ja deve ser definido por completo
// Crie metodos para atualizar todas as propriedades

class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  atualizaRua(rua) {
    this.rua = rua;
  }

  atualizaBairro(bairro) {
    this.bairro = bairro;
  }

  atualizaCidade(cidade) {
    this.cidade = cidade;
  }

  atualizaEstado(estado) {
    this.estado = estado;
  }
}

let endereco = new Endereco(
  "Nova Ipanema",
  "Hipica",
  "Porto Alegre",
  "Rio Grande do Sul"
);

console.log(endereco);

endereco.atualizaRua("Icarai");
endereco.atualizaBairro("Cristal");

console.log(endereco);

endereco.atualizaRua("103rd Street");
endereco.atualizaBairro("Bay Harbor Island");
endereco.atualizaCidade("Miami");
endereco.atualizaEstado("Florida");

console.log(endereco);
