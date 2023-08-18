// Pode ser criado variáveis com uma notação diferente

let objeto = {
  rodas: 4,
  portas: 4,
  motor: 2.0,
};

const { rodas: vRodas, portas: vPortas, motor: vMotor } = objeto;

console.log(vRodas);
console.log(vPortas);
