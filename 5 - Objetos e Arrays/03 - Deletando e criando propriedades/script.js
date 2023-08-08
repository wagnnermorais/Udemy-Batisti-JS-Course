let pessoa = {
  nome: "Wagner",
  idade: 23,
  profissao: "Desenvolvedor",
};

console.log(pessoa.nome);

delete pessoa.nome; // deleta propriedade

console.log(pessoa);

pessoa.altura = 1.75; // adicionando propriedade

console.log(pessoa);
