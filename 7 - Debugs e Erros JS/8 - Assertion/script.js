// Verificações no programa, que são utilizar para assegurar que tudo ocorra da forma esperada.

let arr = [1, 2, 3];
let empty = [];

function iterarArray(arr) {
  if (arr.length == 0) {
    throw new Error("O array precisa ter pelo menos um elemento!");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
}

iterarArray(arr);
// iterarArray(empty);

function arrayVazio(arr) {
  if (arr.length > 0) {
    throw new Error("O array não pode ter elementos.");
  } else {
    console.log("Array vazio!");
  }
}

// arrayVazio(arr);
arrayVazio(empty);
