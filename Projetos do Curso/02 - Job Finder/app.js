const express = require("express");
const app = express();
const db = require("./db/connection");
const PORT = 3000;
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");

app.listen(PORT, () => {
  console.log(`Express rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars
app.set("views/layout", path.join(__dirname, "views"));
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    extname: ".handlebars",
  })
);
app.set("view engine", "handlebars");

// static folder
app.use(express.static(path.join(__dirname, "public")));

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
  response.render("index");
});

// jobs routes
app.use("/jobs", require("./routes/jobs"));
