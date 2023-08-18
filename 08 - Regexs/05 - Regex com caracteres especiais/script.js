// Podemos utilizar os caracteres especiais de várias formas.

let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("teste"));
console.log(ano.test("2019"));

let palavra = /\w\w\w/;
console.log(palavra.test("asd"));
console.log(palavra.test("asdd")); // recebe true pois, apesar de sua length ser maior que a regra estabelecida no regex, ele possui no mínimo 3 digitos, ou seja, "aprova" no que foi estabelecido.
console.log(palavra.test("asdd") && "asdd".length == 3);
console.log(palavra.test("as"));
