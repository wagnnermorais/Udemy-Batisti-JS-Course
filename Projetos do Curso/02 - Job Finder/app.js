const express = require("express");
const app = express();
const db = require("./db/connection");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express rodando na porta ${PORT}`);
});

// db connection
try {
  db.authenticate().then(() => {
    console.log("Conectou ao banco com sucesso.");
  });
} catch (error) {
  console.log("Ocorreu um erro ao conectar ao banco");
}

// routes
app.get("/", (request, response) => {
  response.send("Está funcionando.");
});
