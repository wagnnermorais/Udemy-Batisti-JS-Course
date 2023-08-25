// Com arrays

const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);

// Com objetos

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periférico",
  color: "Preto",
};

const {} = productDetails;

// prettier-ignore
const { name: productName, price, category: productCategory, color } = productDetails;

console.log(
  `O produto é: ${productName}, custa R$${price}, pertence a categoria ${productCategory} e tem a cor ${color}.`
);
