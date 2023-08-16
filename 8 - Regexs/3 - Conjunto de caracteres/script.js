// Podemos definir um conjunto de caracteres para encontrar por regex, basta por entre [].
// Com um traço, podemos definir um intervalo também.
const regex = /[12345]/;

console.log(regex.test("Existe 123 aqui?"));
console.log(regex.test("Existe 12 aqui?")); // Precisa ser cuidado pois queremos o resultado 12 e não possui, porém, na variável, existe "12"3

const reg = /[0-9]/; // forma mais eficaz de verificar se há números numa string.
console.log(reg.test("O número 8 está presente aqui?"));
