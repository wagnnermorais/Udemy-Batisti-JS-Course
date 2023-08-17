// Da seguinte forma, pode-sse validar um dominio

const validaDominio = /[?www].\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.internacional.com.br"));
console.log(validaDominio.test("oogle.com"));
console.log(validaDominio.test("internacional.com.br"));
console.log(validaDominio.test("www.blog-test.net"));
