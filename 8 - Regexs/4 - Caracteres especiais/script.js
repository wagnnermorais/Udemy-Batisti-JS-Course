// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico ("teste")
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos
// \W - Caractere não-alfanumérico
// \S - Caractere que não seja espaço em branco
// . - Qualquer caractere, menos nova linha.

const pontoRegex = /./; // Aceita qualquer caractere.
console.log(".");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

const dRegex = /\d/; // Aceita somente números, mesma coisa que /[0-9]/.
console.log("d");
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const dReg = /\D/; // Aceita somente letras. [^0-9], ^ é a negação do regex, como ! em JS.
console.log("D");
console.log(dReg.test("asd"));
console.log(dReg.test(" "));
console.log(dReg.test("123"));
console.log(dReg.test("123asd"));

const sRegex = /\s/; // Serve para espaços vazios, quebras de linhas e até tabs.
console.log("s");
console.log(dReg.test("asd"));
console.log(dReg.test(" "));
console.log(dReg.test("123"));
console.log(dReg.test("123asd"));

const wRegex = /\w/; // Só aceita números e letras. Espaços, quebras de linhas e tabs não aceita.
console.log("w");
console.log(dReg.test("asd"));
console.log(dReg.test(" "));
console.log(dReg.test("123"));
console.log(dReg.test("123asd"));
