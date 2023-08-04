// Fazer uma estrutura if/else para verificar se um usuário pode dirigir.
// Verificar se idade for maior que 18 e se possui CNH

let idade = 23;
let cnh = true;

if (idade < 18 || (idade > 18 && !cnh))
  console.log("Não está permitido dirigir.");
else console.log("Está permitido dirigir pois é maior de idade e possui CNH!");
