let n = 10;

const numero = function () {
  let n = 25;
  console.log(n);
};

console.log(n); // 10 - foi declarada de forma global
numero(); // 25 - foi declarado dentro do escopo da function numero.
