// O bloco try catch, vai tentar executar um código, caso não consiga, ele pode retornar o erro que esse código gerou.
let b = 2;

try {
  let c = 2 + b;
  console.log(c);
} catch (error) {
  console.log(`Algo deu errado: ${error}`);
}
