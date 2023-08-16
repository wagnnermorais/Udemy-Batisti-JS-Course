// Deixa o JS mais rigoroso na hora de se programar;
// Deve ser declarado no topo de arquivos ou funções
// Colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programa.
// Veja o exemplo de uma variável declarada sem let/const/var

"use strict";

teste = "Testado strict!"; // teste is not defined

// para usar o strict dentro de uma função, precisa ser dentro do próprio escopo.

function teste() {
  "use strict";
  teste = "Testando!";
}

teste();
