const express = require("express");
const app = express();
const db = require("./db/connection");
const PORT = 3000;
const bodyParser = require("body-parser");

app.listen(PORT, () => {
  console.log(`Express rodando na porta ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));

// db connection
try {
  db.authenticate().then(() => {
    console.log("Conectou ao banco com sucesso.");
  });
} catch (error) {
  console.log("Ocorreu um erro ao conectar ao banco.");
}

// routes
app.get("/", (request, response) => {
  response.send("Está funcionando.");
});

// jobs routes
app.use("/jobs", require("./routes/jobs"));
