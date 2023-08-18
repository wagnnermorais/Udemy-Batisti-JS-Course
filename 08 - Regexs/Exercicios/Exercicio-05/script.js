// Crie um regex que valide nome de usuários no sistema. Aceita letras de a-z, _ e -, números de 0-9, mínimo de 3 caracteres e máximo de 16

const regex = /(?=.{3,16}$)[a-z0-9-_]/;

console.log(regex.test("Wagner_1204"));
console.log(regex.test("Wagner1204"));
console.log(regex.test("Wagner-1204"));
console.log(regex.test("Wagner.1204"));
console.log(regex.test("Wagner@1204"));
console.log(regex.test("Wa"));
console.log(regex.test("Wagner123213213123213213"));
