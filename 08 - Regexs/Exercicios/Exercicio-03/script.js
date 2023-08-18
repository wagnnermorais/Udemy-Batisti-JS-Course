// Crie um regex que aceite a seguinte expressão: "Marca: nomeDaMarca"
// Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics

const regex = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(regex.test("Marca: Nike"));
console.log(regex.test("Marca: Adidas"));
console.log(regex.test("Marca: Puma"));
console.log(regex.test("Marca: Asics"));
console.log(regex.test("Marca: New Balance"));
console.log(regex.test("Marca: Quicksilver"));
