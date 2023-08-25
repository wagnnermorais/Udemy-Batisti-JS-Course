const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));
// console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) return `Olá, ${name}!`;
  return "Olá!";
};

console.log(greeting("Wagner"));
console.log(greeting());

const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    });
  },
};

user.sayUserName();
