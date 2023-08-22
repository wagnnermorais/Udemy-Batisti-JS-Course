let express = require("express");
let app = express();

app.get("/", (request, response) => {
  response.send("Primeira rota com Express");
});

app.listen(3000, () => {
  console.log("A aplicação está funcionando na porta 3000.");
});
