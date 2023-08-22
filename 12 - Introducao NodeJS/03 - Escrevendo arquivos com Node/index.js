let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf-8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

writeFile("arquivo.txt", "Inserir este texto", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Texto inserido pelo método writeFile do Node.");
  }
});
