const produtos = [
  {
    nome: "Shirt",
    preco: 49.99,
    category: "Roupas",
  },
  {
    nome: "AirFryer",
    preco: 229.99,
    category: "Eletrodoméstico",
  },
  {
    nome: "Forno elétrico",
    preco: 339.99,
    category: "Eletrodoméstico",
  },
  {
    nome: "Calca Jeans",
    preco: 129.99,
    category: "Roupas",
  },
];

produtos.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(produtos);
