function lembrarSoma(x) {
  return (y) => {
    return x + y;
  };
}

let soma = lembrarSoma(2);

console.log(soma(5));
