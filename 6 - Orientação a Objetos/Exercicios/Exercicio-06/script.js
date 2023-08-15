// Crie uma classe chamada WordCounter que representa um contador de palavras.
// A classe deve ter um construtor que inicializa um objeto vazio.
// A classe deve ter um método chamado countWords que recebe uma string como parâmetro.
// O método countWords deve contar o número de palavras na string fornecida e retornar o resultado.
// Considere que as palavras são separadas por espaços em branco.

class WordCounter {
  constructor() {}
  countWords(valor) {
    const words = valor.split(" ");
    return words.length;
  }
}

const counter = new WordCounter();
const wordCount = counter.countWords("Alo pede um açai ai");
console.log(`Número de palavras: ${wordCount}`);
