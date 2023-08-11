// Propriedades que servem como funções, ou seja, as açãos dos objetos
// Invocamos os métodos da mesma maneira que funções

const cachorro = {
  latir: () => {
    console.log("Au au");
  },
  rosnar: () => {
    console.log("grrr");
  },
};

cachorro.latir();
cachorro.rosnar();
