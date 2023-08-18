// É possível converter o JSON para uma string de forma fácil
// Ou também uma string para JSON

// prettier-ignore
const carro = {
  "marca": "BMW",
  "rodas": 4,
  "portas": 4,
  "tipo": "Sedan"
}

let converteParaString = JSON.stringify(carro);

console.log(converteParaString);
// console.log(converteParaJson.marca) Não funciona pois o objeto foi convertido para String.

let converteParaJson = JSON.parse(converteParaString);

console.log(converteParaJson);
console.log(converteParaJson.marca); // output: BMW
