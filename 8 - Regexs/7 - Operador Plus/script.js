// Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez

let muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("1231321312312312321321"));
console.log(muitosOuPoucosDigitos.test("")); // false pois não há elementos
console.log(muitosOuPoucosDigitos.test("asd")); // false pois só aceita números
