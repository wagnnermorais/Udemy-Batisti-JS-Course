// Inserir o número de ocorrência entre {}.

const cep = /\d{5}-\d{3}/;

console.log(cep.test("91755-220"));
console.log(cep.test("9175-220"));
console.log(cep.test("91755-20"));

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(telefone.test("(51)99393-3232"));
console.log(telefone.test("(51)98888-2525"));
