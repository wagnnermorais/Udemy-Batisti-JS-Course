// Crie uma classe chamada "ContaBancaria" que representa uma conta bancária.
// A classe deve ter os seguintes atributos:
// numeroConta: representando o número da conta (string ou número).
// saldo: representando o saldo da conta (número).
// A classe deve ter os seguintes métodos:
// depositar(valor): recebe um valor como parâmetro e adiciona esse valor ao saldo da conta.
// sacar(valor): recebe um valor como parâmetro e verifica se o saldo é suficiente para efetuar o saque. Se for, realiza o saque subtraindo o valor do saldo. Caso contrário, exibe uma mensagem informando que o saldo é insuficiente.
// consultarSaldo(): retorna o saldo atual da conta.

class ContaBancaria {
  constructor(numeroConta, saldo) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    // prettier-ignore
    if (valor > this.saldo) return console.log("Transação negada pois não há saldo suficiente na conta.");
    return (this.saldo -= valor);
  }

  consultarSaldo() {
    return console.log(this.saldo);
  }
}

const conta = new ContaBancaria("422501-0", 5000);
const deposito = conta.depositar(1000);
const saque = conta.sacar(7800);
const consulta = conta.consultarSaldo();
