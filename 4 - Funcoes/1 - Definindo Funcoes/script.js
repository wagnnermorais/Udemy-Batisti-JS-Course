function imprimeTexto() {
  console.log("Olá, mundo!");
}

imprimeTexto();

// função com parâmetro

function imprimeNumero(numero) {
  console.log(`O número é: ${numero}`);
}

imprimeNumero(5);

// declarando função numa variável

const numeroAleatorio = function () {
  const numeroGerado = Math.random() * 50;
  console.log(Math.round(numeroGerado));
};

numeroAleatorio();
