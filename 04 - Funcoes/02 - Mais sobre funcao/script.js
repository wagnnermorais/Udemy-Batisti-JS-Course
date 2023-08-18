function multiplicaTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicaTresNumeros(2, 3, 4));

const multiplicacao = multiplicaTresNumeros(5, 5, 5);

console.log(`O valor da multiplicação é: ${multiplicacao}`);

function podeDirigir(idade, cnh) {
  if (idade < 18 || (idade >= 18 && !cnh))
    return console.log("Não pode dirigir");
  return console.log("Pode dirigir");
}

podeDirigir(18, true);
podeDirigir(19, false);
podeDirigir(15, false);
