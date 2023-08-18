// Crie uma classe que simula uma conta no banco
// Deve conter a propriedade saldo e os métodos de depósito e saque.
// Teste os métodos

class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  get saldoAtual() {
    return this.saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }
}

let novaConta = new Conta(500);

novaConta.deposito(500);
novaConta.saque(300);
console.log(novaConta);
