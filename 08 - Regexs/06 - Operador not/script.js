// Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not.
// Combinações serão aceitas, o negado é apenas se bate com o set.

const noTab = /[^ab]/; // Recusa os elementos de forma isolada, porém, numa string maior, são aceitas.

console.log(noTab.test("a"));
console.log(noTab.test("Aqui tem a!"));

const noAToZ = /[^a-z]/;

console.log(noAToZ.test("123"));
console.log(noAToZ.test("123 asd")); // Por possui números, ele aceita.
console.log(noAToZ.test("asda"));
