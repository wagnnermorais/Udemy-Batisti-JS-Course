const validaDataNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaDataNascimento.test("12/04/2000"));
console.log(validaDataNascimento.test("12/4/2000"));
console.log(validaDataNascimento.test("4/04/2000"));
