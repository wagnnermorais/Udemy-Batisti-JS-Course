// Normalmente os métodos interagem com os objetos
// Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido.

let pessoa = {
  nome: "",
  setNome: (novoNome) => {
    this.nome = novoNome;
  },
  getNome: () => {
    return this.nome;
  },
};

pessoa.setNome("Wagner");

console.log(pessoa.getNome());
