let elemento = document.querySelector("#titulo");

console.log(elemento.offsetWidth); // offset sempre considera as bordas
console.log(elemento.offsetHeight);

console.log(elemento.clientWidth); // client não considera as bordas
console.log(elemento.clientHeight);

// como não há borda no elemento selecionado, os valores serão os mesmos.
