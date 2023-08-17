// Podemos colocar mais uma instrução na regex que funciona como um || das condicionais

const regex = /\w+: (Wagner|Matheus|Vitor)/; // Nome: string

console.log(regex.test("Nome: Wagner"));
console.log(regex.test("Nome: Jose"));
console.log(regex.test("Nome: Vitor"));
