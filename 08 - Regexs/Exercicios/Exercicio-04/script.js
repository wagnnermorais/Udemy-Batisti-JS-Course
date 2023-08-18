// Crie um regex que valide endereços de IP.
// Ex: 127.0.0.1

const regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(regex.test("127.0.0.1"));
console.log(regex.test("8.8.8.8"));
console.log(regex.test("127.25.122.1"));
console.log(regex.test("192.168.0"));
console.log(regex.test("192.168"));
