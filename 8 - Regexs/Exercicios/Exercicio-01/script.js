// Crie um regex que aceite só letras maiúsculas.

const regex = /[A-Z]/;

console.log(regex.test("teste"));
console.log(regex.test("123"));
console.log(regex.test("TESTE "));
