// Usar o objeto de ônibus do exercício anterior e adicionar a propriedade janela com o valor de 20
// Deletar a propriedade rodas;
// Imprimir a propriedade janelas no console

let onibus = {
  rodas: 8,
  portas: 2,
  limitePassageiros: 40,
};

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus);

console.log(onibus.janelas);
