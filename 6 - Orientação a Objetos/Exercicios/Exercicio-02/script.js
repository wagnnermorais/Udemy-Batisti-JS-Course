// Crie uma classe que simula um carrinho de compras de um e-commerce
// Propriedades: itens, quantidade total, valor total
// Crie os métodos para adicionar e remover itens

class Carrinho {
  constructor(itens, quantidade, valor) {
    this.itens = itens;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  adicionaItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].quantidade += item.quantidade;
        contador = 1;
      }
    }

    if (contador == 0) {
      this.itens.push(item);
    }

    this.quantidade += item.quantidade;
    this.valor += item.preco * item.quantidade;
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        let objeto = this.itens[itemCarrinho];
        let index = this.itens.findIndex((objeto) => {
          return objeto.id == item.id;
        });

        this.quantidade -= this.itens[itemCarrinho].quantidade;
        this.valor -=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "Camisa",
      quantidade: 1,
      preco: 20,
    },
    {
      id: 2,
      nome: "Calça",
      quantidade: 2,
      preco: 50,
    },
  ],
  3,
  120
);

carrinho.adicionaItem({
  id: 5,
  nome: "Boné",
  quantidade: 1,
  preco: 80,
});

carrinho.removeItem({
  id: 2,
  nome: "Calça",
});

console.log(carrinho);
