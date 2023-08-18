// Não podemos controlar os dados que o usuário enviar, então, para bom funcionamento do software, devemos tratar eles.

function checarNumero(numero) {
  let number = Number(numero);
  if (Number.isNaN(number)) {
    console.log("Por favor, passe só números para o programa.");
  } else {
    return console.log(number);
  }
}

checarNumero(5);
checarNumero("5");
checarNumero("Teste");
