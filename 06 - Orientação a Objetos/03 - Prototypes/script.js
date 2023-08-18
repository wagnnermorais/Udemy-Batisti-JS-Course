// Um objeto fallback de outro objeto
// Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto
// O prototype de um objeto criado do zero é o Object, que tem os métodos nativos da lingaugem

let pessoa = {
  maos: 2,
};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

// Como o objeto pessoa é um prototype, um filho do objeto "Object", conseguimos fazer um fallback para o Object e usar todos os métodos que ele possui, sendo o hasOwnProperty um deles.
console.log(pessoa.hasOwnProperty("maos"));
