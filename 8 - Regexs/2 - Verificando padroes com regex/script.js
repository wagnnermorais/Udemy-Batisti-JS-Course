// Depois da definição do padrão por meio do regex
// Utilizamos o método test() para verificar se o padrão é retornado
// Com isso, vamos receber de resposta true or false.

const regex = new RegExp("bola");
const reg = /bola/;
let texto = "Tem bola na cesta?";

console.log(regex.test("Tem bola?"));
console.log(regex.test("Não tem!"));

console.log(reg.test("Tem bola?"));
console.log(reg.test("Não tem!"));

console.log(regex.test(texto));

console.log(/quadrado/.test("Qual a soma do quadrado de alguma coisa?"));
