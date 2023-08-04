const parOuImpar = (n) => {
  if (n % 2 == 0) {
    return console.log(`${n} é par!`);
  }
  return console.log(`${n} é impar`);
};

parOuImpar(Math.round(Math.random() * 10));
