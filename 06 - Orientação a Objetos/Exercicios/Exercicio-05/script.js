// Crie uma classe conta bancaria
// Propriedades: Saldo na conta corrente, saldo na conta poupanca, juros da poupança
// Crie métodos de depósito e saque, também um método para transferir dinheiro da poupança para CC
// Crie uma conta especial que herda da conta normal
// Na conta especial, os juros são dobrados da conta normal

class Conta {
  constructor(saldoCorrente, saldoPoupanca, juros) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.juros = juros;
  }

  depositoPoupanca(valor) {
    this.saldoPoupanca += valor;
  }

  depositoCC(valor) {
    this.saldoCorrente += valor;
  }

  saquePoupanca(valor) {
    this.saldoPoupanca -= valor;
  }

  saqueCC(valor) {
    this.saldoCorrente -= valor;
  }

  transferencia(valor) {
    // prettier-ignore
    if (valor > this.saldoPoupanca) return console.log("Transação negada pois não há saldo suficiente na poupança.");
    this.saldoPoupanca -= valor;
    this.saldoCorrente += valor;
  }

  rendimento() {
    let juros = (this.saldoPoupanca * this.juros) / 100;
    this.saldoPoupanca += juros;
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCorrente, saldoPoupanca, juros) {
    super(saldoCorrente, saldoPoupanca, juros);
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.juros = juros * 2;
  }
}

let conta = new Conta(500, 5000, 2);
let novaConta = new ContaEspecial(200, 2000, 4);

console.log(conta);
console.log(novaConta);
