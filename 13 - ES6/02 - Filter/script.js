const arr = [1, 2, 3, 4, 5];

const numerosMaiores = arr.filter((index) => {
  if (index >= 3) {
    return index;
  }
});

console.log(numerosMaiores); // 3, 4, 5

const users = [
  {
    name: "Wagner",
    avalaible: true,
  },
  {
    name: "Vitor",
    avalaible: true,
  },
  {
    name: "Arthur",
    avalaible: false,
  },
  {
    name: "Lorenzo",
    avalaible: false,
  },
];

const avaliableUsers = users.filter((user) => {
  return user.avalaible;
});

const notAvaliableUsers = users.filter((user) => {
  return !user.avalaible;
});

console.log(avaliableUsers);
console.log(notAvaliableUsers);
