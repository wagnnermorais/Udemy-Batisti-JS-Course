// Faz com que o dígito anterior seja opcional

const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

const regex = /\d+\w?/;

console.log(regex.test("123"));
console.log(regex.test("123asd"));
console.log(regex.test("123 "));
