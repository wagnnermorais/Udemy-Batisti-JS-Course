// Crie um regex que só aceite strings terminadas com ID.

const regex = /\d+ID\b/;

console.log(regex.test("312321ID"));
console.log(regex.test("25ABCDID"));
